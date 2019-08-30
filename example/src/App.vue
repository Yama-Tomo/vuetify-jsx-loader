<script lang="tsx">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  public render() {
    return (
      <v-app>
        <v-card class="menus" tile>
          <v-subheader>typescript</v-subheader>
          <v-divider inset></v-divider>
          <v-subheader inset>No SFC (filename: *.tsx)</v-subheader>
          <v-list-item to='/tsx-simple'>
            <v-list-item-content><v-list-item-title>using Vue.extend</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item to='/tsx-with-decorator'>
            <v-list-item-content><v-list-item-title>using vue-property-decorator</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-subheader inset>SFC (filename: *.vue)</v-subheader>
          <v-list-item to='/tsx-simple-vue'>
            <v-list-item-content><v-list-item-title>using Vue.extend</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item to='/template-vue'>
            <v-list-item-content><v-list-item-title>using Vue.extend (template section)</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item to='/tsx-with-decorator-vue'>
            <v-list-item-content><v-list-item-title>using vue-property-decorator</v-list-item-title></v-list-item-content>
          </v-list-item>

          <v-subheader>javascript</v-subheader>
          <v-divider inset></v-divider>
          <v-subheader inset>No SFC (filename: *.jsx)</v-subheader>
          <v-list-item to='/jsx-simple'>
            <v-list-item-content><v-list-item-title>using Vue.extend</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-divider inset></v-divider>
          <v-subheader inset>SFC (filename: *.vue)</v-subheader>
          <v-list-item to='/jsx-simple-vue'>
            <v-list-item-content><v-list-item-title>using Vue.extend</v-list-item-title></v-list-item-content>
          </v-list-item>
        </v-card>
        <div class="main-view">
          <router-view></router-view>
        </div>
      </v-app>
    );
  }
}
</script>

<style lang="scss" scoped>
.v-card.menus {
  hr.v-divider--inset:not(.v-divider--vertical) {
    margin-left: 32px;
  }

  .v-subheader--inset {
    height: 24px;
    margin-left: 16px;
  }

  .v-list-item {
    padding-left: 32px;
  }
}

.main-view {
  margin: auto;
}
</style>
