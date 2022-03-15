<template>
<div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid row">
                <router-link to="/Home" class="nav-brand col-md-3 d-flex justify-content-center">
                    <img src="./images/bugerLogo.svg" alt="">
                </router-link>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto  mb-lg-0 ms-4 d-flex justify-content-center">
                        <li class="nav-item">
                            <router-link to="/Home" class="nav-link">首頁</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/products" class="nav-link">產品列表</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/checkout" class="nav-link">結帳(共有 {{ currentQuantity }} 個商品)</router-link >
                        </li>
                        <li class="nav-item">
                            <router-link to="/register" class="nav-link">會員註冊</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/login" class="nav-link">會員登入</router-link>
                        </li>
                    </ul>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>
</div>
</template>
<script>
export default {
    computed:{
        currentQuantity(){
            return this.$store.getters.currentQuantity
        }
    }
}
</script>

<style scoped>
    nav{
        padding: 0rem;
        margin: 0.25rem;
        text-align: center;
    }
    /* #nav a{
        font-weight: bold;
        color: #2c3e50;
    } */
    #nav a.router-link-exact-active{
        color: #42b983;
    } 
    img{
        width: 200px;
        height: 80px;
        padding: 0rem;
        margin: 0rem;
    }
</style>