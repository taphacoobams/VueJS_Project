<template>
    <v-container>
      <h1>{{$t("drawer.manualhistory")}}</h1>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >
          <v-text-field v-model="temps"
              label="Temps" type="number"/>
          <v-text-field v-model="distance"
              label="Distance" type="number"/>
          <v-text-field v-model="chute"
              label="Temps de chute" type="number"/>
  
          <v-btn :disabled="!valid"
          color="success" class="mr-4"
          @click="ajouter"> Ajouter </v-btn>
      </v-form>
      
    </v-container>
  </template>
  
  <script>
    export default {
      name: 'ManualHistoryView',
      data: () => ({
          temps : 0.0,
          distance : 0.0,
          chute : 0.0
      }),
      methods: {
          ajouter(){
              console.log(this.temps, this.chute, this.distance)
              let item = {time: this.temps, m: this.distance, ft: this.chute}
              let history = JSON.parse(localStorage.getItem('history'))
              if (!Array.isArray(history)) {
                  history = []
              }
              history.unshift(item)
              localStorage.setItem('history', JSON.stringify(history))
          }
      }
    }
  </script>