import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bcrumb: {
      rootpage: null,
      activepage: null
    },
    diagnostics: {
        testSelections: false,
        viewTest: false,
        viewProfile: false
    },
    api: {
      diagnostics: 'http://localhost:3000/api/diagnostics'
    }
  },
  mutations: {
    SetBreadCrumbActivePage ( state, data ) {
      state.bcrumb.activepage = data.pagename;
    }
  },
  actions: {},
  modules: {}
});
