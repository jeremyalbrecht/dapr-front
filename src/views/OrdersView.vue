<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Manage Orders</h2>
    <OrderForm @order-created="fetchOrders"/>
    <OrderList :orders="orders" @order-selected="selectOrder"/>
    <OrderDetails v-if="selectedOrder" :order="selectedOrder"/>
  </div>
</template>

<script>
import OrderForm from '../components/OrderForm.vue';
import OrderList from '../components/OrderList.vue';
import OrderDetails from '../components/OrderDetails.vue';
import { ref, onMounted } from 'vue';
import axios from 'axios';

export default {
  components: { OrderForm, OrderList, OrderDetails },
  setup() {
    const orders = ref([]);
    const selectedOrder = ref(null);

    const fetchOrders = async () => {
      const response = await axios.get('http://localhost:8080/api/order/get');
      orders.value = response.data;
    };

    const selectOrder = (order) => {
      selectedOrder.value = order;
    };

    onMounted(fetchOrders);

    return {orders, selectedOrder, fetchOrders, selectOrder};
  },
};
</script>
