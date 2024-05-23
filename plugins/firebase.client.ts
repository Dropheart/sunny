import { initializeApp } from 'firebase/app';
import { connectAuthEmulator, getAuth } from 'firebase/auth';
import { connectFirestoreEmulator, getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
    const config = nuxtApp.$config
    const firebaseConfig = config.public.firebaseConfig
    const app = initializeApp(firebaseConfig)

    var db
    var auth

    if (process.env.NODE_ENV !== 'production') {
        db = getFirestore()
        auth = getAuth()
        connectFirestoreEmulator(db, '127.0.0.1', 8080)
        connectAuthEmulator(auth, 'http://127.0.0.1:9099')
    } else {
        db = getFirestore(app)
        auth = getAuth(app)
    }

    return {
        provide: {
            auth: auth,
            db: db
        }
    }
})