<template lang="">
    <div class="reset-password">
    <Modal v-if="modalActive" v-on:close-modal="closeModal" />
    <Loading v-if="loading" />
    <div class="form-wrap">
        <form class="reset">
            <p>
                Vocé já tem conta ?
                <router-link class="router-link" :to="{ name : 'Login' }" >Login</router-link>
            </p>
            <h2 class="ajusteh2">Esqueceu sua senha?</h2>
            <h3 class="forgot">Digite seu email que lhe enviaremos sua senha.</h3>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <i class="icon fa-regular fa-envelope"></i>
                </div>
            </div>
            <button class="logar">Continuar</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</div>
</template>
<script>
import Modal from "@/components/Modal.vue"
import Loading from "@/components/Loading.vue"
export default {

    name: "ForgotPassword",
    components: {
        Modal , Loading
    },
    data() {
        return {
            email: null,
            modalActive: false,
            modalMessage: "",
            Loading: null,
        };
    },
    methods: {
        closeModal() {
            this.modalActive = !this.modalActive;
            this.email = "";
        }
    }
}
</script>
<style lang="scss" scoped>
.ajusteh2 {
    max-width: 450px;
    margin-bottom: 0px;
    margin: 0;
    align-items: center;
    text-align: center;
}
p{
    text-align: center;
}
button {
    margin-top: 20px;
}
.forgot{
    margin-top: 10px;
    margin-bottom: 10px;
    align-items: center;
    text-align: center;
}


</style>