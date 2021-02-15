<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home">
                <h1>Change Password</h1>
                <span style="margin: 15px 0 18px 0;">
                    <p>You must enter your current password and then
                        <br>type your new password twice.</p>
                </span>
                <form class="changePwHome" @submit.prevent="changePw">
                    <div
                    class="my-input-home"
                    :class="{ 'invalid-input' : $v.dataPw.current.$error }"
                    >
                        <i class="fas fa-lock"></i>
                        <input
                        type="password"
                        placeholder="Current password"
                        v-model.trim="$v.dataPw.current.$model"
                        >
                        <i class="fas fa-eye-slash"
                        style="cursor: pointer; color: rgba(169, 169, 169, 0.8)!important"></i>
                    </div>
                    <div class="my-input-home"
                    :class="{ 'invalid-input' : $v.dataPw.newpw.$error }"
                    >
                        <i class="fas fa-lock"></i>
                        <input
                        type="password"
                        placeholder="New password"
                        v-model.trim="$v.dataPw.newpw.$model"
                        >
                        <i class="fas fa-eye-slash"
                        style="cursor: pointer; color: rgba(169, 169, 169, 0.8)!important"></i>
                    </div>
                    <div class="my-input-home"
                    :class="{ 'invalid-input' : $v.dataPw.renewpw.$error }"
                    >
                        <i class="fas fa-lock"></i>
                        <input
                        type="password"
                        placeholder="Repeat new password"
                        v-model.trim="$v.dataPw.renewpw.$model"
                        >
                        <i class="fas fa-eye-slash"
                        style="cursor: pointer; color: rgba(169, 169, 169, 0.8)!important"></i>
                    </div>
                    <button type="submit"
                    :disabled="$v.$invalid"
                    :class="{ 'btnCondition' : $v.$invalid}"
                    >Confirm</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { required, sameAs } from 'vuelidate/lib/validators';
import { TYPE } from 'vue-toastification';
import ToolBarHome from '../components/small/ToolBarHome.vue';

export default {
  name: 'ChangePassword',
  components: {
    ToolBarHome,
  },
  data() {
    return {
      dataPw: {
        current: '',
        newpw: '',
        renewpw: '',
      },
    };
  },
  validations: {
    dataPw: {
      current: {
        required,
      },
      newpw: {
        required,
      },
      renewpw: {
        required,
        sameAsPassword: sameAs('newpw'),
      },
    },
  },
  methods: {
    async changePw() {
      try {
        const data = await this.$store.dispatch('Auth/changePw', { current: this.dataPw.current, newpw: this.dataPw.newpw });
        console.log(data);
        if (data.data.result.msg === 'password not match') {
          this.$toast('Current password wrong!', {
            type: TYPE.ERROR,
          });
        }
        if (data.data.result.msg === 'success') {
          this.$toast('Success update password', {
            type: TYPE.SUCCESS,
          });
          this.$router.go('/');
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
.btnCondition{
  background: #DADADA!important;
  color: #88888F!important;
}
@import '../../public/css/home.css'

</style>
