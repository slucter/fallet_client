<template>
  <div>
    <div class="right-auth">
      <h1>
        Secure Your Account, Your Wallet, and Your Data With 6 Digits PIN That
        You Created Yourself.
      </h1>
      <p>
        Create 6 digits pin to secure all your money and your data in Zwallet
        app. Keep it secret and don’t tell anyone about your Zwallet account
        password and the PIN.
      </p>
      <form class="my-form-group" @click.prevent="updatePin">
        <!-- <div class="pin-input">
          <input type="text" maxlength="1" placeholder="0"
          v-model.trim="$v.pin.a.$model"/>
          <input type="text" maxlength="1" placeholder="0"
          v-model.trim="$v.pin.a.$model"/>
          <input type="text" maxlength="1" placeholder="0"
          v-model.trim="$v.pin.a.$model"/>
          <input type="text" maxlength="1" placeholder="0"
          v-model.trim="$v.pin.a.$model"/>
          <input type="text" maxlength="1" placeholder="0"
          v-model.trim="$v.pin.a.$model"/>
        </div> -->
        <Pincode v-model.trim="$v.pins.$model" placeholder="0" :length="parseInt(5)" />
        <button type="submit" id="signin">Confirm</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required } from 'vuelidate/lib/validators';
import Pincode from 'vue-pincode-input';
import jwt from 'jsonwebtoken';
import { TYPE } from 'vue-toastification';

export default {
  name: 'updatePin',
  components: {
    Pincode,
  },
  data() {
    return {
      pin: {
        a: '',
        b: '',
        c: '',
        d: '',
        e: '',
      },
      pins: '',
    };
  },
  methods: {
    updatePin() {
      // eslint-disable-next-line no-unused-vars
      jwt.verify(localStorage.pinSession, process.env.VUE_APP_JWTKEY, (err, result) => {
        if (err) {
          this.$toast('Network Error', {
            type: TYPE.ERROR,
          });
        } else {
          this.$store.dispatch('Auth/makePin', { pins: this.pins }).then((rslt) => {
            const r = rslt.data.result;
            if (r.message === 'Success Update Pin!') {
              this.$toast('Welcome !', {
                type: TYPE.SUCCESS,
              });
              localStorage.setItem('token', localStorage.pinSession);
              localStorage.removeItem('pinSession');
              setTimeout(() => {
                this.$router.push('/home/dashboard');
              }, 2000);
            } else {
              console.log('error');
            }
          }).catch((error) => {
            console.log(error);
          });
        }
      });
    },
  },
  mounted() {
    if (!localStorage.pinSession) {
      this.$router.push('/auth/signin');
    }
  },
  validations: {
    pins: {
      required,
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
.vue-pincode-input-wrapper
{
    width: 40%;
    height: 65px;
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
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
