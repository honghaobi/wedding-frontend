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
                  <md-checkbox class="md-primary" v-model="selectedGuestAttending" v-if="selectedGuest"><b>{{ selectedGuest.full_name}}</b>
                  </md-checkbox>
                  <md-checkbox class="md-primary" v-model="selectedGuestPartnerAttending" v-if="selectedGuestPartnerIncluded"><b>{{selectedGuestPartner.full_name}}</b>
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

            <md-step id="second" md-label="Second Step" :md-error="secondStepError" :md-editable="false" :md-done.sync="second">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
                 eius
                 amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
              <md-button class="md-raised md-primary" @click="setDone('second', 'third')">Continue</md-button>
              <md-button class="md-raised md-primary" @click="setError()">Set error!</md-button>
            </md-step>
            <md-step id="third" md-label="Third Step" :md-editable="false" :md-done.sync="third">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo
                 eius
                 amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
              <md-button class="md-raised md-primary" @click="setDone('third')">Done</md-button>
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
        this.guestsAttending = true;
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

        this.secondStepError = null;

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

    button.md-button md-icon-button md-dense md-input-action md-clear md-theme-default {
      display: none;
    }
  }
</style>
