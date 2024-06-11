<script setup lang="ts">
import InfoDisplay from '~/component/InfoDisplay.vue'
// import DataTable from '~/component/DataTable.vue'
import DataTableServerSide from '~/component/DataTableServerSide.vue'

import { getUserandInterceptor } from '~/api/getUsers';
import { useCheckTokenStore } from '~/store/checkToken';

const tokenStore = useCheckTokenStore()
const { token, userName, saveToken,loginStatus,saveUser } = tokenStore



    const datas= ref([])
  /*   const datas= ref([
    {
    "slug": "thakali",
    "name": "Thakali Restaurant",
    "image": "https://pick.alldaycode.xyz/media/04dec391ce6744a6be21e61c643ddb38/b80bd81480c34e629d4c5d3b67883d74.png",
    "slogan": "",
    "address": "",
    "timezone": "Asia/Kathmandu",
    "description": "",
    "contacts": [
      {
        "is_verified": false,
        "contact_type": "phone",
        "contact_value": "9841710170"
      }
    ],
    "service_charge": "10.00",
    "price_inclusive_of_vat": false,
    "vat": "13.00",
    "allow_take_away": false,
    "allow_dine_in": true,
    "allow_delivery": false,
    "delivery_help_text": "",
    "show_in_homepage": true,
    "min_amount_for_delivery": null,
    "country_code": "NP",
    "currency": {
      "country": "NP",
      "name": "Nepalese Rupee",
      "short_code": "NPR",
      "symbol": "Rs "
    },
    "one_table_one_order": true,
    "order_handle_by_first_responder_only": true,
    "logo": "https://pick.alldaycode.xyz/media/04dec391ce6744a6be21e61c643ddb38/306c439f778442d2bf2a19031f614216.png",
    "mandatory_table_selection_for_dine_in": true,
    "opening_hours": "00:00:00",
    "closing_hours": "00:00:00",
    "timing": {
      "sun": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "mon": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "tue": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "wed": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "thu": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "fri": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "sat": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      }
    },
    "timing_day": "thu",
    "is_premium": true,
    "kitchen_close_time": "00:00:00",
    "estimated_pickup_time": null,
    "lat": "27.69877400000000000",
    "long": "85.33862200000000000",
    "place_id": null
  },
  {
    "slug": "Sujan",
    "name": "New Restaurant",
    "image": "https://pick.alldaycode.xyz/media/eac2e8c6546143119bee6da1027f2418/c94ae2e1be0d40d4b8eb5fd94d64dff2.png",
    "slogan": "",
    "address": null,
    "timezone": "Asia/Kathmandu",
    "description": "",
    "contacts": [
      {
        "is_verified": false,
        "contact_type": "phone",
        "contact_value": "98511511511"
      }
    ],
    "service_charge": null,
    "price_inclusive_of_vat": false,
    "vat": null,
    "allow_take_away": false,
    "allow_dine_in": true,
    "allow_delivery": false,
    "delivery_help_text": "",
    "show_in_homepage": true,
    "min_amount_for_delivery": null,
    "country_code": "NP",
    "currency": {
      "country": "NP",
      "name": "Nepalese Rupee",
      "short_code": "NPR",
      "symbol": "Rs "
    },
    "one_table_one_order": false,
    "order_handle_by_first_responder_only": false,
    "logo": null,
    "mandatory_table_selection_for_dine_in": true,
    "opening_hours": "00:00:00",
    "closing_hours": "00:00:00",
    "timing": null,
    "timing_day": "thu",
    "is_premium": false,
    "kitchen_close_time": "00:00:00",
    "estimated_pickup_time": null,
    "lat": null,
    "long": null,
    "place_id": null
  },
  {
    "slug": "thakalius",
    "name": "Thakali US",
    "image": "https://pick.alldaycode.xyz/media/3c052fe8128b4728b5a189d5bc229004/d29547bbb8754c17989b58b7e6b7b247.png",
    "slogan": "",
    "address": null,
    "timezone": "US/Eastern",
    "description": "",
    "contacts": [
      {
        "is_verified": false,
        "contact_type": "phone",
        "contact_value": "9841040123"
      }
    ],
    "service_charge": "0.00",
    "price_inclusive_of_vat": false,
    "vat": "13.00",
    "allow_take_away": true,
    "allow_dine_in": true,
    "allow_delivery": true,
    "delivery_help_text": "",
    "show_in_homepage": true,
    "min_amount_for_delivery": "20.00",
    "country_code": "US",
    "currency": {
      "country": "US",
      "name": "U.S Dollar",
      "short_code": "USD",
      "symbol": "$"
    },
    "one_table_one_order": false,
    "order_handle_by_first_responder_only": false,
    "logo": null,
    "mandatory_table_selection_for_dine_in": true,
    "opening_hours": "00:00:00",
    "closing_hours": "00:00:00",
    "timing": {
      "sun": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "mon": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "tue": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "wed": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "thu": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "fri": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "sat": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      }
    },
    "timing_day": "thu",
    "is_premium": false,
    "kitchen_close_time": "00:00:00",
    "estimated_pickup_time": 20,
    "lat": null,
    "long": null,
    "place_id": null
  },
  {
    "slug": "sekuwa",
    "name": "Sekuwa",
    "image": "https://pick.alldaycode.xyz/static/org-default.jpg",
    "slogan": "",
    "address": null,
    "timezone": "Asia/Kathmandu",
    "description": "",
    "contacts": [
      {
        "is_verified": false,
        "contact_type": "phone",
        "contact_value": "9841040112"
      }
    ],
    "service_charge": null,
    "price_inclusive_of_vat": true,
    "vat": "13.00",
    "allow_take_away": false,
    "allow_dine_in": true,
    "allow_delivery": false,
    "delivery_help_text": "",
    "show_in_homepage": false,
    "min_amount_for_delivery": null,
    "country_code": "NP",
    "currency": {
      "country": "NP",
      "name": "Nepalese Rupee",
      "short_code": "NPR",
      "symbol": "Rs "
    },
    "one_table_one_order": false,
    "order_handle_by_first_responder_only": false,
    "logo": null,
    "mandatory_table_selection_for_dine_in": true,
    "opening_hours": "00:00:00",
    "closing_hours": "00:00:00",
    "timing": null,
    "timing_day": "thu",
    "is_premium": false,
    "kitchen_close_time": "00:00:00",
    "estimated_pickup_time": null,
    "lat": null,
    "long": null,
    "place_id": null
  },
  {
    "slug": "prabesh",
    "name": "Prabesh",
    "image": "https://pick.alldaycode.xyz/static/org-default.jpg",
    "slogan": "",
    "address": "Nayabazar",
    "timezone": "Asia/Kathmandu",
    "description": "",
    "contacts": [
      {
        "is_verified": false,
        "contact_type": "phone",
        "contact_value": "9801333444"
      }
    ],
    "service_charge": "0.00",
    "price_inclusive_of_vat": false,
    "vat": "13.00",
    "allow_take_away": true,
    "allow_dine_in": true,
    "allow_delivery": false,
    "delivery_help_text": "",
    "show_in_homepage": false,
    "min_amount_for_delivery": null,
    "country_code": "NP",
    "currency": {
      "country": "NP",
      "name": "Nepalese Rupee",
      "short_code": "NPR",
      "symbol": "Rs "
    },
    "one_table_one_order": true,
    "order_handle_by_first_responder_only": false,
    "logo": null,
    "mandatory_table_selection_for_dine_in": true,
    "opening_hours": "00:00:00",
    "closing_hours": "00:00:00",
    "timing": null,
    "timing_day": "thu",
    "is_premium": false,
    "kitchen_close_time": "00:00:00",
    "estimated_pickup_time": null,
    "lat": null,
    "long": null,
    "place_id": null
  },
  {
    "slug": "bringer",
    "name": "Bringer Inn",
    "image": "https://pick.alldaycode.xyz/media/8b5ad713a240491489e35abcd7a82f75/b71f9ab14154426ea27c0b048c557505.png",
    "slogan": "",
    "address": null,
    "timezone": "US/Eastern",
    "description": "No-nonsense joint with counter stools dishing up hearty portions of familiar American diner fare.",
    "contacts": [
      {
        "is_verified": false,
        "contact_type": "phone",
        "contact_value": "9897531462"
      }
    ],
    "service_charge": "10.00",
    "price_inclusive_of_vat": true,
    "vat": "1.00",
    "allow_take_away": true,
    "allow_dine_in": true,
    "allow_delivery": true,
    "delivery_help_text": "",
    "show_in_homepage": true,
    "min_amount_for_delivery": null,
    "country_code": "US",
    "currency": {
      "country": "US",
      "name": "U.S Dollar",
      "short_code": "USD",
      "symbol": "$"
    },
    "one_table_one_order": false,
    "order_handle_by_first_responder_only": false,
    "logo": "https://pick.alldaycode.xyz/media/8b5ad713a240491489e35abcd7a82f75/84ce501eec2b47a6831155b3e1b859b2.png",
    "mandatory_table_selection_for_dine_in": true,
    "opening_hours": "00:00:00",
    "closing_hours": "00:00:00",
    "timing": null,
    "timing_day": "thu",
    "is_premium": false,
    "kitchen_close_time": "00:00:00",
    "estimated_pickup_time": null,
    "lat": null,
    "long": null,
    "place_id": null
  },
  {
    "slug": "bringer-inn-clone",
    "name": "Bringer Inn Clone",
    "image": "https://pick.alldaycode.xyz/media/8b5ad713a240491489e35abcd7a82f75/b71f9ab14154426ea27c0b048c557505.png",
    "slogan": "",
    "address": null,
    "timezone": "Asia/Kathmandu",
    "description": "No-nonsense joint with counter stools dishing up hearty portions of familiar American diner fare.",
    "contacts": [
      {
        "is_verified": false,
        "contact_type": "phone",
        "contact_value": "9897531462"
      }
    ],
    "service_charge": "0.00",
    "price_inclusive_of_vat": false,
    "vat": "0.00",
    "allow_take_away": true,
    "allow_dine_in": true,
    "allow_delivery": false,
    "delivery_help_text": "",
    "show_in_homepage": true,
    "min_amount_for_delivery": null,
    "country_code": "US",
    "currency": {
      "country": "US",
      "name": "U.S Dollar",
      "short_code": "USD",
      "symbol": "$"
    },
    "one_table_one_order": false,
    "order_handle_by_first_responder_only": false,
    "logo": "https://pick.alldaycode.xyz/media/8b5ad713a240491489e35abcd7a82f75/84ce501eec2b47a6831155b3e1b859b2.png",
    "mandatory_table_selection_for_dine_in": true,
    "opening_hours": "00:00:00",
    "closing_hours": "00:00:00",
    "timing": {
      "sun": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "mon": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "tue": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "wed": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "thu": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "fri": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      },
      "sat": {
        "opening_time": "00:00:00",
        "closing_time": "00:00:00",
        "kitchen_close_time": "00:00:00"
      }
    },
    "timing_day": "thu",
    "is_premium": false,
    "kitchen_close_time": "00:00:00",
    "estimated_pickup_time": null,
    "lat": null,
    "long": null,
    "place_id": null
  },
  {
    "slug": "resunga",
    "name": "Resaunga",
    "image": "https://pick.alldaycode.xyz/static/org-default.jpg",
    "slogan": null,
    "address": null,
    "timezone": "US/Eastern",
    "description": null,
    "contacts": null,
    "service_charge": null,
    "price_inclusive_of_vat": false,
    "vat": null,
    "allow_take_away": true,
    "allow_dine_in": true,
    "allow_delivery": false,
    "delivery_help_text": null,
    "show_in_homepage": false,
    "min_amount_for_delivery": null,
    "country_code": "NP",
    "currency": {
      "country": "NP",
      "name": "Nepalese Rupee",
      "short_code": "NPR",
      "symbol": "Rs "
    },
    "one_table_one_order": false,
    "order_handle_by_first_responder_only": false,
    "logo": null,
    "mandatory_table_selection_for_dine_in": true,
    "opening_hours": "00:00:00",
    "closing_hours": "00:00:00",
    "timing": null,
    "timing_day": "thu",
    "is_premium": false,
    "kitchen_close_time": "00:00:00",
    "estimated_pickup_time": null,
    "lat": null,
    "long": null,
    "place_id": null
  },
  {
    "slug": "ff1153bf4e05472a8d2d16a479088dd0",
    "name": "Bringer Inn",
    "image": "https://pick.alldaycode.xyz/media/8b5ad713a240491489e35abcd7a82f75/b71f9ab14154426ea27c0b048c557505.png",
    "slogan": "",
    "address": null,
    "timezone": "Asia/Kathmandu",
    "description": "No-nonsense joint with counter stools dishing up hearty portions of familiar American diner fare.",
    "contacts": [
      {
        "is_verified": false,
        "contact_type": "phone",
        "contact_value": "9897531462"
      }
    ],
    "service_charge": "10.00",
    "price_inclusive_of_vat": false,
    "vat": "1.00",
    "allow_take_away": true,
    "allow_dine_in": true,
    "allow_delivery": true,
    "delivery_help_text": "",
    "show_in_homepage": true,
    "min_amount_for_delivery": null,
    "country_code": "NP",
    "currency": {
      "country": "NP",
      "name": "Nepalese Rupee",
      "short_code": "NPR",
      "symbol": "Rs "
    },
    "one_table_one_order": false,
    "order_handle_by_first_responder_only": false,
    "logo": "https://pick.alldaycode.xyz/media/8b5ad713a240491489e35abcd7a82f75/84ce501eec2b47a6831155b3e1b859b2.png",
    "mandatory_table_selection_for_dine_in": true,
    "opening_hours": "00:00:00",
    "closing_hours": "00:00:00",
    "timing": null,
    "timing_day": "thu",
    "is_premium": false,
    "kitchen_close_time": "00:00:00",
    "estimated_pickup_time": null,
    "lat": null,
    "long": null,
    "place_id": null
  }
    ])
 */


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

  <DataTableServerSide :datas="datas" :username="userName"/>
</template>