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
    
        isLogin.value = value
        // console.log('islogin loginStatus() : ', isLogin.value);
        localStorage.setItem('isLogin', isLogin.value)

    }
    
    function saveToken(tokenReceived){
        token.value = tokenReceived
        // localStorage.setItem('authToken', token.value)
        console.log('token from store ',token);
    }
    
    function saveUser(userPhone){
        userName.value = userPhone
        localStorage.setItem('userName',userName.value)
    }
    function consoleValue(){
        console.log('isLogin :',isLogin.value);
        console.log('from checkToken token is :' ,token.value);
    }
   

    return { userName,isLogin, token, saveToken,saveUser, loginStatus, consoleValue }
})