<template>
    <div class="login">
        <input v-model="email" type="text" placeholder="email">
        <input v-model="password" type="text" placeholder="password">
        <div class="clear"></div>
        <button @click="loginUser()">Login</button>
    </div>
</template>

<script>
export default {
    name: 'Login',
    methods: {
        loginUser() {
            console.log('Login user')
            axios.post('http://localhost:3000/api/users/signin', {
                email: this.email,
                password: this.password
            }, function(err, response){
                //
            })
        }
    }
}
</script>

<style>
    .clear {
        clear: both;
    }
    .login {
        margin: 0 auto;
        width: 500px;
        border: thin solid grey;
    }
    input[type="text"] {
        font-size: 20px;
        margin: 10px;
        width: 80%;
        float: left;
    }
</style>
