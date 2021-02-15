<template>
    <div class="nav-home">
        <div class="container-home mob-container justify-space">
            <div class="nav-home-left">
                <h1>Fallet</h1>
            </div>
            <div class="nav-home-right">
                <div class="box-nav-profile">
                    <img :src="user_image" alt="prof">
                    <span>
                        <h3>{{ user_name }}</h3>
                        <p>{{ user_phone === '' ? 'add your number' : user_phone }}</p>
                    </span>
                    <i class="far fa-bell"></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import axios from 'axios';

export default {
  name: 'Navbarhome',
  props: ['user_name', 'user_phone', 'user_image'],
  data() {
    return {
      data: [],
    };
  },
  mounted() {
  },
};
</script>

<style scoped>

</style>
