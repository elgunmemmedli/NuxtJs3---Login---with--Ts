import axios from "axios";
export const useAuth = () => {
  interface loginPayload {
    email: string;
    password: string;
  }

  // login
  async function login(payload: loginPayload) {
    let {data} = await axios.post(
      "accounts:signInWithPassword?key=AIzaSyDCgP5G7Dgn5_g-dpLE5sDm1xQHhSa97Zg",  {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
    );
    let userTokenCookie = useCookie('token');
    userTokenCookie.value = data.idToken;
    useRouter().push("/");
  }

  // register
  async function register(payload: loginPayload) {
   let {data} =  await axios.post(
      "accounts:signUp?key=AIzaSyDCgP5G7Dgn5_g-dpLE5sDm1xQHhSa97Zg",
      {
        email: payload.email,
        password: payload.password,
        returnSecureToken: true,
      }
    );
    // use cookie
        let userTokenCookie = useCookie('token');
        userTokenCookie.value = data.idToken;
    useRouter().push("/");
  }

  return {
    login,
    register,
  };
};
