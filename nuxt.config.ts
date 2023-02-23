// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: "Nuxt Login with Ts",
            htmlAttrs: {
                lang: "en",
            },
            meta: [
                {charset: "utf-8"},
                {name: "viewport", content: "width=device-width, initial-scale=1"},
                {hid: "description", name: "description", content: ""},
                {name: "format-detection", content: "telephone=no"},
            ],
            link: [
                {rel: "icon", type: "image/x-icon", href: "/favicon.ico"},
                {
                    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css",
                    rel: "stylesheet",
                    type: "text/css",
                    integrity:
                        "sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==",
                    crossorigin: "anonymous",
                },
            ],
        },
    },


    css: ["bootstrap/dist/css/bootstrap.min.css"],

    vite: {
        server: {
            proxy: {
                options: {
                    target: process.env.API_URL,
                    changeOrigin: true
                }
            }
        }
    },

    runtimeConfig : {
        public : {
            apiUrl : 'https://identitytoolkit.googleapis.com/v1/'
        }
    }

})
