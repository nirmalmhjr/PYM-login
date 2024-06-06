<template>
    <img :src="props.data.image" alt="test12"/>
    <v-card>
        <v-card-title>
            {{ props.data.image }}
        </v-card-title>
        <v-img
            :width="300"
            aspect-ratio="16/9"
            cover
            :src="props.data.image"
            ></v-img>        
            <!-- src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" -->

        <v-card-text>slogan :  {{ props.data.slogan }}</v-card-text>
        <v-card-text>address : {{ props.data.address }}</v-card-text>
        <v-card-text>contact : {{ props.data.contacts.contact_value }}</v-card-text>
        <v-card-actions> </v-card-actions>
    </v-card>

    <!-- <v-card>{{props.data.name}}</v-card> -->

</template>
<script setup>
    
    const props= defineProps({
        data:{
            type: Object,
            required: true
        }
    })
</script>