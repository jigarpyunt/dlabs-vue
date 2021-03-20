import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Diagnostics from "../views/Diagnostics.vue";
import AddTests from "../components/diagnostics/AddTests.vue";
import TestBox from "../components/diagnostics/TestBox.vue";
import Profiles from "../components/diagnostics/Profiles.vue";
import AddProfiles from "../components/diagnostics/AddProfiles.vue";





Vue.use(VueRouter);

const routes = [
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard
  },
  {
    path: "/diagnostics",
    name: "diagnostics",
    component: Diagnostics,
    children: [
      {
        path: "/diagnostics/tests",
        name: "tests",
        component: TestBox
      },
      {
        path: "/diagnostics/addtests",
        name: "addtests",
        component: AddTests
      },
      {
        path: "/diagnostics/profiles",
        name: "profiles",
        component: Profiles
      },
      {
        path: "/diagnostics/addprofiles",
        name: "addprofiles",
        component: AddProfiles
      },
      

    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
