import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

export default defineNuxtPlugin(nuxtApp => {
    const config = nuxtApp.$config
    const firebaseConfig = config.public.firebaseConfig
    const app = initializeApp(firebaseConfig)

    return {
        provide: {
            auth: getAuth(app),
            db: getFirestore(app)
        }
    }
})