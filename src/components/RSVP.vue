<template>
  <div>
    <div class="block md-layout">
      <md-card class="md-layout-item rsvp">
        <md-card-header>
          <h1><strong>RSVP</strong></h1>
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
                    <md-button class="md-raised md-primary meBtn" v-if="searchedGuest" @click="setGuest()" :disabled="!!selectedGuest">That's me
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
                      <md-checkbox class="md-primary" v-model="selectedGuestAttending" v-if="selectedGuest" :disabled="guestsAttending">
                        <b>{{selectedGuest.full_name}}</b>
                      </md-checkbox>
                    </transition>
                    <transition name="slide-fade-left">
                      <md-checkbox class="md-primary" v-model="selectedGuestPartnerAttending" v-if="selectedGuestPartnerIncluded"
                                   :disabled="guestsAttending">
                        <b>{{selectedGuestPartner.full_name}}</b>
                      </md-checkbox>
                    </transition>
                  </div>
                </transition>
                <transition name="slide-fade-left">
                  <div class="md-layout-item md-large-size-33" v-if="selectedGuest">
                    <md-button class="md-raised md-primary rsvpBtn" @click="rsvp()" :disabled="guestsAttending">
                      <span v-if="!selectedGuestAttending && !selectedGuestPartnerAttending"> Not </span>
                      Attending
                    </md-button>
                    <transition name="slide-fade-left">
                      <md-button class="md-raised md-accent" v-if="guestsAttending" @click="setDone('first', 'second')">Continue</md-button>
                    </transition>
                  </div>
                </transition>
              </div>
              <Confetti v-if="guestsAttending"/>
              <md-snackbar md-position="center" :md-duration="snackBarDuration" :md-active.sync="snackBar1" md-persistent>
                Better start hitting the gym and get dat beach bod ready ;)
              </md-snackbar>
            </md-step>

            <md-step id="second" md-label="Pack Yo Bags!" :md-editable="false" :md-done.sync="second">
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
                    <md-switch v-model="selectedGuest.resort_booked" class="md-primary questionSwitch1" v-if="selectedGuest">
                      <span v-if="!selectedGuest.resort_booked">Not Yet</span> <span v-if="selectedGuest.resort_booked">Sure Did!</span>
                    </md-switch>
                  </div>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <div class="question2"><b>Have you booked your Flights?</b></div>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <div>
                    <md-switch v-model="selectedGuest.flight_booked" class="md-primary questionSwitch2" v-if="selectedGuest">
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
                  <md-button class="md-raised md-primary" @click="saveTravelInfo()" :disabled="travelInfoSaved">Save</md-button>
                  <transition name="slide-fade-left">
                    <md-button v-if="travelInfoSaved" class="md-raised md-accent" @click="setDone('second', 'third')">Continue</md-button>
                  </transition>
                </div>
              </div>
              <md-snackbar md-position="center" :md-duration="snackBarDuration" :md-active.sync="snackBar2" md-persistent>
                Saving your traveling info. You can always come back and update your booking status!
              </md-snackbar>
            </md-step>
            <md-step id="third" md-label="Other Info" :md-editable="false" :md-done.sync="third">
              <div class="md-layout">
                <div class="md-layout-item md-xlarge-size-50" v-if="selectedGuest">
                  <span class="guestName"> {{ selectedGuest.full_name }}</span>
                  <md-field class="personalInfo">
                    <label>Phone</label>
                    <md-input v-model=selectedGuest.phone></md-input>
                  </md-field>
                  <md-field class="personalInfo">
                    <label>Email</label>
                    <md-input v-model=selectedGuest.email></md-input>
                  </md-field>
                  <md-field class="personalInfo">
                    <label>Food Allergies</label>
                    <md-input v-model=selectedGuest.food_allergies></md-input>
                  </md-field>
                  <div class="checkBoxContainer">
                    <span class="checkBoxTitle"> Events That Tickle Your Fancy:</span>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuest.events" value="boatCruise">Boat Cruise</md-checkbox>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuest.events" value="nightClubs">Night Clubs</md-checkbox>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuest.events" value="fishing">Fishing</md-checkbox>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuest.events" value="golfing">Golfing</md-checkbox>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuest.events" value="waterSport">Water Sports</md-checkbox>
                  </div>
                </div>
                <div class="md-layout-item md-xlarge-size-50" v-if="selectedGuestPartnerAttending">
                  <span class="guestName"> {{ selectedGuestPartner.full_name }}</span>
                  <md-field class="personalInfo">
                    <label>Phone</label>
                    <md-input v-model=selectedGuestPartner.phone></md-input>
                  </md-field>
                  <md-field class="personalInfo">
                    <label>Email</label>
                    <md-input v-model=selectedGuestPartner.email></md-input>
                  </md-field>
                  <md-field class="personalInfo">
                    <label>Food Allergies</label>
                    <md-input v-model=selectedGuestPartner.food_allergies></md-input>
                  </md-field>
                  <div class="checkBoxContainer">
                    <span class="checkBoxTitle"> Events That Tickle Your Fancy:</span>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuestPartner.events" value="boatCruise">Boat Cruise</md-checkbox>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuestPartner.events" value="nightClubs">Night Clubs</md-checkbox>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuestPartner.events" value="fishing">Fishing</md-checkbox>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuestPartner.events" value="golfing">Golfing</md-checkbox>
                    <md-checkbox class="eventCheckBox" v-model="selectedGuestPartner.events" value="waterSport">Water Sports</md-checkbox>
                  </div>
                </div>
                <div class="md-layout-item md-large-size-100">
                  <md-button class="md-raised md-primary" @click="saveOtherInfo()">Save</md-button>
                  <md-button class="md-raised md-accent" @click="setDone('third')">Reset</md-button>
                </div>
              </div>
              <md-snackbar md-position="center" :md-duration="snackBarDuration" :md-active.sync="snackBar3" md-persistent>
                Updating your personal information. Counting down starts now!
              </md-snackbar>
            </md-step>
          </md-steppers>
        </md-card-content>

        <md-card-actions>
        </md-card-actions>
      </md-card>
    </div>
  </div>
