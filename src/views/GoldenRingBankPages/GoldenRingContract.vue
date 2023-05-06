<template>
  <div class="wrapper">
    <WideTopPattern/>
    <div class="deposit-title">
      Депозитный договор
    </div>
    <p class="text">
      Между банком «Золотое кольцо», именуемым в дальнейшем «Банк», и вкладчиком «ФИО вкладчика», именуемым в дальнейшем
      «Вкладчик», заключен следующий договор о вкладе:
    </p>
    <p class="text">
      1. Предмет договора
    </p>
    <p class="text">
      1.1. В соответствии с настоящим договором Вкладчик передает Банку финансовые средства в размере «Сумма вклада»
      («Сумма прописью») .
    </p>
    <p class="text">
      1.2. Банк обязуется принять денежные средства во вклад на условиях, предусмотренных настоящим договором, а
      Вкладчик обязуется внести указанную сумму в соответствии с требованиями Банка.
    </p>
    <p class="text">
      2. Условия вклада
    </p>
    <p class="text">
      2.1. Срок действия вклада составляет «Срок вклада» («Срок прописью») месяцев/лет.
    </p>
    <p class="text">
      2.2. Процентная ставка по вкладу составляет 13% годовых 8% из которых банк присваивает как оплату обслуживания.
    </p>
    <p class="text">
      2.3. Вкладчик вправе получить начисленные проценты по вкладу по истечении срока действия вклада.
    </p>
    <p class="text">
      3. Ответственность Банка
    </p>
    <p class="text">
      3.1 Банк обязуется открыть счёт для хранения депозита, обеспечить сохранность депозита и выплачивать доход в
      соответствии с договором
    </p>
    <button class="button" style="margin: 5vmin auto">Я согласен с условиями</button>
  </div>
</template>

<script>

import WideTopPattern from '@/views/GoldenRingBankPages/components/WidePatterns/WideTopPattern.vue'

export default {
  name: 'GoldenRingContract',
  components: { WideTopPattern }
}
</script>

<style lang="less" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.deposit-title {
  font-family: 'Open Sans', serif;
  font-size: 6vmin;
  font-weight: 400;
  padding-top: 22vmin;
  text-align: center;
}

.text {
  font-family: 'Open Sans', serif;
  font-size: 4vmin;
  font-weight: 600;
  text-align: left;
  padding: 1vmin 7vmin;
}

.button {
  background-color: rgba(255, 214, 0, 0.51);
  font-family: Lobster, serif;
  font-size: 4.5vmin;
  border: none;
  border-radius: 3vmin;
  font-weight: 400;
  width: 50vmin;
  height: 8vmin;
  cursor: pointer;
}
</style>
