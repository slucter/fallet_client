<template>
  <div>
    <NavLanding />
    <SectionHero />
    <SectionAbout />
    <SectionPartner />
    <SectionFeatures />
    <SectionTestimoni />
    <SectionFooter />
  </div>
</template>

<script>
import AOS from 'aos';
import 'aos/dist/aos.css';
import NavLanding from '../components/small/NavbarLanding.vue';
import SectionHero from '../components/small/SectionHero.vue';
import SectionAbout from '../components/small/SectionAbout.vue';
import SectionPartner from '../components/small/SectionPartner.vue';
import SectionFeatures from '../components/small/SectionFeatures.vue';
import SectionTestimoni from '../components/small/SectionTestimoni.vue';
import SectionFooter from '../components/small/SectionFooter.vue';

export default {
  name: 'Landing',
  components: {
    NavLanding,
    SectionHero,
    SectionAbout,
    SectionPartner,
    SectionFeatures,
    SectionTestimoni,
    SectionFooter,
  },
  mounted() {
    window.addEventListener('scroll', () => {
      const navbar = document.querySelector('nav');
      navbar.classList.toggle('navSticky', window.scrollY > 0);
    });
    AOS.init();
  },
};
</script>

<style scoped>
</style>
