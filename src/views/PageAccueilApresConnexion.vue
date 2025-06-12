<template>
  <div class="min-h-screen bg-gray-50 space-y-4">
    <!-- HEADER -->
    <header class="bg-white fixed shadow-sm h-16  w-full animate-fade-in-down">
      <div class="lg:max-w-[95%] space-y-2 lg:space-y-0  w-full lg:mx-auto py-3 flex flex-wrap items-center justify-between ">
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
        <div class="flex items-center bg-white py-2 border-b-2 lg:border-none border-gray-300 px-2  lg:space-x-3 space-x-2 text-xl w-full lg:w-auto justify-end">
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
                class="w-5 h-5 text-blue-400">
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
         
          <div class="w-10 h-10 rounded-full bg-red-400">
            <img src="/img/ayanokoji.jpg" class="w-full h-full object-cover rounded-full" />
          </div>
        </div>
      </div>
    </header>
    <div class="w-full h-[10%]"></div>


    <!-- MAIN -->
    <main class="max-w-[95%] h-[90%]  mx-auto py-6 flex flex-col lg:flex-row gap-6 animate-fade-in-up">
      <!-- SIDEBAR FILTERS -->
      <aside
        class="w-full hidden lg:block h-full lg:w-1/4 bg-white space-y-4 rounded-xl shadow p-4  animate-slide-in-left">
        <div class="">

        </div>
        <h2 class="text-lg font-semibold">Filtres</h2>

        <div class="space-y-6 h-[90%] scrollbar-hide overflow-y-auto">
          <div>
            <h3 class="text-sm font-bold mb-1">Types de Chausures</h3>
            <div class="space-y-1 text-sm">
              <label class="flex items-center gap-2" v-for="i in 10" :key="i">
                <input type="checkbox" class="accent-blue-500" />
                Tenis
              </label>
              <label class="flex items-center gap-2">
                <input type="checkbox" class="accent-blue-500" />
                Balerie
              </label>
            </div>
          </div>

          <div>
            <h3 class="text-sm space-y-2 font-bold mb-1">Types de produits</h3>
            <label class=" flex items-center gap-2 text-sm">
              <input type="checkbox" class="accent-blue-500" /> Prêt à expédier

            </label>
            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" class="accent-blue-500" /> Expédier apres 2 jours

            </label>

          </div>

          <div>
            <h3 class="text-sm font-bold mb-1">Condition</h3>
            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" class="accent-blue-500" /> Neuf
            </label>
            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" class="accent-blue-500" /> Occasion
            </label>
          </div>
          <div>
            <h3 class="text-sm font-bold mb-1">Chaussure</h3>
            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" class="accent-blue-500" /> Homme
            </label>
            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" class="accent-blue-500" /> Femme
            </label>
          </div>



          <div>
            <h3 class="text-sm font-bold mb-1">Prix</h3>
            <div class="flex gap-2">
              <input type="number" placeholder="Min" class="w-1/2 px-2 py-1 border border-gray-300 rounded" />
              <input type="number" placeholder="Max" class="w-1/2 px-2 py-1 border border-gray-300 rounded" />
            </div>
          </div>
        </div>
      </aside>

      <!-- PRODUCTS GRID -->
      <section class="w-full flex-1 h-full py-4 ">
        <div class="flex flex-wrap justify-between items-center  space-y-3 lg:space-y-0">
          <p class="text-sm text-gray-600">1-16 sur 7000 résultats pour <strong>“Chaussures”</strong></p>
          <select class="border border-gray-300 focus:outline-none px-3 py-2 rounded-md text-sm">
            <option>Meilleure correspondance</option>
            <option>Prix croissant</option>
            <option>Prix décroissant</option>
          </select>
        </div>

        <div
          class="grid grid-cols-1 sm:grid-cols-2 scrollbar-hide  h-[91%] py-5 overflow-y-auto md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div v-for="n in 18" :key="n"
            class="bg-white rounded-xl p-4 shadow hover:shadow-lg transform hover:-translate-y-1 transition">
            <img src="/img/chaussure1.jpg" class="rounded-md mb-2 w-full h-auto" />
            <div class="text-lg font-semibold text-gray-800">
              $1,499 <span class="text-sm line-through text-gray-400">$1,899</span>
            </div>
            <p class="text-sm text-gray-500 mb-2">Chaussure Air Max Pro</p>
            <div class="flex items-center gap-1 text-xs text-gray-600">
              <i class="fas fa-star text-yellow-400"></i> 4.8 (120)
              <span class="ml-auto bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full text-xs">+100 vendues</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
// Tu peux connecter ici ton store, API ou autres plus tard
</script>

<style scoped>
@keyframes fade-in-down {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-in-left {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}

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

.animate-fade-in-down {
  animation: fade-in-down 0.5s ease-out;
}

.animate-fade-in-up {
  animation: fade-in-up 0.5s ease-out;
}

.animate-slide-in-left {
  animation: slide-in-left 0.5s ease-out;
}
</style>
