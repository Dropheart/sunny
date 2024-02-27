import { createUserWithEmailAndPassword, type User } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore'

export default function() {
    const nuxt = useNuxtApp()
    const auth = nuxt.$auth
    const db = nuxt.$db 

    async function createAccount(name: string, email: string, password: string): Promise<User> {
        try {
            const user = await createUserWithEmailAndPassword(auth, email, password)
            const userDoc = await setDoc(doc(db, "users", user.user.uid), {
                firstName: name,
                email: email,
            })
            return user.user
        } catch (e) {
            console.error(e)
            throw e
        }
    }

    return {
        createAccount
    }
}