<template>
  <div class="rsvpContainer">
    <div class="md-layout">
      <md-card class="md-layout-item rsvp">
        <md-card-header>
          <div id="cardTitle">RSVP By May 1st</div>
        </md-card-header>

        <md-card-content>
          <md-steppers :md-active-step.sync="active" md-vertical md-linear md-dynamic-height>
            <md-step id="first" md-label="Te Gusta la Fiesta?" :md-editable="false" :md-done.sync="first">
              <div class="md-layout">
                <div class="md-layout-item md-medium-size-66">
                  <md-autocomplete v-model="searchedGuest" :md-options="getSanitizedGuests" :md-open-on-focus="false"
                                   :md-changed="checkSearchedGuest()">
                    <label>Search Your Name</label>
                    <template slot="md-autocomplete-item" slot-scope="{ item, term }">
                      <md-highlight-text :md-term="term">{{ item.FullName }}</md-highlight-text>
                    </template>
                  </md-autocomplete>
                </div>
                <div class="md-layout-item md-large-size-33">
                  <transition name="slide-fade-left">
                    <md-button class="md-raised md-primary" id="meBtn" v-if="searchedGuest" @click="setGuest()" :disabled="!!selectedGuest">That's me
                    </md-button>
                  </transition>
                </div>
                <transition name="slide-fade-top">
                  <div class="md-layout-item md-large-size-66 partner" v-if="selectedGuestPartner">
                    Would you like to RSVP for <span class="guestName">{{ selectedGuestPartner.full_name}}</span>
                  </div>
                </transition>
                <transition name="slide-fade-top">
                  <div class="md-layout-item md-large-size-33" v-if="selectedGuestPartner">
                    <md-switch v-model="selectedGuestPartnerIncluded" class="md-primary partnerSwitch" v-if="selectedGuestPartner"
                               :disabled="guestsAttending"
                               @change="checkGuestPartnerStatus()"></md-switch>
                  </div>
                </transition>
                <transition name="slide-fade-top">
                  <div class="md-layout-item md-large-size-66 partner" v-if="selectedGuest">
                    <transition name="slide-fade-top">
                      <md-switch class="md-primary" v-model="selectedGuestAttending" v-if="selectedGuest" :disabled="guestsAttending">
                        <b>{{selectedGuest.full_name}}</b> is <span v-if="!selectedGuestAttending"> Not </span>
                        Attending
                      </md-switch>
                    </transition>
                    <transition name="slide-fade-left">
                      <md-switch class="md-primary" v-model="selectedGuestPartnerAttending" v-if="selectedGuestPartnerIncluded"
                                   :disabled="guestsAttending">
                        <b>{{selectedGuestPartner.full_name}}</b> is <span v-if="!selectedGuestPartnerAttending"> Not </span>
                        Attending
                      </md-switch>
                    </transition>
                  </div>
                </transition>
                <transition name="slide-fade-left">
                  <div class="md-layout-item md-large-size-33" v-if="selectedGuest">
                    <md-button class="md-raised md-primary" id="rsvpBtn" @click="rsvp()" :disabled="guestsAttending">
                      Submit
                    </md-button>
                    <transition name="slide-fade-left">
                      <md-button class="md-raised md-accent" id="continueBtn" v-if="guestsAttending" @click="setDone('first', 'second')">Continue
                      </md-button>
                    </transition>
                  </div>
                </transition>
              </div>
              <md-snackbar md-position="center" :md-duration="snackBarDuration" :md-active.sync="snackBar1" md-persistent>
                Hooray!! We Knew You'd Make It!!!
              </md-snackbar>
            </md-step>

            <md-step id="second" md-label="Pack Your Bags! We’ll Catch You On the Beach!!" :md-editable="false" :md-done.sync="second">
              <div class="md-layout">
                <div class="md-layout-item md-large-size-100" v-if="selectedGuest">
                  <span class="guestName" v-if="selectedGuestAttending">{{selectedGuest.full_name}}</span>
                  <span class="guestName" v-if="selectedGuestAttending && selectedGuestPartnerAttending"> & </span>
                  <span class="guestName" v-if="selectedGuestPartnerAttending">{{selectedGuestPartner.full_name}}</span>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <div class="question1"><b>Have you booked the Resort?</b></div>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <div>
                    <md-switch v-model="selectedGuest.resort_booked" class="md-primary questionSwitch1" v-if="selectedGuest"
                               @change="toggleResortStatus">
                      <span v-if="!selectedGuest.resort_booked">Not Yet</span> <span v-if="selectedGuest.resort_booked">Sure Did!</span>
                    </md-switch>
                  </div>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <div class="question2"><b>Have you booked your Flights?</b></div>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <div>
                    <md-switch v-model="selectedGuest.flight_booked" class="md-primary questionSwitch2" v-if="selectedGuest"
                               @change="toggleFlightStatus">
                      <span v-if="!selectedGuest.flight_booked">Not Yet</span> <span v-if="selectedGuest.flight_booked">Heck Yah!</span>
                    </md-switch>
                  </div>
                </div>
                <div class="md-layout-item md-xlarge-size-50">
                  <md-datepicker v-model="selectedGuest.resort_arrival_date"
                                 v-if="selectedGuest">
                    <label>Arrival Date</label>
                  </md-datepicker>
                </div>
                <div class="md-layout-item md-gutter"></div>
                <div class="md-layout-item md-xlarge-size-50">
                  <md-datepicker v-model="selectedGuest.resort_departure_date"
                                 v-if="selectedGuest">
                    <label>Departure Date</label>
                  </md-datepicker>
                </div>
                <div class="md-layout-item md-large-size-100">
                  <transition name="slide-fade-left">
                    <md-button class="md-raised md-accent" @click="setDone('second', 'third')">Continue</md-button>
                  </transition>
                </div>
              </div>
              <md-snackbar md-position="center" :md-duration="snackBarDuration" :md-active.sync="snackBar2" md-persistent>
                Saving your traveling info. You can always come back and update your booking status!
              </md-snackbar>
            </md-step>
            <md-step id="third" md-label="All the Fun Things and Not Enough Time!" :md-editable="false" :md-done.sync="third">
              <div class="md-layout">
                <div class="md-layout-item md-xlarge-size-50" v-if="selectedGuest">
                  <span class="guestName"> {{ selectedGuest.full_name }}</span>
                  <md-field class="personalInfo">
                    <label>Phone</label>
                    <md-tooltip md-direction="top">please enter a 10 digit phone number without any dashes, spaces or parenthesis</md-tooltip>
                    <md-input v-model=selectedGuest.phone></md-input>
                  </md-field>
                  <md-field class="personalInfo">
                    <label>Email</label>
                    <md-input type="email" v-model=selectedGuest.email></md-input>
                  </md-field>
                  <md-checkbox class="rsvpCheckBox" v-model="selectedGuest.opt_message" :disabled="!selectedGuest.phone">Opt-In Text Updates
                  </md-checkbox>
                  <md-checkbox class="rsvpCheckBox" v-model="selectedGuest.opt_email" :disabled="!selectedGuest.email">Opt-In Email Updates
                  </md-checkbox>
                  <md-field class="personalInfo">
                    <label>Food Allergies</label>
                    <md-input v-model=selectedGuest.food_allergies></md-input>
                  </md-field>
                  <div class="checkBoxContainer">
                    <span class="checkBoxTitle"> Events That Tickle Your Fancy:</span>
                  </div>
                  <div class="checkBoxContainer">
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuest.events" value="boatCruise">Boat Cruise</md-checkbox>
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuest.events" value="nightClubs">Night Clubs</md-checkbox>
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuest.events" value="fishing">Fishing</md-checkbox>
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuest.events" value="golfing">Golfing</md-checkbox>
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuest.events" value="waterSport">Water Sports</md-checkbox>
                  </div>
                </div>
                <div class="md-layout-item md-xlarge-size-50" v-if="selectedGuestPartnerAttending">
                  <span class="guestName"> {{ selectedGuestPartner.full_name }}</span>
                  <md-field class="personalInfo">
                    <label>Phone</label>
                    <md-tooltip md-direction="top">please enter a 10 digit phone number without any dashes, spaces or parenthesis</md-tooltip>
                    <md-input v-model=selectedGuestPartner.phone></md-input>
                  </md-field>
                  <md-field class="personalInfo">
                    <label>Email</label>
                    <md-input v-model=selectedGuestPartner.email></md-input>
                  </md-field>
                  <md-checkbox class="rsvpCheckBox" v-model="selectedGuestPartner.opt_message" :disabled="!selectedGuestPartner.phone">Opt-In Text
                                                                                                                                       Updates
                  </md-checkbox>
                  <md-checkbox class="rsvpCheckBox" v-model="selectedGuestPartner.opt_email" :disabled="!selectedGuestPartner.email">Opt-In Email
                                                                                                                                     Updates
                  </md-checkbox>
                  <md-field class="personalInfo">
                    <label>Food Allergies</label>
                    <md-input v-model=selectedGuestPartner.food_allergies></md-input>
                  </md-field>
                  <div class="checkBoxContainer">
                    <span class="checkBoxTitle"> Events That Tickle Your Fancy:</span>
                  </div>
                  <div class="checkBoxContainer">
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuestPartner.events" value="boatCruise">Boat Cruise</md-checkbox>
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuestPartner.events" value="nightClubs">Night Clubs</md-checkbox>
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuestPartner.events" value="fishing">Fishing</md-checkbox>
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuestPartner.events" value="golfing">Golfing</md-checkbox>
                    <md-checkbox class="rsvpCheckBox" v-model="selectedGuestPartner.events" value="waterSport">Water Sports</md-checkbox>
                  </div>
                </div>
                <div class="md-layout-item md-large-size-100">
                  <md-button class="md-raised md-primary" id="saveBtn2" @click="saveOtherInfo()">Save</md-button>
                </div>
              </div>
              <md-snackbar md-position="center" :md-duration="snackBarDuration" :md-active.sync="snackBar3" md-persistent>
                Updating your preferences. We will keep you in the loop on group events we end up booking. But feel free to do your own thing.
              </md-snackbar>
            </md-step>
          </md-steppers>
        </md-card-content>

        <md-card-actions>
        </md-card-actions>
      </md-card>
    </div>
    <md-dialog :md-active.sync="showRSVPDialog">
      <md-dialog-title class="title"> It looks like you have already RSVP'd</md-dialog-title>
      <div class="message">Do you need to update your RSVP, Resort or Traveling information?</div>
      <md-dialog-actions>
        <md-button id="dialogBtn2" class="md-primary md-raised" @click="handleContinueRSVPDialog">Continue</md-button>
      </md-dialog-actions>
    </md-dialog>
    <md-dialog :md-active.sync="showRejectionDialog">
      <md-dialog-title class="title"> We will miss you!</md-dialog-title>
      <div class="message">We absolutely understand if you want to celebrate from afar!</div>
      <md-dialog-actions>
        <md-button id="dialogBtn1" class="md-primary md-raised" @click="handleCloseRejectionDialog">Cheers</md-button>
      </md-dialog-actions>
    </md-dialog>
    <transition name="slide-top">
      <Wave v-if="guestResortBooked"/>
    </transition>
    <Balloons v-if="otherInfoSaved"/>
    <PaperPlane v-if="guestFlightBooked"/>
    <Confetti v-if="guestsAttending"/>
  </div>
