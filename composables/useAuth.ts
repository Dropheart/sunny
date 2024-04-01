import { FirebaseError } from 'firebase/app';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, type AuthError, type User, AuthErrorCodes, onAuthStateChanged } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'

export default function() {
    const nuxt = useNuxtApp()
    const auth = nuxt.$auth
    const db = nuxt.$db 

    function getCurrentUser(): Promise<User | null> {
        return new Promise((resolve) => {
            const unsubscribe = onAuthStateChanged(auth, (user) => {
                unsubscribe()
                resolve(user)
            })
        })
    }

    async function createAccount(name: string, email: string, password: string): Promise<User | null> {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            const userDoc = await setDoc(doc(db, "users", user.user.uid), {
                firstName: name,
                email: email,
            })
            return user.user
        } catch (e) {
            if (e instanceof FirebaseError && e.code == AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE) return null

            console.error(e)
            throw e
        }
    }

    async function logIn(email: string, password: string): Promise<User | null> {
        try {
            const user = await signInWithEmailAndPassword(auth, email, password)
            return user.user
        } catch (e) {
            if (e instanceof FirebaseError && e.code == AuthErrorCodes.INVALID_LOGIN_CREDENTIALS) return null;
            console.error(e)
            throw e
        }
    }

    async function redirectToLogIn(): Promise<boolean> {
        const user = await getCurrentUser()
        if (user == null) {
            navigateTo('login', { redirectCode: 302 })
            return true;
        }
        return false;
    }

    return {
        createAccount,
        logIn,
        redirectToLogIn
    }
}