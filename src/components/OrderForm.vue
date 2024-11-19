<template>
  <form @submit.prevent="createOrder" class="mb-6 flex align-bottom flex-wrap">
    <div class="m-2 w-56 flex-shrink-0">
      <label for="orderId" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Order ID</label>
      <input type="text" id="orderId" v-model="orderId" placeholder="Order ID" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <div class="m-2 w-56 flex-shrink-0">
      <label for="quantity" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
      <input type="number" id="quantity" v-model="quantity" placeholder="Quantity" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <div class="m-2 w-56 flex-shrink-0">
      <label for="articleIds" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Article IDs (comma separated)</label>
      <input type="text" id="articleIds" v-model="articleIds" placeholder="Article IDs (comma separated)" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <div class="m-2 w-56 flex-shrink-0">
      <div class="mb-2">&nbsp;</div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create Order</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      orderId: '',
      quantity: '',
      articleIds: '',
    };
  },
  methods: {
    async createOrder() {
      await axios.post('http://localhost:8080/api/order/add', {
        order_id: this.orderId,
        article_ids: this.articleIds.split(',').map(id => id.trim()),
        quantity: parseInt(this.quantity),
      });
      this.$emit('order-created');
      this.orderId = '';
      this.quantity = '';
      this.articleIds = '';
    },
  },
};
</script>
