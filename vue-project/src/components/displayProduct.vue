<script setup>

import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const route = useRoute()
const store = useStore()
const result = computed(() => {
    store.commit('GET_PRODUCT_BY_ID', route.params.id)
    return store.getters.getactiveProduct
})

</script>
<template>
    <div>
        {{ result }}
    </div>
</template>