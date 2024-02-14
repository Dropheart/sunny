<template>
    <div class="rounded-[10px] border-4 border-blue-green bg-blue-input">
        <input  class="rounded-md bg-blue-input pl-2 font-inter placeholder-grey-text caret-grey-text text-white w-96"
                :type="type" :id="inputName" :name="inputName" :placeholder="inputName">
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    inputName: String,
    type: String
})

</script>