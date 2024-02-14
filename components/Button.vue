<template>
    <div class="rounded-[10px] border-4 border-blue-green bg-blue-input">
        <button class="rounded-md bg-blue-input font-inter text-grey-text px-2
        hover:bg-[#091F26] hover:border-[#243940] ease-in duration-200">{{ buttonText }}</button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    buttonText: String
})
</script>