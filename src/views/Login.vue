<template lang="">
    <div class="form-wrap">
        <form class="login">
            <p class="login-register">
                Vocé ainda não tem conta ?
                <router-link class="router-link" :to="{ name : 'Register' }" >Registre-se aqui</router-link>
            </p>
            <h2>Login Anime On Fire</h2>
            <div class="inputs">
                <div class="input">
                    <input type="text" placeholder="Email" v-model="email">
                    <i class="icon fa-regular fa-envelope"></i>
                </div>
                <div class="input">
                    <input type="text" placeholder="senha" v-model="senha">
                    <i class="icon fa-solid fa-key"></i>
                </div>
            </div>
            <router-link class="forgot-password" :to="{ name:'ForgotPassword'}">Esqueci minha senha</router-link>
            <button class="logar" @click.prevent="signIn">Entrar</button>
            <div class="angle"></div>
        </form>
        <div class="background"></div>
    </div>
</template>
<script>

export default {
    name: "Login",
    data() {
        return {
            email: null,
            senha: null,
        };
    },
    methods: {
        signIn() {
            firebase.auth().signInEmailAndPassword(this.email, this.password).then(() => {
                this.$router.push({ name: "Home"})
                this.error = false;
                this.erroMsg = ""
                console.log(firebase.auth().correntUser.uid)
            }).catch(err => {
                this.error = true;
                this.erroMsg = err.message;
            })
        },
    },
}
</script>
<style lang="scss">
.form-wrap {
    overflow: hidden;
    display: flex;
    height: 100vh;
    justify-content: center;
    margin: 0 auto;
    width: 90%;

    @media (min-width: 900px) {
        width: 100%;
    }

    .login-register {
        margin-bottom: 32px;

        .router-link {
            color: #000;
        }
    }

    form {
        padding: 0 10px;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1;

        @media(min-width: 900px) {
            padding: 0 50px;
        }

        h2 {
            text-align: center;
            font-size: 32px;
            color: #303030;
            margin-bottom: 40px;

            @media(min-width: 900px) {
                font-size: 40px;
            }
        }

        .inputs {
            width: 100%;
            max-width: 350px;

            .input {
                position: relative;
                display: flex;
                justify-content: center;
                align-items: center;
                margin-bottom: 8px;

                input {
                    width: 90%;
                    border: none;
                    background-color: #f2f7f6;
                    padding: 4px 4px 4px 3px;
                    padding-left: 10px;
                    height: 50px;

                    &:focus {
                        outline: auto;
                    }
                }

                .icon {
                    width: 12px;
                    position: absolute;
                    right: 6px;
                    margin: 20px;
                }
            }
        }

        .forgot-password {
            text-decoration: none;
            color: #000;
            cursor: pointer;
            font-size: 14px;
            margin: 16px 0 32px;
            border-bottom: 1px solid transparent;
            transition: 0.5s ease all;

            &:hover {
                border-color: #303030;
            }
        }
    }
}

input::placeholder {
    padding-left: 30px;
    margin-left: 50px;
    text-size-adjust: 20px;
}


.logar {
    width: 100px;
    height: 50px;
    border-radius: 15px;
    font-size: 20px;
    font-weight: 500;
    transition: 0.5s ease all;

    &:hover {
        background-color: #303030;
        color: #f2f7f6;
    }
}

.angle {
    display: none;
    position: absolute;
    background-color: #fff;
    transform: rotateZ(3deg);
    width: 70px;
    height: 101%;
    right: -30px;

    @media (min-width: 900px) {
        display: initial;
    }
}
.background {
    display: none;
    align-items: center;
    flex: 2;
    background-size: cover;
    background-image: url("@/assets/wallpapers/animecena.jpg");
    width: 100%;
    height: 100%;
    @media(min-width:  900px) {
        display: initial;
    }
}

</style>