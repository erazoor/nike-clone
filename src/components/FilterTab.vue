<script setup>

</script>

<template>
    <div>
        <hr>
        <div class="head-title">
            <h2 class="title">{{ countSelectedFilters > 1 ? `Sexes (${countSelectedFilters})` : `Sexe (${countSelectedFilters})` }}</h2>
            <img src="../assets/svgs/chevron.svg" alt="chevron" class="chevron" />
        </div>
        <div>
            <input type="checkbox" name="men" @change="checkFilters($event)" id="men" checked>
            <span>Hommes</span>
        </div>
        <div>
            <input type="checkbox" name="women" @change="checkFilters($event)" id="women" checked>
            <span>Femmes</span>
        </div>
        <div>
            <input type="checkbox" name="unisex" @change="checkFilters($event)" id="unisex" checked>
            <span>Mixte</span>
        </div>
    </div>
    <div>
        <hr>
        <div class="head-title">
            <h2 class="title">Rechercher par prix ({{ countSelectedRanges }})</h2>
            <img src="../assets/svgs/chevron.svg" alt="chevron" class="chevron" />
        </div>
        <div>
            <input type="checkbox" name="fifty" @change="checkRanges($event)" id="fifty" checked>
            <span>Moins €50</span>
        </div>
        <div>
            <input type="checkbox" name="fiftytohundred" @change="checkRanges($event)" id="fiftytohundred" checked>
            <span>€50 - €100</span>
        </div>
        <div>
            <input type="checkbox" name="hundredtofifty" @change="checkRanges($event)" id="hundredtofifty" checked>
            <span>€100 - €150</span>
        </div>
        <div>
            <input type="checkbox" name="hundredfifty" @change="checkRanges($event)" id="hundredfifty" checked>
            <span>Plus de €150</span>
        </div>
    </div>
    <div>
        <hr>
        <div class="head-title">
            <h2 class="title">{{ countSelectedColors > 1 ? `Couleurs (${countSelectedColors})` : `Couleur (${countSelectedColors})` }}</h2>
            <img src="../assets/svgs/chevron.svg" alt="chevron" class="chevron" />
        </div>
        <div>
            <input type="checkbox" name="pourpre" @change="checkColors($event)" id="pourpre">
            <span>Pourpre</span>
        </div>
        <div>
            <input type="checkbox" name="noir" @change="checkColors($event)" id="noir">
            <span>Noir</span>
        </div>
        <div>
            <input type="checkbox" name="rouge" @change="checkColors($event)" id="rouge">
            <span>Rouge</span>
        </div>
        <div>
            <input type="checkbox" name="orange" @change="checkColors($event)" id="orange">
            <span>Orange</span>
        </div>
        <div>
            <input type="checkbox" name="bleu" @change="checkColors($event)" id="bleu">
            <span>Bleu</span>
        </div>
        <div>
            <input type="checkbox" name="blanc" @change="checkColors($event)" id="blanc">
            <span>Blanc</span>
        </div>
        <div>
            <input type="checkbox" name="marron" @change="checkColors($event)" id="marron">
            <span>Marron</span>
        </div>
        <div>
            <input type="checkbox" name="vert" @change="checkColors($event)" id="vert">
            <span>Vert</span>
        </div>
        <div>
            <input type="checkbox" name="jaune" @change="checkColors($event)" id="jaune">
            <span>Jaune</span>
        </div>
        <div>
            <input type="checkbox" name="gris" @change="checkColors($event)" id="gris">
            <span>Gris</span>
        </div>
        <div>
            <input type="checkbox" name="multicolore" @change="checkColors($event)" id="multicolore">
            <span>Multicolore</span>
        </div>
    </div>
    <div>
        <hr>
        <div class="head-title">
            <h2 class="title">{{ countSelectedSports > 1 ? `Sports (${countSelectedSports})` : `Sport (${countSelectedSports})` }}</h2>
            <img src="../assets/svgs/chevron.svg" alt="chevron" class="chevron" />
        </div>
        <div>
            <input type="checkbox" name="basket" @change="checkSports($event)" id="basket" checked>
            <span>Basket</span>
        </div>
        <div>
            <input type="checkbox" name="football" @change="checkSports($event)" id="football" checked>
            <span>Football</span>
        </div>
        <div>
            <input type="checkbox" name="running" @change="checkSports($event)" id="running" checked>
            <span>Running</span>
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