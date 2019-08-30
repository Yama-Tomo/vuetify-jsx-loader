<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class extends Vue {
  public redirect() {
    const redirectTo: string = '/path/to/page';
    this.$router.push(redirectTo);
  }
}
</script>
