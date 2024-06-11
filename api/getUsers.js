import { useCheckTokenStore} from '~/store/checkToken'




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
    const url = `https://pick.alldaycode.xyz/api/v1/users/${userName}/associated-orgs/`

try {
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
