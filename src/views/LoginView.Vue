<template>
  <div class="Login">
    <div class="container">
      <form class="row">
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">Email</label>
          <input type="email" class="form-control" id="inputEmail4" />
        </div>
        <div class="col-md-6">
          <label for="inputPassword4" class="form-label">Password</label>
          <input type="password" class="form-control" id="inputPassword4" />
        </div>
        <div class="col-12">
          <button type="submit" class="btn btn btn-outline-secondary">
            Sign in
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.Login {
  flex-direction: flex;
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  justify-content: center;
  width: 500px;
  height: 500px;
}
</style>