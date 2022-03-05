<template>
  <div  class="px-4 d-flex justify-center py-0">

      <div class="col-10 py-0">
           <p style="color:#74CF9D;">Marketing Consultants</p>

           <div class="d-flex justify-end">
             <v-btn
             dark
             color="#00932B"
             class="rounded-xl"
             to="/dashboard/create"
             >
               <v-icon>mdi-plus</v-icon>
               ADD NEW MARKETING CONSULTANT
             </v-btn>
           </div>
   
  <v-data-table
    :headers="headers"
    :items="marketers"
    sort-by="calories"
    class="elevation-1 mt-4"
   
    :loading="loading"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
     
        <v-spacer></v-spacer>
    
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
     
      <v-icon
        small
        @click="deleteMarketer(item.username)"
        color="red"
      >
        mdi-delete
      </v-icon>
       <v-icon
        small
        class="mr-2"
        @click="showUser(item)"
        color="red"
      >
        mdi-chevron-right
      </v-icon>
    </template>
   
  </v-data-table>
      </div>

     

  </div>
</template>

<script>

import userService from '../services/user.service'

export default {

async  mounted(){
   if (!this.currentUser) {
      this.$router.push('/login');
    }
await this.fetchMarketers()
  },
data: () => ({
      dialog: false,
      dialogDelete: false,
      loading:false,
      headers: [
        {
          text: 'Name',
          align: 'start',
          sortable: false,
          value: 'name',
        },
      
        { text: 'Email', value: 'email' },
        { text: 'Phone No', value: 'phonenumber' },
        { text: 'Username', value: 'username' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      
      marketers:[]
    }),
      computed:{
 currentUser() {
      return this.$store.state.auth.user;
    }
  },

    methods:{
      fetchMarketers(){
        this.loading=true
userService.getConsultants().then(
   response => {
     this.loading=false
        this.marketers = response.data.marketers;
      },
      error => {
        this.content =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      }
)

    },
    showUser(value){
console.log(value)
this.$router.push({path:'/dashboard/profile/'+ value.marketing_consultant_id})
    },
    deleteMarketer(id){
userService.deleteConsultant(id).then(response=>{
 console.log(response)

  const newArray= this.marketers.filter((marketer) =>{ return  marketer.marketing_consultant_id != id})
console.log(newArray)
this.marketers= newArray
})
    },
}
}

</script>

<style>

</style>