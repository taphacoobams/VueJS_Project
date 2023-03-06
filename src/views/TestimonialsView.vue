<template>
    <v-container>
      <h1>{{$t("drawer.testimonials")}}</h1>
      <v-row>
        <v-col cols="12" md="4" v-for="(testimonial, index) in testimonials" :key="index">
          <v-card>
            <v-card-title>{{testimonial.name}}</v-card-title>
            <v-card-text>{{testimonial.comment}}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        testimonials: [
        {
          name: "Jean Dupont",
          comment: "Cette application m'a beaucoup aidé dans mon cours de physique. Elle est facile à utiliser et les résultats sont précis."
        },
        {
          name: "Sophie Martin",
          comment: "J'adore cette application ! C'est tellement amusant de jouer avec différents scénarios et de voir combien de temps il faut à un objet pour tomber de différentes hauteurs."
        },
        {
          name: "Pierre Dubois",
          comment: "Je ne suis pas un expert en physique, mais cette application rend facile la compréhension des bases. Hautement recommandé !"
        }
        ]
      };
    }
  };
  </script>
  