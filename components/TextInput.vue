<template>
        <input class="rounded-md bg-blue-input pl-2 font-inter 
        placeholder-grey-text caret-grey-text text-white text-md
        ring-4 ring-blue-green outline-4 
        focus:ring-[#395b66] outline-none ease-in duration-200
        invalid:border-red-500 invalid:text-red-500 focus:invalid:ring-red-600 invalid:ring-red-700 invalid:bg-red-900
        "
                :type="type" v-model="model" :id="inputName" :name="inputName" :placeholder="inputName">
</template>

<script setup lang="ts">
const props = defineProps({
    inputName: String,
    type: String
})
const model = defineModel()

</script>