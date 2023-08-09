<script setup>
    const colors = [
        { id: 'pourpre', label: 'Pourpre' },
        { id: 'noir', label: 'Noir' },
        { id: 'rouge', label: 'Rouge' },
        { id: 'orange', label: 'Orange' },
        { id: 'bleu', label: 'Bleu' },
        { id: 'blanc', label: 'Blanc' },
        { id: 'marron', label: 'Marron' },
        { id: 'vert', label: 'Vert' },
        { id: 'jaune', label: 'Jaune' },
        { id: 'gris', label: 'Gris' },
        { id: 'multicolore', label: 'Multicolore' },
    ];

    const genders = [
        { id: 'men', label: 'Hommes' },
        { id: 'women', label: 'Femmes' },
        { id: 'unisex', label: 'Mixte' },
    ];

    const priceRanges = [
        { id: 'fifty', label: 'Moins €50' },
        { id: 'fiftytohundred', label: '€50 - €100' },
        { id: 'hundredtofifty', label: '€100 - €150' },
        { id: 'hundredfifty', label: 'Plus de €150' },
    ];

    const sports = [
        { id: 'basket', label: 'Basket' },
        { id: 'football', label: 'Football' },
        { id: 'running', label: 'Running' },
    ];
</script>

<template>
    <div>
        <hr>
        <div class="head-title">
            <h2 class="title">{{ countSelectedFilters > 1 ? `Sexes (${countSelectedFilters})` : `Sexe (${countSelectedFilters})` }}</h2>
            <img src="../assets/svgs/chevron.svg" alt="chevron" class="chevron" />
        </div>
        <div v-for="gender in genders" :key="gender.id">
            <input
                type="checkbox"
                :name="gender.id"
                @change="checkFilters($event)"
                :id="gender.id"
                :checked="checkedFilterValues.includes(gender.id)"
            />
            <span>{{ gender.label }}</span>
        </div>
    </div>
    <div>
        <hr>
        <div class="head-title">
            <h2 class="title">Rechercher par prix ({{ countSelectedRanges }})</h2>
            <img src="../assets/svgs/chevron.svg" alt="chevron" class="chevron" />
        </div>
        <div v-for="range in priceRanges" :key="range.id">
            <input
                type="checkbox"
                :name="range.id"
                @change="checkRanges($event)"
                :id="range.id"
                :checked="checkedRangeValues.includes(range.id)"
            />
            <span>{{ range.label }}</span>
        </div>
    </div>
    <div>
        <hr>
        <div class="head-title">
            <h2 class="title">{{ countSelectedColors > 1 ? `Couleurs (${countSelectedColors})` : `Couleur (${countSelectedColors})` }}</h2>
            <img src="../assets/svgs/chevron.svg" alt="chevron" class="chevron" />
        </div>
        <div>
            <div v-for="(color, index) in colors" :key="index">
                <input
                    type="checkbox"
                    :name="color.id"
                    @change="checkColors($event)"
                    :id="color.id"
                    :checked="checkedColorValues.includes(color.id)"
                />
                <span>{{ color.label }}</span>
            </div>
        </div>
    </div>
    <div>
        <hr>
        <div class="head-title">
            <h2 class="title">{{ countSelectedSports > 1 ? `Sports (${countSelectedSports})` : `Sport (${countSelectedSports})` }}</h2>
            <img src="../assets/svgs/chevron.svg" alt="chevron" class="chevron" />
        </div>
        <div v-for="sport in sports" :key="sport.id">
            <input
                type="checkbox"
                :name="sport.id"
                @change="checkSports($event)"
                :id="sport.id"
                :checked="checkedSportValues.includes(sport.id)"
            />
            <span>{{ sport.label }}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FilterTab',
        emits: ['check-filter', 'check-range', 'check-color', 'check-sport'],
        data() {
            return {
                checkedFilterValues: ["men", "women", "unisex"],
                checkedRangeValues: ['fifty', 'fiftytohundred', 'hundredtofifty', 'hundredfifty'],
                checkedColorValues: [],
                checkedSportValues: ['basket', 'football', 'running'],
            }
        },
        methods: {
            checkFilters(event) {
                if(event.target.checked)
                    this.checkedFilterValues.push(event.target.id);
                else
                    this.checkedFilterValues.splice(this.checkedFilterValues.indexOf(event.target.id), 1);

                this.$emit('check-filter', this.checkedFilterValues);
            },
            checkRanges(event) {
                if(event.target.checked)
                    this.checkedRangeValues.push(event.target.id);
                else
                    this.checkedRangeValues.splice(this.checkedRangeValues.indexOf(event.target.id), 1);

                this.$emit('check-range', this.checkedRangeValues);
            },
            checkColors(event) {
                if(event.target.checked)
                    this.checkedColorValues.push(event.target.id);
                else
                    this.checkedColorValues.splice(this.checkedColorValues.indexOf(event.target.id), 1);

                this.$emit('check-color', this.checkedColorValues);
            },
            checkSports(event) {
                if(event.target.checked)
                    this.checkedSportValues.push(event.target.id);
                else
                    this.checkedSportValues.splice(this.checkedSportValues.indexOf(event.target.id), 1);

                this.$emit('check-sport', this.checkedSportValues);
            },
        },
        computed: {
            countSelectedFilters() {
                return this.checkedFilterValues.length;
            },
            countSelectedRanges() {
                return this.checkedRangeValues.length;
            },
            countSelectedColors() {
                return this.checkedColorValues.length;
            },
            countSelectedSports() {
                return this.checkedSportValues.length;
            }
        },
    }
</script>

<style scoped>
.head-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
}

hr {
    opacity: .5;
    margin: 1rem 0;
}

.title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0;
}

.chevron {
    rotate: -90deg;
}

input[type='checkbox'] {
    margin-right: 5px;
}

input[type='checkbox']:checked {
    accent-color: #111111;
}

</style>