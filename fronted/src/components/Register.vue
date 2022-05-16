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

                <form @submit.prevent="saveRegister" novalidate>
                    <fieldset>
                       
            
                        <div class="form-group">
                            <label class="form-label mt-4">Nombre</label>
                            <input type="text" class="form-control"  v-model="newRegister.name"
                            placeholder="Enter Article Name">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Email</label>
                            <input type="text" class="form-control" v-model="newRegister.email"
                            placeholder="Enter Email">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Contraseña</label>
                            <input type="password" class="form-control" v-model="newRegister.password"
                            placeholder="Enter Password">
                        </div>
                        <div class="form-group">
                            <label class="form-label mt-4">Confirmar Contraseña</label>
                            <input type="password" class="form-control" v-model="newRegister.password_confirmation"
                            placeholder="Enter Confirmation">
                        </div>

                        <button class="btn btn-primary mt-4">CREAR</button>
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
             newRegister:{},
             name:'',
             email:'',
             password:'',
             password_confirmation:'',
             errors:[]
        }
          
    },

    methods:{
       async saveRegister(){
            this.errors=[];
              if(!this.newRegister.name){
                this.errors.push('Name is required')
            }
            if(!this.newRegister.email){
                this.errors.push('Email is required')
            }
             if(!this.newRegister.password){
                this.errors.push('Password is required')
            }
             if(!this.newRegister.password_confirmation){
                this.errors.push('Password is required')
            }
            if (!this.errors.length) {
                let formData = new FormData();
                formData.append('name',this.newRegister.name);
                formData.append('email',this.newRegister.email);
                formData.append('password',this.newRegister.password);
                formData.append('password_confirmation',this.newRegister.password_confirmation);
             let url ='http://127.0.0.1:8000/api/register';
             await axios.post(url, formData).then((response)=>{
                console.log(response);
                if(response.status==201){
                    //alert(response.data.message);
                    this.newRegister.name='',
                    this.newRegister.email='',
                    this.newRegister.password='';
                    this.newRegister.password_confirmation='',
                   // alert(response.data.messages);

                    Swal.fire({
                        title: response.data.message,
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })


                    this.$router.push("/");
    
                       
                   }else{
                     //   console.log('error');

                   }
             }).catch(error=>{
                 this.errors.push(error.response);
             });
            }
        }
    }
}
</script>