<template>
<div>

      <div class="users">
      <p>Usuario Logeado: {{name}} <a href="javascript:void(0);" v-on:click="cerrarSesion()">Salir</a></p>
     <h1>
         COMPONENTE USER CICLO FOR PARA LISTAR LOS DATOS Y UN 
         FORMULARIO PARA CREAR UN USUARIO NUEVO 
     </h1>
     
      <ul>
           <li v-for="user in users " v-bind:key="user.id" v-bind:task="user">
                 {{user.name}} - {{user.email}}
           </li>  
      </ul>
      
      <form v-on:submit.prevent="addUser">
            <input type="text" v-model="newUser.name" placeholder="Name">
            <input type="email" v-model="newUser.email" placeholder="Email">
            <button type="submit">
                  Add
            </button>
      </form>

      
     </div>
     <hr>
     <div class="users">

     
     <h1>
         LISTA DE DATOS PERO CON UN BOTON DE ELIMINAR
     </h1>
     
      <ul>
           <li v-for="user in users " v-bind:key="user.id" v-bind:task="user">
                 {{user.name}} - {{user.email}} 
                 <button v-on:click="deleteUser(user)">X</button>
           </li>  
      </ul>
      
     </div>


</div>
 
   
 
</template>

<script>
import {Global}from'global';
import axios from 'axios';
import Swal from 'sweetalert2';
export default {
      data(){
            return{
                  users:[
                        {
                         name:'Edwin',
                         email:'edmendez@gmail.com',
                         contacted:false
                        },
                         {
                         name:'Lina',
                         email:'lina12@gmail.com',
                         contacted:true
                        },
                         {
                         name:'Mary',
                         email:'mary24@gmail.com',
                         contacted:false
                        }   
                  ],
                  newUser:{},

                  name:''
            }
      },
      mounted(){
           if(localStorage.getItem('token'))
           {
                 this.addUser();
                 this.name=localStorage.getItem('name');
           }else
           {
                 this.$router.push('/');
           }
      },

      methods:{
           
            addUser(e){
                  //e.preventDefault();
                  this.users.push(this.newUser);
                  this.newUser={}
                  console.log(this.users);
            },
            deleteUser(user){
                  this.users.splice(this.users.indexOf(user),1);
                  alert('Eliminando');
            },
            cerrarSesion(){
                  
                  localStorage.clear();
                     Swal.fire({
                        title: 'Cierre de sesion',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                  this.$router.push("/");

                //  localStorage.removeItem();

        /*       let config = {
                Headers:{
                 token: localStorage.getItem(token)
                },
             };
             let url ='http://127.0.0.1:8000/api/logout';
             await axios.get(url,config).then((response)=>{
                   
                   console.log(response);
                   if(response.status==200){
                   localStorage.setItem('token',response.data.token);
                   alert(response.data.message);
                   localStorage.clear();
                 //localStorage.removeItem(nombreDelLocal);
                    this.$router.push("/");
                   }
            }).catch(error=>{
                      console.log(error);
             });*/
      }
      }
}

</script>

<style lang="css">

    .users{
          background: #333;
          color:#fff;
          padding:20px;
    }

</style>