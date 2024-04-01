<template>
        <input class="rounded-md bg-blue-input pl-2 font-inter 
        placeholder-grey-text caret-grey-text text-white text-md
        ring-4 ring-blue-green outline-4 
        focus:outline-none
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