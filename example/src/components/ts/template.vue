<template>
  <v-card class="mx-auto" max-width="400" tile>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>{{title()}}</v-list-item-title>
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
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return { name: 'World' };
  },
  methods: {
    title(): string {
      return 'using Vue.extend() [implements template section]';
    },
  }
});
</script>

<style lang="scss" scoped>
.v-card {
  background-color: #f386ef;
}
</style>
