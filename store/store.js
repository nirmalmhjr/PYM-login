import { defineStore } from "pinia";

export const useLoginStore = defineStore("login", {
  state: () => ({
    // isLogin: false,
    isAdmin: false,
    // token:''
  }),
  actions: {
   /*  loginStatus(value) {
      if (value) {
        this.isLogin = true;
      } else {
        this.isLogin = false;
    }
    // console.log('from pinia action',this.isLogin);
  }, */
  saveToken(token){
    this.token = token

  }
}
})
