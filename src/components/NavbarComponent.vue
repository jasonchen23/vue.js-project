<template>
<div id="nav">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
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
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn btn-outline-secondary" type="submit">Search</button>
                    </form>
                </div>
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
    /* #nav{
        padding:30px;
        text-align: center;
        background: beige;
    }
    #nav a{
        font-weight: bold;
        color: #2c3e50;
    }
    #nav a.router-link-exact-active{
        color: #42b983;
    } */
</style>