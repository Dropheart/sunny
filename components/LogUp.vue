<template>
    <div class="flex flex-col justify-center h-screen max-w-80 space-y-2 mx-auto my-auto">
        <h1 class="pl-1 text-white text-2xl">{{ login ? "sign in" : "sign up" }} to sunny 🌻</h1>
        <div v-if="!login" class="flex space-x-2">
            <TextInput v-model="name" class="shrink w-1/2" inputName="name" type="text"/>
            <!-- <TextInput class="shrink w-1/2" inputName="surname" type="text"/> -->
        </div>
        <div class="space-y-2">
            <TextInput v-model="email" inputName="email" type="text"/>
            <TextInput v-model="password" inputName="password" type="password"/>
        </div>
        <p v-if="login" class="text-grey-text cursor-pointer pl-1" @click="forgotPass()">forgot password?</p>
        <div class="flex">
            <Button class="justify-self-start" :buttonText="login ? 'log in' : 'sign up'" @click="confirm()"/>
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
const { createAccount } = useAuth()

const name = defineModel<string>("name")
const email = defineModel<string>("email")
const password = defineModel<string>("password")

function forgotPass() {
    alert("sucks to be you")
}

async function confirm() {
    // const user = await createAccount(name.value!, email.value!, password.value!)
    alert("Logged in")
}
</script>
