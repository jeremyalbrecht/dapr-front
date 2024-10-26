<template>
  <ul>
    <li v-for="order in orders" :key="order.order_id" @click="selectOrder(order)" class="cursor-pointer">
      Order ID: {{ order.order_id }} - Quantity: {{ order.quantity }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    orders: Array,
  },
  methods: {
    selectOrder(order) {
      this.$emit('order-selected', order);
    },
  },
};
</script>
