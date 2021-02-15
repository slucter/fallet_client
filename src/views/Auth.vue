<template>
    <div>
        <div class="wrap-auth">
            <div class="left-auth">
                <h1 @click="$router.push('/')">Zwallet</h1>
                <div class="img-auth">
                    <img  src="../../public/img/src/png-phone.png" alt="1" class="mtrx1">
                    <img src="../../public/img/src/png-phone2.png" alt="2" class="mtrx2">
                </div>
                <h2>App that Covering Banking Needs.</h2>
                <p>Zwallet is an application that focussing in banking needs for all users<br>
                    in the world. Always updated and always following world trends.<br>
                    5000+ users registered in Zwallet everyday with worldwide<br>
                    users coverage.
                </p>
            </div>
             <router-view />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Authpage',
  mounted() {
    if (localStorage.token) {
      this.$router.push('/home/dashboard');
    }
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

.wrap-auth
{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.left-auth
{
    flex: 1.1;
    display: flex;
    flex-direction: column;
    height: 100%;
    background: #6379F4;
    padding: 50px 140px;
    position: relative;
    justify-content: space-between;
}
.left-auth h1 {
    cursor: pointer;
}
.left-auth::after
{
    content: '';
    position: absolute;
    width: 100%;
    height: 90%;
    top: 10%;
    left: 0;
    background: url('../../public/img/src/Vector4.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.left-auth::before
{
    content: '';
    position: absolute;
    width: 100%;
    height: 40%;
    top: 10%;
    left: 0;
    background: url('../../public/img/src/Vector3.png');
    background-repeat: no-repeat;
    background-size: cover;
}
.left-auth h1
{
    font-style: normal;
    font-weight: bold;
    font-size: 29px;
    color: #fff;
    position: relative;
    z-index: 5;
}
.img-auth
{
    display: flex;
    width: 100%;
    height: 536.47px;
    justify-content: flex-start;
    margin: 10px 0;
    position: relative;
    z-index: 5;
    /* background-color: burlywood; */
    /* position: relative; */
}
.mtrx1
{
    position: relative;
    right: -60px;
    transform: matrix(0.99, -0.13, 0.13, 0.99, 0, 0);
}
.mtrx2
{
    position: relative;
    left: -60px;
    transform: matrix(0.99, 0.16, -0.16, 0.99, 0, 0);
}
.img-auth img{
    width: 278.51px;
    height: 536.47px;
    /* position: absolute; */
    /* left: 0; */
}
.left-auth h2
{
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    color: #fff;
    position: relative;
    z-index: 5;
}
.left-auth p
{
    font-style: normal;
    font-weight: 400;
    text-align: justify;
    font-size: 16px;
    color: #fff;
    margin: 0px 0;
    position: relative;
    z-index: 5;
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
