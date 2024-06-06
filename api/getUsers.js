import { useCheckTokenStore} from '~/store/checkToken'

/* 
    export const getUser = async(url )=>{
    const checkToken = useCheckTokenStore()
    const {token,userName } = checkToken

    // let updatedURL=
    try {   
        const response = await fetch(url,{
            method:'GET',
            headers: {
                'Content-Type' : 'application/json',
                'Authorization' : `Token ${token}`
            },

        })
        const data = await response.json()
        // console.log('data from getuser() :: ', data);
    } catch (error) {
        console.log('error from getUser() :: ', error);
    }
    return data
} */


export const getUserandInterceptor = async (endpoint, options = {}) => {
  const checkTokenStore = useCheckTokenStore();
  const {token, userName} = checkTokenStore;

  // Set up headers
  const headers = {
      ...options.headers,
    'Content-Type': 'application/json',
  };


  if (token) {
    headers.Authorization = `Token ${token}`;
  }

  // Set up full options object
  const config = {
    ...options,
    headers,
  };

  // Set base URL
//   const baseUrl = process.env.baseUrl + '/api/v1';
    const url = `https://pick.alldaycode.xyz/api/v1/users/${userName}/associated-orgs/`

try {
    // const response = await fetch(url, config);
    const response = await fetch(url, config);
    console.log('response useFetch', response);

    // Handle response interception
    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`, response);
    }
      //  handle status codes
      if (response.status === 401) {
        console.error('Unauthorized access - perhaps redirect to login');
        navigateTo('/loginPage')
      } else if (response.status === 403) {
        console.error('Access forbidden - check your permissions');
      }

    const data = await response.json();
    return data;
    }
         catch (error) {
        console.error('Fetch error:', error);
  }}
