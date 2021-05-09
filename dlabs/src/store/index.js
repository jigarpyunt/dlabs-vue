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
        viewProfile: false,
        data: {
          viewTest: null
        }
    },
    api: {
      diagnostics: 'http://localhost:3000/api/diagnostics'
    }
  },
  getters: {
    getViewTest: state => {
      return state.diagnostics.data.viewTest
    }
  },
  mutations: {
    SetBreadCrumbActivePage ( state, data ) {
      state.bcrumb.activepage = data.pagename;
    },
    SetViewTestData ( state, data ) {
      state.diagnostics.data.viewTest = data
    }
  },
  actions: {
    ViewTestData( context, data ) {
      context.commit('SetViewTestData' , data);
    }
  },
  modules: {}
});
