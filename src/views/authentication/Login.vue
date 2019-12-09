<template>
<div>
  <form class="custom-form" v-on:submit="onSubmit">
    <div class="form-group">
      <label for="username">Username</label>
      <input type="text" class="form-control" id="username" placeholder="username" />
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" id="password" placeholder="password" />
    </div>
    <div class="form-group">
      <button type="submit" class="btn btn-secondary">Submit</button>
    </div>
  </form>
</div>
</template>

<script>

import * as auth from '../../services/AuthService';

export default {
  name: 'login',
  methods: {
    onSubmit: function (event) {
      event.preventDefault();
      auth.login();
      this.$router.push({ name: 'home' });
    },
  },
};

</script>
