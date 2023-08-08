<script setup>
import FilterTav from '../components/FilterTav.vue';
import ProductList from '../components/ProductList.vue';
import HeaderBand from '../components/HeaderBand.vue';
</script>

<template>
  <header>
    <HeaderBand />
  </header>
  <main>
    <aside>
      <FilterTav />
    </aside>
    <section id="product-list">
      <ProductList />
    </section>
  </main>
</template>

<style scoped>
header {
  background-color: blue;
  height: 80px;
  width: auto;
}

main {
  display: flex;
  flex-direction: row;
}

aside {
  background-color: red;
  width: 20%;
  height: auto;
}

section {
  background-color: green;
  width: 80%;
  height: auto;
}
</style>