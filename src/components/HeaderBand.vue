<template>
    <div class="header">
        <span v-if="selectedFilters.filteredProducts.length || selectedFilters.coloredProducts.length">
            Nouveautés {{ 
                    formatGenderFilters(selectedFilters.filteredProducts).join(', ')
                }}
                {{ 
                    selectedFilters.coloredProducts.join(', ') 
                }}
                ({{ 
                    currentProductDisplayed
                }})
        </span>
    </div>
</template>
  
<script>
    export default {
        name: 'HeaderBand',
        props: {
            selectedFilters: Object,
            currentProductDisplayed: String,
        },
        methods: {
            formatGenderFilters(filters) {
                return filters.map(filter => {
                    switch (filter) {
                    case 'men':
                        return 'Hommes';
                    case 'women':
                        return 'Femmes';
                    case 'unisex':
                        return 'Mixte';
                    default:
                        return '';
                    }
                });
            },
        },
    };
</script>
  
<style scoped>
.header {
    padding: 10px;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 0 0 10rem;
}
</style>
  