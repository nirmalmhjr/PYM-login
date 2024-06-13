<script setup lang="ts">
import InfoDisplay from '~/component/InfoDisplay.vue'
// import DataTable from '~/component/DataTable.vue'
import DataTableServerSide from '~/component/DataTableServerSide.vue'

import { useCheckTokenStore } from '~/store/checkToken';
import {setLocalToken } from '~/composables/useToken'
// import {interceptor } from '~/composables/interceptor'

const { setToken, getToken } = setLocalToken()

const tokenStore = useCheckTokenStore()
const { userName ,isLogin, saveToken,loginStatus, } = tokenStore
const itemsPerPage = ref(7)

  const headers = ref([
      { title: 'Name', value: 'name', align: 'start' },
      { title: 'Contact no.', value: 'contacts[0].contact_value' },
      { title: 'Take away', value: 'allow_take_away' },
      { title: 'Delivery', value: 'allow_delivery' },
      { title: 'Open at', value: 'opening_hours' },
      { title: 'closes at', value: 'closing_hours' },
  ])

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

  <DataTableServerSide
    :headers="headers"
    :itemsPerPage="itemsPerPage"
    :userName="userName"
  />
</template>