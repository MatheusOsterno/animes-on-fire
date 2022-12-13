<template lang="">
<div class="form-wrap">
        <form class="register">
            <p class="login-register">
                Vocé já tem conta ?
                <router-link class="router-link" :to="{ name : 'Login' }" >Login</router-link>
            </p>
            <h2>Crie sua conta</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Nickname" v-model="user">
                    <i class="icon fa-regular fa-user"></i>
                </div>
                <div class="input">
                    <input type="text" placeholder="Email" v-model="password">
                    <i class="icon fa-regular fa-envelope"></i>
                </div>
                <div class="input">
                    <input type="text" placeholder="senha" v-model="senha">
                    <i class="icon fa-solid fa-key"></i>
                </div>
                <div v-show="error" class="error">{{this.errorMsg}}</div>
            </div>
            <button class="logar" @click="register">Continuar</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>
<script>
import { ref } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useRouter } from 'vue-router';
const router = useRouter
const email = ref("");
const password = ref("");
const register = () => {
    createUserWithEmailAndPassword (getAuth(), email.value, password.value)
    .then((data) => {
        console.log("Conta AnimeOnFire criada");
        router.push('/blog')
    })
    .catch((error)  => {
        console.log(error.code);
        alert(error.message)
    })
};
const singInWithGoogle = () => {
    
}
export default {
    name: "register",
    data() 
    { return{
        user: "",
        email: "",
        senha: "",
        error: null,
        errorMsg: "",
        };
    },
    // methods: {
    //     async register () {
    //         if (
    //             this.user !== "" &&
    //             this.email !== "" &&
    //             this.senha !== ""
    //         ) {
    //         }
    //         this.error = true;
    //         this.errorMsg = "Por favor preencha todos os campos!";
    //         return;
    //     },
    // },
}
</script>
<style lang="scss" scoped>
.register {
    h2 {
        max-width: 350px;
    }
}
button{
    margin-top: 20px;
}
    
</style>