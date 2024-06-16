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
import {getInterceptor } from '~/composables/interceptor'



const props = defineProps({
    headers:{
        type:Array,
        required: true
        
    },
    userName:{
        type:String,
        required:true
    },
    itemsPerPage:{
        type : Number,
        required : true
    }
    
    
   
})

const headers= ref(props.headers)
const itemsPerPage = ref(props.itemsPerPage)
const search = ref('')
const serverItems = ref([])
const loading = ref(true)
const totalItems = ref(0)
const userName =ref(props.userName)




async function loadItems({ page, itemsPerPage }) {
    loading.value = true
     
    const offset = (page - 1) * itemsPerPage
<<<<<<< HEAD



    try{
        const response = await getInterceptor(`users/${userName}/associated-orgs/?limit=${itemsPerPage}&offset=${offset}`)


        serverItems.value = response.results
        totalItems.value = response.count
=======
    console.log(' result form props', props.datas.count);
   
    try{
        serverItems.value = props.datas.results
        totalItems.value = props.datas.count
>>>>>>> e6d25565e21c9964da7cb2829552ac6315779001
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
