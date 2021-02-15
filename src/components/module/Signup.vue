<template>
  <div>
    <div class="right-auth">
      <h1 data-aos="fade-right" data-aos-delay="80">
        Start Accessing Banking Needs<br />
        With All Devices and All Platforms<br />
        With 30.000+ Users
      </h1>
      <p>
        Transfering money is eassier than ever, you can access<br />Zwallet
        wherever you are. Desktop, laptop, mobile phone?<br />we cover all of
        that for you!
      </p>
      <form class="my-form-group" @submit.prevent="ActSignUp">
        <div class="my-input"
        :class="{ 'my-input-invalid' : $v.data.username.$error}">
          <i class="far fa-user"></i>
          <input type="text" placeholder="Enter your username"
          v-model.trim="$v.data.username.$model"/>
        </div>
        <div class="my-input"
        :class="{ 'my-input-invalid' : $v.data.email.$error}">
          <i class="far fa-envelope"></i>
          <input type="email" placeholder="Enter your e-mail"
          v-model.trim="$v.data.email.$model"/>
        </div>
        <div class="my-input"
        :class="{ 'my-input-invalid' : $v.data.password.$error}">
          <i class="fas fa-lock"></i>
          <input :type="typeField" placeholder="Enter your password"
          v-model.trim="$v.data.password.$model"/>
          <i :class=" typeField == 'password' ? 'fas fa-eye iconz' : 'fas fa-eye-slash iconz'"
          style="cursor: pointer; color: rgba(58, 61, 66, 0.6);" @click="showPw"></i>
        </div>
        <button type="submit"
        :disabled="$v.data.$invalid"
        :class="{ 'btnCondition' : $v.data.$invalid}"
        >Sign Up</button>
      </form>
      <p style="text-align: center">
        Already have an account? Let’s
        <router-link
          to="/auth/signin"
          style="color: #6379f4; text-decoration: none; font-weight: bold"
          >Log In
        </router-link>
      </p>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';
import { TYPE } from 'vue-toastification';
// import axios from 'axios';

export default {
  name: 'Signup',
  data() {
    return {
      data: {
        username: '',
        email: '',
        password: '',
      },
      typeField: 'password',
    };
  },
  methods: {
    showPw() {
      this.typeField = this.typeField === 'password' ? 'text' : 'password';
    },
    ActSignUp() {
      this.$store.dispatch('Auth/signUp', this.data).then((result) => {
        if (result.data.result.message === 'Was Success') {
          this.$toast('Success, Please login!', {
            type: TYPE.SUCCESS,
            position: 'top-right',
          });
          setTimeout(() => {
            this.$router.push('/auth/signin');
          }, 2000);
        }
        if (result.data.result.message === 'Username Was Exist') {
          this.$toast('Failed, Username Was Exist!', {
            type: TYPE.ERROR,
            position: 'top-right',
          });
        }
        if (result.data.result.message === 'Email Was Exist') {
          this.$toast('Failed, Email Was Exist!', {
            type: TYPE.ERROR,
            position: 'top-right',
          });
        }
      }).catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
    },
  },
  validations: {
    data: {
      username: {
        required,
      },
      email: {
        required,
        email,
      },
      password: {
        required,
      },
    },
  },
};
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

h1,h2,h3,h4
{
    font-family: 'Nunito Sans', sans-serif;
    font-weight: 800;
}
p,a
{
    font-family: 'Nunito Sans', sans-serif;
}

.right-auth
{
    flex: .7;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0 250px 0 40px;
    /* background-color: rgb(175, 98, 98); */
}
.right-auth img
{
    Width:40px;
    Height:40px;
    margin-bottom: 40px;
}
.right-auth h1
{
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 33px;
    color: #3A3D42;
    margin: 0 0 40px 0;
}

.right-auth p
{
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 30px;
    color: rgba(58, 61, 66, 0.6);
    margin: 0 0 0px 0;
}

