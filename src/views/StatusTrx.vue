<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home">
                <div class="section-history-home">
                    <div class="success-part">
                        <img v-if="confirmData.status === 'success'"
                        src="../../public/img/icon/success.png" alt="sss">
                        <img v-if="confirmData.status === 'failed'"
                        src="../../public/img/icon/failed.png" alt="sss">
                        <h3>
                        {{confirmData.status === 'success' ?
                        'Transfer Success' : 'Transfer Failed'}}
                        </h3>
                        <p v-if="confirmData.status === 'failed'">
                            We can’t transfer your money at the moment,
                            we recommend you to check your<br>
                        internet connection and try again.</p>
                    </div>
                    <span>
                        <h4>Amount</h4>
                        <h1>Rp. {{ confirmData.amount }}</h1>
                    </span>
                    <span>
                        <h4>Balance Now</h4>
                        <h1>Rp. {{ confirmData.status === 'success' ?
                            userDataId.saldo - confirmData.amount : userDataId.saldo }}</h1>
                    </span>
                    <span>
                        <h4>Date & Time</h4>
                        <h1>{{ dateNow }}</h1>
                    </span>
                    <span>
                        <h4>Notes</h4>
                        <h1>{{ confirmData.msg }}</h1>
                    </span>
                    <BoxInfoCard
                        :name="receiverUser.name"
                        :desc="receiverUser.phone"
                        :amount="''"
                        :dataHistory="''"
                        :dataUser="''"
                        :href="false"
                    />
                     <BtnStatusTrx
                     :textBtn="confirmData.status === 'success'?'Back to Home':'Try Again'"
                     :status="confirmData.status === 'success'? true : false"
                     />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
import moment from 'moment';
import ToolBarHome from '../components/small/ToolBarHome.vue';
import BoxInfoCard from '../components/small/BoxInfoCard.vue';
import BtnStatusTrx from '../components/small/BtnStatusTrx.vue';

export default {
  name: 'StatusTrx',
  components: {
    ToolBarHome,
    BoxInfoCard,
    BtnStatusTrx,
  },
  computed: {
    dateNow() {
      return moment().format('LLL');
    },
    ...mapState('Auth', ['receiverUser', 'confirmData', 'userDataId']),
  },
  methods: {
    ...mapMutations('Auth', ['ACTIVE_CLASS']),
  },
  mounted() {
    if (this.confirmData === '') {
      this.ACTIVE_CLASS('db');
      this.$router.push('/home/dashboard');
    }
  },
};
</script>

<style scoped>
@import '../../public/css/home.css'

</style>
