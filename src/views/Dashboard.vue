<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
      class=""
      style="background:rgba(250, 253, 254, 1)"
    >
    <!-- <div style="background:rgba(250, 253, 254, 1);border-bottom:1.5px solid rgba(248, 248, 248, 1);height:64px" class="px-3 py-2 d-flex justify-center align-center">
        <img src="../assets/logo.svg" alt="">
    </div> -->

      <v-list class=" px-4">
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon color="#C86262">{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title style="size:18px;font-weight:600" v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
     


    
      
       
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
         elevation="0"
         style="border-bottom:1.5px solid rgba(248, 248, 248, 1)"
         color="#fff"
       
    >
      <v-app-bar-nav-icon color="#C76262" @click.stop="drawer = !drawer" />
    
   <v-toolbar-title >PEER COVER</v-toolbar-title>
       
        
     
      <v-spacer />

     

    
    </v-app-bar>
    <v-main class="px-0 py-0"  style="background:#ECFFEB;">
      
       <router-view></router-view>
    
    </v-main>
 
    
  </v-app>
</template>

<script>
export default {

  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Dashboard',
          to: '/dashboard'
        },
        


      ],
      miniVariant: false,
     
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
*{
box-sizing: border-box;
}
</style>