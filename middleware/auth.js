import { useCheckTokenStore } from "~/store/checkToken"

export default defineNuxtRouteMiddleware((to, from) => {
    const tokenStore = useCheckTokenStore()
    
    const {isLogin } = tokenStore

    if(!isLogin){
        return navigateTo('/loginPage')
    }
  })