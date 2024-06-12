import {useCheckTokenStore} from  '~/store/checkToken'


export function setLocalToken(){
    const useToken = useCheckTokenStore()
    const {token, saveToken} = useToken
    
    /* function setToken(newToken){
        token.value = newToken
        localStorage.setItem('authToken', token)
        console.log('setToken from setLocalToken.js : ', token);
    } */
   function setToken(newToken){
    // console.log('before setToken token is ',newToken);
    // console.log('before setToken tokenStore is ',token);
    saveToken(newToken)
    localStorage.setItem('authToken', newToken)
    // console.log('after setToken from setLocalToken.js : ', newToken);
    // console.log('after setToken from tokenValue.js : ', token);
   }

    function getToken(){
        if(!token){
            token.value = localStorage.getItem('authToken')
        } else {
            console.log('token form getToken',token);
            return token
        }
    }

    function updateToken(newToken){
        setItem(newToken)
    }

    function removeToken(){
        localStorage.removeItem('authToken')
        token.value= null
    }

    return { setToken, getToken, updateToken, removeToken }
}
