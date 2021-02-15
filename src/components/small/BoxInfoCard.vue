<template>
  <div class="box-info-history" @click="hrefTo">
    <div class="iusr">
      <img
      :src="thumb_p" alt="Y"
      @error="imgAlt"
      />
      <div class="i123">
        <h2>{{ name }}</h2>
        <p>{{ desc }}</p>
      </div>
    </div>
    <h3 v-if="amount > 0"
    class="colorGreen" :class="{ 'colorRed' : dataHistory.sender_id == dataUser.id }">
      {{ dataHistory.sender_id == dataUser.id ? `- Rp.${amount}` : `+ Rp.${amount}` }}
    </h3>
  </div>
</template>

<script>
export default {
  name: 'CardInfo',
  props: ['name', 'desc', 'amount', 'dataUser', 'dataHistory', 'href', 'thumb_p'],
  methods: {
    hrefTo() {
      if (this.href === false) return null;
      if (this.href.to !== null || this.href.to !== '' || this.href.to !== undefined) {
        this.$router.push(this.href.to);
        localStorage.setItem('id_receiver', this.href.id);
      }
      return null;
    },
    imgAlt(event) {
      // eslint-disable-next-line no-param-reassign
      event.target.src = `${process.env.VUE_APP_APIURL}upload/zw/default.jpg`;
    },
  },
};
</script>

<style scoped>
.colorRed {
 color: red!important;
}
.colorGreen {
  color: #1EC15F;
}
</style>
