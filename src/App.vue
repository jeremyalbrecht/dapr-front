<template>
  <div class="min-h-screen bg-gray-100  text-gray-900 ">
    <nav class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between align-middle">
        <router-link to="/" class="font-bold flex">
          <img class="h-10 mr-2" src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbG1qbDF0N3gxODk2MGZsY2E3aHBhaWZkIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0=" alt="" srcset="">
          <span class="leading-10">
            Home
          </span>
        </router-link>
        <div class="">
          <router-link class="flex items-center" to="/orders">
            <span class="mx-2 leading-10 font-bold">Orders</span> 
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
            </svg>
            <span class="bg-red-600 text-white text-sm ml-2 px-1.5 rounded-full">1</span>
          </router-link>
        </div>
      </div>
    </nav>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>
