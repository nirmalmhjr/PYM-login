<template>
    <v-container>
    <v-card style="z-index:1">
      <v-layout>
        <v-navigation-drawer
          location="right"
          permanent
        >
          <template v-slot:prepend>
            <v-list-item
              lines="two"
              prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
              subtitle="Logged in"
              title="Jane Smith"
            ></v-list-item>
          </template>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <NuxtLink to="/">
              <v-list-item prepend-icon="mdi-home-city" title="Home" value="home"></v-list-item>
          </NuxtLink>
            <v-list-item prepend-icon="mdi-account" title="My Account" value="account"></v-list-item>
            <v-list-item prepend-icon="mdi-account-group-outline" title="Users" value="users"></v-list-item>
          </v-list>
        </v-navigation-drawer>
        <v-main style="height: 250px"></v-main>
      </v-layout>

      <!-- for showing items -->
    </v-card>
      <slot />
</v-container>
  </template>