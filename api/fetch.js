import { useLoginStore } from '~/store/store';
import { useCheckTokenStore} from '~/store/checkToken'

import {  storeToRefs} from 'pinia'

const configRun = useRuntimeConfig()

export const fetchUser= async (url, values)=>{
    const loginStore = useLoginStore()
    const { loginStatus } = loginStore  

    try{
        const response = await fetch(url,{
            method :'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:  JSON.stringify({
                user: {
                    'phone': values.phoneNumber
                }
                
            })
        })
   
    const data = await response.json()

    return data

    
    } catch(error){
        console.log('Error fetching data from fetch.js:', error)
    }
}

export const verifyOTP  = async (url, values,sessionToken) => {
    const response = await fetch(url,{
        method: 'POST',
        headers:{
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            phone: values.phoneNumber,
            otp: values.otp,
            session_token: sessionToken
        })
    })

    const data = response.json()
    return data 
}