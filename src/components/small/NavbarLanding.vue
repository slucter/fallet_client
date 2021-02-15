<template>
    <nav>
      <div class="my-container space-between">
        <div class="logo-nav">
          <h4>Fallet</h4>
        </div>
        <ul class="uL" :class="{ 'dnone' :  key_verif}">
          <li><router-link to="/auth/signin">Login</router-link></li>
          <li>
            <router-link
              to="/auth/signup"
              style="
                background-color: #fff;
                border: 1px solid #fff;
                color: #6379f4;
              "
              >Signup</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  name: 'NavbarLanding',
  data() {
    return {
      key_verif: false,
    };
  },
  mounted() {
    if (localStorage.key_verif) {
      this.key_verif = true;
    } else {
      this.key_verif = false;
    }
  },
};
</script>

<style scoped>
.dnone {
  display: none!important;
}
.navSticky{
    background: #6379F4!important;
    transition: 1s;
    height: 95px!important;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, .30)!important;
}

.navSticky .my-container .logo-nav h4 {
    color: #fff!important;
}
</style>
