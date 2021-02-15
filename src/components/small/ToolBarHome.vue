<template>
  <div class="toolbar-home">
    <div class="tool-top">
      <div class="menu-list-tool"
      :class="{ 'active' : active === 'db' }"
      @click="addActive('db')"
      >
        <i class="fas fa-th-large"></i>
        <router-link to="/home/dashboard">Dashboard</router-link>
      </div>
      <div class="menu-list-tool"
      :class="{ 'active' : active === 'tf' }"
      @click="addActive('tf')"
      >
        <i class="fas fa-arrow-up"></i>
        <router-link to="/home/transfer">Transfer</router-link>
      </div>
      <div class="menu-list-tool"
      :class="{ 'active' : active === 'tu' }"
      @click="addActive('tu')"
      >
        <i class="fas fa-plus"></i>
        <router-link to="/home/topup">Top Up</router-link>
      </div>
      <div class="menu-list-tool"
      :class="{ 'active' : active === 'pf' }"
      @click="addActive('pf')"
      >
        <i class="far fa-user"></i>
        <router-link to="/home/profile">Profile</router-link>
      </div>
    </div>
    <div class="tool-bottom">
      <div class="menu-list-tool" style="cursor: pointer">
        <i style="color: #d10505" class="fas fa-sign-out-alt"></i>
        <a style="color: #d10505" @click="logout">Log Out</a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Toolbar',
  computed: {
    ...mapState('Auth', ['active']),
  },
  methods: {
    ...mapMutations('Auth', ['ACTIVE_CLASS']),
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('idFalletUser');
      this.$router.go();
    },
    addActive(a) {
      this.ACTIVE_CLASS(a);
    },
  },
  mounted() {
    // const paramsRoute = this.$route.path;
    // const cek = paramsRoute.match('dashboard');
    // if (paramsRoute.match('/dashboard/g')) {
    //   alert(1);
    // } else {
    //   alert(2);
    // }
  },
};
</script>

<style scoped>
</style>
