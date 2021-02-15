<template>
  <div>
    <div class="right-auth">
      <h1>
        Did You Forgot Your Password?<br />
        Don’t Worry, You Can Reset Your<br />
        Password In a Minutes.<br />
      </h1>
      <p>
        To reset your password, you must type your e-mail and we will send a
        link to your email and you will be directed to the reset password
        screens.
      </p>
      <form class="my-form-group">
        <div class="my-input"
        :class="{ 'my-input-invalid' : $v.email.$error}">
          <i class="far fa-envelope iconi"></i>
          <input class="taii" type="email" placeholder="Enter e-mail"
          v-model.trim="$v.email.$model"/>
        </div>
        <button type="submit"
        :disabled="$v.$invalid"
        :class="{ 'btnCondition' : $v.$invalid}"
        id="signin">Confirm</button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators';

export default {
  name: 'forgotPw',
  data() {
    return {
      email: '',
    };
  },
  validations: {
    email: {
      required,
      email,
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
