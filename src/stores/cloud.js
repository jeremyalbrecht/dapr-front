// src/stores/cloudStore.js
import { defineStore } from 'pinia';

export const useCloudStore = defineStore('cloud', {
    state: () => ({
        articles_ms_port: 18080, // Default to Azure
        orders_ms_port: 18081, // Default to Azure
        payment_ms_port: 15000, // Default to Azure
        selectedCloud: 'azure', // Default cloud provider
    }),
    actions: {
        selectCloud(cloud) {
            if (cloud === 'azure') {
                this.articles_ms_port = 18080;
                this.orders_ms_port = 18081;
                this.selectedCloud = 'azure';
            } else if (cloud === 'aws') {
                this.articles_ms_port = 28080;
                this.orders_ms_port = 28081;
                this.selectedCloud = 'aws';
            }
        },
    },
});
