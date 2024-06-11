<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useLoginStore } from '~/store/store';
import {useCheckTokenStore} from '~/store/checkToken'
import { storeToRefs } from 'pinia'
import { fetchUser, verifyOTP } from '~/api/fetch';
// import { getUser } from '~/api/getUsers'
import { useTheme } from 'vuetify'
import {setLocalToken } from '~/composables/useToken'

const { setToken } = setLocalToken()

const theme = useTheme()

const loginStore = useLoginStore()

const tokenStore = useCheckTokenStore()
const {  isLogin, saveToken,saveUser, loginStatus,consoleValue } = tokenStore

console.log('typeof(isLogin)', typeof(isLogin));
console.log('isLogin',isLogin);

const logged = ref(false)
const sessionToken = ref('')

const schema = yup.object({
    phoneNumber: yup.string().required().matches(/^\d{10}$/, 'Phone number must be exactly 10 digits'),
    otp: yup.string()
})

const { defineField, errors, handleSubmit } = useForm({
    validationSchema: schema
})

const [phoneNumber, phoneNumberAttrs] = defineField('phoneNumber')
const [otp, otpAttrs] = defineField('otp')


//Functions
const  onSubmit =  handleSubmit(async(values) => {
    let data = await fetchUser('https://pick.alldaycode.xyz/api/v1/accounts/onboard/', values)

    sessionToken.value =  data.session_token
    logged.value = true
});

const submitOTP = handleSubmit(async (values)=>{
    const tokenObject = await verifyOTP('https://pick.alldaycode.xyz/api/v1/accounts/onboard/verify/',values, sessionToken.value)

    console.log('token value from ',tokenObject);

    // saveToken(tokenObject.token)
    setToken(tokenObject.token)
    console.log('phone user is ', tokenObject.user.phone);
    saveUser(tokenObject.user.phone)
    loginStatus(true)


    consoleValue()
    navigateTo('/')

    //question this one why result false
    console.log('isLogin status after submitOTP ', isLogin);

  
})

 function toggleTheme(){
    theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
 }

</script>

<template>
    <form @submit="onSubmit" >
        <v-btn @click="toggleTheme">toggle theme</v-btn>
        <v-sheet width="400" class="mx-auto ">
        <v-card color="transparent" class="text-center py-6">
            <h1>Account Login</h1>
            <v-card-subtitle class="pt-4">
                Login / Register with just phone number
            </v-card-subtitle>

            <div class="flex items-center justify-center">
                <p class="">username</p>
                <v-text-field
                  v-model="phoneNumber"
                  v-bind="phoneNumberAttrs"
                  label="phone number"
                  name="phoneNumber"
                  type="text"
                  max=10
                  variant="solo"
                  class="px-2"
                ></v-text-field>
                <span color="red">
                    {{ errors.phoneNumber }}
                </span>
            </div>

            <v-btn type="submit" color="green-lighten-2">
                login
            </v-btn>
            <div v-if="logged">
                <v-otp-input
                  v-model="otp"
                  v-bind="otpAttrs"
                  name="otp"
                  focus-all
                >
                </v-otp-input>
        
                <span>{{ errors.otp }}</span>
        
                <v-btn @click="submitOTP">
                    Enter OTP
                </v-btn>
            </div>
        </v-card>

</v-sheet>
    
    </form>

</template>
