<template>
<main>
<div :class="`${modal ? 'opacity-100 visible' : 'opacity-0 invisible'} flex place-content-center fixed z-10 h-screen w-screen duration-300 ease-in`" @click="modal = false">
    <div class="outline outline-2 outline-white my-auto p-2">
        <p class="text-white"> TBD </p>
    </div>
</div>

<div :class="`${modal ? 'blur-sm' : ''} grid h-screen grid-cols-5 grid-rows-12 duration-300`">
    <div class="flex flex-col row-span-1 col-span-5">
        <div class="h-full grid grid-cols-5 divide-x-[1px]">
            <div class="flex w-full col-span-1">
                <h1 class="text-white my-auto mx-auto text-2xl">sunny 🌻</h1>
            </div>
            <div class="flex max-h-full col-span-4 col-start-2">
                <div class="pl-4 my-auto">
                    <Button :buttonText="month + ' | ' + year"/>
                </div>
                <div class="flex ml-auto my-auto pr-2 gap-4">
                    <!-- <Button buttonText="settings"/> -->
                    <Button :buttonText="timescale"/>
                    <img class="cursor-pointer" src="assets/fi-rs-settings-sliders.svg"/>
                    <img class="cursor-pointer" src="assets/fi-rs-sign-out.svg" :onClick="logOut"/>
                </div>
            </div>
        </div>
        <hr class="border-1 border-white w-full">
    </div>

    <div class="grid row-span-11 row-start-2 col-span-5 grid-cols-5 h-full divide-x-[1px]">
        <div class="flex flex-col row-span-11 col-span-1">
            <div class="h-full">
                <p class="text-white pl-5 pt-2 text-2xl">Everything To Do</p>
            </div>
        </div>
        <div class="flex flex-col row-span-11 col-span-4 col-start-2">
            <div class="flex">
                <h1 class="border w-full text-center text-white py-1" v-for="day in weekDays"> {{ day }} </h1>
            </div>
            <div class="grid size-full">
                <div class="flex" v-for="week in days">
                    <div class="border w-full cursor-pointer hover:bg-white hover:bg-opacity-10 duration-300" @click="modal = true" v-for="day in week">
                        <p :class="`${day.currentMonth ? 'text-white' : 'text-grey-text'} text-right pr-2`">{{day.day}}</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</main>
</template>
    
<script setup lang="ts">
const nuxt = useNuxtApp()
const auth = nuxt.$auth
const { redirectToLogIn, logOut } = useAuth()

const { year, month, days }  = useCal(new Date())
const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const timescale = ref("Month")
const loading = ref<boolean>(true)
const modal = ref<boolean>(false)

onBeforeMount(async () => {
    // blur everything pre load? 
    if (await redirectToLogIn()) return;
    loading.value = false;
})

</script>