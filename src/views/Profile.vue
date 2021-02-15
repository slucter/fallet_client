<template>
  <div class="content-home">
        <div class="container-home justify-space">
            <ToolBarHome />
            <div class="section-menu-home">
                <div class="profile-home">
                  <img
                  :src="userDataId.image"
                  :alt="userDataId.name+ '-photo'"
                  >
                  <input type="file" name="upload" id="upload"
                  ref="choseFile" style="display: none" @change="onUpload">
                    <span style="cursor: pointer" @click="$refs.choseFile.click()">
                        <i class="fas fa-pencil-alt">
                        </i> Edit
                    </span>
                  <h3>{{ userDataId.name }}</h3>
                  <p>{{ userDataId.phone === '' ? '-' : userDataId.phone }}</p>
                    <div class="box-profile-setting">
                        <router-link to="/home/profile/personal-info">
                        Personal Information</router-link>
                        <i class="fas fa-arrow-right"></i>
                    </div>
                    <div class="box-profile-setting">
                      <router-link to="/home/profile/change-password">Change Password</router-link>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="box-profile-setting">
                      <router-link to="/home/profile/change-pin">Change Pin</router-link>
                      <i class="fas fa-arrow-right"></i>
                  </div>
                  <div class="box-profile-setting">
                      <a @click="logout" style="cursor: pointer">Logout</a>
                  </div>
              </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import { TYPE } from 'vue-toastification';
import ToolBarHome from '../components/small/ToolBarHome.vue';

export default {
  name: 'Profile',
  components: {
    ToolBarHome,
  },
  computed: {
    ...mapState('Auth', ['userDataId']),
  },
  data() {
    return {
      image: '',
    };
  },
  methods: {
    ...mapActions('Auth', ['getUserById']),
    logout() {
      localStorage.removeItem('token');
      localStorage.removeItem('idFalletUser');
      this.$router.go();
    },
    onUpload() {
      // eslint-disable-next-line prefer-destructuring
      this.image = this.$refs.choseFile.files[0];
      const fd = new FormData();
      fd.append('image', this.image);
      this.$store.dispatch('Auth/patchImage', { id: this.userDataId.id, image: fd }).then((result) => {
        if (result.data.result.msg === 'success') {
          this.$toast('Success update image', {
            type: TYPE.SUCCESS,
          });
          this.getUserById({ id: this.userDataId.id, token: localStorage.token });
        }
        if (result.data.result.msg === 'EXTENSION_DENIED') {
          this.$toast('Image Extension Denied', {
            type: TYPE.ERROR,
          });
        }
        if (result.data.result.msg === 'LIMIT_FILE_SIZE') {
          this.$toast('The maximum file size is 2mb', {
            type: TYPE.ERROR,
          });
        }
      });
    },
  },
  mounted() {
  },
};
</script>

<style scoped>
@import '../../public/css/home.css'

</style>
