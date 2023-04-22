<template>
  <div class="wrapping">
    <DepositPreviewComponent
      v-for="(i, index) in deposits" :key="index"
      :bank-icon="i.bankIcon"
      :deposit-name="i.depositName"
      :bank-name="i.bankName"
      :license-number="i.licenseNumber"
      :rating="i.rating"
      :rate="i.rate"
      :period="i.period"
      :sum="i.sum"
      :is-button-disabled="i.isButtonDisabled"
    ></DepositPreviewComponent>
  </div>
</template>

<script>
import DepositPreviewComponent from '@/components/DepositPreview/DepositPreviewComponent.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'BanksPage',
  components: { DepositPreviewComponent },
  computed: {
    ...mapGetters('depositPreview', [
      'getDeposits'
    ]),
    deposits () {
      return this.getDeposits
    }
  }
}
</script>

<style>
.wrapping {
  width: 1000px;
  margin-left: auto;
  margin-right: auto;
}
</style>
