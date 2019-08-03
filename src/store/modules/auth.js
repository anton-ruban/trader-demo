import authApi from '@/api/authApi';
// initial state
const state = {
  signUpTabs: {
    selectedTabId: 'tab-0',
    tabs: [
      {tabName: '手机汪册', id: 'tab-0'},
      {tabName: '邮箱注册', id: 'tab-1'}
    ]
  },
  phoneSignUp: {
    phoneNumber: '',
    phoneVerificationCode: '',
    password: '',
    confirmPassword: '',
    inviteCode: '',
  },
  mailSignUp: {
    email: '',
    emailVerificationCode: '',
    password: '',
    confirmPassword: '',
    inviteCode: ''
  },
  authInfo: JSON.parse(localStorage.getItem('authInfo')) || {}
}

// getters
const getters = {
}

// actions
const actions = {
  // eslint-disable-next-line no-empty-pattern
  sendVerificationCodeToEmail: ({}, email) => {
    return new Promise(async (resolve, reject) => {
      try {
        await authApi.sendVerificationCodeToEmail(email);
        resolve();
      } catch (e) {
        reject(e);
      }
    })
  },
  // eslint-disable-next-line no-empty-pattern
  register: ({}, payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await authApi.register(payload);

        if (res.data.result !== 'false') {
          resolve();
        } else {
          reject(res.data.msg);
        }
      } catch (e) {
        reject(e);
      }
    })
  },
  // eslint-disable-next-line no-empty-pattern
  login: ({commit}, payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await authApi.login(payload);

        if (res.data.result !== 'false') {
          const authInfo = {
            id: res.data.id,
            username: payload.email,
            password: payload.pwd,
            isGoogle: res.data.isGoogle
          }
          localStorage.setItem('authInfo', JSON.stringify(authInfo));
          commit('updateAuthInfo', authInfo);
          resolve();
        } else {
          reject(res.data.msg);
        }
      } catch (e) {
        reject(e);
      }
    })
  },
  // eslint-disable-next-line no-empty-pattern
  changePassword: ({}, payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await authApi.alterPWD(payload);

        if (res.data.result !== 'false') {
          resolve();
        } else {
          reject(res.data.msg);
        }
      } catch (e) {
        reject(e);
      }
    })
  },
  // eslint-disable-next-line no-empty-pattern
  emailVerify: ({commit, state}, payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await authApi.verifyCode(payload);

        if (res.data.result !== 'false') {
          if (!state.authInfo.isGoogle || state.authInfo.isGoogle === 'n') {
            const newAuthInfo = {
              ...state.authInfo,
              isLoggedIn: true,
            };
            localStorage.setItem('authInfo', JSON.stringify(newAuthInfo));
            commit('updateAuthInfo', newAuthInfo)
          }
          resolve();
        } else {
          reject(res.data.msg);
        }
      } catch (e) {
        reject(e);
      }
    })
  },
  gAuthFirstBind: ({commit, state}, payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await authApi.gAuthFirstBind(payload);

        if (res.data.result !== 'false') {
          const newAuthInfo = {
            ...state.authInfo,
            isGoogle: "y"
          };
          localStorage.setItem('authInfo', JSON.stringify(newAuthInfo));
          commit('updateAuthInfo', newAuthInfo)
          resolve();
        } else {
          reject(res.data.msg);
        }
      } catch (e) {
        reject(e);
      }
    })
  },
  // eslint-disable-next-line no-empty-pattern
  gAuthVerify: ({commit, state}, payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await authApi.gAuthVerify(payload);

        if (res.data.result !== 'false') {
          const newAuthInfo = {
            ...state.authInfo,
            isLoggedIn: true,
          };
          localStorage.setItem('authInfo', JSON.stringify(newAuthInfo));
          commit('updateAuthInfo', newAuthInfo)
          resolve();
        } else {
          reject(res.data.msg);
        }
      } catch (e) {
        reject(e);
      }
    })
  },
  // eslint-disable-next-line no-empty-pattern
  getGAuthQrCode:({}, payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await authApi.getGAuthQrCode(payload);

        if (res.data.result !== 'false') {
          resolve(res.data);
        } else {
          reject(res.data.msg);
        }
      } catch (e) {
        reject(e);
      }
    })
  },
  closeGoogle: ({commit, state}, payload) => {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await authApi.closeGoogle(payload);

        if (res.data.result !== 'false') {
          const newAuthInfo = {
            ...state.authInfo,
            isGoogle: "n"
          };
          localStorage.setItem('authInfo', JSON.stringify(newAuthInfo));
          commit('updateAuthInfo', newAuthInfo)
          resolve(res.data);
        } else {
          reject(res.data.msg);
        }
      } catch (e) {
        reject(e);
      }
    })
  }
}

// mutations
const mutations = {
  selectSignUpTab(state, tabId) {
    state.signUpTabs.selectedTabId = tabId;
  },
  updateAuthInfo(state, value) {
    state.authInfo = value;
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
