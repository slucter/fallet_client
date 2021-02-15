<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home">
                <h1>Change Pin</h1>
                <span style="margin: 15px 0 18px 0;">
                    <p>Enter your current 6 digits Zwallet PIN below to<br>
                    continue to the next steps.</p>
                </span>
                <form class="changePwHome" @submit.prevent="changePin">
                    <div class="pin-input-home">
                        <input
                        type="text"
                        maxlength="1"
                        class="input-item"
                        placeholder="0"
                        ref="i_item"
                        v-for="(input, index) in lenn"
                        :key="`input${index}`"
                        v-model="pins[index]"
                        @keyup="autoTab($refs.i_item[index], 1, $event)"
                        @keydown.prevent.tab.exact="moveNext"
                        @keydown.prevent.shift.tab="movePrev"
                        @keydown.prevent.down="moveNext"
                        @keydown.prevent.up="movePrev"
                        >
                    </div>
                    <button type="submit">Confirm</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { TYPE } from 'vue-toastification';
import ToolBarHome from '../components/small/ToolBarHome.vue';

export default {
  name: 'ChangePin',
  components: {
    ToolBarHome,
  },
  computed: {
    lenn() {
      return Array.from(Array(this.len).keys());
    },
    elemen() {
      return document.getElementsByClassName('input-item');
    },
  },
  data() {
    return {
      len: 5,
      pins: [],
    };
  },
  methods: {
    changePin() {
      const pin = parseInt(this.pins.join(''), 10);
      console.log(pin);
      this.$store.dispatch('Auth/makePin', { pins: pin }).then((result) => {
        if (result.data.result.patchPin === 1) {
          this.$toast('Success update pin', {
            type: TYPE.SUCCESS,
          });
          this.$router.push('/home/profile');
        } else {
          this.$toast('Failed update pin', {
            type: TYPE.WARNING,
          });
        }
      }).catch((error) => {
        console.log(error);
      });
    },
    autoTab(input, len, e) {
      const index = this.findIndex(e.target);
      if (input.value.length >= len) {
        this.moveFocus(index + 1);
      }
    //   if (input.value.length <= len) {
    //     this.moveFocus(index - 1);
    //   }
    },
    findIndex(target) {
      return [].findIndex.call(this.elemen, (e) => e === target);
    },
    moveFocus(index) {
      if (this.elemen[index]) {
        this.elemen[index].focus();
      }
    },
    moveNext(event) {
      const index = this.findIndex(event.target);
      this.moveFocus(index + 1);
    },
    movePrev(event) {
      const index = this.findIndex(event.target);
      this.moveFocus(index - 1);
    },
  },
};
</script>

<style scoped>
@import '../../public/css/home.css'

</style>
