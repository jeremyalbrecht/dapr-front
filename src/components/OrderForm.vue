<template>
  <form @submit.prevent="createOrder" class="mb-6">
    <input type="text" v-model="orderId" placeholder="Order ID" class="input"/>
    <input type="number" v-model="quantity" placeholder="Quantity" class="input"/>
    <input type="text" v-model="articleIds" placeholder="Article IDs (comma separated)" class="input"/>
    <button type="submit" class="btn-primary">Create Order</button>
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
