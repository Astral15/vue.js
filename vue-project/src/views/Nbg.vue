<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios'

const apiUrl = "https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json"
const result = ref([])

function getNbg() {
    axios.get(apiUrl).then(response => result.value = response.data[0].currencies)
}

onMounted(() => {
    getNbg()
})

</script>
<template>
    <ul>
        <li v-for="rate in result" :key="rate.index">
            <div class="flex flex-row justify-between">
                <div class="col">
                    {{ rate.code }} 
                </div>
                <div class="col">
                    {{ rate.quantity }} 
                </div>
                <div class="col">
                    {{ rate.name }} 
                </div>
                <div class="col">
                    {{ rate.rate }} 
                </div>
            </div>
        </li>    
    </ul>
</template>