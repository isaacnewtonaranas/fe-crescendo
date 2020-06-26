<template>
  <div>
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="col-7">
          {{ id }}
        </q-card-section>

        <q-img class="col-5" src="https://cdn.quasar.dev/img/parallax2.jpg" />
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {}
  },
  mounted() {
    console.log(this.$route.params.id)
  }
}
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  max-width: 700px
</style>
