<script setup>
import slideNews from "../components/slideNews.vue";
import groupNews from "../components/groupNews.vue";
</script>

<template>
  <main>
    <div>
      <slideNews />
    </div>
    <div class="mt-5">
      <div>New & Activity</div>
      <div>
        <groupNews/>
      </div>
    </div>
  </main>
</template>
