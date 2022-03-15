
<template>
    <div class="row">
        <template v-for="product in products" :key="product">
            <ProductBox v-bind="product" />
        </template>
        <main class="container">
            <br />
            <h3>精選菜單</h3>
            <br />
            <!-- 1 -->
            <div class="d-lg-flex justify-content-sm-evenly">
                <div class="card leftCard" style="width: 18rem">
                    <img src="../../product/images/japanA5Buger.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">日本A5和牛起士堡</h5>
                        <p class="card-text">優惠價：＄195</p>
                    </div>
                    <div class="card-body">
                        <button
                            href="/product/productDetail01.html"
                            class="btn btn-outline-secondary"
                        >加入購物車</button>
                    </div>
                </div>
                <!-- 2 -->
                <div class="card" style="width: 18rem">
                    <img src="../../product/images/codfishBuger.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <h5 class="card-title">起司鱈魚堡</h5>
                        <p class="card-text">優惠價：＄105</p>
                    </div>
                    <div class="card-body">
                        <button href="#" class="btn btn-outline-secondary">加入購物車</button>
                    </div>
                </div>
                <!-- 3 -->
                <div class="card" style="width: 18rem">
                    <img
                        src="../../product/images/riceBuger.png"
                        class="card-img-top rice"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">海味炸蝦米堡</h5>
                        <p class="card-text">優惠價：＄105</p>
                    </div>
                    <div class="card-body">
                        <button href="#" class="btn btn-outline-secondary">加入購物車</button>
                    </div>
                </div>
            </div>
            <br />
            <!-- 4 -->
            <div class="d-lg-flex justify-content-evenly">
                <div class="card leftCard" style="width: 18rem">
                    <img
                        src="../../product/images/chicagoBuger.png"
                        class="card-img-top chicago"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">勁辣花生雞芝加哥堡</h5>
                        <p class="card-text">優惠價：＄115</p>
                    </div>
                    <div class="card-body">
                        <button href="#" class="btn btn-outline-secondary">加入購物車</button>
                    </div>
                </div>
                <!-- 5 -->
                <div class="card" style="width: 18rem">
                    <img
                        src="../../product/images/tunaEggBrioche.png"
                        class="card-img-top brioche"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">鮪魚蛋皇后堡</h5>
                        <p class="card-text">優惠價：＄115</p>
                    </div>
                    <div class="card-body">
                        <button href="#" class="btn btn-outline-secondary">加入購物車</button>
                    </div>
                </div>
                <!-- 6 -->
                <div class="card" style="width: 18rem">
                    <img
                        src="../../product/images/taroRedBeansBrioche.png"
                        class="card-img-top brioche"
                        alt="..."
                    />
                    <div class="card-body">
                        <h5 class="card-title">芋見紅豆皇后堡</h5>
                        <p class="card-text">優惠價：＄115</p>
                    </div>
                    <div class="card-body">
                        <button href="#" class="btn btn-outline-secondary">加入購物車</button>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>
<script>
import axios from "axios";
import ProductBox from "@/components/ProductBox.vue";

export default {
    components: {
        ProductBox,
    },
    data() {
        return {
            products: [],
            serverPath: this.$store.state.serverPath,
        };
    },
    mounted() {
        axios
            .get(`${this.serverPath}/products?user_id=1`)
            .then((response) => (this.products = response.data));
    },
};
</script>
<style scoped>
div.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 80%;
    margin: auto;
}
img {
    height: 45vh;
    width: 100%;
    padding-top: 40px;
    padding-bottom: 40px;
    background-size: cover;
    background-position: center center;
}
.chicago {
    padding-top: 55px;
    padding-bottom: 55px;
}
.brioche {
    padding-left: 30px;
    padding-right: 30px;
}
.rice {
    padding-top: 55px;
    padding-bottom: 55px;
}
.title-f:after {
    position: absolute;
    top: calc(50% - 7px);
    left: -10px;
    width: 14px;
    height: 14px;
    content: "";
    border-radius: 50%;
    background: #fff;
}
.card:hover {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(255, 255, 255) 9px 9px 18px 0px,
        rgb(255, 255, 255) -9px -9px 18px 0px;
    -webkit-box-shadow: rgba(163, 177, 198, 0.5) 20px 20px 30px 20px,
        rgb(255, 255, 255) -9px -9px 18px -9px;
    border-radius: 17px;
    -webkit-border-radius: 17px;
}
.leftCard:hover {
    background-color: rgb(255, 255, 255);
    box-shadow: rgb(255, 255, 255) 9px 9px 18px 0px,
        rgb(255, 255, 255) -9px -9px 18px 0px;
    -webkit-box-shadow: rgba(163, 177, 198, 0.5) 0px 20px 30px 20px,
        rgb(255, 255, 255) -9px -9px 18px -9px;
    border-radius: 17px;
    -webkit-border-radius: 17px;
}
</style>