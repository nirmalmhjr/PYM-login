<template>
    <v-container>
      <v-card style="z-index:1">
        <v-layout>
          <v-navigation-drawer
            v-model="drawer"
            :rail="rail"
            permanent
            @click="rail = false"
            elevation=21
            location= "left" 
            
          >
          <NuxtLink to="/" >
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
              title="John Leider"
              nav
            >
              <template v-slot:append>
                <v-btn
                  icon="mdi-chevron-left"
                  variant="text"
                  @click.stop="rail = !rail"
                ></v-btn>
              </template>
            </v-list-item>
        </NuxtLink>


            <v-divider></v-divider>
    
            <v-list density="compact" nav>
                <NuxtLink to="/dataTable">
                    <v-list-item prepend-icon="mdi-home-city" title="Data Table" value="Data Table">
                        
                    </v-list-item>
                </NuxtLink>
                <NuxtLink to="/GraphicsCard">
                    <v-list-item prepend-icon="mdi-account" title="GraphicsCard" value="GraphicsCard"></v-list-item>
                </NuxtLink>
                <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
            </v-list>
          </v-navigation-drawer>
          <!-- <v-main style="height: 250px"></v-main> -->
        </v-layout>

        <!-- for changin theme -->
        <v-btn @click="toggleTheme">
            theme
        </v-btn>
  
      </v-card>
      
      <!-- for showing items -->
      <slot />
    </v-container>
  
  </template>
  
    <script setup>
      const drawer= ref(true)
      const rail= ref(true)     
  
      import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
    </script>