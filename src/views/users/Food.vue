<template>
    <div class="menu">
        <div class="menu__category" v-for="category in sortedCategories()" :key="category.id">
            <div class="menu__title-container">
                <span class="menu__title">{{category.name}}</span>
                <span class="menu__subtitle" v-if="category.desc">{{ category.desc }}</span>
            </div>
            <div class="menu__cards">
                <MenuCard v-for="food in sortCategory(category.name)" :key="food.id" :food="food"/>
            </div>
            <div class="menu__unavailable" v-if="!checkAvailability(category.name)">
                <span class="menu__unavailable__title">Curently unavailable.</span>
                <span class="menu__unavailable__subtitle">We're sorry for the inconvenience, you can check out our other items.</span>
            </div>
        </div>
    </div>
</template>

<script>
import MenuCard from '@/components/user/MenuCard.vue';
import { mapGetters } from 'vuex';
import axios from 'axios';

export default {
    title: 'Menu - Foods 🍽',
    data() {
        return {
            foodData: []
        };
    },
    async mounted() {
        await axios
            .get('https://sprxme-fullmoon.herokuapp.com/api/foods')
            .then(res => {
                const data = res.data.filter((data) => {
                    return data.type === 'food'
                })
                this.foodData = data
            })
            console.log(this.foodData)
    },
    methods:{
        sortCategory: function(category){
            return this.foodData.filter(function(food){
                return food.category == category;
            })
        },
        checkAvailability(categoryName) {
            return this.allFoods.some(drink => {
                return drink.category === categoryName
            })
        },
        sortedCategories(){
            return [...this.allFoodCategories].sort((a, b) => {
                return a.index - b.index
            })
        }
    },
    components: {
        MenuCard
    },
    computed: {
        ...mapGetters(['allFoods', 'allFoodCategories'])
    }
}
</script>

<style lang="scss" scoped>
@import "@/styles/menu.scss";
</style>