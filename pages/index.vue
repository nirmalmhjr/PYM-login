<script setup lang="ts">
import InfoDisplay from '~/component/InfoDisplay.vue'

import { getUserandInterceptor } from '~/api/getUsers';
import { useCheckTokenStore } from '~/store/checkToken';

const tokenStore = useCheckTokenStore()
const { token, userName, saveToken,loginStatus,saveUser } = tokenStore



    const datas= ref([])


    async function getUser(){
        const response = await getUserandInterceptor()
        console.log(response);
        datas.value = await response.results
    }

    function getItem(){
        if(!token){
            const test = localStorage.getItem('authToken')
            // const userNameLocal = localStorage.getItem('userName')
            
            saveToken(test)
            loginStatus(true)

        }

    }

    definePageMeta({
    layout: false,
    middleware: 'auth'
})  

onMounted(()=>{
    getItem()
    getUser()
})

</script>

<template>
    <!-- <div>
        <h1>This is Home Page</h1>
        <v-btn @click="getUser()">
            Button
        </v-btn>
    </div> -->
    <!-- <div>
        <pre>{{ datas }}</pre>
    </div> -->
    <v-container>
        <div v-for="data in datas" :key="data">
            <InfoDisplay :data="data"/>

        </div>
        <pre>{{datas[0]}}</pre>
    </v-container>
</template>