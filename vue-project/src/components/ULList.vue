<script setup>
import ActionButtons from './ActionButtons.vue';

defineProps({
    data: { type: Array, required: true },
    action: { type: Boolean }
})
</script>

<template>
    <ul class="list-none md:list-disc space-y-2 items-center">
        <li v-for="item in data" :key="item.index">
            <div class="flex flex-row space-x-8">
                <img alt="Vue logo" class="logo" src="../assets/download.jpeg" width="125" height="125" />
                <span>{{ item.name }}</span>
                <ActionButtons :tocart="action" :id="item.id" />
                <RouterLink :to=" { name:'Product', params:{ id: item.id } } "> info</RouterLink>
            </div>
        </li>
    </ul>
</template>