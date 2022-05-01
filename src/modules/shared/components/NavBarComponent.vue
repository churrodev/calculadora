<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="../../../assets/logo.png" width="100%" alt="">AdsPro
            </a>
            
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            </ul>
            <span class="navbar-text">
                <router-link to="profile">Perfil</router-link> |
                <router-link to="#">Cerrar Sesión</router-link>
            </span>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "NavbarComponent"
}
</script>

<style>

</style>