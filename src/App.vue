<script>
import Nav from './components/Nav.vue';
import Home from './components/Home.vue';
import Project from './components/Project.vue'
import Experience from './components/Experience.vue'

export default {
  components: {
    Nav,
    Home,
    Project,
    Experience,

  },
  data() {
    return {
      isDark: JSON.parse(localStorage.getItem("isDark")) || true,
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
  <div class="flex flex-col w-full h-auto" :class="isDark ? 'bg-stone-900' : 'bg-[#E42944]'">
    <Nav :isDark="isDark" :changeDarkMode="handleChangeDarkMode" />
    <router-view :isDark="isDark"></router-view>
  </div>
</template>

<style>
body,
html {
  scrollbar-width: thin;
  scroll-behavior: smooth;
  scrollbar-color: black grey;
}
</style>