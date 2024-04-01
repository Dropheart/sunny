<template>
    <div class="flex flex-col justify-center h-screen max-w-[19rem] space-y-2 mx-auto my-auto">
        <h1 class="text-white text-2xl">{{ login ? "sign in" : "sign up" }} to sunny 🌻</h1>
        <div v-if="!login" class="flex space-x-2">
            <TextInput v-model="name" class="my-1.5 w-1/2" inputName="name" type="text"/>
        </div>
        <div class="space-y-4">
            <TextInput class="w-full" v-model="email" inputName="email" type="text"/>
            <TextInput class="w-full" v-model="password" inputName="password" type="password"/>
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
const props = defineProps({
    login: Boolean,
})
const { createAccount, logIn } = useAuth()
const route = useRoute()

const name = defineModel<string>("name")
const email = defineModel<string>("email")
const password = defineModel<string>("password")

function forgotPass() {
    // todo
}

async function confirm() {
    if (route.path == '/login') {
        const user = await logIn(email.value!, password.value!)
        if (user == null) {
            // fail message
        } else {
            // some success message
            navigateTo('') 
        }
    } else {
        const user = await createAccount(name.value!, email.value!, password.value!)
        if (user == null) {
            // handle
        } else {
            // some success message
            navigateTo('')
        }
    }
}
</script>
