<template>
  <v-col cols="12" class="d-flex justify-center py-1">
      <div class="col-10">
          <p style="color:#49B767;">Register marketing consultant</p>

        <v-form
    ref="form"
    v-model="valid"
    lazy-validation
    class="mt-4 col-5"
   
  >

<div   class="d-flex ">
<p class="mt-2 ">Firstname</p>

    <v-text-field
      v-model="email"
      :rules="emailRules"
     placeholder="Adeleke"
     dense
      required
         background-color="#Fff"
      outlined
      class=" ml-4"
    ></v-text-field>

</div>
<div   class="d-flex ">
<p class="mt-2">Lastname</p>

    <v-text-field
      v-model="email"
      :rules="emailRules"
    placeholder="Abiodun"
     dense
      required
         background-color="#Fff"
      outlined
      class="col-6 ml-4"
    ></v-text-field>

</div>
<div   class="d-flex ">
<p class="mt-2">Username</p>

    <v-text-field
      v-model="username"
      :rules="emailRules"
 placeholder="jendai"
       background-color="#Fff"
     dense
      required
      outlined
      class=" ml-4"
    ></v-text-field>

</div>
<div   class="d-flex ">
<p class="mt-2">PhoneNo</p>

    <v-text-field
      v-model="email"
      :rules="emailRules"
    placeholder="081000000000"
     dense
     background-color="#Fff"
      required
      outlined
      class="col-12 ml-4"
      
    ></v-text-field>

</div>

<div   class="d-flex  py-0">
<p class="mt-2">Email</p>

    <v-text-field
      v-model="email"
      :rules="emailRules"
    placeholder="jendai@gmail.com"
       background-color="#Fff"
     dense
      required
      outlined
      class=" ml-4 py-0"
    ></v-text-field>

</div>
<div   class="d-flex ">
<p class="mt-2">Lastname</p>

    <v-select
          :items="gender"
         dense
         background-color="#Fff"
        outlined
         placeholder="gender"
          v-model="category"
          :rules="catRules"
        ></v-select>

</div>
<div   class="d-flex ">
<p class="mt-2">Firstname</p>

    <v-textarea
          outlined
          name="input-7-4"
        v-model="describe"
         label="Add description"
         background-color="#fff"
         class="ml-4"
        ></v-textarea>

</div>
  


  





  
  </v-form>

          <v-btn>CREATE MARKETER</v-btn>
      </div>
  </v-col>
</template>

<script>
export default {
data(){
  return{
    gender:['male','female']
  }
}
}
</script>

<style>

</style>