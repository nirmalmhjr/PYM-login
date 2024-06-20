<template>
  <v-app>
    <v-container >
      <v-card>
        <v-row class="ma-0 pa-0 ">
          <v-col cols="6" class="bg-blue d-flex flex-column justify-center align-center">
            <v-img src="https://cdn.vuetifyjs.com/docs/images/brand-kit/v-logo-circle.png" :width="250" cover>
            </v-img>
            <h1 class="text-center">Miracle Yard Inc.</h1>
          </v-col>
          <v-col cols="6" class="d-flex flex-column justify-center align-center ">
            <div>
              <div>
              <h1>Nirmal Maharjan</h1>
              <p>Front End Developer</p>
              <p class="text-subtitle-2	">Miracle Yard Inc.</p>
            </div>

            <div class="d-flex pt-4 ">
              <v-icon class="mr-2">mdi-phone</v-icon>
              <p>+977-9876543210</p>
            </div>

            <div class="d-flex pt-4">
              <v-icon class="mr-2">mdi-map-marker</v-icon>
              <p>Kathmandu, Nepal</p>
            </div>
            <div class="d-flex pt-4">
              <v-icon class="mr-2">mdi-email</v-icon>
              <p>abcxyz@email.com</p>
            </div>
            </div>
          </v-col>
        </v-row>
      </v-card>
     
    </v-container>
  </v-app>
</template>

<script setup>

const msg = ref('hello from the me')

definePageMeta({
  layout: false
})

</script>