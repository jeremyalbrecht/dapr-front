<template>
  <form @submit.prevent="addArticle" class="mb-6">
    <input v-model="id" type="text" placeholder="Id" class="input"/>
    <input v-model="name" type="text" placeholder="Article Name" class="input"/>
    <input v-model="price" type="text" placeholder="Price" class="input"/>
    <input v-model="picture" type="text" placeholder="Picture URL" class="input"/>
    <button type="submit" class="btn-primary">Add Article</button>
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
