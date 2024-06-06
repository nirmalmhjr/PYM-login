<template >
  <NuxtLayout >
    <v-app >
      <NuxtPage />
    </v-app >
</NuxtLayout>
</template>

<script setup>
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>