</template>

<script>
  import store from '../store';
  import router from './../router';
  import VanillaTilt from '../js/vanilla-tilt';
  import Confetti from './Confetti';
  import PaperPlane from './PaperPlane';
  import Wave from './Wave';
  import Balloons from './Balloons';

  export default {
    name: 'RSVP',
    components: {
      Confetti,
      PaperPlane,
      Wave,
      Balloons,
    },
    data: () => ({
      showRejectionDialog: false,
      showRSVPDialog: false,
      searchedGuest: null,
      selectedGuest: null,
      selectedGuestAttending: true,
      selectedGuestOptPhone: null,
      selectedGuestOptEmail: true,
      selectedGuestPartner: null,
      selectedGuestPartnerOptPhone: null,
      selectedGuestPartnerOptEmail: true,
      selectedGuestPartnerIncluded: null,
      selectedGuestPartnerAttending: false,
      guestsAttending: false,
      guestFlightBooked: false,
      guestResortBooked: false,
      otherInfoSaved: false,
      snackBarDuration: 5000,
      snackBar1: false,
      snackBar2: false,
      snackBar3: false,
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null,
      window: {
        width: 0,
        height: 0
      }
    }),
    computed: {
      getSanitizedGuests() {
        return store.getters.getAllGuests.map(guest => ({
          'id': guest.id,
          'FullName': guest.full_name,
          'toLowerCase': () => guest.full_name.toLowerCase(),
          'toString': () => guest.full_name,
        }));
      }
    },
    created() {
      window.addEventListener('resize', this.handleResize);
      this.handleResize();
    },
    mounted() {
      if ( this.window.width > 600 ) {
        VanillaTilt.init(document.querySelector('.rsvp'), {
          max: 10,
          speed: 2000,
          scale: 1,
        });
      }
    },
    destroyed() {
      window.removeEventListener('resize', this.handleResize);
    },
    methods: {
      setGuest() {
        this.selectedGuest = store.getters.getGuestById(this.searchedGuest.id);
        if ( this.selectedGuest.relation ) {
          this.selectedGuestPartner = store.getters.getGuestById(this.selectedGuest.relation);
        }
        if ( this.selectedGuest.attending === true || this.selectedGuest.attending === false ) {
          this.showRSVPDialog = true;
          this.selectedGuestAttending = this.selectedGuest.attending;
          this.selectedGuestOptPhone = this.selectedGuest.opt_message;
          this.selectedGuestOptEmail = this.selectedGuest.opt_email;
          if ( this.selectedGuestPartner && this.selectedGuestPartner.attending ) {
            this.selectedGuestPartnerIncluded = true;
            this.selectedGuestPartnerAttending = this.selectedGuestPartner.attending;
            this.selectedGuestPartnerOptPhone = this.selectedGuestPartner.opt_message;
            this.selectedGuestPartnerOptEmail = this.selectedGuestPartner.opt_email;
          }
        }
      },
      checkSearchedGuest() {
        if ( !this.searchedGuest ) {
          this.selectedGuest = null;
          this.selectedGuestAttending = true;
          this.selectedGuestPartner = null;
          this.selectedGuestPartnerIncluded = null;
          this.selectedGuestPartnerAttending = false;
          this.guestsAttending = false;
        }
      },
      checkGuestPartnerStatus() {
        if ( this.selectedGuestPartnerIncluded === false ) {
          this.selectedGuestPartnerAttending = false;
        }
      },
      rsvp() {
        if ( this.selectedGuestAttending || this.selectedGuestPartnerAttending ) {
          this.snackBar1 = true;
          this.guestsAttending = true;
        } else {
          this.showRejectionDialog = true;
        }

        store.dispatch('UPDATE_GUEST_BY_ID', {
          id: this.selectedGuest.id,
          attending: this.selectedGuestAttending,
        });

        if ( this.selectedGuestAttending !== this.selectedGuest.attending ) {
          store.dispatch('SEND_HENRY_RSVP_STATUS', {
            id: this.selectedGuest.id,
            attending: this.selectedGuestAttending,
          });
        }

        if ( this.selectedGuestPartnerIncluded ) {
          store.dispatch('UPDATE_GUEST_BY_ID', {
            id: this.selectedGuestPartner.id,
            attending: this.selectedGuestPartnerAttending,
          });
          if ( this.selectedGuestPartnerAttending !== this.selectedGuestPartner.attending ) {
            store.dispatch('SEND_HENRY_RSVP_STATUS', {
              id: this.selectedGuestPartner.id,
              attending: this.selectedGuestPartnerAttending,
            });
          }
        }
      },
      handleContinueRSVPDialog: function (event) {
        this.showRSVPDialog = false;
      },
      handleCloseRejectionDialog: function (event) {
        router.push({ path: '/' });
      },
      toggleFlightStatus() {
        this.guestFlightBooked = this.selectedGuest.flight_booked;
      },
      toggleResortStatus() {
        this.guestResortBooked = this.selectedGuest.resort_booked;
      },
      saveOtherInfo() {
        this.snackBar3 = true;
        this.otherInfoSaved = true;
        const guestTextMessage = 'We are stoked you are making the time to celebrate with us! You’ve requested to get updates from us via text! We won’t spam you, promise. You will get wedding updates, event info, and flight price changes, and maybe a cute gif every once in a while. Please save this number as HKWedding. If you no longer wish to receive texts from us you can opt- out on the RSVP page! ';
        const guestEmailMessage = 'We’re doing the cha-cha over here because you are coming to the wedding! Since you chose to get email updates from us, we will send you emails every so often about wedding info, event updates, and flight price changes. If you do not wish to get updates feel free to opt-out on the RSVP page!';
        if ( this.selectedGuest ) {
          store.dispatch('UPDATE_GUEST_BY_ID', {
            id: this.selectedGuest.id,
            phone: this.selectedGuest.phone,
            email: this.selectedGuest.email,
            food_allergies: this.selectedGuest.food_allergies,
            events: JSON.stringify(this.selectedGuest.events),
            opt_message: this.selectedGuest.opt_message,
            opt_email: this.selectedGuest.opt_email,
          });
          if ( this.selectedGuest.phone && this.selectedGuest.opt_message && this.selectedGuestOptPhone === null ) {
            store.dispatch('SEND_GUEST_SMS', {
              id: this.selectedGuest.id,
              phone: `+1${this.selectedGuest.phone}`,
              message: `Holla ${this.selectedGuest.first_name}! ${guestTextMessage}`,
            });
          }
          if ( this.selectedGuest.email && this.selectedGuest.opt_email && this.selectedGuestOptEmail === null ) {
            store.dispatch('SEND_GUEST_EMAIL', {
              id: this.selectedGuest.id,
              first_name: this.selectedGuest.first_name,
              email: this.selectedGuest.email,
              title: `${this.selectedGuest.first_name}, You are coming to Henry & Kelli Wedding in CABO`,
              message: guestEmailMessage,
            });
          }
        }
        if ( this.selectedGuestPartner ) {
          store.dispatch('UPDATE_GUEST_BY_ID', {
            id: this.selectedGuestPartner.id,
            phone: this.selectedGuestPartner.phone,
            email: this.selectedGuestPartner.email,
            food_allergies: this.selectedGuestPartner.food_allergies,
            events: this.selectedGuestPartner.events ? JSON.stringify(this.selectedGuestPartner.events) : '',
            opt_message: this.selectedGuestPartner.opt_message,
            opt_email: this.selectedGuestPartner.opt_email,
          });
          if ( this.selectedGuestPartner.phone && this.selectedGuestPartner.opt_message && this.selectedGuestPartnerOptPhone === null ) {
            store.dispatch('SEND_GUEST_SMS', {
              id: this.selectedGuestPartner.id,
              phone: `+1${this.selectedGuestPartner.phone}`,
              message: `Holla ${this.selectedGuestPartner.first_name}! ${guestTextMessage}`,
            });
          }
          if ( this.selectedGuestPartner.email && this.selectedGuestPartner.opt_email && this.selectedGuestPartnerOptEmail === null ) {
            store.dispatch('SEND_GUEST_EMAIL', {
              id: this.selectedGuestPartner.id,
              first_name: this.selectedGuestPartner.first_name,
              email: this.selectedGuestPartner.email,
              title: `${this.selectedGuestPartner.first_name}, You are coming to Henry & Kelli Wedding in CABO`,
              message: guestEmailMessage,
            });
          }
        }
        this.snackBar2 = true;
        setTimeout(() => {
          router.push('resort');
        }, 5000);
      },
      setDone(id, index) {
        this[id] = true;
        if ( index === 'second' ) {
          if ( !this.selectedGuestAttending && this.selectedGuestPartnerAttending ) {
            this.selectedGuest = this.selectedGuestPartner;
            this.selectedGuestPartner = {};
            this.selectedGuestAttending = true;
            this.selectedGuestPartnerAttending = false;
          } else if ( this.selectedGuestAttending && !this.selectedGuestPartnerAttending ) {
            this.selectedGuestPartner = {};
          }
        } else if ( index === 'third' ) {
          this.guestFlightBooked = false;
          this.guestResortBooked = false;
          this.snackBar2 = true;
          if ( this.selectedGuest ) {
            store.dispatch('UPDATE_GUEST_BY_ID', {
              id: this.selectedGuest.id,
              resort_booked: this.selectedGuest.resort_booked,
              flight_booked: this.selectedGuest.flight_booked,
              resort_arrival_date: this.selectedGuest.resort_arrival_date,
              resort_departure_date: this.selectedGuest.resort_departure_date,
            });
          }
          if ( this.selectedGuestPartner ) {
            store.dispatch('UPDATE_GUEST_BY_ID', {
              id: this.selectedGuestPartner.id,
              resort_booked: this.selectedGuest.resort_booked,
              flight_booked: this.selectedGuest.flight_booked,
              resort_arrival_date: this.selectedGuest.resort_arrival_date,
              resort_departure_date: this.selectedGuest.resort_departure_date,
            });
          }
        }
        if ( index ) {
          this.active = index;
        }
      },
      handleResize() {
        this.window.width = window.innerWidth;
        this.window.height = window.innerHeight;
      },
      setError() {
        this.secondStepError = 'This is an error!';
      }
    },
  };
