<template>
<main>
<body class="bg-blue-bg">
    <div class="flex flex-col justify-center h-screen max-w-80 space-y-2 mx-auto my-auto">
        <h1 class="pl-1 text-white text-2xl">{{ signin ? "sign in" : "sign up" }} to sunny 🌻</h1>
        <div v-if="!signin" class="flex space-x-2">
            <TextInput class="shrink w-1/2" inputName="name" type="text"/>
            <!-- <TextInput class="shrink w-1/2" inputName="surname" type="text"/> -->
        </div>
        <p v-else class="text-grey-text cursor-pointer pl-1" @click="forgotPass()">forgot password?</p>
        <div class="space-y-2">
            <TextInput inputName="email" type="text"/>
            <TextInput inputName="password" type="password"/>
        </div>
        <div class="flex">
            <Button class="justify-self-start" :buttonText="signin ? 'log in' : 'sign up'" @click="confirm()"/>
            <p class="self-center ml-auto text-grey-text cursor-pointer pl-1" @click="signin = !signin">{{ signin ? "don't " : "already" }} have an account?</p>
        </div>
    </div>
</body>
</main>
</template>
    
    
<script setup lang="ts">
const signin = ref<Boolean>(true)

function forgotPass() {
    alert("sucks to be you")
}

function confirm() {
    alert("Logged in")
}
</script>
