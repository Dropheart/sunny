<template>
    <div class="rounded-[10px] border-4 border-blue-green">
        <input  class="w-full rounded-md bg-blue-input pl-2 font-inter placeholder-grey-text caret-grey-text text-white text-md"
                :type="type" v-model="model" :id="inputName" :name="inputName" :placeholder="inputName">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    inputName: String,
    type: String
})
const model = defineModel()

</script>