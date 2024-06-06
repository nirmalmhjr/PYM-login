// export const accountAPI = {
//   /**
//    * Get OTP for verified phone number
//    * ###payload:
//    * ```
//    * {
//    *   phone: number,
//    *   orgs?: {
//    *     name: string,
//    *     slug: string
//    *   }
//    * }
//    * ```
//    */
//   onboardUser: () => 'accounts/onboard/',
//   /**
//    * Verify phone number with OTP
//    * ###payload:
//    * { phone: number, otp: number }
//    */
//   verifyOnboard: () => 'accounts/onboard/verify/',
// }

export const accountAPI = {
  /**
   * Get OTP for verified phone number
   * ###payload:
   * ```
   * {
   *   phone: number,
   *   orgs?: {
   *     name: string,
   *     slug: string
   *   }
   * }
   * ```
   */
  onboardUser: () => 'accounts/onboard/',
  /**
   * Verify phone number with OTP
   * ###payload:
   * { phone: number, otp: number }
   */
  verifyOnboard: () => 'accounts/onboard/verify/',
}

