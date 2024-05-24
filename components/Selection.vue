<template>
    <div class="flex flex-col w-full">
        <h1 v-if="titleAbove" class="font-inter text-white text-md pb-2 font-medium w-full">{{ inputName }}</h1>
        <select class="rounded-md bg-blue-input pl-2 font-inter w-full
        placeholder-grey-text caret-grey-text text-white text-md
        ring-4 ring-blue-green outline-4 
        focus:ring-[#395b66] outline-none ease-in duration-200
        invalid:border-red-500 invalid:text-red-500 focus:invalid:ring-red-600 invalid:ring-red-700 invalid:bg-red-900
        "
        v-model="model" :id="id" :name="inputName" :required="required">
            <option :value="_option.val" v-for="_option in options">
                {{ _option.name }}
            </option>
        </select>
    </div>
</template>

<script setup lang="ts">
interface _props {
    inputName: string,
    id: string,
    titleAbove: boolean,
    required: boolean,
    options: {name: string, val: string}[]
}
const props = defineProps<_props>()
const model = defineModel()
</script>