</template>

<script>
  import store from '../store';
  import VanillaTilt from '../js/vanilla-tilt';
  import Confetti from './Confetti';

  export default {
    name: 'RSVP',
    components: { Confetti },
    data: () => ({
      searchedGuest: null,
      selectedGuest: null,
      selectedGuestAttending: true,
      selectedGuestPartner: null,
      selectedGuestPartnerIncluded: null,
      selectedGuestPartnerAttending: false,
      guestsAttending: false,
      travelInfoSaved: false,
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
          max: 25,
          speed: 2000,
          scale: 1.02,
        });
      }

      //TODO: Implement DropDown Perspective.
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
          //TODO: create Dialog or message to people who are not attending
        }

        store.dispatch('UPDATE_GUEST_BY_ID', {
          id: this.selectedGuest.id,
          attending: this.selectedGuestAttending,
        });
        if ( this.selectedGuestPartnerIncluded ) {
          store.dispatch('UPDATE_GUEST_BY_ID', {
            id: this.selectedGuestPartner.id,
            attending: this.selectedGuestPartnerAttending,
          });
        }
      },
      saveTravelInfo() {
        this.travelInfoSaved = true;
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
      },
      saveOtherInfo() {
        this.snackBar3 = true;
        if ( this.selectedGuest ) {
          store.dispatch('UPDATE_GUEST_BY_ID', {
            id: this.selectedGuest.id,
            phone: this.selectedGuest.phone,
            email: this.selectedGuest.email,
            food_allergies: this.selectedGuest.food_allergies,
            events: JSON.stringify(this.selectedGuest.events),
          });
        }
        if ( this.selectedGuestPartner ) {
          store.dispatch('UPDATE_GUEST_BY_ID', {
            id: this.selectedGuestPartner.id,
            phone: this.selectedGuestPartner.phone,
            email: this.selectedGuestPartner.email,
            food_allergies: this.selectedGuestPartner.food_allergies,
            events: JSON.stringify(this.selectedGuestPartner.events),
          });
        }
        this.snackBar2 = true;
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
        }

        if ( index === 'third' ) {

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

  .md-card {
    max-width: 700px;
    min-width: 300px;

    .meBtn {
      margin-top: 15px;
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

    .rsvpBtn {
      margin-top: 5px;
    }

    .md-snackbar {
      background-color: $accent-color;
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

    .checkBoxContainer {

      .checkBoxTitle {
        font-weight: bold;
      }

      margin: 15px 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;

      .eventCheckBox {
        margin: 10px 30px 0 0;
      }
    }
  }
</style>
