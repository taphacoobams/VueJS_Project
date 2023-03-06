<template>
    <v-container>
      <h1>{{$t("drawer.contact")}}</h1> 
      <p>Vous avez des questions, des commentaires ou des feedbacks à propos de notre application ? Nous aimerions avoir de vos nouvelles !</p>
      <v-form
          ref="form"
          v-model="valid"
          lazy-validation
      >
          <v-text-field v-model="name"
              label="Nom" type="text"/>
          <v-text-field v-model="email"
              label="Email" type="email"/>
          <v-text-field v-model="message"
              label="Message" type="text"/>
  
          <v-btn :disabled="!valid"
          color="success" class="mr-4"
          @click="envoyer"> Envoyer </v-btn>
      </v-form>
      
    </v-container>
</template>    
    
  
  <script>
    export default {
     data() {
    return {
      name: "",
      email: "",
      message: "",
      valid: false
    };
  },
    methods: {
      envoyer() {
        alert("Votre message a été envoyé!");
      this.name = "";
      this.email = "";
      this.message = "";
      this.$refs.form.resetValidation();
      }
    }
  };
  </script>

  

