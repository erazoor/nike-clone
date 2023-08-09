<script setup>
  import FilterTab from '../components/FilterTab.vue';
  import ProductList from '../components/ProductList.vue';
  import HeaderBand from '../components/HeaderBand.vue';
</script>

<template>
  <body class="content">
    <header class="header">
      <header-band
        :selectedFilters="{
          filteredProducts: filteredProducts,
          coloredProducts: coloredProducts,
        }"
        :currentProductDisplayed="getCurrentProductDisplayed()"
      />
    </header>
    <main class="main">
      <aside class="filter-tab">
        <filter-tab @check-color="updateDataByColor" @check-range="updateDataByRange"  @check-filter="updateDataByFilter" @check-sport="updateDataBySport"></filter-tab>
      </aside>
      <section class="product-list" v-if="displayProductsList">
        <product-list v-for="product in displayProductsList" :key="product.article" :productData="product"></product-list>
      </section>
    </main>
  </body>
</template>

<script>
  export default {
    name: 'HomeView',
    data() {
      return {
        filteredProducts: ['men', 'women', 'unisex'],
        rangedProducts: ['fifty', 'fiftytohundred', 'hundredtofifty', 'hundredfifty'],
        coloredProducts: [],
        sportProducts: ['basket', 'football', 'running'],
      }
    },
    components: {
      FilterTab,
      ProductList,
      HeaderBand,
    },
    computed: {
      displayProductsList() {
        return this.$store.getters['products/displayProducts'] ? this.$store.getters['products/displayProducts'].filter(product => {
          const productGender = product.sexe.toLowerCase();
          const productPrice = this.getNumberFromPrice(product.prix);
          const productSport = product.sport.toLowerCase();
          const colorArray = product.couleur.toLowerCase().split(' ').map(color => color.replace(',', ''));

          // Check if the product's gender matches the selected filters
          const genderFilterMatch =
            (this.filteredProducts.includes('men') && productGender.includes('homme')) ||
            (this.filteredProducts.includes('women') && productGender.includes('femme')) ||
            (this.filteredProducts.includes('unisex') && productGender.includes('mixte'));

          // Check if the product's price matches the selected filters
          const priceFilterMatch =
            (this.rangedProducts.includes('fifty') && productPrice < 50) ||
            (this.rangedProducts.includes('fiftytohundred') && productPrice >= 50 && productPrice < 100) ||
            (this.rangedProducts.includes('hundredtofifty') && productPrice >= 100 && productPrice < 150) ||
            (this.rangedProducts.includes('hundredfifty') && productPrice >= 150);

          // Check if the product's color matches the selected filters
          const colorFilterMatch = 
            (this.coloredProducts.length === 0) ||
            (colorArray.some(color => this.coloredProducts.includes(color)));

          // Check if the product's sport matches the selected filters
          const sportFilterMatch = 
            (this.sportProducts.length === 0) ||
            (this.sportProducts.some(sport => productSport.includes(sport)));

          if (this.sportProducts.length === 0) return false;

          // Return true only if all filters match
          return genderFilterMatch && priceFilterMatch && colorFilterMatch && sportFilterMatch;
        }) : '';
      },
    },
    methods: {
      updateDataByFilter(updatedOptions) {
        this.filteredProducts = updatedOptions;
      },
      updateDataByColor(updatedOptions) {
        this.coloredProducts = updatedOptions;
      },
      updateDataByRange(updatedOptions) {
        this.rangedProducts = updatedOptions;
      },
      updateDataBySport(updatedOptions) {
        this.sportProducts = updatedOptions;
      },
      getNumberFromPrice(price) {
        return parseFloat(price.slice(0, -2).replace(',', '.'));
      },
      getCurrentProductDisplayed() {
        return this.displayProductsList.length;
      },
    }
  }
</script>

<style scoped>
header {
  background-color: #fff;
  height: 80px;
  width: auto;
}

.main {
  display: flex;
  flex-direction: row;
}

.filter-tab {
  background-color: #fff;
  width: 15rem;
  height: auto;
  margin: 0 0 1em 10rem;
}

.product-list {
  background-color: #fff;
  width: 75%;
  height: auto;
  padding-right: 2.5rem;
  padding-left: 2.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1rem;
}

</style>
