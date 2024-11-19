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
          <button @click="createOrder(article.articleId)" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">Order</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';



export default {
  props: {
    articles: Array,
  },
  methods: {
    async createOrder(articleId) {
      console.log('article ordered : ' + articleId + ' order id : ' + Date.now());
      await axios.post('http://localhost:8080/api/order/add', {
        order_id: Date.now(),
        article_ids: [articleId],
        quantity: 1,
      });
      this.$emit('order-created');
    },
  },
};
</script>
