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
            label="Email"
            :rules="fieldRules.email"
            :value="fields.email"
          ></v-text-field>
          <v-text-field
            label="Username"
            :rules="fieldRules.username"
            :value="fields.username"
          ></v-text-field>
          <v-text-field
            label="First Name"
            :rules="fieldRules.firstName"
            :value="fields.firstName"
          ></v-text-field>
          <v-text-field
            label="Last Name"
            :rules="fieldRules.lastName"
            :value="fields.lastName"
          ></v-text-field>
          <v-text-field
            label="Password"
            :rules="fieldRules.password"
            :value="fields.password"
          ></v-text-field>
          <v-text-field
            label="Confirm Password"
            :rules="fieldRules.confirmPassword"
            :value="fields.confirmPassword"
          ></v-text-field>
          <v-select
            :items="fields.roles"
            :rules="fieldRules.roles"
            label="Role"
          ></v-select>
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
            @click="register"
          >Log In</v-btn>
        </v-card-actions>
      </v-form>
    </v-card>
  </v-dialog>
</template>

<script>
import {
  isRequired,
  minLength,
  maxLength,
  isEmail,
} from '../common/form/rules';

export default {
  name: 'Register',
  data() {
    return {
      valid: null,
      fields: {
        email: '',
        username: '',
        firstName: '',
        lastName: '',
        password: '',
        confirmPassword: '',
        roles: [
          'Tenant',
          'Landlord',
        ],
      },
      fieldRules: {
        email: [isRequired, isEmail],
        username: [isRequired, minLength(6), maxLength(30)],
        firstName: [isRequired],
        lastName: [isRequired],
        password: [isRequired, minLength(8), maxLength(50)],
        confirmPassword: [isRequired],
        roles: [isRequired],
      },
    };
  },
  methods: {
    register(e) {
      e.preventDefault();
      this.$refs.form.validate();
      if (this.valid) {
        console.log({ ...this.fields });
      }
    },
  },
};
</script>

<style scoped>

</style>
