<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div class="wrap_count">
      <button
        @click="counter.plusCount"
      >
        plus
      </button>
      <p class="counter">
        {{counter.count}}
      </p>
      <button
        @click="counter.minusCount"
      >
        minus
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import useCounterStore from '../store/counter';

const counter = useCounterStore();
</script>

<style scoped lang="scss">
  .wrap_count {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    > button {
      width: 100px;
      height: 30px;
      font-size: 20px;
    }
  }

</style>
