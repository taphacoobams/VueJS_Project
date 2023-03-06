<template>
    <v-container>
      <h1>{{$t("drawer.history")}}</h1>
      <ul id="historic">
        <li v-for="(item, i) in items" :key="i">
        <p>{{ item.time }} s, {{ item.m }} m, {{ item.ft }} ft</p>
        </li>
      </ul>
    </v-container>
  </template>
  
  <script>
    export default {
    props: {
    },
      name: 'HistoryView',
      data: () => {
        return {
          items: JSON.parse(localStorage.getItem("history"))
        }
      }
    }
  </script>