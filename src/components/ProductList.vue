<template>
    <div>
        <ul class="product-card">
            <img :src="productData.imageUrl" :alt="displayProductArticle">
            <span>{{ displayProductArticle }}</span>
            <span>{{ getGenderLabel(displayProductGender) }}</span>
            <span>{{ getColors(displayProductColors) > 1 ? `${getColors(displayProductColors)} couleurs` : `${getColors(displayProductColors)} couleur` }}</span>
            <span>{{ displayProductPrice }}</span>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ProductList',
        props: ['productData'],
        data() {
            return {
                
            };
        },
        async created() {
            try {
                this.productData.imageUrl = await this.getImageUrl(this.productData.photo);
            } catch (error) {
                console.error("Error processing product data:", error);
            }
        },
        props: ['productData'],
        computed: {
            displayProductImage() {
                return this.productData.photo;
            },
            displayProductArticle() {
                return this.productData.article;
            },
            displayProductGender() {
                return this.productData.sexe;
            },
            displayProductColors() {
                return this.productData.couleur;
            },
            displayProductPrice() {
                return this.productData.prix;
            },
        }, 
        methods: {
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

            async getImageUrl(photo) {
                try {
                    const photoWithoutExtension = photo.replace(/\.[^.]+$/, ''); 
                    const imageModule = await import(`@/assets/images/products/webp/${photoWithoutExtension}.webp`)
                        .then((image) => image.default);
                    return imageModule;
                } catch (error) {
                    console.error(`Failed to load image for ${photo}`, error);
                    return ''; 
                }
            },
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
        height: 400px;
        margin: 10px;
    }

    .product-card img {
        width: 100px;
        height: 100px;
    }
</style>
