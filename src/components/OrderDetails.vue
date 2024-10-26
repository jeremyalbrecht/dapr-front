<template>
  <div>
    <h3>Order Details</h3>
    <p>Order ID: {{ order.order_id }}</p>
    <p>Quantity: {{ order.quantity }}</p>
    <p>Article IDs: {{ order.article_ids.join(', ') }}</p>
    <button @click="sendOrder" class="btn-secondary">Send Order</button>
    <button @click="payOrder" class="btn-primary">Pay Order</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    order: Object,
  },
  methods: {
    async sendOrder() {
      await axios.post('http://localhost:8080/api/order/send', { id: this.order.order_id });
      this.$emit('order-updated');
    },
    async payOrder() {
      await axios.post('http://localhost:8081/payOrder', { id: this.order.order_id });
      this.$emit('order-updated');
    },
  },
};
</script>
