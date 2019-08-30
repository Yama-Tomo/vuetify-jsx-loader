<script>
export default {
  data() {
    return { name: 'World' }
  },
  methods: {
    redirect() {
      const redirectTo = '/path/to/page'
      this.$router.push(redirectTo)
    }
  },
};
</script>
