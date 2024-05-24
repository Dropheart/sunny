<template>
    <div class="flex flex-col w-3/4 outline outline-2 outline-white my-auto p-10 space-y-2 rounded-3xl">
        <div class="w-1/2 pr-10">
            <TextInput inputName="Event Name" id="eventName" type="text" :titleAbove="true" v-model="eventName"/>
        </div>
        <div class="flex w-full space-x-20">
            <TextInput inputName="Event start day" id="startDate" type="date" :titleAbove="true" v-model="startDate"/>
            <TextInput inputName="Event start time" id="startTime" type="time" :titleAbove="true" v-model="startTime"/>
        </div>
        <div class="flex w-full space-x-20">
            <TextInput inputName="Event end day" id="endDate" type="date" :titleAbove="true" v-model="endDate"/>
            <TextInput inputName="Event end time" id="endTime" type="time" :titleAbove="true" v-model="endTime"/>
        </div>
        <div class="w-1/2 pr-10">
            <Selection inputName="Calendar" id="cal" :titleAbove="true" :options="calendarOptions" :required="false" v-model="selectedCalendar"/>
        </div>
        <div class="mx-auto pt-5 space-x-10">
            <Button buttonText="Confirm" @click="processClick"/>
            <Button buttonText="Cancel" @click="dismissCallback"/>
        </div>
    </div>
</template>

<script setup lang="ts">
// logic to be here: fetch calendars, put into var options so u can use it in selection
// validate event name & times
// also, autofill start day and end day to the day clicked
interface _props {
    month: number,
    year: number
    dismissCallback: () => void
}
const props = defineProps<_props>()
const calendarDay = defineModel<CalendarDay>()
const eventName = ref('')
const startDate = ref('')
const startTime = ref('')
const endDate = ref('')
const endTime = ref('')
const selectedCalendar = ref('')

watch(calendarDay, (newDay, oldDay) => {
    const _day = newDay!
    const normalizedDay = (_day.day >= 10) ? _day.day : `0${_day.day}`
    const normalizedMonth = (_day.month >= 10) ? _day.month : `0${_day.month}`
    startDate.value = `${_day.year}-${normalizedMonth}-${normalizedDay}`
})

const { getCollection } = useCal()
const { getCurrentUser } = useAuth()
const calendarOptions: Ref<{ name: string, val: string }[]> = ref([])

onBeforeMount(async () => {
    const user = await getCurrentUser()
    const calendars = await getCollection(user!, 'calendars')
    
    calendars.forEach((data, cal) => {
        calendarOptions.value.push({ name: data.name, val: cal })
    })

    selectedCalendar.value = calendarOptions.value[0].val
})

async function processClick() {
    // props.dismissCallback()
}




</script>