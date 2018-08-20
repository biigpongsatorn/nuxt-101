<template>
  <div>
    test
    {{ product }}
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'test',
  layout: 'custom',
  data () {
    return {
      product: {}
    }
  },
  head () {
    return {
      title: 'TEST'
    }
  },
  // validate ({ query}) {
  //   if (query.a === 'b') {
  //     return true
  //   } else {
  //     return false
  //   }
  //   },
  async asyncData (context) {
    let response = {}
    if (process.server) {
      response = await axios.get('https://api.myjson.com/bins/bk8qw')
    } else {
      response = await axios.get('https://api.myjson.com/bins/o4hm0')
    }
    return { product: response.data }
  }
}
</script>

