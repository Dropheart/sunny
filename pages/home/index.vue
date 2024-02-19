<template>
<main>
<body class="bg-blue-bg">
<div class="grid h-screen grid-cols-5 grid-rows-12">
    
    <div class="flex flex-col row-span-1 col-span-5">
        <div class="h-full grid grid-cols-5 divide-x-[1px]">
            <div class="flex w-full col-span-1">
                <h class="text-white my-auto mx-auto text-2xl">sunny 🌻</h>
            </div>
            <div class="flex max-h-full col-span-4 col-start-2">
                <div class="pl-2 my-auto">
                    <Button :buttonText="month + ' | ' + year"/>
                </div>
                <div class="ml-auto my-auto pr-2">
                    <!-- <Button buttonText="settings"/> -->
                    <img class="cursor-pointer" src="assets/fi-rs-settings-sliders.svg"/>
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
        <div class="flex row-span-11 col-span-4 col-start-2">

        </div>
    </div>

</div>
</body>
</main>
</template>
    
<script setup lang="ts">
const { year, month, computeDays }  = useCal(new Date())

const days = computeDays()

</script>