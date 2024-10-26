<template>
  <div class="min-h-screen bg-gray-100 text-gray-900">
    <nav class="bg-blue-600 text-white p-4">
      <div class="container mx-auto flex justify-between">
        <router-link to="/" class="font-bold">Home</router-link>
        <div>
          <router-link to="/articles" class="mr-4">Articles</router-link>
          <router-link to="/orders">Orders</router-link>
        </div>
      </div>
    </nav>
    <main class="p-6">
      <router-view />
    </main>
  </div>
</template>
