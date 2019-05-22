<template>
  <div class="block">
    <h3>Send Text Message to All Guests</h3>
    <p>Make sure you double check everything before sending it!
    </p>
    <md-field>
      <label>Your Message</label>
      <md-textarea v-model="allGuestMessage" required></md-textarea>
    </md-field>
    <md-field>
      <label>PW</label>
      <md-input v-model="passCode" type="password" required></md-input>
    </md-field>
    <md-button class="md-primary md-raised" @click="handleSend" :disabled="!allGuestMessage">Send</md-button>
  </div>
</template>

<script>
  import store from '../store';

  export default {
    name: 'message',
    data: () => ({
      allGuestMessage: null,
      passCode: null,
    }),
    methods: {
      handleSend() {
        if ( this.allGuestMessage && this.passCode === "999" ) {
          store.dispatch('SEND_ALL_GUESTS_SMS', {
            allGuestMessage: this.allGuestMessage,
          });
          this.allGuestMessage = null;
          this.passCode = null;
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "../css/main.scss";

  $font_family_1: 'Oswald', sans-serif;
  $font_family_2: 'Poppins', sans-serif;

  .block {
    background: $white;
    padding: 60px;
    width: 820px;
    margin: 0 auto;
    text-align: justify;
  }

  @media screen and (max-width: 959px) and (min-width: 768px) {
    .block {
      padding: 40px;
      width: 620px;
    }
  }


  @media screen and (max-width: 767px) {

    .block {
      padding: 30px;
      width: 100%;
      padding: 30px;
    }
  }

  @media screen and (max-width: 479px) {
    .block {
      padding: 30px 15px;
      width: 100%;
    }
  }

</style>
