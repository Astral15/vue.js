
<script setup>
    import NavMenu from '../components/menus/NavMenu.vue';
</script>
<template>
    <div class="container flex flex-col mt-4 mx-auto space-y-4">
        <NavMenu />
        <slot />
    </div>
</template>