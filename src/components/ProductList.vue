<template>
    <div>
        <h1>Product List</h1>
        <ul>
            <li v-for="product in validProducts" :key="product.article" class="product-card">
                <img :src="product.imageUrl" :alt="product.article">
                <span>{{ product.article }}</span>
                <span>{{ getGenderLabel(product.sexe) }}</span>
                <span>{{ getColors(product.couleur) > 1 ? `${getColors(product.couleur)} couleurs` : `${getColors(product.couleur)} couleur` }}</span>
                <span>{{ product.prix }}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ProductList',
        computed: {
            displayProducts() {
                return this.$store.getters['products/displayProducts']
            },
            validProducts() {
                return this.displayProducts.filter(this.isProductValid);
            }
        },
        created() {
            this.validProducts.forEach(async (product) => {
                product.imageUrl = await this.getImageUrl(product.photo);
            });
        },
        methods: {
            async getImageUrl(photo) {
                try {
                    const photoWithoutExtension = photo.replace(/\.[^.]+$/, ''); 
                    const imageModule = await import(`@/assets/images/products/${photoWithoutExtension}.webp`)
                        .then((image) => image.default);
                    return imageModule;
                } catch (error) {
                    console.error(`Failed to load image for ${photo}`, error);
                    return ''; 
                }
            },
            getGenderLabel(sexe) {
                if (sexe === 'Homme') {
                    return 'Chaussure pour Homme';
                } else if (sexe === 'Femme') {
                    return 'Chaussure pour Femme';
                } else {
                    return 'Chaussure';
                }
            },
            getColors(couleur) {
                return couleur.split(',').length;
            },
            isProductValid(product) {
                return product.article && product.sexe && product.couleur && product.prix && product.photo;
            }
        }
    }
</script>
  
<style scoped>
    .product-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        border: 1px solid black;
        width: 200px;
        height: 200px;
        margin: 10px;
    }

    .product-card img {
        width: 100px;
        height: 100px;
    }
</style>
