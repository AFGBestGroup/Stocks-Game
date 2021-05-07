<template>
  <Modal
    v-model="isOpen"
    :fullscreen="false"
    modal-transition="scale"
    :click-out="true"
    :disable-motion="false"
    :max-width="maxWidth"
    :remove-backdrop="false"
  >
    <!-- Optional  -->
    <!-- <template #activator="props">
      <button v-bind="props">Open</button>
    </template> -->

    <div class="card">
      <h1 style="padding: 0.5em">{{ title }}</h1>

      <p>
        {{ description }}
      </p>

      <button
        style="margin: 0.5em"
        v-for="option in options"
        v-bind:key="option.text"
        @click="
          option.call();
          isOpen = false;
        "
      >
        {{ option.text }}
      </button>
    </div>
  </Modal>
</template>

<script>
import { Modal } from "vue-neat-modal";
import state from "../state";
let events = {
  grandmaEvent: false,
  didAttendPartyEvent: false,
  didNotAttendPartyEvent: false,
};

export default {
  components: {
    Modal,
  },

  data: () => ({
    isFullscreen: false,
    modalTransition: "scale",
    isClickOut: true,
    isMotionDisabled: false,
    isBackdropRemoved: false,
    maxWidth: "500px",
    ...events,
  }),

  computed: {
    isOpen() {
      let open =
        this.grandmaEvent ||
        this.didAttendPartyEvent ||
        this.didNotAttendPartyEvent;

      if (open) state.paused = true;
      else state.paused = false;

      return open;
    },
    title() {
      if (this.grandmaEvent) return "Grandma is throwing a party!";
      if (this.didAttendPartyEvent) return "Grandma appreciates you <3";
      if (this.didNotAttendPartyEvent)
        return "Grandma appreciates you, but a little less <3";
    },
    description() {
      if (this.grandmaEvent)
        return "Grandma is throwing a wonderful party, there will be bingo and chips but it costs $500 to enter (rich grandma).\nDo you wish to attend?";
      if (this.didAttendPartyEvent)
        return "Grandma suddenly comes across $3,000 and wants to show you her appreciation.";
      if (this.didNotAttendPartyEvent)
        return "Grandma finds $3,000 in the couch cushions of the party, she thought of giving them to you, but you weren't there.";
    },
    options() {
      if (this.grandmaEvent)
        return [
          {
            text: "Yes",
            call: () => {
              this.grandmaEvent = false;
              this.didAttendPartyEvent = true;
              state.bank.withdraw(500);
            },
          },
          {
            text: "No",
            call: () => {
              this.grandmaEvent = false;
              this.didNotAttendPartyEvent = true;
            },
          },
        ];
      else if (this.didAttendPartyEvent)
        return [
          {
            text: "Collect $3,000",
            call: () => {
              this.didAttendPartyEvent = false;
              state.bank.deposit(3000);
            },
          },
        ];
      else if (this.didNotAttendPartyEvent)
        return [
          {
            text: "Close",
            call: () => {
              this.didNotAttendPartyEvent = false;
            },
          },
        ];
    },
  },
  mounted() {
    let min = 3 * 1000; // seconds
    let max = 5 * 1000; // seconds

    setTimeout(() => {
      this.grandmaEvent = true;
    }, Math.random() * Math.random() * (max - min) + min);
  },
};
</script>