<template>
    <div class="register">
        <p v-if="notif">{{ notif }}</p>
        <input v-model="username" type="text" placeholder="Username...">
        <input v-model="password" type="text" placeholder="Password...">
        <input v-model="fullname" type="text" placeholder="Fullname...">
        <input v-model="email" type="text" placeholder="Email..">
        <div class="clear"></div>
        {{ username }}
        <button @click="registrationUser()">Simpan</button>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data () {
        return {
            notif: '',
            username: '',
            password: '',
            fullname: '',
            email: '',
        }
    },
    methods: {
        registrationUser () {
            console.log('Register user dijalankan')
            axios.post('http://localhost:3000/api/users/register', {
                username: this.username,
                password: this.password,
                fullname: this.fullname,
                email: this.email,
                url: this.url
            }, function(err, response){
                if(err){
                    console.log(err)
                } else {
                    this.notif = 'Anda berhasil terdaftar'
                    let dataResponse = response.data.data
                    console.log(dataResponse)
                }
            })
        }
    }
}
</script>

<style>
    .clear {
        clear: both;
    }
    .register {
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
