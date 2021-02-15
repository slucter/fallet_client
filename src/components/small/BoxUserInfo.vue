<template>
  <div class="box-user-info">
    <span>
      <p>Balance</p>
      <h1>Rp.
      <ICountUp
      :delay="delay"
      :endVal="0"
      :options="options"
      @ready="onReady"
      ref="countup"
      />
      <i class="fas fa-sync-alt" @click="reloadSaldo"></i></h1>
      <p>{{ phone === '' ? 'Please set your number !' : phone}}</p>
    </span>
    <div class="button-section">
      <button class="mb-15">
        <i class="fas fa-arrow-up"></i>
        <router-link to="/home/transfer">Transfer</router-link>
      </button>
      <button>
        <i class="fas fa-plus"></i>
        <router-link to="/home/topup">Top Up</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import jwt from 'jsonwebtoken';
import ICountUp from 'vue-countup-v2';

export default {
  name: 'Boxuserinfo',
  props: ['balance', 'phone'],
  components: {
    ICountUp,
  },
  data() {
    return {
      delay: 1000,
      options: {
        useEasing: true,
        useGrouping: true,
        separator: ',',
        decimal: '.',
        prefix: '',
        suffix: '',
      },
      dataToken: '',
    };
  },
  methods: {
    ...mapActions('Auth', ['getUserById']),
    onReady(instance) {
      instance.update(this.balance);
    },
    reloadSaldo() {
      this.getUserById({ id: this.dataToken.id, token: localStorage.token }).catch((error) => {
        console.log(error);
      });
      this.$refs.countup.instance.update(this.getUserById.saldo);
    },
  },
  mounted() {
    jwt.verify(localStorage.token, process.env.VUE_APP_JWTKEY, (err, result) => {
      if (err) {
        // alert('Network Error [Dashboard]');
      } else {
        this.dataToken = result;
        console.log(result);
      }
    });
  },
};
</script>

<style scoped>
.button-section button a{
  text-decoration: none !important;
  color: #fff!important;
}
h1 i {
  font-size: 18px!important;
  cursor: pointer;
  color: rgba(255,255,255,.6);
}
</style>
