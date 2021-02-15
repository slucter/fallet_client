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
                        :thumb_p="receiverUser.image"
                        :dataHistory="''"
                        :dataUser="''"
                        :href="false"
                    />
                    <h4>
                        Type the amount you want to transfer and then<br>
                        press continue to the next steps.
                    </h4>
                    <form @submit.prevent="submitSend"
                    class="home-form flex-column align-center" style="margin-top: 50px;">
                        <input type="number" placeholder="0,00" v-model="amountSend">
                        <h3 class="m50px">Rp.{{ userDataId.saldo }} Available</h3>
                        <input type="text" placeholder="Msg notes"
                        style="background: none; width: 40%;
                        border-bottom: 3px solid #6379F4; border-radius: 0;" v-model="msgSender">
                        <button type="submit">Confirm</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ToolBarHome from '../components/small/ToolBarHome.vue';
import BoxInfoCard from '../components/small/BoxInfoCard.vue';

export default {
  name: 'TransferNext',
  components: {
    ToolBarHome,
    BoxInfoCard,
  },
  data() {
    return {
      amountSend: '',
      msgSender: '',
    };
  },
  computed: {
    ...mapState('Auth', ['receiverUser', 'userDataId']),
  },
  methods: {
    submitSend() {
      const confirm = {
        amount: this.amountSend,
        msg: this.msgSender,
      };
      this.$store.dispatch('Auth/confirmTrx', confirm).catch((error) => console.log(error));
      this.$store.dispatch('Auth/getUserById', { id: this.userDataId.id, token: localStorage.token }).catch((error) => {
        console.log(error);
      });
      this.$router.push('/home/transfer/confirm');
    },
    receiverUsers() {
      this.$store.dispatch('Auth/receiverUser', { token: localStorage.token, id: localStorage.id_receiver }).catch((error) => console.log(error));
    },
  },
  mounted() {
    this.receiverUsers();
    if (!localStorage.id_receiver) this.$router.push('/home/transaction');
  },
};
</script>

<style scoped>
@import '../../public/css/home.css'

</style>
