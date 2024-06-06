<script setup lang="ts">
    import {useForm} from 'vee-validate'
    import * as yup from 'yup'

    const schema = yup.object({
        email: yup.string().email().required(),
        password: yup.string().min(6).required(),
        phoneNumber:yup.string().max(10).required().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    })

    const {defineField, errors, handleSubmit} = useForm({
        validationSchema: schema
    })

    const [email, emailAttrs] = defineField('email')
    const [password, passwordAttrs] =  defineField('password')
    const [phoneNumber, phoneNumberAttrs] = defineField('phoneNumber')
    

    const onSubmit = handleSubmit(values=>{
        // console.log(values);
        alert(JSON.stringify(values.password))
    })

    let datas=[]
    // const data = await fetch('/data.json')
    fetch('/data.json')
    .then(res => res.json())
    .then(data => datas= data)    

</script>
<template>
    <form @submit="onSubmit">
        
        <div> 
            <label for="">email</label>
            <input type="email" name='email' v-model="email" v-bind="emailAttrs">
            <span>{{ errors.email }}</span>
        </div>    
        <div>
            <label for="password">password</label>
            <input type="password" v-model="password" v-bind="passwordAttrs">
            <span>{{ errors.password }}</span>
        </div> 
        <div>
            <label for="phoneNumber">contact no.</label>
            <input type="text" v-model="phoneNumber" v-bind="phoneNumberAttrs">
            <span>{{errors.phoneNumber}}</span>
        </div>

        <button type="submit">Login</button>
    </form>

    <h1>data is : {{ datas[0] }}</h1>
</template>



