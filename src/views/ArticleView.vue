<template>
  <div>
    <h2 class="text-2xl font-bold mb-4">Manage Articles</h2>
    <ArticleForm @article-added="fetchArticles"/>
    <ArticleList :articles="articles"/>
  </div>
</template>

<script>
import ArticleForm from '../components/ArticleForm.vue';
import ArticleList from '../components/ArticleList.vue';
import {ref, onMounted} from 'vue';
import axios from 'axios';

export default {
  components: {ArticleForm, ArticleList},
  setup() {
    const articles = ref([]);

    const fetchArticles = async () => {
      const response = await axios.get('http://localhost:8080/api/article/getAll');
      articles.value = response.data;
    };

    onMounted(fetchArticles);

    return {articles, fetchArticles};
  },
};
</script>
