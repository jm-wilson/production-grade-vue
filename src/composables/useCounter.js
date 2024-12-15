import { ref } from 'vue';

export function useCounter() {
  const counter = ref(0);
  const amount = ref(5);

  function add(amount) {
    counter.value += parseInt(amount) || 1;
  }

  const incrementByAmount = () => add(amount.value);
  const incrementBy1 = () => add(1);

  return {
    counter,
    incrementBy1,
    amount,
    incrementByAmount,
  };
}
