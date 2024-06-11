<template>
   <v-data-table
    :headers="headers"
    :items="props.datas"
    item-key="name"
    items-per-page="10"
  >
    <template v-slot:item.allow_delivery = {item}>
        <span>{{ item.allow_delivery ? 'Yes ': 'No' }}</span>
    </template>
    <template v-slot:item.allow_take_away = {item}>
        <span>{{ item.allow_take_away ? 'yes' : 'No' }}</span>
    </template>
</v-data-table>

<pre>{{ props.datas[0] }}</pre>

</template>

<script setup lang="ts">

const props = defineProps({
        datas:{
            type : Array,
            required :true
        }
    })

    const headers = ref([
        {title:'Name', value:'name',align:'start'},
        {title:'Contact no.', value:'contacts[0].contact_value'},
        {title:'Take away', value:'allow_take_away'},
        {title:'Delivery', value:'allow_delivery'},
        {title:'Open at', value:'opening_hours'},
        {title:'closes at', value:'closing_hours'},
    ])

    
    
</script>

