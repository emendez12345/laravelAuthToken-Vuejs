<template>
    
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
                <div class="container-fluid">
                  <a class="navbar-brand" href="#">{{ title }}</a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarColor01">
                    <ul class="navbar-nav me-auto" v-if="!user">
                      <li class="nav-item">
                        <router-link class="nav-link active" to="/">Login
                          <span class="visually-hidden">(current)</span>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link class="nav-link" to="register">Registro</router-link>
                      </li>
                    </ul>
                      <ul class="navbar-nav me-auto" v-if="user">
                      <li class="nav-item">
                     <a href="javascript:void(0)" @click="cerrarSesion" class="nav-link">Logout</a>
                      </li>
            
                    </ul>
                
                  </div>
                </div>
              </nav>

</template>
<script>
export default {
    name:'Header',
    props:{
            title:String,

    }
}
</script>

<style>

</style>