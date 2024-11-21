<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <!-- Navbar -->
    <nav
        :class="{
        'text-white': true,
        'bg-blue-500': (cloudStore.articles_ms_port === 18080 && $route.path === '/') || (cloudStore.orders_ms_port === 18081 && $route.path === '/orders'),
        'bg-orange-500 ': (cloudStore.articles_ms_port === 28080 && $route.path === '/') || (cloudStore.orders_ms_port === 28081 && $route.path === '/orders'),
      }"
    >
      <div class="container mx-auto flex justify-between items-center">
        <!-- Home Link -->
        <router-link to="/" class="font-bold flex items-center">
          <img
              class="h-10 mr-2"
              src="https://assets.holopin.io/eyJidWNrZXQiOiJob2xvcGluLWFzc2V0cyIsImtleSI6ImFzc2V0cy9jbG1qbDF0N3gxODk2MGZsY2E3aHBhaWZkIiwiZWRpdHMiOnsicm90YXRlIjpudWxsfX0="
              alt=""
          />
          <span class="leading-10">Home</span>
        </router-link>

        <!-- Cloud Selector -->
        <div class="flex space-x-4">
          <button
              @click="selectCloud('azure')"
              class="px-4 py-2 font-semibold text-sm rounded-lg shadow-md focus:outline-none transition-colors"
              :class="{
              'bg-blue-500 text-white': cloudStore.selectedCloud === 'azure',
              'bg-gray-200 hover:bg-gray-300': cloudStore.selectedCloud !== 'azure'
            }"
          >
            Azure
          </button>
          <button
              @click="selectCloud('aws')"
              class="px-4 py-2 font-semibold text-sm rounded-lg shadow-md focus:outline-none transition-colors"
              :class="{
              'bg-orange-500 text-white': cloudStore.selectedCloud === 'aws',
              'bg-gray-200 hover:bg-gray-300': cloudStore.selectedCloud !== 'aws'
            }"
          >
            AWS
          </button>
        </div>
        <!-- Orders Link -->
        <div class="">
          <router-link class="flex items-center" to="/orders">
            <span class="mx-2 leading-10 font-bold">Orders</span>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
            <span class="bg-red-600 text-white text-sm ml-2 px-1.5 rounded-full">1</span>
          </router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>

<script>
import { useCloudStore } from '@/stores/cloud';
import {mapStores} from "pinia";

export default {
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(useCloudStore)
  },
  methods: {
    async selectCloud(cloud) {
      // use them anywhere!
      this.cloudStore.selectCloud(cloud);
    },
  },
};
</script>
