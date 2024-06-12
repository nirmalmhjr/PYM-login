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

console.log('userName from store', userName);

    const datas= ref(null)
 

    async function getUserData(){
        // const response = await getUserandInterceptor()
        const response = await interceptor(`users/${userName}/associated-orgs/`)
        console.log('response from index',response);
        datas.value = await response

        console.log('datas from index',datas.value);
        console.log('datas count from index',datas.value.count);
    }

    function getLocalToken(){
            let getTokenFrom = getToken()
        
            saveToken(getTokenFrom)
            loginStatus(true)
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
  <!--    <v-container>
        <v-row no-gutters>
            <v-col
            v-for="n in 3"
            :key="n"
            cols="12"
            sm="4"
      >
            <div v-for="data in datas" :key="data">
                <InfoDisplay :data="data"/>

            </div>
            </v-col>
        </v-row>
       
    </v-container>
    <pre>{{datas[0]}}</pre> -->
  

  <!-- <DataTable :datas="datas"/> -->

  <DataTableServerSide v-if="datas" :datas="datas" :userName="userName"/>
</template>