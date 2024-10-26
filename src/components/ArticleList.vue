<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
    <div v-for="article in articles" :key="article.articleId" class="p-4 bg-white shadow rounded">
      <img :src="article.picture" alt="Article Image" class="w-full h-32 object-cover mb-2"/>
      <h3 class="text-lg font-bold">({{ article.articleId }}) {{ article.name }}</h3>
      <p>Price: ${{ article.price }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    articles: Array,
  },
};
</script>
