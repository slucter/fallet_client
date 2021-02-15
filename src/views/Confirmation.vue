<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home">
                <div class="section-history-home">
                    <h1>Transfer To</h1>
                    <BoxInfoCard
                        :name="receiverUser.name"
                        :desc="receiverUser.phone"
                        :amount="''"
                        :dataHistory="''"
                        :thumb_p="receiverUser.image"
                        :dataUser="''"
                        :href="false"
                    />
                   <h1 style="margin: 10px 0 20px 0">Details</h1>
                    <span>
                        <h4>Amount</h4>
                        <h1>Rp. {{ confirmData.amount }}</h1>
                    </span>
                    <span>
                        <h4>Balance left</h4>
                        <h1>Rp. {{ userDataId.saldo - confirmData.amount }}</h1>
                    </span>
                    <span>
                        <h4>Date & Time</h4>
                        <h1>{{ dateNow }}</h1>
                    </span>
                    <span>
                        <h4>Notes</h4>
                        <h1>{{ confirmData.msg }}</h1>
                    </span>
                    <div class="btn-right">
                        <button @click="confirmNext">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import jwt from 'jsonwebtoken';
import moment from 'moment';
import ToolBarHome from '../components/small/ToolBarHome.vue';
import BoxInfoCard from '../components/small/BoxInfoCard.vue';

export default {
  name: 'Confrmation',
  components: {
    ToolBarHome,
    BoxInfoCard,
  },
  data() {
    return {
      cfrm: '',
      dataToken: '',
    };
  },
  computed: {
    dateNow() {
      return moment().format('LLL');
    },
    ...mapState('Auth', ['receiverUser', 'confirmData', 'userDataId']),
  },
  methods: {
    ...mapActions('Auth', ['getUserById']),
    ...mapMutations('Auth', ['CONFIRMATION_DATA']),
    confirmNext() {
      this.$dialogs.prompt('Input pin', { title: 'Last step transaction', okLabel: 'Confirm', size: 'sm' }).then(({ value }) => {
        const val = parseInt(value, 10);
        jwt.verify(localStorage.token, process.env.VUE_APP_JWTKEY, (err, tokens) => {
          this.dataToken = tokens;
          if (err) {
            alert('Jwt Error');
          }
          if (val === this.userDataId.pin) {
            const data = {
              sender_id: this.userDataId.id,
              receiver_id: this.receiverUser.id,
              msg: this.confirmData.msg,
              amount: this.confirmData.amount,
              type: 1,
            };
            this.$store.dispatch('Trx/sendMoney', { data, token: localStorage.token }).then((result) => {
              if (result.data === 'terkirim') {
                const confirm = {
                  amount: this.confirmData.amount,
                  msg: this.confirmData.msg,
                  status: 'success',
                };
                this.$store.dispatch('Auth/confirmTrx', confirm).catch((error) => console.log(error));
                this.CONFIRMATION_DATA(this.confirmData);
                this.$router.push('/home/transfer/status');
              } else {
                alert('error pas send duit');
              }
            });
          } else {
            const confirm = {
              amount: this.confirmData.amount,
              msg: this.confirmData.msg,
              status: 'failed',
            };
            this.$store.dispatch('Auth/confirmTrx', confirm).catch((error) => console.log(error));
            this.$router.push('/home/transfer/status');
          }
        });
      });
    },
  },
  // updated() {
  //   this.getUserById({ id: 43, token: localStorage.token });
  // },
  mounted() {
    if (this.confirmData === '') this.$router.push('/home/transfer');
    // this.getUserById({ id: this.dataToken.id, token: localStorage.token });
    this.$store.dispatch('Auth/getUserById', { id: this.userDataId.id, token: localStorage.token }).catch((error) => {
      console.log(error);
    });
  },
};
</script>

<style scoped>
@import '../../public/css/home.css'

</style>
