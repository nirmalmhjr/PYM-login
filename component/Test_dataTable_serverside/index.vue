

<script setup lang="ts">
import InfoDisplay from '~/component/InfoDisplay.vue'
// import DataTable from '~/component/DataTable.vue'
import DataTableServerSide from '~/component/DataTableServerSide.vue'

import { useCheckTokenStore } from '~/store/checkToken';
import {setLocalToken } from '~/composables/useToken'
import {interceptor } from '~/composables/interceptor'

const { setToken, getToken } = setLocalToken()

const tokenStore = useCheckTokenStore()
const { isLogin, userName, saveToken,loginStatus,saveUser } = tokenStore


    const datas= ref(null)
    const itemsPerPage = ref(5) 
    const currentPage = ref(1)
    // const offset =ref(0)
    const totalItems = ref(0)


    async function getUserData(){
      const offset = (currentPage.value - 1) * itemsPerPage.value
      const response = await interceptor(`users/${userName}/associated-orgs/?limit=${itemsPerPage.value}&offset=${offset}`)
      console.log(`users/${userName}/associated-orgs/?limit=${itemsPerPage}&offset=${offset}`);
        // console.log('response from index',response.results);
        datas.value =  response.results
        totalItems.value= response.count

    }

    function getLocalToken(){
            let getTokenFrom = getToken()
        
            saveToken(getTokenFrom)
            loginStatus(true)
        }
    
    
    function handlePageChange(page){
      currentPage.value= page
      getUserData()
      console.log('handlePageChange triggered ', page,);
    }

    function handleItemsPerPageChange(newItemsPerPage){
      itemsPerPage.value =  newItemsPerPage
      currentPage.value=1
      getUserData()
      console.log('handleItemsPerpage change', newItemsPerPage);

    }

    definePageMeta({
    layout: false,
    middleware: 'auth'
})  

onMounted(()=>{
  getLocalToken()
    getUserData()
})

</script>

<template>
  <DataTableServerSide
    v-if="datas"
    :datas="datas"
    :itemsPerPage="itemsPerPage"
    :currentPage="currentPage"
    :totalItems="totalItems"
    @page-change="handlePageChange"
    @items-per-page-change="handleItemsPerPageChange"

  />
</template>


</script>
