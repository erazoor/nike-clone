<template>
    <div class="header">
        <span v-if="selectedFilters.filteredProducts.length.toString || selectedFilters.coloredProducts.length">
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
        <img src="../assets/svgs/burger.svg" class="burger" alt="Burger" />
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

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.burger {
    display: none;
}

@media screen and (max-width: 768px) {
    .header {
        margin: 0 0 0 2.5rem;
    }

    .burger {
        display: block;
        width: 1.5rem;
        height: 1.5rem;
        margin: 0 2.5rem 0 0;
    }
}
</style>
  