<template>
    <div class="row">
        <template v-for="product in products" :key="product">
            <ProductBox v-bind="product" />
        </template>
        <main class="container">
        <br>
        <h3>精選菜單</h3>
        <br>
        <!-- 1 -->
        <div class="d-lg-flex justify-content-sm-evenly ">
            <div class="card " style="width: 18rem;">
                <img src="images/japanA5Buger.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">日本A5和牛起司堡</h5>
                    <p class="card-text">優惠價：＄195</p>
                </div>
                <div class="card-body">
                    <a href="/product/productDetail01.html" class="btn btn-primary">查看詳情！</a>
                </div>
            </div>
            <!-- 2 -->
            <div class="card" style="width: 18rem;">
                <img src="images/codfishBuger.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">起司鱈魚堡</h5>
                    <p class="card-text">優惠價：＄105</p>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">查看詳情！</a>
                </div>
            </div>
            <!-- 3 -->
            <div class="card" style="width: 18rem;">
                <img src="images/riceBuger.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">海味炸蝦米堡</h5>
                    <p class="card-text">優惠價：＄105</p>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">查看詳情！</a>
                </div>
            </div>
        </div>
        <br>
        <!-- 4 -->
        <div class="d-lg-flex justify-content-evenly">
            <div class="card" style="width: 18rem;">
                <img src="images/chicagoBuger.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">勁辣花生雞芝加哥堡</h5>
                    <p class="card-text">優惠價：＄115</p>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">查看詳情！</a>
                </div>
            </div>
            <!-- 5 -->
            <div class="card" style="width: 18rem;">
                <img src="images/tunaEggBrioche.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">鮪魚蛋皇后堡</h5>
                    <p class="card-text">優惠價：＄115</p>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">查看詳情！</a>
                </div>
            </div>
            <!-- 6 -->
            <div class="card" style="width: 18rem;">
                <img src="images/taroRedBeansBrioche.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">芋見紅豆皇后堡</h5>
                    <p class="card-text">優惠價：＄115</p>
                </div>
                <div class="card-body">
                    <a href="#" class="btn btn-primary">查看詳情！</a>
                </div>
            </div>
        </div>
    </main>
    </div>
</template>
<script>
import axios from 'axios'
import ProductBox from '@/components/ProductBox.vue'

export default {
    components:{
        ProductBox
    },
    data(){
        return{
            products:[],
            serverPath: this.$store.state.serverPath
        }
    },
    mounted(){
        axios.get(`${this.serverPath}/products?user_id=1`)
            .then(response => this.products = response.data)
    },
}
</script>
<style scoped>
    div.row{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        margin: auto;
    }
</style>