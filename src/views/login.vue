<template>
  <v-col cols="12" class="d-flex justify-center">
    <div style="height: 70vh; margin-top: 10vh; width: 80%" class="d-flex">
      <div
        style="color: #fff"
        class="col-6 side-box d-flex flex-column justify-center px-5"
      >
        <h2>PEERCOVER</h2>

        <p style="font-size: 20px; font-weight: 600">
          Car
          <br />
          Insurance
        </p>
        <p style="font-size: 20px; font-weight: 600">
          prices from
          <br />
          N10,000
        </p>
      </div>
      <div class="col-6 px-5 d-flex flex-column align-center">
        <p
          style="
            color: #00932b;
            font-weight: 700;
            font-size: 25px;
            text-align: center;
          "
          class="mb-4"
        >
          WELCOME BACK
        </p>

        <p>Input your details to proceed</p>

        <v-form ref="form" v-model="valid" lazy-validation class="mt-4 col-10">
          <v-text-field
      v-model="form.username"
            :rules="nameRules"
            label="Username"
            required
            outlined
          ></v-text-field>
          <v-text-field
         v-model="form.password"
       
            :rules="passRules"
            label="Password"
            required
            outlined
            
          ></v-text-field>

          <div class="d-flex justify-end">
            <v-btn
              class="mt-2"
          
              color="#00932B"
              text
              style="text-transform: none; font-weight: bold"
            >
              Forgot Password?
            </v-btn>
          </div>

          <v-btn
            :loading="loading"
            class="py-2 mt-2"
            style="text-transform: none; height: 45px"
            color="#00932B"
            block
            @click="loginAdmin()"
          >
            <span style="color: #fff"> Sign in</span>
          </v-btn>
        </v-form>
      </div>
    </div>
  </v-col>
</template>

<script>
export default {
  data() {
    return {

     
      form: {
        username: "",
        password:'',
      },
      loading:false,
      valid:true,
       message: '',
      nameRules: [
        (v) => !!v || "Username is required"
      ],
      passRules: [(v) => !!v || "Password is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
    };
  },

   computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    }
  },
  created() {
    if (this.loggedIn) {
      this.$router.push('/dasboard/home');
    }
  },

  methods: {
    

     loginAdmin() {

    //validate login form
    if (this.$refs.form.validate()) {

// set button to loading state
this.loading=true

      //call login action
      this.$store.dispatch('auth/login', this.form).then(
            () => {
              this.$router.push('/dashboard/home');
            },
            error => {
              this.loading = false;
              this.message =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
          );
       
        
    
    }
  },
  },

 
};
</script>

<style scoped>
.side-box {
  background: #00932b;
}
</style>
