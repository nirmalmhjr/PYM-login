<template>
    <v-data-table-server
      v-model:items-per-page="itemsPerPage"
      :headers="headers"
      :items-length="totalItems"
      :items="serverItems"
      :loading="loading"
      :search="search"
      :page.sync="currentPage"
      @update:options="loadItems"
      item-value="name"
    ></v-data-table-server>
</template>

<script setup lang="ts">
const props = defineProps({
    datas:{
        type: Object,
        required: true
    },
   
    itemsPerPage:{
        type:Number,
        required: true
    },
    currentPage:{
        type:Number,
        required: true
    },
    totalItems:{
        type:Number,
        required: true
    },

})

//defineEmits
const emit = defineEmits(['page-change','items-per-page-change'])

const search = ref('')
const serverItems = ref(props.datas)
const loading = ref(true)
const totalItems = ref(props.totalItems)
const itemsPerPage = ref(props.itemsPerPage)


const headers = ref([
    { title: 'Name', value: 'name', align: 'start' },
    { title: 'Contact no.', value: 'contacts[0].contact_value' },
    { title: 'Take away', value: 'allow_take_away' },
    { title: 'Delivery', value: 'allow_delivery' },
    { title: 'Open at', value: 'opening_hours' },
    { title: 'closes at', value: 'closing_hours' },
])

function loadItems({ page, itemsPerPage }) {
    loading.value = true
    
    emit('page-change', page)
    emit('items-per-page-change', itemsPerPage)

    loading.value = false;

}
    /* 
    let url = `https://pick.alldaycode.xyz/api/v1/users/${props.userName}/associated-orgs/?limit=${itemsPerPage}&offset=${offset}`
 */

 watch(
    () => props.datas,
    (newVal) => {
        serverItems.value = newVal
    }
)




// onMounted(() => {
//     loadItems({page, itemsPerPage});
// });



</script>
