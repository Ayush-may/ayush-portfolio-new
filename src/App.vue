<script>
import Nav from './components/Nav.vue';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      isDark: JSON.parse(localStorage.getItem("isDark")) || false,
    }
  },
  methods: {
    handleChangeDarkMode() {
      this.isDark = !this.isDark;
      localStorage.setItem('isDark', JSON.stringify(this.isDark))
    }
  }
}
</script>

<template>
  <div class="flex flex-col w-full min-h-[100vh]" :class="isDark ? 'bg-stone-900' : 'bg-[#E42944]'">
    <Nav :isDark="isDark" :changeDarkMode="handleChangeDarkMode" />

    <router-view :isDark="isDark"></router-view>

  </div>
</template>