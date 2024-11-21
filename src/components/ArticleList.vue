<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div v-for="article in articles" :key="article.articleId" class="p-4 bg-white shadow rounded">
      <img :src="article.picture" alt="Article Image" class="w-full h-32 object-cover mb-2"/>
      <div class="flex justify-between items-center">
        <div>
          <h3 class="text-lg font-bold">({{ article.articleId }}) {{ article.name }}</h3>
          <p>Price: ${{ article.price }}</p>
        </div>
        <div>
          <button @click="createOrder(article.articleId)" :class="{
            'text-white py-2 px-4 rounded': true,
            'bg-blue-500 hover:bg-blue-600': cloudStore.articles_ms_port === 18080,
            'bg-orange-500 hover:bg-orange-600': cloudStore.articles_ms_port === 28080,
          }">Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {mapStores} from "pinia";
import {useCloudStore} from "@/stores/cloud.js";

export default {
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(useCloudStore)
  },
  props: {
    articles: Array,
  },
  methods: {
    async createOrder(articleId) {
      console.log('article ordered : ' + articleId + ' order id : ' + Date.now());
      const order = {
        orderId: Date.now(),
        articleIds: [articleId],
        quantity: 1,
      }
      await axios.post('http://localhost:' + this.cloudStore.articles_ms_port + '/api/order/add', order);
      await axios.post('http://localhost:' + this.cloudStore.articles_ms_port + '/api/order/send', order);
      this.$emit('order-created');
    },
  },
};
</script>
