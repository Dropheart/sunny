<template>
    <div class="flex flex-col justify-center h-screen max-w-[19rem] space-y-2 mx-auto my-auto">
        <h1 class="text-white text-2xl">{{ login ? "sign in" : "sign up" }} to sunny 🌻</h1>
        <div v-if="!login" class="flex space-x-2">
            <TextInput v-model="name" class="my-1.5 w-1/2" inputName="name" type="text" pattern="\S.*"/>
        </div>
        <div class="space-y-4">
            <Transition>
                <p v-if="emailError != ''" class="text-grey-text -my-2 text-red-500">{{emailError}}</p>
            </Transition>
            <Transition>
                <p v-if="passwordError != ''" class="text-grey-text -my-2 text-red-500">{{passwordError}}</p>
            </Transition>

            <TextInput class="w-full" v-model="email" inputName="email" type="email"/>            
            <TextInput class="w-full" v-model="password" inputName="password" type="password" pattern=".{8,}"/>
        </div>
        <p v-if="login" class="text-grey-text cursor-pointer" @click="forgotPass()">forgot password?</p>
        <div class="flex">
            <Button class="justify-self-start my-2" :buttonText="login ? 'log in' : 'sign up'" @click="confirm()"/>
            <NuxtLink :to="login ? 'signup' : 'login'" class="self-center ml-auto cursor-pointer pl-1">
                <p class="text-grey-text">{{ login ? "don't " : "already" }} have an account?</p>
            </NuxtLink>
        </div>        
    </div>
</template>
    
    
<script setup lang="ts">
import { FirebaseError } from 'firebase/app';
import { AuthErrorCodes } from 'firebase/auth';

const props = defineProps({
    login: Boolean,
})
const { createAccount, logIn } = useAuth()

const name = defineModel<string>("name")
const email = defineModel<string>("email")
const password = defineModel<string>("password")
const emailError = ref<string>("")
const passwordError = ref<string>("")

function forgotPass() {
    if (email.value == undefined || !email.value.match(/.+@.+\..+/)) return emailError.value = "Invalid email."
}

async function confirm() {
    if (email.value == undefined || !email.value.match(/.+@.+\..+/)) return emailError.value = "Invalid email."
    if (password.value == undefined || password.value.length < 8) return passwordError.value = "Password is not long enough"

    if (props.login) {
        try {
            emailError.value = ""
            const user = await logIn(email.value!, password.value!)
            navigateTo("")
        } catch (e) {            
            if (e instanceof FirebaseError) {
                console.log(e.code)
                switch (e.code) {
                    case AuthErrorCodes.INVALID_EMAIL:
                        emailError.value = "Invalid email."
                        break;
                    case AuthErrorCodes.INVALID_PASSWORD:
                    case AuthErrorCodes.INVALID_LOGIN_CREDENTIALS:
                        emailError.value = "Invalid login details."
                        break;
                    case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
                        emailError.value = "Too many attempts, try again later."
                        break;
                    default:
                        emailError.value = "Something broke, try again, and/or contact support."
                        break;
                }
            }

        }
    }

    else {
        try {
            const user = await createAccount(name.value!, email.value!, password.value!)
        } catch (e) {            
            if (e instanceof FirebaseError) {
                console.log(e.code)
                switch (e.code) {
                    case AuthErrorCodes.INVALID_EMAIL:
                        emailError.value += "Invalid email."
                        break;
                    case AuthErrorCodes.CREDENTIAL_ALREADY_IN_USE:
                    case AuthErrorCodes.EMAIL_EXISTS:
                        emailError.value += "This email is already in use."
                        break;
                    case AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER:
                        emailError.value += "Too many attempts, try again later."
                        break;
                    default:
                        emailError.value += "Something broke, try again, and/or contact support."
                        break;
                }
            }
        }
    }
}

watch(email, async (newEmail, oldEmail) => {
    if (newEmail == "" || newEmail != undefined && newEmail.match(/.+@.+\..+/)) emailError.value = ""
    if (newEmail != oldEmail && emailError.value != "")  emailError.value = ""
})

watch(password, async (newPass, oldPass) => {
    if (newPass == "" || newPass != undefined && newPass.length >= 8) passwordError.value = ""
    if (newPass != oldPass && emailError.value != "")  emailError.value = ""
})

</script>
