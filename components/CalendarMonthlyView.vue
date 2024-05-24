<template>
    <div class="flex">
        <h1 class="border w-full text-center text-white py-1" v-for="day in weekDays"> {{ day }} </h1>
    </div>
    <div class="grid size-full">
        <div class="flex" v-for="week in currentMonth.days">
            <div class="border w-full cursor-pointer hover:bg-white hover:bg-opacity-10 duration-300" @click="triggerModal(); clickedDay = day" v-for="day in week">
                <p :class="`${day.currentMonth ? 'text-white' : 'text-grey-text'} text-right pr-2`">{{day.day}}</p> 
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const { CalendarLogic }  = useCal()

interface _props {
    currentMonth: InstanceType<typeof CalendarLogic>,
    triggerModal: () => void,
}
const props = defineProps<_props>()


const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
const clickedDay = defineModel<CalendarDay>()
</script>