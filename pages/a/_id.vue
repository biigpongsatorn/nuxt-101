<template>
  <div>
    ID : {{ id }}
    {{ products }}
    {{ products2 }}
  </div>
</template>

<script>
import { mapActions, mapState, mapGetters} from 'vuex'

export default {
  name: 'a-id',
  data () {
    return {
      id: this.$route.params.id
    }
  },
  computed: {
    ...mapState({
      products: state => state.products
    }),
    ...mapGetters({
      products2: 'getProducts'
    })
  },
  methos: {
    ...mapActions({
      'fetchProducts': 'getProducts'
    })
  },
  async fetch ({ store }) {
    await store.dispatch('getProducts', process.server)
  }
}
</script>

