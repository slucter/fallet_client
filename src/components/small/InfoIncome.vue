<template>
  <div class="info-income">
    <div class="upDownInfo">
      <span>
        <i class="fas fa-arrow-down"></i>
        <p>Income</p>
        <h3>Rp. {{ income }}</h3>
      </span>
      <span>
        <i class="fas fa-arrow-up c-red"></i>
        <p>Expense</p>
        <h3>Rp. {{ expense }}</h3>
      </span>
    </div>
    <div class="homeChart">
      <Splide :options="options">
      <SplideSlide>
        <div class="slick-toshow">
          <h1>#WorkFromHome</h1><br>
          <p>Air quality is gradually improving in countries
            that remain under coronavirus quarantine. This is a
            positive change that is happening because of social
            distancing, home quarantine.</p>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slick-toshow">
          <p>education is the most powerful weapon which you can use to change the world</p>
          <br><h1>Nelson Mandela</h1>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div class="slick-toshow">
          <h1>SAVE YOUR MONEY</h1>
          <br>
          <p>It’s good to have money and the things that money can
            buy, but it’s good, too, to check up once in a while
            and make sure that you haven’t lost the things that money
            can’t buy</p>
        </div>
      </SplideSlide>
    </Splide>
    </div>
  </div>
</template>

<script>
import { Splide, SplideSlide } from '@splidejs/vue-splide';

export default {
  name: 'InfoIncome',
  props: ['income', 'expense'],
  components: {
    Splide,
    SplideSlide,
  },
  data() {
    return {
      options: {
        rewind: true,
        width: 800,
        gap: '0rem',
        autoplay: true,
        perPage: 1,
        isNavigation: false,
      },
    };
  },
};
</script>

<style scoped>

</style>
