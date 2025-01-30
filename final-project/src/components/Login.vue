<template>
  <div id="login" class="bg--fixed login-1 login-section division">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-lg-6 offset-md-2 offset-lg-3">
          <div class="register-page-form">
            <!-- TITLE -->
            <div class="col-md-12">
              <div class="register-form-title">
                <h3 class="s-32 w-700">Log in to Martex</h3>
                <p class="p-md">
                  Don't have an account?
                  <router-link to="/signup" class="color--theme">Sign up</router-link>
                </p>
              </div>
            </div>

            <!-- LOGIN FORM -->
            <form name="signinform" class="row sign-in-form" @submit.prevent="handleLogin">
              <!-- Google Button -->
              <div class="col-md-12">
                <a href="#" class="btn btn-google ico-left">
                  <img
                    src="./assets/images/png_icons/google.png"
                    alt="google-icon"
                    onerror="this.onerror=null; this.src='./assets/images/default.png'"
                  />
                  Sign in with Google
                </a>
              </div>

              <!-- Login Separator -->
              <div class="col-md-12 text-center">
                <div class="separator-line">Or, sign in with your email</div>
              </div>

              <!-- Form Input -->
              <div class="col-md-12">
                <p class="p-sm input-header">Email address</p>
                <input
                  v-model="email"
                  class="form-control email"
                  type="email"
                  placeholder="example@example.com"
                  required
                />
              </div>

              <!-- Form Input -->
              <div class="col-md-12">
                <p class="p-sm input-header">Password</p>
                <div class="wrap-input">
                  <span class="btn-show-pass ico-20">
                    <span class="flaticon-visibility eye-pass"></span>
                  </span>
                  <input
                    v-model="password"
                    class="form-control password"
                    type="password"
                    placeholder="********"
                    required
                  />
                </div>
              </div>

              <!-- Reset Password Link -->
              <div class="col-md-12">
                <div class="reset-password-link">
                  <p class="p-sm">
                    <router-link to="/reset-password" class="color--theme">Forgot your password?</router-link>
                  </p>
                </div>
              </div>

              <!-- Form Submit Button -->
              <div class="col-md-12">
                <button type="submit" class="btn btn--theme hover--theme submit">Log In</button>
              </div>
            </form>
            <!-- END LOGIN FORM -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const email = ref("");
const password = ref("");

const handleLogin = () => {
  console.log("Logging in with:", email.value, password.value);
  alert(`로그인 시도: ${email.value}`);
};
</script>
