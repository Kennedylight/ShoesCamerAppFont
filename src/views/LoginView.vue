<template>
    <div class="w-full h-screen flex relative bg-gradient-to-tr from-white to-blue-100 text-black">

        <!-- Animation décorative -->
        <div class="absolute top-4 left-4 w-10 h-10 bg-pink-500 "></div>

        <!-- Côté gauche (image ou dégradé avec visuel e-commerce) -->
        <div
            class="w-1/2 hidden lg:flex items-center justify-center bg-gradient-to-br from-blue-600 to-purple-500 relative overflow-hidden">
            <img src="https://source.unsplash.com/featured/?shopping,ecommerce"
                class="w-full h-full object-cover absolute opacity-30" alt="e-commerce background" />
            <div class="relative z-10 text-white text-center px-10">
                <h2 class="text-4xl font-bold mb-4 animate-fade-in">Bienvenue sur ShopX</h2>
                <p class="text-lg opacity-90">Connectez-vous pour accéder à nos meilleures offres</p>
            </div>
        </div>

        <!-- Côté droit (formulaire) -->
        <div class="lg:w-1/2 w-full flex items-center justify-center p-6">
            <div class="w-full max-w-md space-y-8 animate-slide-in-right">
                <h1 class="text-2xl font-bold text-gray-800 text-center">Connexion à votre compte</h1>

                <form class="space-y-6 " @submit.prevent="connexion">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="email" name="floating_email" id="floating_email"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_email"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email
                            address</label>
                    </div>

                    <div class="relative z-0 w-full mb-5 group">
                        <input type="password" name="floating_password" id="floating_password"
                            class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=" " required />
                        <label for="floating_password"
                            class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>

                    <button  type="submit" 
                        class="w-full py-2 bg-blue-600 cursor-pointer hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 shadow-md">
                        Se connecter
                    </button>
                </form>

                <div class="flex items-center justify-between">
                    <div class="h-px bg-gray-300 w-full"></div>
                    <span class="mx-2 text-gray-400 text-sm">Ou</span>
                    <div class="h-px bg-gray-300 w-full"></div>
                </div>

                <!-- Boutons sociaux -->
                <div class="flex flex-col gap-4">
                    <button
                        class="flex items-center justify-center gap-2 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" class="w-5 h-5" />
                        <span>Connexion avec Google</span>
                    </button>

                    <button
                        class="flex items-center justify-center gap-2 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition">
                        <svg class="w-5 h-5 bg-white rounded-full p-0.5" viewBox="0 0 48 48" fill="none">
                            <circle cx="24" cy="24" r="24" fill="#1877F2" />
                            <path
                                d="M30.2 24H26V38H20V24H17V18.5H20V15.7C20 12.1 21.9 10 25.8 10H30V15.5H27.6C26.1 15.5 26 16.1 26 17.1V18.5H30L29.3 24Z"
                                fill="white" />
                        </svg>
                        <span>Connexion avec Facebook</span>
                    </button>
                </div>

                <p class="text-center text-sm text-gray-600">
                    Vous n'avez pas de compte ?
                    <router-link to="/register" class="text-blue-600 font-medium hover:underline">Créer un
                        compte</router-link>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    methods: {
        connexion(){
           
            console.log("hello")
            this.$router.push({name:'Acceuil'})
        }
    },
}
</script>