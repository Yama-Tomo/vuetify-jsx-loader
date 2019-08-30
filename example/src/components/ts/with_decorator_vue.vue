<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';
import { VNode } from 'vue';

@Component
export default class TsxComponent extends Vue {
  public title(): string {
    return 'with vue-property-decorator [tsx]';
  }

  public render(): VNode {
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
  }
}

// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const component = TsxComponent;
</script>

<style lang="scss" scoped>
.v-card {
  background-color: #c3c3c3;
}
</style>
