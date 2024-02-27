<template>
<div class="bg-blue-bg overflow-hidden">
<NuxtPage/>
</div>
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.3s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.25rem);
}
</style>