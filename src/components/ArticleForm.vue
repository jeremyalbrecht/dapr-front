<template>
  <form @submit.prevent="addArticle" class="mb-6 flex align-bottom flex-wrap">

    <div class="m-2 w-56 flex-shrink-0">

      <label for="id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Id</label>
      <input id="id" v-model="id" type="text" placeholder="Id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <div class="m-2 w-56 flex-shrink-0">

      <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Article Name</label>
      <input id="name" v-model="name" type="text" placeholder="Article Name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <div class="m-2 w-56 flex-shrink-0">

      <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
      <input id="price" v-model="price" type="text" placeholder="Price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>
    <div class="m-2 w-56 flex-shrink-0">

      <label for="picture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture URL</label>
      <input id="picture" v-model="picture" type="text" placeholder="Picture URL" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
    </div>

    <div class="m-2 w-56 flex-shrink-0">
      <div class="mb-2">&nbsp;</div>
      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add Article</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      id: '',
      name: '',
      price: '',
      picture: '',
    };
  },
  methods: {
    async addArticle() {
      await axios.post('http://localhost:8080/api/article/add', [{
        articleId: this.id,
        name: this.name,
        price: this.price,
        picture: this.picture,
      }]);
      this.$emit('article-added');
      this.id = '';
      this.name = '';
      this.price = '';
      this.picture = '';
    },
  },
};
</script>
