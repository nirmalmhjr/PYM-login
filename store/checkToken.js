import {ref,watch} from 'vue'
import { defineStore,storeToRefs } from "pinia";
import {useLoginStore} from './store'

export const useCheckTokenStore = defineStore('token',()=>{

    //state
    const tokenfromStore = ref('')
    const isLogin = ref(false)
    const token = ref('')
    const userName = ref('')
    
    //Methods
    function loginStatus(value){
        // if(value){
        //     isLogin.value = value
        // } else {
        //     isLogin.value = value
        // }
        isLogin.value = value
        console.log('islogin loginStatus() : ', isLogin.value);
    }
    
    function saveToken(tokenReceived){[
        token.value = tokenReceived
    ]}
    
    function saveUser(userPhone){
        userName.value = userPhone
    }
    function consoleValue(){
        console.log('isLogin :',isLogin.value);
        console.log('from checkToken token is :' ,token.value);
    }
   

    return { userName,isLogin, token, saveToken,saveUser, loginStatus, consoleValue }
})