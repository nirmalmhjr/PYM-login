<script setup lang="ts">
    async function fetchUrl(url){
        let response = await fetch(url)
        let data = await response.json()
        // console.log(data);
        return data
    }

    let data = ref(null)
    let dataLoaded =  ref(false)

    async function loadData(){
        data.value = await fetchUrl('https://jsonplaceholder.typicode.com/posts')

        dataLoaded.value = !dataLoaded.value
    }
    // loadData()

</script>

<template>
    <v-btn @click="loadData()">Load data</v-btn>
    <div  v-if="!dataLoaded">
        <h1>No data found</h1>
    </div>
    <div v-else>
        <div v-for="user in data">
            <h3>User Id : {{ user.userId }}</h3>
            <h2>title : {{ user.title }}</h2>
            <p>{{ user.body }}</p>
        </div>
    </div>
</template>



