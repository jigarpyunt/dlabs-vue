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
import Specialities from "../components/diagnostics/Specialities.vue";
import AddSpecialities from "../components/diagnostics/AddSpecialities.vue";
import Methadology from "../components/diagnostics/Methadology.vue";
import AddMethadology from "../components/diagnostics/AddMethadology.vue";





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
        path: "/diagnostics/methadologies",
        name: "methadologies",
        component: Methadology
      },
      {
        path: "/diagnostics/addmethadologies",
        name: "addmethadologies",
        component: AddMethadology
      },
      

    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
