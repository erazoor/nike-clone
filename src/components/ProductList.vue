<template>
    <ul class="product-card">
        <img :src="productData.imageUrl" :alt="displayProductArticle">
        <span class="article">{{ displayProductArticle }}</span>
        <span class="label">{{ getGenderLabel(displayProductGender) }}</span>
        <span class="label">{{ getColors(displayProductColors) > 1 ? `${getColors(displayProductColors)} couleurs` : `${getColors(displayProductColors)} couleur` }}</span>
        <span class="article">{{ displayProductPrice }}</span>
    </ul>
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
        align-items: flex-start;
        justify-content: center;
        padding: 0;
        width: 100%;
        height: auto;
        margin: 2.5rem 0;
    }

    .product-card span {
        margin: .15rem;
    }

    .article {
        padding-top: .5rem;
        font-size: 1rem;
        font-weight: 600;
    }

    .label {
        font-size: .85rem;
        font-weight: 400;
        opacity: .5;
    }

    .product-card img {
        width: 100%;
        height: auto;
    }

    @media screen and (min-width: 768px) {
        
    }

</style>
