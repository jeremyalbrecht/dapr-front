<template>
  <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
    <div class="p-6">

    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  props: {
    order: Object,
  },
  data() {
    return {
      articles_ms_port: this.articles_ms_port,
      orders_ms_port: this.orders_ms_port,
      payment_ms_port: this.payment_ms_port
    }
  },
  methods: {
    async payOrder() {
      await axios.post('http://localhost:' + this.orders_ms_port + '/payOrder', {id: this.order.orderId});
      this.$emit('order-updated');
    },
  },
};
</script>

<style scoped>
/* Tailwind styles are already applied */
</style>
