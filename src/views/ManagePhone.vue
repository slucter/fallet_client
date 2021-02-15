<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home">
               <h1>Manage Phone Number</h1>
                <span style="margin: 15px 0 18px 0;">
                    <p>You can only delete the phone number and then
                        <br>you must add another phone number.</p>
                </span>
                <div class="card-info-profile"
                :class="{ 'input-field-error' : $v.dataUser.phone.$invalid}">
                    <span>
                        <h3>Phone Number</h3>
                        <form @submit.prevent="subMitEdit" class="inputEdit">
                        <input
                        type="text"
                        placeholder="Add Phone Number"
                        v-model.trim="$v.dataUser.phone.$model"
                        :disabled="btnNone"
                        :class="{ 'border-bottom' : !btnNone }"
                        >
                        <div class="btn-grup"
                        :class="{'btn-disabled' : $v.$invalid}">
                            <button
                            @click.prevent="btnNone = !btnNone"
                            :class="{'displayNone': !btnNone}">
                                <i class="fas fa-pencil-alt" style="margin-right: 10px"></i>
                                <span>Edit Field</span> </button>
                            <button
                            type="submit"
                            :class="{'displayNone': btnNone }"
                            @click.prevent="subMitEdit">
                                <i
                                class="fas fa-check" style="margin-right: 10px; color: #2ddf00;">
                                </i>
                                <span>Update</span>
                            </button>
                            <h1 @click="deleteNomor"><i class="fas fa-trash"></i></h1>
                        </div>
                    </form>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import jwt from 'jsonwebtoken';
import { TYPE } from 'vue-toastification';
import { numeric } from 'vuelidate/lib/validators';
import ToolBarHome from '../components/small/ToolBarHome.vue';

export default {
  name: 'ManagePhone',
  components: {
    ToolBarHome,
  },
  computed: {
    ...mapState('Auth', ['userDataId']),
  },
  data() {
    return {
      btnNone: true,
      dataUser: {
        name: '',
        username: '',
        email: '',
        phone: '',
      },
      dataToken: '',
    };
  },
  validations: {
    dataUser: {
      phone: {
        numeric,
      },
    },
  },
  methods: {
    ...mapActions('Auth', ['patchUserSetting', 'getUserById']),
    deleteNomor() {
      if (this.dataUser.phone === '') {
        this.$toast('Set your number first!', {
          type: TYPE.ERROR,
        });
      } else {
        this.dataUser.phone = '';
        this.patchUserSetting({ data: this.dataUser, id: this.dataToken.id }).then((result) => {
          console.log(result);
          if (result.data.result.update === 1) {
            this.$toast('Number deleted!', {
              type: TYPE.SUCCESS,
            });
            this.getUserById({ id: this.dataToken.id, token: localStorage.token });
          } else {
            this.$toast('Failed update profile', {
              type: TYPE.ERROR,
            });
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    },
    subMitEdit() {
      if (this.$v.$invalid) {
        this.$toast('Fill correctly!', {
          type: TYPE.WARNING,
        });
      } else {
        this.btnNone = !this.btnNone;
        this.patchUserSetting({ data: this.dataUser, id: this.dataToken.id }).then((result) => {
          console.log(result);
          if (result.data.result.update === 1) {
            this.$toast('Success update profile', {
              type: TYPE.SUCCESS,
            });
            this.getUserById({ id: this.dataToken.id, token: localStorage.token });
          } else {
            this.$toast('Failed update profile', {
              type: TYPE.ERROR,
            });
          }
        }).catch((error) => {
          console.log(error);
        });
      }
    },
  },
  //   updated() {
  //     if (this.dataUser.phone === '') {
  //       this.dataUser.phone = '';
  //     }
  //   },
  mounted() {
    jwt.verify(localStorage.token, process.env.VUE_APP_JWTKEY, (err, result) => {
      if (err) {
        // alert('Network Error [Dashboard]');
      } else {
        this.dataToken = result;
        console.log(result);
      }
    });
    this.dataUser.name = this.userDataId.name;
    this.dataUser.username = this.userDataId.username;
    this.dataUser.email = this.userDataId.email;
    this.dataUser.phone = this.userDataId.phone;
  },
};
</script>

<style scoped>
@import '../../public/css/home.css'

</style>
