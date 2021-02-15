<template>
  <div>
    <NavLanding />
    <section class="verify">
        <div class="box-verify">
            <h1> {{ textHead }}</h1>
            <p>{{ textP }}</p>
        </div>
    </section>
    <SectionFooter />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavLanding from '../components/small/NavbarLanding.vue';
import SectionFooter from '../components/small/SectionFooter.vue';

export default {
  name: 'Landing',
  components: {
    NavLanding,
    SectionFooter,
  },
  computed: {
    textHead() {
      if (this.$route.params.key !== localStorage.key_verif) {
        return 'Oops Something Wrong!';
      }
      return 'User now verified!';
    },
    textP() {
      if (this.$route.params.key !== localStorage.key_verif) {
        return '';
      }
      return 'Dear user, now you can login and make transaction...';
    },
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');
      navbar.classList.toggle('navSticky', window.scrollY > 0);
    });
    AOS.init();
    if (this.$route.params.key === localStorage.key_verif) {
      const token = localStorage.token_verif;
      this.$store.dispatch('Auth/Verify', token).then((result) => {
        if (result.data.result.msg === 'Success') {
          setTimeout(() => {
            this.$router.push('/auth/signin');
            localStorage.removeItem('key_verif');
            localStorage.removeItem('token_verif');
          }, 3000);
        } else {
          // eslint-disable-next-line no-alert
          alert('Oops Network Error');
        }
      // eslint-disable-next-line no-console
      }).catch((error) => console.log(error));
    }
  },
};
</script>

<style scoped>
@import url('../../public/css/index.css');
@import url('../../public/css/index_responsive.css');

.verify {
    width: 100vw;
    height: 560px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 100px;
    background-color: rgb(199, 219, 255);
}

.box-verify h1 {
    color: rgb(29, 61, 114);
    font-size: 30px;
}
.box-verify p {
    color: rgb(27, 29, 27);
    font-size: 18px;
}
</style>
