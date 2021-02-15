<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home">
                <div class="section-history-home" v-if="dataHistoryIdAll.length > 0">
                    <h1>Transaction History</h1>
                    <h3>This Week</h3>
                    <BoxInfoCard
                        v-for="i in dataHistoryIdAll"
                        :key="i.id"
                        :name="i.name_sender"
                        :desc="i.sender_id == userDataId.id ? 'Transfer' : 'Receive'"
                        :amount="i.amount"
                        :dataHistory="i"
                        :thumb_p="i.image"
                        :dataUser="userDataId"
                        :href="false"
                        />
                    <!-- <div class="pagen">
                      <button>Prev</button>
                      <button> pg </button>
                      <button>Next</button>
                    </div> -->
                </div>
                <div class="section-history-home" v-else>
                    <h1>Transaction History</h1>
                    <span style="text-align: center; margin-top: 60px">
                      <h1>No Transaction</h1>
                      <p>Lets make simply transaction</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import jwt from 'jsonwebtoken';
import ToolBarHome from '../components/small/ToolBarHome.vue';
import BoxInfoCard from '../components/small/BoxInfoCard.vue';

export default {
  name: 'History',
  components: {
    ToolBarHome,
    BoxInfoCard,
  },
  data() {
    return {
      userdata: [],
      dataToken: '',
    };
  },
  computed: {
    ...mapState('Trx', ['dataHistoryIdAll']),
    ...mapState('Auth', ['userDataId']),
  },
  mounted() {
    jwt.verify(localStorage.token, process.env.VUE_APP_JWTKEY, (err, result) => {
      if (err) {
        alert('Network Error');
      } else {
        this.dataToken = result;
        console.log(result);
      }
    });
    this.$store.dispatch('Trx/getHistoryByIdAll', { id: this.dataToken.id, token: localStorage.token, limit: '' }).catch((error) => {
      console.log(error);
    });
  },
};
</script>

<style scoped>
.pagen {
  display: flex;
  height: 50px;
  margin-top: 15px;
}
.pagen button:first-child {
  background-color: rgb(255, 255, 255)!important;
  box-shadow: 0px 0px 10px rgba(0,0,0,.15);
  border-radius: 20px;
  margin-right: 10px;
  width: 70px;
}
.pagen button:last-child {
  background-color: rgb(255, 255, 255)!important;
  box-shadow: 0px 0px 10px rgba(0,0,0,.15);
  border-radius: 20px;
  margin-left: 10px;
  width: 70px;
}
.pagen button {
  outline: none;
  border: none;
  width: 50px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0,0,0,.15);
  height: 100%;
  background-color: rgb(255, 255, 255);
  color: #000;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: .5s;
  margin: 3px;
}

.pagen button:hover{
  box-shadow: 0px 0px 10px rgba(0,0,0,.1);
  transition: .5s;
  background-color: rgb(228, 228, 228);
}
@import '../../public/css/home.css'

</style>
