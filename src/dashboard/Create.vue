<template>
  <v-col cols="12" class="d-flex justify-center py-1">
    <div class="col-10">
      <p style="color: #49b767">Register marketing consultant</p>

      <v-form ref="form" v-model="valid" lazy-validation class="mt-4 col-5">
        <div class="d-flex">
          <p class="mt-2 col-4 px-0">Firstname</p>

          <v-text-field
            v-model="marketer.firstname"
            :rules="nameRules"
            placeholder="Adeleke"
            dense
            required
            background-color="#Fff"
            outlined
            class="ml-4 mt-3"
          ></v-text-field>
        </div>
        <div class="d-flex">
          <p class="mt-2 col-4 px-0">Lastname</p>

          <v-text-field
            v-model="marketer.lastname"
            :rules="nameRules"
            placeholder="Abiodun"
            dense
            required
            background-color="#Fff"
            outlined
            class="col-6 ml-4 mt-3"
          ></v-text-field>
        </div>
        <div class="d-flex">
          <p class="mt-2 col-4 px-0">Username</p>

          <v-text-field
            v-model="marketer.username"
            :rules="nameRules"
            placeholder="jendai"
            background-color="#Fff"
            dense
            required
            outlined
            class="ml-4 mt-3"
          ></v-text-field>
        </div>
        <div class="d-flex">
          <p class="mt-2 col-4 px-0">PhoneNo</p>

          <v-text-field
            v-model="marketer.phonenumber"
            :rules="nameRules"
            placeholder="081000000000"
            dense
            background-color="#Fff"
            required
            outlined
            class="col-12 ml-4 mt-3"
          ></v-text-field>
        </div>

        <div class="d-flex py-0">
          <p class="mt-2 col-4 px-0">Email</p>

          <v-text-field
            v-model="marketer.email"
            :rules="emailRules"
            placeholder="jendai@gmail.com"
            background-color="#Fff"
            dense
            required
            outlined
            class="ml-4 py-0 mt-3"
          ></v-text-field>
        </div>
        <div class="d-flex">
          <p class="mt-2 col-4 px-0">Gender</p>

          <v-select
            :items="gender"
            dense
            background-color="#Fff"
            outlined
            placeholder="gender"
            v-model="marketer.gender"
            :rules="nameRules"
            class="ml-4 mt-3"
          ></v-select>
        </div>
        <div class="d-flex">
          <p class="mt-2 col-4 px-0">Address</p>

          <v-textarea
            outlined
            name="input-7-4"
            v-model="marketer.address"
            label="Enter address"
            background-color="#fff"
            class="ml-4 mt-3"
          ></v-textarea>
        </div>
      </v-form>

      <v-btn dark :loading="submit" color="#00932B" class="rounded-xl offset-2" @click="createMarketer"
        >CREATE MARKETER</v-btn
      >
    </div>
  </v-col>
</template>

<script>
import userService from "../services/user.service";
export default {
  data() {
    return {
      submit:false,
      gender: ["male", "female"],
      nameRules: [(v) => !!v || "This field is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      marketer: {
        firstname: "",
        lastname: "",
        username: "",
        phonenumber: "",
        email: "",
        gender: "",
        address: "",
      },
    };
  },
  methods: {
    createMarketer() {
       if (this.$refs.form.validate()) {
         this.submit=true
      userService
        .addConsultants({
          addedBy: "admin",
          firstname: this.marketer.firstname,
          lastname: this.marketer.lastname,
          username: this.marketer.username,
          phonenumber: this.marketer.phonenumber,
          email: this.marketer.email,
          gender: this.marketer.gender,
          address: this.marketer.address,
        })
        .then(() => {
          this.submit=false
          this.marketer={}
 
          this.$router.push({ path: "/dashboard/home" });
        });
       }
    },
  },
};
</script>

<style></style>
