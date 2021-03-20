import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard.vue";
import Diagnostics from "../views/Diagnostics.vue";
import AddTests from "../components/diagnostics/AddTests.vue";
import TestBox from "../components/diagnostics/TestBox.vue";
import Profiles from "../components/diagnostics/Profiles.vue";
import AddProfiles from "../components/diagnostics/AddProfiles.vue";
import Categories from "../components/diagnostics/Categories.vue";
import AddCategories from "../components/diagnostics/AddCategories.vue";
import Conditions from "../components/diagnostics/Conditions.vue";
import AddConditions from "../components/diagnostics/AddConditions.vue";
import Specialities from "../components/diagnostics/Specialities.vue";
import AddSpecialities from "../components/diagnostics/AddSpecialities.vue";
import Organs from "../components/diagnostics/Organs.vue";
import AddOrgans from "../components/diagnostics/AddOrgans.vue";





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
      {
        path: "/diagnostics/categories",
        name: "categories",
        component: Categories
      },
      {
        path: "/diagnostics/addcategories",
        name: "addcategories",
        component: AddCategories
      },
      {
        path: "/diagnostics/conditions",
        name: "conditions",
        component: Conditions
      },
      {
        path: "/diagnostics/addconditions",
        name: "addconditions",
        component: AddConditions
      },
      {
        path: "/diagnostics/specialities",
        name: "specialities",
        component: Specialities
      },
      {
        path: "/diagnostics/addspecialities",
        name: "addspecialities",
        component: AddSpecialities
      },
      {
        path: "/diagnostics/organs",
        name: "organs",
        component: Organs
      },
      {
        path: "/diagnostics/addorgans",
        name: "addorgans",
        component: AddOrgans
      },
      

    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
