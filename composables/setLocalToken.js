import useCheckTokenStore from  '~/store/checkToken'

// const useToken = useCheckTokenStore()
// const {token} = useToken

export function setLocalToken(){
    const token=ref('')
    
    function setToken(newToken){
        token.value = newToken
        localStorage.setItem('authToken', token)
        console.log('setToken from setLocalToken.js : ', token);
    }

    function getToken(){
        if(!token){
            token.value = localStorage.getItem('authToken')
        }
        return token
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
