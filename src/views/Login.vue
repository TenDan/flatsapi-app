<template>
  <v-dialog
    value="true"
    persistent
    hide-overlay
    no-click-animation
    transition="dialog-bottom-transition"
    max-width="600px"
  >
    <v-card>
      <v-form
        ref="form"
        v-model="valid">
        <v-card-title>Log In</v-card-title>
        <v-card-text>
          <v-text-field
            label="Username or Email"
            :rules="fieldRules.usernameOrEmail"
            :value="fields.usernameOrEmail"
          ></v-text-field>
          <v-text-field
            label="Password"
            :rules="fieldRules.password"
            :value="fields.password"
          ></v-text-field>
          <v-checkbox
            label="Remember Me"
            v-model="fields.savePassword"
          ></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="$router.push('/')"
          >Go Back</v-btn>
          <v-btn
            color="primary"
            @click="login"
          >Log In</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import { minLength, isRequired } from '../common/form/rules';

export default {
  name: 'Login',
  data() {
    return {
      valid: null,
      fieldRules: {
        usernameOrEmail: [isRequired, minLength(5)],
        password: [isRequired],
      },
      fields: {
        usernameOrEmail: '',
        password: '',
        savePassword: false,
      },
    };
  },
  methods: {
    login(e) {
      e.preventDefault();
      this.$refs.form.validate();
      if (this.valid) {
        console.log({
          ...this.fields,
        });
      }
    },
  },
};
</script>

<style scoped>

</style>
