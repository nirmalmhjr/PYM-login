<script setup lang="ts">
import {useTheme} from 'vuetify'

const theme = useTheme()
defineProps({
  closable: {
    type: Boolean,
    default: false,
  },
  isFromOrderPage: {
    type: Boolean,
    default: false,
  },
})
import {accountAPI} from "~/api/account";

const otp = ref('')
const otpRef = ref()
const phoneRef = ref()
const route = useRoute()
const registered = ref(route.query?.registered === 'true')
const flag = ref('')
let sessionToken = route.query?.session || ''
const phone = ref(route.query?.phone || '')
const ac = new AbortController()
const loading = ref(false)

const countryCode = computed(() => {
  // return store.getters.countryCode
  return 'NP'
})
const appURL = computed(() => {
  // return process.env.appURL
  return 'https://pickyourmenu.com'
})

function autoUpdateOTPFromSMS() {
  if ('OTPCredential' in window) {
    const credentialOption: CredentialRequestOptions = {
      otp: {transport: ['sms']},
      signal: ac.signal,
    }
    navigator.credentials
        .get(credentialOption)
        .then(({code}: Credential) => {
          otp.value = code
          onSubmit()
        })
        .catch((err) => {
          console.log(err)
        })
  }
}

onMounted(() => {
  autoUpdateOTPFromSMS()
  nextTick(() => {
    phoneRef.value.focus()
  })
})
onBeforeUnmount(() => {
  ac.abort()
})

function onSubmit() {
  let url = ''
  let payload
  if (!registered.value) {
    url = accountAPI.onboardUser()
    payload = {
      user: {
        phone: phone.value,
      },
      org: null,
    }
    // message.value = 'Please input OTP we have just sent in your number.'
  }
  if (registered.value) {
    url = accountAPI.verifyOnboard()
    payload = {
      phone: phone.value,
      otp: otp.value,
      session_token: sessionToken,
    }
    // message.value = 'You have successfully logged in.'
  }
  // postData(url, payload).then((response: any) => {
  //   if (registered.value) {
  //     ac.abort()
  //     const { user, orgs, token } = response.data
  //     if (user && token) {
  //       store.dispatch('auth/updateUserData', user)
  //       store.dispatch('auth/updateToken', token)
  //
  //       getData(orderAPI.myOrder + `?is_resolved=false&limit=0`).then(
  //         (response) => {
  //           store.dispatch(
  //             'updatePendingOrder',
  //             response.data.stats.not_resolved
  //           )
  //         }
  //       )
  //       if (route.value.params.restaurant) {
  //         getData(
  //           accountAPI.userDetail(route.value.params.restaurant)
  //         ).then((response) => {
  //           store.dispatch('auth/updateNormalUserInOrgData', response.data)
  //           location.reload()
  //         })
  //         flag.value = 'close'
  //       } else if (orgs && orgs.length > 0) {
  //         store.dispatch('auth/updateOrganization', orgs)
  //         if (props.isFromOrderPage) {
  //           flag.value = 'close'
  //         } else if (orgs.length > 1) {
  //           flag.value = 'choose-org'
  //         } else {
  //           flag.value = `/${orgs[0].slug}/dashboard`
  //         }
  //       } else if (props.closable || props.isFromOrderPage) {
  //         flag.value = 'close'
  //       } else {
  //         flag.value = '/'
  //       }
  //     } else {
  //       setErrorText('Something went wrong. Please login/register again.')
  //     }
  //   } else {
  //     registered.value = true
  //     sessionToken = response.data.session_token
  //     nextTick(() => {
  //       otpRef.value.focus()
  //     })
  //   }
  //   registered.value = true
  // })
}

function resendOTP() {
  registered.value = false
  onSubmit()
}
</script>

<template>
  <div>
    <h1>Nuxt Routing set up successfully!</h1>
    <p>Current route: {{ route.path }}</p>
    <a href="https://nuxt.com/docs/getting-started/routing" target="_blank">Learn more about Nuxt Routing</a>
  </div>
  <form @submit.prevent="onSubmit()">
    <v-card color="transparent" class="text-center" flat dark>
      <v-card-title class="justify-center mb-1">
        <span class="text-h5"> ACCOUNT LOGIN</span>
      </v-card-title>
      <v-card-subtitle class="mb-2">
          <span class="text-subtitle-2"
          ><div>Login / Register with just phone number.</div>
            No more hassle.</span
          >
      </v-card-subtitle>
      <v-card-text>
        <v-row align="center">
          <v-col>
            <!--              <the-non-field-error-->
            <!--                :error="nonFieldErrorList"-->
            <!--                :dismissible="false"-->
            <!--              ></the-non-field-error>-->
          </v-col>
        </v-row>
        <v-overlay absolute :value="loading">
          <v-progress-circular
              indeterminate
              color="primary"
          ></v-progress-circular>
        </v-overlay>
        <v-row align="center">
          <v-col cols="12" class="py-0">
            <!-- Phone number rule for Nepal-->
            <!-- :rules="{ regex: /^9([876])[0-9]{8}$/, required: true }"-->
            <!--              <base-validation-text-box-->
            <!--                v-model="phone"-->
            <!--                auto-focus-->
            <!--                name="Phone Number"-->
            <!--                type="number"-->
            <!--                prepend-inner-icon="mdi-phone-outline"-->
            <!--                label="Phone Number *"-->
            <!--                rules="required"-->
            <!--                solo-->
            <!--                :read-only="registered"-->
            <!--                :light="!$vuetify.theme.dark"-->
            <!--              ></base-validation-text-box>-->
          </v-col>
          <v-col
              v-if="!registered"
              cols="12"
              class="text-subtitle-2 text-center py-0"
          >Use your valid phone number.
          </v-col>
          <v-col v-else cols="12" class="py-0">
            <v-otp-input
                ref="otpRef"
                v-model="otp"
                length="6"
                type="number"
                :disabled="loading"
                :class="theme.global.current.dark ? 'dark-otp' : ''"
                :light="!theme.global.current.dark"
                @finish="onSubmit"
            ></v-otp-input>
          </v-col>
          <v-col v-if="registered" cols="12" class="text-subtitle-2 py-0">
            <v-btn text>
              <a
                  class="white--text text--darken-1 text-decoration-underline"
                  @click="resendOTP()"
              >
                Resend OTP
              </a>
            </v-btn>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="px-4">
        <v-row>
          <v-col v-if="!registered && !loading" cols="12">
            <v-btn
                type="submit"
                class="primary secondary--text"
                block
                outlined
            >{{ registered ? 'Verify' : 'Login' }}
            </v-btn>
          </v-col>
          <template v-if="!isFromOrderPage">
            <v-col cols="12" class="py-0 pt-5">
              <div class="d-flex my-0 align-center">
                <v-divider class="my-1" dark></v-divider>
                <div class="text-overline mx-1">
                  For Restaurant Registration
                </div>
                <v-divider class="my-1" dark></v-divider>
              </div>
            </v-col>
            <v-col cols="12" class="text-center py-0"
            >Need an account for your own restaurant?
              <a
                  v-if="countryCode === 'NP'"
                  class="white--text text-decoration-underline"
                  @click="$emit('login', false)"
              >
                Register
              </a>
              <div v-else class="text-subtitle-2">
                Please email us at
                <a :href="`mailto:sales@${appURL}.com`"
                >sales@{{ appURL }}.com</a
                >
              </div>
            </v-col>
          </template>
        </v-row>
      </v-card-actions>
      <div class="text-caption mt-6 grey--text text--lighten-2">
        <slot name="footer"></slot>
      </div>
    </v-card>
  </form>
</template>

