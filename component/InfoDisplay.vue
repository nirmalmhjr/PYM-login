<template>
    <v-container>
        <v-sheet>
        <v-card width="400">
            <v-card-title>
                {{ props.data.name }}
            </v-card-title>
          <div class="d-flex justify-center pa-2">
            <v-img
            rounded="lg"
            
            :width="300"
            class="bg-red-lighten-2 "
            alt="this is image"
            aspect-ratio="16/9"
            height="250"
            src="https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            cover
          ></v-img>
          </div>
            <!-- src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" -->

            <!-- <v-card-text>slogan :  {{ props.data.slogan }}</v-card-text> -->
            <v-card-text class="text-body-1">slogan : Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda, pariatur quos.
                Animi.</v-card-text>
            <v-card-text>
                <p>address : {{ props.data.address }}</p>
                <p>contact : {{ props.data.contacts[0].contact_value }} </p>
            </v-card-text>

            <v-card-actions>
                <v-btn
                 color=" bg-green"
                 variant="tonal"
                 append-icon="mdi-chevron-right"
                 rounded="lg"
                 >click</v-btn>
            </v-card-actions>
        </v-card>
    </v-sheet>

    </v-container>

</template>
<script setup>

const props = defineProps({
    data: {
        type: Array,
        required: true
    }
})
</script>