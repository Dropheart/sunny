<template>
<div class="bg-blue-bg overflow-hidden">
  <NuxtLayout>
    <NuxtPage/>
  </NuxtLayout>
</div>
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.15s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(0.5rem);
}
</style>