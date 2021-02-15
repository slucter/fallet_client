<template>
    <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home justify-between">
                <BoxUserInfo :balance="user.saldo" :phone="user.phone"/>
                <div class="box-2-row">
                    <InfoIncome :income="income" :expense="expense"/>
                    <div class="trx-history"
                    >
                        <span>
                            <h1>Transaction History</h1>
                            <router-link to="/home/history">See All</router-link>
                        </span>
                        <BoxInfoCard
                        v-for="i in dataHistoryId.result"
                        :key="i.id"
                        :name="i.name_sender"
                        :desc="i.sender_id == userDataId.id ? 'Transfer' : 'Receive'"
                        :amount="i.amount"
                        :dataHistory="i"
                        :dataUser="userDataId"
                        :thumb_p="i.image"
                        :href="false"
                        />
                        <!-- <h1 v-if="dataHistoryId.result.result.length < 1">Notfound</h1> -->
                    </div>
                    <!-- <div class="trx-history"
                    v-else
                    style="text-align:center;"
                    >
                    <span style="margin-bottom: 50px">
                      <h1>Transaction History</h1>
                      <router-link to="/home/history">See All</router-link>
                    </span>
                        <h3>No Transaction</h3>
                        <p>Lets make simply transaction</p>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';
import jwt from 'jsonwebtoken';
import ToolBarHome from '../components/small/ToolBarHome.vue';
import BoxUserInfo from '../components/small/BoxUserInfo.vue';
import InfoIncome from '../components/small/InfoIncome.vue';
import BoxInfoCard from '../components/small/BoxInfoCard.vue';

export default {
  name: 'Dashboard',
  components: {
    BoxUserInfo,
    InfoIncome,
    BoxInfoCard,
    ToolBarHome,
  },
  computed: {
    income() {
      return this.$store.getters['Trx/income'];
    },
    expense() {
      return this.$store.getters['Trx/expense'];
    },
    user() {
      return this.userDataId;
    },
    ...mapState('Auth', ['userDataId']),
    ...mapState('Trx', ['dataHistoryId', 'dataHistoryIdAll']),
  },
  data() {
    return {
      history6: '',
      dataToken: '',
    };
  },
  methods: {
    ...mapMutations('Auth', ['ACTIVE_CLASS']),
    ...mapActions('Auth', ['getUserById']),
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
    this.ACTIVE_CLASS('db');
    this.$store.dispatch('Trx/getHistoryById', { id: this.dataToken.id, token: localStorage.token, limit: 4 }).catch((error) => {
      console.log(error);
    });
    this.$store.dispatch('Trx/getHistoryByIdAll', { id: this.dataToken.id, token: localStorage.token, limit: '' }).catch((error) => {
      console.log(error);
    });
  },
};
</script>

<style scoped>
@import '../../public/css/home.css'

</style>
