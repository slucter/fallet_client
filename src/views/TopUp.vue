<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home">
                <h1>How To Top Up</h1>
                <div class="box-tutorial">
                    <h3>1</h3>
                    <p>Go to the nearest ATM or you can use E-Banking.</p>
                </div>
                <div class="box-tutorial">
                    <h3>2</h3>
                    <p>Type your security number on the ATM or E-Banking.</p>
                </div>
                <div class="box-tutorial">
                    <h3>3</h3>
                    <p>Select “Transfer” in the menu</p>
                </div>
                <div class="box-tutorial">
                    <h3>4</h3>
                    <p>Type the virtual account number that we provide you at the top.</p>
                </div>
                <div class="box-tutorial">
                    <h3>5</h3>
                    <p>Type the amount of the money you want to top up.</p>
                </div>
                <div class="box-tutorial">
                    <h3>6</h3>
                    <p>Read the summary details</p>
                </div>
                <div class="box-tutorial">
                    <h3>7</h3>
                    <p>Press transfer / top up</p>
                </div>
                <div class="box-tutorial">
                    <h3>8</h3>
                    <p>You can see your money in Zwallet within 3 hours.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import ToolBarHome from '../components/small/ToolBarHome.vue';

export default {
  name: 'Transfer',
  components: {
    ToolBarHome,
  },
  data() {
    return {
    };
  },
};
</script>

<style scoped>
@import '../../public/css/home.css'

</style>