.my-form-group
{
    width: 100%;
    display: block;
    /* background-color: burlywood; */
}
.my-form-group span
{
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.my-form-group span a
{
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    color: rgba(58, 61, 66, 0.8);
    text-decoration: none;
}
.my-form-group button
{
    width: 100%;
    height: 57px;
    background: #6379F4;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    /* background: #DADADA; */
    /* color: #88888F; */
    margin: 80px 0 30px 0;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
}
.my-input
{
    padding: 40px 0 7px 0;
    /* border-bottom: 1.5px solid rgba(169, 169, 169, 0.6); */
    border-bottom: 1.5px solid #6379f4;
    display: blocks;
    margin-bottom: 20px;
}

.my-input i
{
    /* color: rgba(169, 169, 169, 0.8); */
    color: #6379F4;
    font-size: 18px;
    line-height: 23px;

}
.my-input input
{
    width: 85%;
    height: 35px;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
    /* color: rgba(169, 169, 169, 0.8); */
    color: #111420;
    padding: 0 10px;
    border: none;
    outline: none;
}
.my-input-invalid {
    border-bottom: 1.5px solid rgba(189, 22, 22, 1)!important;
}
.my-input-invalid > i {
  color:  rgba(189, 22, 22, 1)!important;
}

.btnCondition{
  background: #DADADA!important;
  color: #88888F!important;
}

/* PIN */

.pin-input
{
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
}
.pin-input input
{
    width: 13%;
    height: 100%;
    text-align: center;
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    /* line-height: 41px;or: #3A3D42; */
    background: #ffffff;
    border: 1px solid #6379F4;
    box-sizing: border-box;
    box-shadow: 0px 10px 75px rgba(147, 147, 147, 0.1);
    border-radius: 10px;
    outline: none;
}
@media (max-width: 415px){
    .left-auth
    {
        display: none;
    }
    .right-auth
    {
    flex: 1;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0 20px 0 20px;
    /* background-color: rgb(175, 98, 98); */
    position: relative;
    }
    .right-auth::after
    {
        content: '';
        width: 60%;
        height: 40%;
        background-color: #6379F4;
        /* background: linear-gradient(45deg, rgba(255,255,255,1),rgba(255,255,255,10)); */
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
        border-bottom-left-radius: 30%;
    }
    .right-auth::before
    {
        content: '';
        width: 60%;
        height: 40%;
        background-color: #6379F4;
        background: linear-gradient(45deg, rgba(255,255,255,.5),rgba(255,255,255,0));
        position: absolute;
        top: 0;
        right: 0;
        z-index: 1;
        border-bottom-left-radius: 30%;
    }
    .right-auth h1
    {
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 33px;
    color: #3A3D42;
    margin: 0 0 40px 0;
    z-index: 2;
    }

    .right-auth p
    {
    font-style: normal;
    z-index: 2;
    font-weight: normal;
    font-size: 13px;
    line-height: 30px;
    color: rgba(58, 61, 66, 0.6);
    margin: 0 0 0px 0;
    }

    .my-form-group
    {
    width: 100%;
    display: block;
    /* background-color: burlywood; */
    }
    .my-form-group span
    {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    }
    .my-form-group span a
    {
    font-weight: 600;
    font-size: 13px;
    line-height: 24px;
    color: rgba(58, 61, 66, 0.8);
    text-decoration: none;
    }
    .my-form-group button
    {
    width: 100%;
    height: 50px;
    background: #6379F4;
    box-shadow: 0px 6px 75px rgba(100, 87, 87, 0.05);
    border-radius: 12px;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    margin: 80px 0 30px 0;
    color: #fff;
    border: none;
    outline: none;
    cursor: pointer;
    }
    .my-input
    {
    padding: 25px 0 7px 0;
    border-bottom: .5px solid rgba(169, 169, 169, 0.6);
    display: blocks;
    margin-bottom: 20px;
    }
    .my-input i
    {
    color: rgba(169, 169, 169, 0.8);
    font-size: 14px;
    line-height: 23px;

    }
    .my-input input
    {
    width: 85%;
    height: 35px;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 23px;
    color: rgba(169, 169, 169, 0.8);
    padding: 0 10px;
    border: none;
    outline: none;
    background: transparent;
    }
}
</style>
