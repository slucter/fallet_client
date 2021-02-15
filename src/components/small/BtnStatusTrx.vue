<template>
    <div class="btn-right">
        <button @click="hrefTo">{{ textBtn }}</button>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: ['textBtn', 'status'],
  methods: {
    ...mapMutations('Auth', ['ACTIVE_CLASS']),
    hrefTo() {
      if (this.status !== true) {
        this.ACTIVE_CLASS('tf');
        this.$router.push('/home/transfer');
      } else {
        this.ACTIVE_CLASS('db');
        this.$router.push('/home/dashboard');
      }
    },
  },
};
</script>

<style scoped>

</style>
