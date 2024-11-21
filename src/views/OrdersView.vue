<template>
  <div>
    <h2 class="text-2xl font-bold mb-4 text-center">
      Manage Orders
      <span v-if="cloudStore.orders_ms_port === 18081" class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">Azure</span>
      <span v-else-if="cloudStore.orders_ms_port === 28081" class="bg-orange-100 text-orange-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">AWS</span>
    </h2>

    <div class="text-center text-red-500" v-if="!orders.length">No Orders yet!</div>

    <!-- Order Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      <div
          v-for="order in orders"
          :key="order.orderId"
          class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-4">
        <h3 class="text-xl font-semibold inline-block text-gray-900">Order Details</h3><p class="ml-3 inline-block">({{ order.orderId }})</p>
        <div class="mt-4 text-gray-700">
          <p><strong>Quantity:</strong> {{ order.quantity }}</p>
          <p><strong>Article IDs:</strong> {{ order.articleIds.join(', ') }}</p>
        </div>
        <div class="mt-6 flex space-x-4">
          <!-- Conditionally render the button only if payment is not successful -->
          <button
              v-if="!order.paid"
              @click="payOrder(order.orderId)"
              :class="{
              'flex items-center px-4 py-2 rounded-lg shadow-md focus:outline-none': true,
              'bg-blue-500 text-white hover:bg-blue-600': cloudStore.payment_ms_port === 15000,
              'bg-orange-500 hover:bg-orange-600': cloudStore.payment_ms_port === 25000,
            }">
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M8.67188 14.3298C8.67188 15.6198 9.66188 16.6598 10.8919 16.6598H13.4019C14.4719 16.6598 15.3419 15.7498 15.3419 14.6298C15.3419 13.4098 14.8119 12.9798 14.0219 12.6998L9.99187 11.2998C9.20187 11.0198 8.67188 10.5898 8.67188 9.36984C8.67188 8.24984 9.54187 7.33984 10.6119 7.33984H13.1219C14.3519 7.33984 15.3419 8.37984 15.3419 9.66984" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 6V18" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            Pay Order
          </button>
          <!-- Show 'Paid' text if the order is already paid -->
          <span v-else class="text-green-500 font-medium">Paid</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {mapStores} from "pinia";
import {useCloudStore} from "@/stores/cloud.js";

export default {
  computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
    ...mapStores(useCloudStore)
  },
  setup() {
    const orders = ref([]);
    const selectedOrder = ref(null);

    const fetchOrders = async () => {
      const response = await axios.get('http://localhost:' + this.cloudStore.articlesMsPort + '/api/order/get');
      orders.value = response.data;
    };

    const selectOrder = (order) => {
      selectedOrder.value = order;
    };

    onMounted(fetchOrders);

    return {orders, selectedOrder, fetchOrders, selectOrder};
  },
  methods: {
    async payOrder(id) {
      try {
        const response = await axios.post('http://localhost:' + this.cloudStore.orders_ms_port + '/payOrder', {id: id});
        if (response.data.success) {
          // Mark the order as paid
          const order = this.orders.find(o => o.orderId === id);
          if (order) {
            order.paid = true;
          }
          this.$emit('order-updated');
        } else {
          console.error('Payment failed:', response.data);
        }
      } catch (error) {
        console.error('Error processing payment:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Additional scoped styles for customizations */
</style>
