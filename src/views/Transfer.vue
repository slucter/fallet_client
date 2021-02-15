<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home">
                <div class="section-history-home">
                    <h1>Search Receiver</h1>
                    <form class="home-form" @submit.prevent>
                        <input class="sarch-input" type="text"
                        v-model="inputsrc" @input="search" placeholder="Search receiver here">
                    </form>
                    <BoxInfoCard
                        v-for="i in allUser.result"
                        :key="i.id"
                        :name="i.name"
                        :desc="i.phone"
                        :amount="''"
                        :dataHistory="''"
                        :dataUser="''"
                        :thumb_p="i.image"
                        :href="{ to: '/home/transfer/fields', id: i.id }"
                    />
                    <div class="pagen">
                      <button @click="prev">Prev</button>
                      <button
                      v-for="pg in allUser.totalPage"
                      :key="pg"
                      @click="pagen(pg)"
                      >{{ pg }}</button>
                      <button @click="next">Next</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import ToolBarHome from '../components/small/ToolBarHome.vue';
// import BoxInfoCard from '../components/small/BoxInfoCard.vue';

export default {
  name: 'Transfer',
  components: {
    ToolBarHome,
    BoxInfoCard: () => import(/* webpackPrefetch: true */ '../components/small/BoxInfoCard.vue'),
  },
  computed: {
    ...mapState('Auth', ['allUser']),
  },
  data() {
    return {
      inputsrc: '',
      page: 1,
    };
  },
  methods: {
    search() {
      this.$store.dispatch('Auth/getAllUser', { token: localStorage.token, page: this.page, search: this.inputsrc }).catch((error) => console.log(error));
    },
    pagen(pg) {
      this.page = pg;
      this.$store.dispatch('Auth/getAllUser', { token: localStorage.token, page: this.page, search: this.inputsrc }).catch((error) => console.log(error));
    },
    next() {
      this.page += 1;
      const pg = parseInt(this.allUser.page, 10) + 1;
      if (pg > parseInt(this.allUser.totalPage, 10)) {
        this.page -= 1;
      }
      this.$store.dispatch('Auth/getAllUser', { token: localStorage.token, page: this.page, search: this.inputsrc }).catch((error) => console.log(error));
    },
    prev() {
      this.page -= 1;
      const pg = parseInt(this.allUser.page, 10) + 1;
      if (pg < parseInt(this.allUser.totalPage, 10)) {
        this.page += 1;
      }
      this.$store.dispatch('Auth/getAllUser', { token: localStorage.token, page: this.page, search: this.inputsrc }).catch((error) => console.log(error));
    },
    getall() {
      this.$store.dispatch('Auth/getAllUser', { token: localStorage.token, page: this.page, search: this.inputsrc }).catch((error) => console.log(error));
    },
  },
  mounted() {
    this.getall();
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

@media only screen and (max-width: 415px)  {
  .pagen {
  display: flex;
  height: 40px;
  margin-top: 15px;
}
.pagen button:first-child {
  background-color: rgb(255, 255, 255)!important;
  box-shadow: 0px 0px 10px rgba(0,0,0,.15);
  border-radius: 20px;
  margin-right: 10px;
  width: 40px;
}
.pagen button:last-child {
  background-color: rgb(255, 255, 255)!important;
  box-shadow: 0px 0px 10px rgba(0,0,0,.15);
  border-radius: 20px;
  margin-left: 10px;
  width: 40px;
}
.pagen button {
  outline: none;
  border: none;
  width: 40px;
  border-radius: 30px;
  box-shadow: 0px 0px 10px rgba(0,0,0,.15);
  height: 100%;
  background-color: rgb(255, 255, 255);
  color: #000;
  font-size: 11px;
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
}
@import '../../public/css/home.css'

</style>
