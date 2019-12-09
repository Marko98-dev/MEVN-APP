<template>
  <div id="custom-home">
    <HomeContent />
  </div>
</template>

<script>

import HomeContent from '@/components/HomeContent.vue';

export default {
  name: 'home',
  components: {
    HomeContent,
  },
  beforeCreate: function () {
    fetch(`${this.$store.state.apiUrl}/api/user`, {
      method: 'GET',
    })
      .then(res => res.json());
  },
};
</script>
