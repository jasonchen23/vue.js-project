<template>
  <div class="information row d-flex align-items-end">
    <div class="col-2"></div>
    <div class="col-lg-2 text-center">
      <img src="./images/bugerLogo.svg" alt="" class="logo" />
    </div>
    <div class="info col-lg-2 mb-lg-2 text-lg-start text-center">
      <h6><span>Company</span> 漢堡女王股份有限公司 </h6>
      <h6><span>Telephone</span> 00-360-3000</h6>
      <h6><span>Service Time</span> 09:00 - 17:00</h6>
      <h6><span>Add</span> 台北市中正區龍山街206號</h6>
      <h6><span>Email</span> bugerqueen@dmail.com</h6>
    </div>
    <div class="col-lg-4 text-center mb-lg-2 join">
      <i><span>加盟專線</span> 0800-002-003</i>
      &nbsp;
      <logo> 
        <a href="https://zh-tw.facebook.com/"
          ><img class="infoLink" src="./images/facebook.svg"
        /></a>
        &nbsp;
        <a href="https://www.instagram.com"
          ><img class="infoLink" src="./images/instagram.svg" alt=""
        /></a>
      </logo>
    </div>
    <div class="col-lg-2"></div>
  </div>
</template>
<style scoped>

.logo {
  width: 170px;
  height: 170px;
}

span {
  color: rgb(133, 129, 129);
}

h6 {
  font-size: 14px;
}
.infoLink {
  width: 30px;
  height: 30px;
  padding: 0px;
}
.join{
  display: flex;
  flex-direction: column-reverse;
}
</style>