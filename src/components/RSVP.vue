<template>
  <div>
    <div class="block md-layout">
      <md-card class="md-layout-item rsvp">
        <md-card-header>
          <h1><strong>RSVP</strong></h1>
        </md-card-header>

        <md-card-content>
          <md-steppers :md-active-step.sync="active" md-vertical md-linear>
            <md-step id="first" md-label="We Hope You Can Come Fiesta With Us!" :md-editable="false" :md-done.sync="first">
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
                  <md-button class="md-raised md-primary meBtn" v-if="searchedGuest" @click="setGuest()" :disabled="!!selectedGuest">That's me
                  </md-button>
                </div>
                <div class="md-layout-item md-large-size-66 partner" v-if="selectedGuestPartner">
                  Would you like to RSVP for <span class="partnerName">{{ selectedGuestPartner.full_name}}</span>
                </div>
                <div class="md-layout-item md-large-size-33" v-if="selectedGuestPartner">
                  <md-switch v-model="selectedGuestPartnerIncluded" class="md-primary partnerSwitch" v-if="selectedGuestPartner"
                             @change="checkGuestPartnerStatus()"></md-switch>
                </div>
                <div class="md-layout-item md-large-size-66 partner" v-if="selectedGuest">
                  <md-checkbox class="md-primary" v-model="selectedGuestAttending" v-if="selectedGuest" :disabled="guestsAttending"><b>{{
                                                                                                                                       selectedGuest.full_name}}</b>
                  </md-checkbox>
                  <md-checkbox class="md-primary" v-model="selectedGuestPartnerAttending" v-if="selectedGuestPartnerIncluded"
                               :disabled="guestsAttending"><b>{{selectedGuestPartner.full_name}}</b>
                  </md-checkbox>
                </div>
                <div class="md-layout-item md-large-size-33" v-if="selectedGuest">
                  <md-button class="md-raised md-primary rsvpBtn" @click="rsvp()" :disabled="guestsAttending">
                    <span v-if="!selectedGuestAttending && !selectedGuestPartnerAttending"> Not </span>
                    Attending
                  </md-button>
                  <md-button class="md-raised md-accent" v-if="guestsAttending" @click="setDone('first', 'second')">Continue</md-button>
                </div>
              </div>
              <Confetti v-if="guestsAttending"/>
            </md-step>

            <md-step id="second" md-label="Book Your Travel!" :md-editable="false" :md-done.sync="second">
              <div class="md-layout">
                <div class="md-layout-item md-medium-size-100" v-if="selectedGuest || selectedGuestPartner ">
                  <b v-if="selectedGuestAttending">{{selectedGuest.full_name}}</b>
                  <b v-if="selectedGuestAttending && selectedGuestPartnerAttending"> & </b>
                  <b v-if="selectedGuestPartnerAttending">{{selectedGuestPartner.full_name}}</b>
                </div>
                <div class="md-layout-item md-medium-size-50">
                  <div class="question1"><b>Have you booked the Resort?</b></div>
                  <div class="question2"><b>Have you booked your Flights?</b></div>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <div>
                    <md-switch v-model="selectedGuest.resort_booked" class="md-primary questionSwitch1" v-if="selectedGuest">
                      <span v-if="!selectedGuest.resort_booked">Not Yet</span> <span v-if="selectedGuest.resort_booked">Sure Did!</span>
                    </md-switch>
                  </div>
                  <div>
                    <md-switch v-model="selectedGuest.flight_booked" class="md-primary questionSwitch2" v-if="selectedGuest">
                      <span v-if="!selectedGuest.flight_booked">Not Yet</span> <span v-if="selectedGuest.flight_booked">Heck Yah!</span>
                    </md-switch>
                  </div>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <md-datepicker v-model="selectedGuest.resort_arrival_date"
                                 v-if="selectedGuest">
                    <label>Arrival Date</label>
                  </md-datepicker>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <md-datepicker v-model="selectedGuest.resort_departure_date"
                                 v-if="selectedGuest">
                    <label>Departure Date</label>
                  </md-datepicker>
                </div>
              </div>

              <md-button class="md-raised md-accent" @click="setDone('second', 'third')">Continue</md-button>

            </md-step>
            <md-step id="third" md-label="Other Info" :md-editable="false" :md-done.sync="third">
              <div class="md-layout">
                <div class="md-layout-item md-medium-size-100">
                  <p class="updateInfo">Would you please update the following information So we can keep you posted on the best flight prices and
                                        other
                                        notifications</p>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <B v-if="selectedGuest"> {{ selectedGuest.full_name }}</B>
                  <md-field v-if="selectedGuest">
                    <label>Phone</label>
                    <md-input v-model=selectedGuest.phone></md-input>
                  </md-field>
                  <md-field v-if="selectedGuest">
                    <label>Email</label>
                    <md-input v-model=selectedGuest.email></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <B v-if="selectedGuestPartner"> {{ selectedGuestPartner.full_name }}</B>
                  <md-field v-if="selectedGuestPartner">
                    <label>Phone</label>
                    <md-input v-model=selectedGuestPartner.phone></md-input>
                  </md-field>
                  <md-field v-if="selectedGuestPartner">
                    <label>Email</label>
                    <md-input v-model=selectedGuestPartner.email></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <md-field v-if="selectedGuest">
                    <label>Food</label>
                    <md-input v-model=selectedGuest.food_allergies></md-input>
                  </md-field>
                  <md-field v-if="selectedGuest">
                    <label>Events</label>
                    <md-input v-model=selectedGuest.events></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <md-field v-if="selectedGuestPartner">
                    <label>Food Allergies</label>
                    <md-input v-model=selectedGuestPartner.food_allergies></md-input>
                  </md-field>
                  <md-field v-if="selectedGuestPartner">
                    <label>Events</label>
                    <md-input v-model=selectedGuestPartner.events></md-input>
                  </md-field>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <md-button class="md-raised md-primary" @click="saveOtherInfo()">Save</md-button>
                </div>
                <div class="md-layout-item md-large-size-50">
                  <md-button class="md-raised md-accent" @click="setDone('third')">Done</md-button>
                </div>
              </div>
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
      active: 'first',
      first: false,
      second: false,
      third: false,
      secondStepError: null,
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
    mounted() {
      VanillaTilt.init(document.querySelector('.rsvp'), {
        max: 25,
        speed: 2000,
        scale: 1.02,
      });

      //TODO: Implement DropDown Perspective.
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
      setDone(id, index) {
        this[id] = true;
        if ( index === 'second' ) {
          if ( !this.selectedGuestAttending && this.selectedGuestPartnerAttending ) {
            this.selectedGuest = this.selectedGuestPartner;
          }
          console.log('GUEST', this.selectedGuest, 'GUESTPARTNER', this.selectedGuestPartner);
        }

        if ( index === 'third' ) {

        }
        ;

        if ( index ) {
          this.active = index;
        }
      },
      setError() {
        this.secondStepError = 'This is an error!';
      }
    },
  };

</script>

<style lang="scss" scoped>
  @import "../css/main.scss";

  .md-card {
    max-width: 600px;
    min-width: 400px;

    .meBtn {
      margin-top: 15px;
    }

    .partner {
      text-align: left;
      align-self: flex-start;
      font-size: 16px;
    }

    .partnerName {
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

    .question1 {
      margin-top: 12px;
      text-align: left;
    }

    .question2 {
      margin-top: 15px;
      text-align: left;
    }

    .questionSwitch1 {
      margin-top: 12px;
    }

    .questionSwitch2 {
      margin-top: 0px;
    }

    .updateInfo {
      text-align: left;
    }
  }
</style>
