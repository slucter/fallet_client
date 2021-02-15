import Vue from 'vue';
import VueRouter from 'vue-router';
import LP from '../views/LandingPage.vue';
import Auth from '../views/Auth.vue';
import Signin from '../components/module/Signin.vue';
import Signup from '../components/module/Signup.vue';
import Forgot from '../components/module/ForgotPassword.vue';
import ChangePw from '../components/module/ChangePassword.vue';
import UpdatePin from '../components/module/UpdatePin.vue';
import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import History from '../views/History.vue';
import Transfer from '../views/Transfer.vue';
import TransferNext from '../views/TransferNext.vue';
import Confirm from '../views/Confirmation.vue';
import StatusTrx from '../views/StatusTrx.vue';
import Verify from '../views/Verify.vue';
import TopUp from '../views/TopUp.vue';
import Profile from '../views/Profile.vue';
import PersonalInfo from '../views/PersonalUser.vue';
import ManagePhone from '../views/ManagePhone.vue';
import ChangeNewPw from '../views/ChangePassword.vue';
import ChangeNewPin from '../views/ChangePin.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: LP,
  },
  {
    path: '/verify/:key',
    name: 'Verify',
    component: Verify,
  },
  {
    path: '/auth',
    name: 'Auth',
    component: Auth,
    children: [
      {
        path: '/auth/signin',
        name: 'Signup',
        component: Signin,
      },
      {
        path: '/auth/signup',
        name: 'Signin',
        component: Signup,
      },
      {
        path: '/auth/forgot-password',
        name: 'ForgotPassword',
        component: Forgot,
      },
      {
        path: '/auth/new-password',
        name: 'NewPassword',
        component: ChangePw,
      },
      {
        path: '/auth/update-pin',
        name: 'UpdatePin',
        component: UpdatePin,
      },
    ],
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/home/dashboard',
        name: 'Dashboard',
        component: Dashboard,
      },
      {
        path: '/home/history',
        name: 'History',
        component: History,
      },
      {
        path: '/home/transfer',
        name: 'Transfer',
        component: Transfer,
      },
      {
        path: '/home/transfer/fields',
        name: 'TransferNext',
        component: TransferNext,
      },
      {
        path: '/home/transfer/confirm',
        name: 'Confirm',
        component: Confirm,
      },
      {
        path: '/home/transfer/status',
        name: 'StatusTrx',
        component: StatusTrx,
      },
      {
        path: '/home/topup',
        name: 'TopUp',
        component: TopUp,
      },
      {
        path: '/home/profile',
        name: 'Profile',
        component: Profile,
      },
      {
        path: '/home/profile/personal-info',
        name: 'PersonalInfo',
        component: PersonalInfo,
      },
      {
        path: '/home/profile/manage-phone',
        name: 'ManagePhone',
        component: ManagePhone,
      },
      {
        path: '/home/profile/change-password',
        name: 'ChangeNewPassword',
        component: ChangeNewPw,
      },
      {
        path: '/home/profile/change-pin',
        name: 'ChangeNewPin',
        component: ChangeNewPin,
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
