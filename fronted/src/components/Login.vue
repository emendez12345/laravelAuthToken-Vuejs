<template>
    <div class="container">
        <div class="row">
            <div class="col-md-6">

             <div class="alert alert-danger mt-4" v-if="errors.length">
                    <ul class="mb-0">
                           <li v-for="(error, index) in errors" :key="index">
                                   {{ error }}  
                           </li>
                    </ul>
             </div>

                <form @submit.prevent="saveUser" novalidate>
                    <fieldset>
                       
            
                        <div class="form-group">
                            <label class="form-label mt-4">Email</label>
                            <input type="text" class="form-control" v-model="newUser.email"
                            placeholder="Enter Email">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Contraseña</label>
                            <input type="password" class="form-control" v-model="newUser.password"
                            placeholder="Enter Password">
                        </div>

                        <button class="btn btn-primary mt-4">INICIAR SESION</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';

export default {
    name:'Add',
    data(){

        return{
             newUser:{},
             email:'',
             password:'',
             errors:[]
        }
          
    },
 /*    mounted(){
            if(localStorage.getItem('token')){
                this.saveUser();
            }else{
                this.$router.push("/login");
            }
    },*/
    methods:{
       async saveUser(){
            this.errors=[];
            if(!this.newUser.email){
                this.errors.push('Email is required')
            }
             if(!this.newUser.password){
                this.errors.push('Password is required')
            }
            if (!this.errors.length) {
                let formData = new FormData();
                formData.append('email',this.newUser.email);
                formData.append('password',this.newUser.password);

             let url ='http://127.0.0.1:8000/api/login';
             await axios.post(url, formData).then((response)=>{
                console.log(response);
                if(response.status==200){
                    //alert(response.data.message);
                      Swal.fire({
                        title: response.data.message,
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    localStorage.setItem('token',response.data.token);
                    localStorage.setItem('name',response.data.user.name);
                    this.$router.push('/user');
                    this.newUser.email='',
                    this.newUser.password='';
                   // alert(response.data.messages);

                 


               //     this.$router.push("/");
    
                       
                   }else{
                     //   console.log('error');

                   }
             }).catch(error=>{
                 this.errors.push(error.response);
             });
            }
        },
     
    },
  
}
</script>