<template>
    <div class="login">
        <input type="text" placeholder="email">
        <input type="text" placeholder="password">
        <div class="clear"></div>
        <button>Simpan</button>
    </div>
</template>

<script>
export default {
    name: 'Login'
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
