import { useCheckTokenStore } from "~/store/checkToken"

export default defineNuxtRouteMiddleware((to, from) => {
    const tokenStore = useCheckTokenStore()
    
    const {isLogin, saveToken, loginStatus,saveUser } = tokenStore

    // const isLoginLocal = localStorage.getItem('isLogin')

    if(process.client && !isLogin ){
        const test = localStorage.getItem('authToken')
        const userNameLocal = localStorage.getItem('userName')

        if (test) {
            saveToken(test)
            loginStatus(true)
            saveUser(userNameLocal)
        } else {
            return navigateTo('/loginPage')
        }
    }

    // if (!isLogin && !localStorage.getItem('isLogin')) {
    //     return navigateTo('/loginPage');
    // }
  })