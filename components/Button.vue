<template>
        <button class="rounded-md bg-blue-input font-inter text-grey-text px-2
        hover:bg-[#091F26] hover:border-[#243940] ease-in duration-200
        ring-4 ring-blue-green outline-4 ">
            {{ buttonText }}
        </button>
</template>

<script setup lang="ts">
const props = defineProps({
    buttonText: String
})
</script>