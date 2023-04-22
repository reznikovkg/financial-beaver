<template>
  <div class="wrapping">
    <DepositPreviewComponent
      bank-icon="https://papik.pro/uploads/posts/2021-11/1636135154_5-papik-pro-p-gazprombank-logotip-foto-6.jpg"
      deposit-name="Управляй процентом"
      bank-name="Газпромбанк"
      license-number="756495785"
      :rating="4.5"
      :rate="10"
      period="1 дня"
      sum="1 - 1 500 000"
      :is-button-disabled="false"
    ></DepositPreviewComponent>
    <DepositPreviewComponent
      bank-icon="https://papik.pro/uploads/posts/2021-11/1636135154_5-papik-pro-p-gazprombank-logotip-foto-6.jpg"
      deposit-name="Управляй процентом"
      bank-name="Газпромбанк"
      license-number="756495785"
      :rating="4.5"
      :rate="10"
      period="1 дня"
      sum="1 - 1 500 000"
      :is-button-disabled="false"
    ></DepositPreviewComponent>
  </div>
</template>

<script>
import DepositPreviewComponent from '@/components/DepositPreview/DepositPreviewComponent.vue'

export default {
  name: 'BanksPage',
  components: { DepositPreviewComponent }
}
</script>

<style>
.wrapping {
  padding: 20px;
  width: 1000px;
}
</style>
