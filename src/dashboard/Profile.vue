<template>
  <v-col cols="12" class="">
    <div class="col-10">
      <p style="color: #73c987">View Marketing Consultant</p>
      <div class="d-flex">
        <div class="mt-5">PROFILE</div>

        <div class="col-6 offset-3">
          <div class="col-12 d-flex justify-center">
            <v-avatar color="#00932B" size="90px">
              <v-icon color="#fff">mdi-plus</v-icon>
            </v-avatar>
          </div>

          <v-form ref="form" v-model="valid" lazy-validation class="mt-4">
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
              <p class="mt-2 col-4 py-0 col-4 px-0">Username</p>

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
              <p class="mt-2 col-4 px-0 ">Email</p>

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
              <p class="mt-2 col-4 px-0">Lastname</p>

              <v-select
                :items="genders"
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
                label="Address"
                background-color="#fff"
                class="ml-4 mt-3"
              ></v-textarea>
            </div>

            <v-btn
              dark
              color="#00932B"
              class="rounded-xl offset-5"
              @click="updateMarketer"
            >
              UPDATE MARKETER
            </v-btn>
          </v-form>
        </div>
      </div>
    </div>
  </v-col>
</template>

<script>
import userService from "../services/user.service";
export default {
  data() {
    return {
         nameRules: [
        (v) => !!v || "Username is required"
      ],
    
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      marketer: {
          submit:false,
        firstname: "",
        lastname: "",
        gender: "",
        phonenumber: "",
        username: "",
        email: "",
        address: "",
        bankname: "",
        bankcode: "",
        accountNumber: "",
        accountName: "",
      },
      genders: ["male", "female"],
    };
  },
  computed: {
    currentUser() {
      return this.$store.state.auth.user;
    },
  },

  async mounted() {
    if (!this.currentUser) {
      this.$router.push("/login");
    }
    await this.fetchMarketer();
  },
  methods: {
    fetchMarketer() {
      userService.fetchConsultant(this.$route.params.id).then((response) => {
        console.log(response.data.marketer[0]);
        this.marketer = response.data.marketer[0];
      });
    },
    updateMarketer() {
         if (this.$refs.form.validate()) {
             this.submit=true
      userService.updateConsultant({
        firstname: this.marketer.firstname,
        lastname: this.marketer.lastname,
        username: this.marketer.username,
        phonenumber: this.marketer.phonenumber,
        email: this.marketer.email,
        gender: this.marketer.gender,
        address: this.marketer.address,
        marketingConsultantId: this.$route.params.id,
        bankname: this.bankname,
        bankcode: this.bankcode,
        accountNumber: this.accountNumber,
        accountName: this.accountName,
      }).then( ()=>
         { this.$router.push({path:'/dashboard/home'})}
      ).catch(
          ()=>{
              alert('Unable to update perofile')
              this.$router.push({path:'/dashboard/home'})
          }

      )
         }
    },
  },
};
</script>

<style></style>
