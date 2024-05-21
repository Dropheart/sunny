<template>
    <div class="flex flex-col w-3/4 outline outline-2 outline-white my-auto p-10 space-y-2">
        <div class="w-1/2 pr-10">
            <TextInput inputName="Event Name" id="eventName" type="text" :titleAbove="true"/>
        </div>
        <div class="flex w-full space-x-20">
            <TextInput inputName="Event start day" id="startDate" type="date" :titleAbove="true"/>
            <TextInput inputName="Event start time" id="startTime" type="time" :titleAbove="true"/>
        </div>
        <div class="flex w-full space-x-20">
            <TextInput inputName="Event end day" id="endDate" type="date" :titleAbove="true"/>
            <TextInput inputName="Event end time" id="endTime" type="time" :titleAbove="true"/>
        </div>
        <div class="w-1/2 pr-10">
            <Selection inputName="Calendar" id="cal" :titleAbove="true" :options="[{name: 'Cal1', id: 'cal1id'}, {name: 'Cal2', id: 'cal2id'}]"/>
        </div>
        <div class="mx-auto pt-5 space-x-10">
            <Button buttonText="Confirm"/>
            <Button buttonText="Cancel"/>
        </div>
    </div>
</template>

<script setup lang="ts">
// logic to be here: fetch calendars, put into var options so u can use it in selection
// validate event name & times
// also, autofill start day and end day to the day clicked
</script>