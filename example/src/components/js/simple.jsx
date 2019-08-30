import Vue from 'vue';

const component = Vue.extend({
  data() {
    return { name: 'World' };
  },
  methods: {
    title() {
      return 'using Vue.extend() [jsx]';
    },
  },
  render() {
    return (
      <v-card class="mx-auto" max-width="400" tile>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{this.title()}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <div v-ripple />

        <v-list-item two-line>
          <v-list-item-content>
            <v-list-item-title>Two-line item</v-list-item-title>
            <v-list-item-subtitle>Secondary text</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-title>Three-line item</v-list-item-title>
            <v-list-item-subtitle>
              Secondary line text Lorem ipsum dolor sit amet,
            </v-list-item-subtitle>
            <v-list-item-subtitle>
              consectetur adipiscing elit.
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    );
  },
});

export default component;
