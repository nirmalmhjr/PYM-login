<template>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      :search="search"
      @update:options="loadItems"
      item-value="name"
    >
        <template v-slot:item.allow_delivery={item}>
            <span>{{ item.allow_take_away ? 'available' :'not available' }}</span>
        </template>
        <template v-slot:item.allow_take_away={item}>
            <span>{{ item.allow_take_away ? 'available' : 'not available' }}</span>
        </template>
    </v-data-table-server>
</template>

<script setup lang="ts">
import {interceptor } from '~/composables/interceptor'
import { useCheckTokenStore } from '~/store/checkToken';

const tokenStore = useCheckTokenStore()
const { userName } = tokenStore


const props = defineProps({
    headers:{
        type:Array,
        required: true
        
    }
    
   
})

const headers= ref(props.headers)
const itemsPerPage = ref(5)
const search = ref('')
const serverItems = ref([])
const loading = ref(true)
const totalItems = ref(0)



/* const headers = ref([
    { title: 'Name', value: 'name', align: 'start' },
    { title: 'Contact no.', value: 'contacts[0].contact_value' },
    { title: 'Take away', value: 'allow_take_away' },
    { title: 'Delivery', value: 'allow_delivery' },
    { title: 'Open at', value: 'opening_hours' },
    { title: 'closes at', value: 'closing_hours' },
]) */

async function loadItems({ page, itemsPerPage }) {
    loading.value = true
     
    const offset = (page - 1) * itemsPerPage



    try{
        const response = await interceptor(`users/${userName}/associated-orgs/?limit=${itemsPerPage}&offset=${offset}`)


        serverItems.value = response.results
        totalItems.value = response.count
    } catch (error) {
        console.error('Fetch error:', error);
    } finally {
        loading.value = false;
    }
       

}


onMounted(() => {
    loadItems({page:1, itemsPerPage: itemsPerPage.value});
});

</script>
