<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <form @submit.prevent="subMitEdit" class="section-menu-home">
                <h1>Personal Information</h1>
                <span style="margin: 15px 0 18px 0;">
                    <p>We got your personal information from the sign up proccess.
                        <br> If you want to make changes on your information,
                        <br> contact our support.</p>
                </span>
                <div class="inputEdit">
                    <span></span>
                    <div class="btn-grup"
                    :class="{ 'btn-disabled' : $v.$invalid }"
                    >
                        <button
                        @click.prevent="btnNone = !btnNone"
                        :class="{'displayNone': !btnNone}">
                            <i class="fas fa-pencil-alt" style="margin-right: 10px"></i>
                            Edit Field</button>
                        <button
                        type="submit"
                        :class="{'displayNone': btnNone }"
                        @click.prevent="subMitEdit">
                            <i
                            class="fas fa-check" style="margin-right: 10px; color: #2ddf00;">
                            </i>
                            Update
                        </button>
                    </div>
                </div>
                <div class="card-info-profile"
                :class="{ 'input-field-error' : $v.dataPersonal.name.$invalid}"
                >
                    <span>
                        <h3>Full Name</h3>
                        <div class="inputEdit">
                            <input
                            type="text"
                            v-model.trim="$v.dataPersonal.name.$model"
                            :class="{ 'border-bottom' : !btnNone }"
                            :disabled="btnNone" ref="name">
                            <p v-if="$v.dataPersonal.name.$invalid">
                                The field is {{ $v.dataPersonal.name.$params.required.type }}</p>
                        </div>
                    </span>
                </div>
                <div class="card-info-profile"
                :class="{ 'input-field-error' : $v.dataPersonal.username.$invalid}">
                    <span>
                        <h3>Username</h3>
                        <div class="inputEdit">
                            <input
                            v-model.trim="$v.dataPersonal.username.$model"
                            type="text"
                            :class="{ 'border-bottom' : !btnNone }"
                            :disabled="btnNone" ref="name">
                            <p v-if="$v.dataPersonal.username.$invalid">
                            The field is {{ $v.dataPersonal.username.$params.required.type }}</p>
                        </div>
                    </span>
                </div>
                <div class="card-info-profile"
                :class="{ 'input-field-error' : $v.dataPersonal.email.$invalid}">
                    <span>
                        <h3>Email</h3>
                        <div class="inputEdit">
                            <input
                            v-model.trim="$v.dataPersonal.email.$model"
                            type="text"
                            :class="{ 'border-bottom' : !btnNone }"
                            :disabled="btnNone" ref="name">
                            <p v-if="$v.dataPersonal.email.$invalid">
                            The field is {{ $v.dataPersonal.email.$params.required.type}}
                             & only valid email</p>
                        </div>
                    </span>
                </div>
                <div class="card-info-profile">
                    <span>
                        <h3>Phone Number</h3>
                        <div class="inputEdit">
                            <input
                            type="text"
                            :value="userDataId.phone === '' ?
                            'Set your phone number' : userDataId.phone"
                            disabled>
                            <router-link to="/home/profile/manage-phone">Manage</router-link>
                        </div>
                    </span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { required, email } from 'vuelidate/lib/validators';
import jwt from 'jsonwebtoken';
import { TYPE } from 'vue-toastification';
import ToolBarHome from '../components/small/ToolBarHome.vue';

export default {
  name: 'PersonalUser',
  components: {
    ToolBarHome,
  },
  data() {
    return {
      btnNone: true,
      dataToken: '',
      dataPersonal: {
        name: '',
        username: '',
        email: '',
        phone: '',
      },
    };
  },
  validations: {
    dataPersonal: {
      name: {
        required,
      },
      username: {
        required,
      },
      email: {
        required,
        email,
      },
    },
  },
  computed: {
    ...mapState('Auth', ['userDataId']),
  },
  methods: {
    subMitEdit() {
      if (this.$v.$invalid) {
        this.$toast('Please fill all correctly', {
          type: TYPE.WARNING,
        });
      } else {
        this.btnNone = !this.btnNone;
        this.$store.dispatch('Auth/patchUserSetting', { data: this.dataPersonal, id: this.dataToken.id }).then((result) => {
          if (result.data.result.update === 1) {
            this.$toast('Success update profile', {
              type: TYPE.SUCCESS,
            });
            this.getUserById({ id: this.dataToken.id, token: localStorage.token });
            this.$router.push('/home/profile');
          } else {
            this.$toast('Failed update profile', {
              type: TYPE.ERROR,
            });
          }
        });
      }
    },
    ...mapActions('Auth', ['getUserById']),
  },
  mounted() {
    jwt.verify(localStorage.token, process.env.VUE_APP_JWTKEY, (err, result) => {
      if (err) {
        // alert('Network Error [Dashboard]');
      } else {
        this.dataToken = result;
        console.log(result);
      }
    });
    this.dataPersonal.name = this.userDataId.name;
    this.dataPersonal.username = this.userDataId.username;
    this.dataPersonal.email = this.userDataId.email;
    this.dataPersonal.phone = this.userDataId.phone;
  },
};
</script>

<style scoped>
@import '../../public/css/home.css'

</style>
