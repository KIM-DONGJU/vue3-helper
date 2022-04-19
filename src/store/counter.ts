import { defineStore } from 'pinia';
import { ref } from 'vue';

const useCounterStore = defineStore('counter', () => {
  const count = ref(0);
  const plusCount = () => {
    count.value += 1;
  };

  const minusCount = () => {
    count.value -= 1;
  };

  return {
    count,
    plusCount,
    minusCount,
  };
});

export default useCounterStore;
