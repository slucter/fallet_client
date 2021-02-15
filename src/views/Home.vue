<template>
    <div>
    <NavHome
    :user_name="userDataId.name" :user_phone="userDataId.phone" :user_image="userDataId.image"/>
    <router-view />
    <footer class="footer-home">
        <div class="container-home justify-space align-center">
            <p>&copy; slucterDev - Fallet. All right reserved.</p>
            <span>
                <p>+62 998-992-323-2</p>
                <p>contact@fallet.com</p>
            </span>
        </div>
    </footer>
    </div>
</template>

<script>
import { mapState } from 'vuex';
import jwt from 'jsonwebtoken';
import NavHome from '../components/small/NavbarHome.vue';

export default {
  name: 'Home',
  components: {
    NavHome,
  },
  data() {
    return {
      dataToken: '',
    };
  },
  computed: {
    ...mapState('Auth', ['userDataId']),
  },
  mounted() {
    if (!localStorage.token) {
      this.$router.push('/auth/signin');
    }
    jwt.verify(localStorage.token, process.env.VUE_APP_JWTKEY, (err, result) => {
      if (err) {
        // alert('Jwt Error [HOME]');
      } else {
        this.dataToken = result;
        console.log(result);
      }
    });
    this.$store.dispatch('Auth/getUserById', { id: this.dataToken.id, token: localStorage.token }).catch((error) => {
      console.log(error);
    });
  },
};
</script>

<style scoped>

</style>
