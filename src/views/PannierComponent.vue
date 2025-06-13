<template>
  <div class="min-h-screen bg-gray-50 space-y-4">
      <!-- HEADER -->
    <header class="bg-white fixed shadow-sm h-16  w-full animate-fade-in-down">
      <div class="lg:max-w-[95%] space-y-2 lg:space-y-0  w-full lg:mx-auto py-3 lg:py-0 flex flex-wrap items-center justify-between ">
        <!-- Logo + Recherche -->
        <div class="flex items-center px-2  h-full flex-wrap gap-3 w-full lg:justify-between  lg:w-[70%]">
          <div class=" h-full space-x-5  hidden lg:flex  justify-center">
            <img src="/img/ayanokoji.jpg" alt="Logo" class="lg:w-10 lg:h-10 w-5 h-5 rounded-full" />
            <div class=" flex items-center h-12">
              <h1 class="font-bold">ShoesX</h1>
            </div>
          </div>
          <div class="lg:w-[60%] w-[98%]  flex border border-gray-300  rounded-full h-10">
            <input type="text" placeholder="Rechercher une chaussure..."
              class="  lg:w-[80%] w-[85%] px-4 h-full border border-none  focus:outline-none" />
            <div
              class="lg:w-[20%] w-[15%] h-full bg-blue-500 cursor-pointer lg:h-full items-center text-white space-x-3  px-2 rounded-full justify-center flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="lg:w-4 lg:h-4 w-6 h-6 font-bold">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>

              <p class="text-white hidden lg:block">Search</p>
            </div>
          </div>

        </div>
        <!-- Icônes -->
        <div class="flex items-center bg-white lg:bg-transparent py-2 border-b-2 lg:border-none border-gray-300 px-2  lg:space-x-3 space-x-2 text-xl w-full lg:w-auto justify-end">
          <div class="flex gap-3">
            <div class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5 text-blue-400">
                <path
                  d="M5.85 3.5a.75.75 0 0 0-1.117-1 9.719 9.719 0 0 0-2.348 4.876.75.75 0 0 0 1.479.248A8.219 8.219 0 0 1 5.85 3.5ZM19.267 2.5a.75.75 0 1 0-1.118 1 8.22 8.22 0 0 1 1.987 4.124.75.75 0 0 0 1.48-.248A9.72 9.72 0 0 0 19.266 2.5Z" />
                <path fill-rule="evenodd"
                  d="M12 2.25A6.75 6.75 0 0 0 5.25 9v.75a8.217 8.217 0 0 1-2.119 5.52.75.75 0 0 0 .298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 1 0 7.48 0 24.583 24.583 0 0 0 4.83-1.244.75.75 0 0 0 .298-1.205 8.217 8.217 0 0 1-2.118-5.52V9A6.75 6.75 0 0 0 12 2.25ZM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 0 0 4.496 0l.002.1a2.25 2.25 0 1 1-4.5 0Z"
                  clip-rule="evenodd" />
              </svg>

            </div>
            <div class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5 text-red-500">
                <path fill-rule="evenodd"
                  d="M2.25 6a3 3 0 0 1 3-3h13.5a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V6Zm18 3H3.75v9a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V9Zm-15-3.75A.75.75 0 0 0 4.5 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H5.25Zm1.5.75a.75.75 0 0 1 .75-.75h.008a.75.75 0 0 1 .75.75v.008a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V6Zm3-.75A.75.75 0 0 0 9 6v.008c0 .414.336.75.75.75h.008a.75.75 0 0 0 .75-.75V6a.75.75 0 0 0-.75-.75H9.75Z"
                  clip-rule="evenodd" />
              </svg>

            </div>
            <div class="cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                class="w-5 h-5 text-blue-400">
                <path fill-rule="evenodd"
                  d="M16.5 3.75a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5V15a.75.75 0 0 0-1.5 0v3.75a3 3 0 0 0 3 3h6a3 3 0 0 0 3-3V5.25a3 3 0 0 0-3-3h-6a3 3 0 0 0-3 3V9A.75.75 0 1 0 9 9V5.25a1.5 1.5 0 0 1 1.5-1.5h6ZM5.78 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 0 0 0 1.06l3 3a.75.75 0 0 0 1.06-1.06l-1.72-1.72H15a.75.75 0 0 0 0-1.5H4.06l1.72-1.72a.75.75 0 0 0 0-1.06Z"
                  clip-rule="evenodd" />
              </svg>

            </div>
          </div>
         
          <div class="w-10 h-10 rounded-full">
            <img src="/img/ayanokoji.jpg" class="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </header>
    <div class="w-full h-[20%] lg:h-[10%]"></div>
    <h1 class="text-2xl font-bold text-center">Mon Panier</h1>

    <div class="grid lg:grid-cols-3 h-[76%]  gap-8 px-2">
      <!-- LISTE DES PRODUITS -->
      <div class="lg:col-span-2 space-y-4 scrollbar-hide overflow-y-auto">
        <div
          v-for="(item, index) in cart"
          :key="item.id"
          class="bg-white p-4 rounded-lg shadow flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <img :src="item.image" alt="Product" class="w-28 h-28 object-cover rounded-lg" />
          <div class="flex-1 space-y-1">
            <h2 class="text-lg font-semibold">{{ item.name }}</h2>
            <p class="text-sm text-gray-500">{{ item.description }}</p>
            <p class="text-blue-600 font-bold text-lg">{{ item.price }} FCFA</p>
          </div>
          <div class="flex items-center gap-2">
            <button @click="decreaseQuantity(index)" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">-</button>
            <span class="font-bold">{{ item.quantity }}</span>
            <button @click="increaseQuantity(index)" class="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300">+</button>
          </div>
          <button @click="removeItem(index)" class="text-red-500 hover:text-red-700 text-sm">
            Supprimer
          </button>
        </div>
      </div>

      <!-- FACTURE -->
      <div class="bg-white p-6 rounded-lg h-full shadow space-y-4">
        <h2 class="text-xl font-semibold">Résumé de la commande</h2>
        <div class="flex justify-between text-sm text-gray-600">
          <span>Sous-total</span>
          <span>{{ subtotal }} FCFA</span>
        </div>
        <div class="flex justify-between text-sm text-gray-600">
          <span>Frais (estimés)</span>
          <span>{{ fees }} FCFA</span>
        </div>
        <hr />
        <div class="flex justify-between font-bold text-lg">
          <span>Total</span>
          <span>{{ total }} FCFA</span>
        </div>

        <button
          @click="checkout"
          class="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg"
        >
          Commander
        </button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cart: [
        {
          id: 1,
          name: 'Chaussure Nike Air',
          description: 'Pointure 42, noir',
          price: 35000,
          quantity: 1,
          image: '/img/chaussure1.jpg'
        },
        {
          id: 2,
          name: 'Chaussure Adidas Boost',
          description: 'Pointure 43, blanc',
          price: 30000,
          quantity: 2,
          image: '/img/chaussure2.jpg'
        },
         {
          id: 3,
          name: 'Chaussure Adidas Boost',
          description: 'Pointure 43, blanc',
          price: 30000,
          quantity: 2,
          image: '/img/chaussure2.jpg'
        },
         {
          id: 4,
          name: 'Chaussure Adidas Boost',
          description: 'Pointure 43, blanc',
          price: 30000,
          quantity: 2,
          image: '/img/chaussure2.jpg'
        },
         {
          id: 5,
          name: 'Chaussure Adidas Boost',
          description: 'Pointure 43, blanc',
          price: 30000,
          quantity: 2,
          image: '/img/chaussure2.jpg'
        },
      ]
    }
  },
  computed: {
    subtotal() {
      return this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    },
    fees() {
      return Math.floor(this.subtotal * 0.02) // frais 2%
    },
    total() {
      return this.subtotal + this.fees
    }
  },
  methods: {
    increaseQuantity(index) {
      this.cart[index].quantity++
    },
    decreaseQuantity(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--
      }
    },
    removeItem(index) {
      this.cart.splice(index, 1)
    },
    checkout() {
      alert(`Paiement de ${this.total} FCFA via blue / MTN Money en cours...`)
      // Ici tu peux déclencher une requête vers un backend ou un prestataire de paiement
    }
  }
}
</script>
<style>

/* Hide scrollbar for Chrome, Safari and Opera */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrollbar-hide {
  -ms-overflow-style: none;
  /* IE and Edge */
  scrollbar-width: none;
  /* Firefox */
}
</style>

