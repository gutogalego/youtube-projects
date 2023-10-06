<template>
    <header className="App-header">
      <p>Count: {{ count }}</p>
      <button @click="increment">+1</button>
    </header>
</template>

<script>
export default {
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    increment() {
      this.count++;
    },
  },
};
</script>
