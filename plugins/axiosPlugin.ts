import axios from 'axios'
export default defineNuxtPlugin(async(nuxtApp) => {
    const config = useRuntimeConfig();
    axios.defaults.baseURL = config.public.apiUrl;


    // await axios.get('/',{
    //     baseURL : config.public.apiUrl,
    // });
})
