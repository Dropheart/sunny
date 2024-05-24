<template>
<main>
<div :class="`${modal ? 'opacity-100 visible' : 'opacity-0 invisible'} flex place-content-center fixed z-10 h-screen w-screen duration-300 ease-in`" @click="modal = false">
    <EventModal @click.stop :dismiss-callback="() => {modal = false}" v-model="clickedDay" :month="currentMonth.monthNum" :year="currentMonth.year"/>
</div>

<div :class="`${modal ? 'blur-sm' : ''} grid h-screen grid-cols-5 grid-rows-12 duration-300`">
    <div class="flex flex-col row-span-1 col-span-5">
        <div class="h-full grid grid-cols-5 divide-x-[1px]">
            <div class="flex w-full col-span-1">
                <h1 class="text-white my-auto mx-auto text-2xl">sunny 🌻</h1>
            </div>
            <div class="flex max-h-full col-span-4 col-start-2">
                <div class="pl-4 my-auto">
                    <Button :buttonText="currentMonth.monthName + ' | ' + currentMonth.year"/>
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
            <CalendarMonthlyView :trigger-modal="() => {modal = true;}" :currentMonth="currentMonth" v-model="clickedDay"/>
        </div>
    </div>
</div>
</main>
</template>
    
<script setup lang="ts">
const { redirectToLogIn, logOut } = useAuth()

const { CalendarLogic }  = useCal()
const currentMonth = new CalendarLogic(new Date())
const clickedDay = defineModel<CalendarDay>()

const modal = ref<boolean>(false)
const timescale = ref("Month")


onBeforeMount(async () => {
    // blur everything pre load? 
    if (await redirectToLogIn()) return;
})

</script>