</script>

<style lang="scss" scoped>
  @import "../css/main.scss";
  @import "../css/animation.scss";

  .rsvpContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background-image: url('./../assets/photos/other/rsvp-bg.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    z-index: -2;

    .md-card {
      max-width: 700px;
      min-width: 300px;
      overflow: auto;
      z-index: 0;
      -webkit-box-shadow: 15px 15px 75px -10px rgba($accent-color, .75);
      -moz-box-shadow: 15px 15px 75px -10px rgba($accent-color, .75);
      box-shadow: 15px 15px 75px -10px rgba($accent-color, .75);


      .md-card-header {
        padding: 16px;

        #cardTitle {
          margin: 8px;
          font-family: 'Bad Script', cursive;
          font-weight: bolder;
          color: $accent-color;
          font-size: 30px;
          text-align: center;
        }
      }

      .partner {
        text-align: left;
        align-self: flex-start;
        font-size: 16px;
      }

      .guestName {
        font-weight: bold;
        font-size: 16px;
        color: $primary-color;
      }

      .partnerSwitch {
        margin-top: 0px;
      }

      #meBtn {
        color: $white;
        margin-top: 15px;
      }

      #rsvpBtn {
        margin-top: 5px;
        color: $white;
      }

      #saveBtn1 {
        color: $white;
      }

      #saveBtn2 {
        color: $white;
      }

      #continueBtn {
        margin-top: 10px;
        margin-left: 8px;
      }

      .question1 {
        margin-top: 5px;
        text-align: left;
      }

      .question2 {
        margin-top: 0px;
        text-align: left;
      }

      .questionSwitch1 {
        margin-top: 5px;
      }

      .questionSwitch2 {
        margin-top: 0px;
      }

      .updateInfo {
        text-align: left;
      }

      .personalInfo {
        margin: 0;
      }

      .rsvpCheckBox {
        margin: 10px 30px 0 0;
      }

      .checkBoxContainer {

        .checkBoxTitle {
          font-weight: bold;
        }

        margin: 15px 0;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;

        .rsvpCheckBox {
          margin: 10px 30px 0 0;
        }
      }
    }
  }

  .md-dialog {
    width: 400px;
    max-height: 300px;

    .title {
      line-height: 50px;
      margin: 8px;
      font-family: 'Bad Script', cursive;
      font-weight: bolder;
      color: $accent-color;
      font-size: 25px;
      text-align: center;
    }

    .message {
      text-align: center;
      margin: 20px;
    }

    #dialogBtn1 {
      color: $white;
    }

    #dialogBtn2 {
      color: $white;
    }
  }

</style>
