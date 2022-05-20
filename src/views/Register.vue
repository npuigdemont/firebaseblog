<template>
 <div class="form-wrap">
      <form class="register">
          <p class="login-register">
              Alredy have an account? 
              <router-link class="router-link" :to="{name: 'Login'}">Login </router-link>
          </p>
          <h2>Create your Fireblog account</h2>
          <div class="inputs">
                  <div class="input">
                  <input type="text" placeholder="First Name" v-model="firstName">
                  <b-icon icon="person" class="icon" scale="1"></b-icon>
              </div>
                  <div class="input">
                  <input type="text" placeholder="Last Name" v-model="lastName">
                  <b-icon icon="person" class="icon" scale="1"></b-icon>
              </div>
                  <div class="input">
                  <input type="text" placeholder="Username" v-model="username">
                  <b-icon icon="person" class="icon" scale="1"></b-icon>
              </div>
              <div class="input">
                  <input type="email" placeholder="Email" v-model="email">
                  <b-icon icon="envelope" class="icon" scale="1"></b-icon>
              </div>
               <div class="input">
                  <input type="password" placeholder="Password" v-model="password">
                  <b-icon icon="file-lock" class="icon" scale="1"></b-icon>
              </div>
              <div v-show="error" class="error">{{this.errorMessage}}</div>
          </div>
          
        <button @click.prevent="register">Sign up </button>
        <div class="angle"></div>
      </form>
    <div class="background"></div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import db from "../firebase/firebaseInit";

export default {
    name: 'Register',
    data() {
        return {
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            error: "",
            errorMessage: ""
        }
    },
  methods: {
    async register() {
      if (
        this.email !== "" &&
        this.password !== "" &&
        this.firstName !== "" &&
        this.lastName !== "" &&
        this.username !== ""
      ) {
        this.error = false;
        this.errorMessage = "";
        //enviem les dades a firebase
        const firebaseAuth = await firebase.auth();
        const createUser = await firebaseAuth.createUserWithEmailAndPassword(this.email, this.password);
        const result = await createUser;
        const dataBase = db.collection("users").doc(result.user.uid);
       /* firebase.auth().createUserWithEmailAndPassword(email , password)
    .then((result)=>{
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })*/
        //afegim els paràmetres de nom 
        await dataBase.set({
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          email: this.email,
        });
        //enviem a l'usuari a la pàgina inicial
        this.$router.push({name: 'home'})
        return;
      } this.error = true;
        this.errorMessage = "Please fill all the fields!";
        return;
    }
  }
}
</script>

<style lang="scss" scoped>
.register {
  h2 {
    max-width: 350px;
  }
}
</style>