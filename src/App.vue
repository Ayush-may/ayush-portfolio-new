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

    <!-- <router-view :isDark="isDark"></router-view> -->
    <Home :isDark="isDark" />

    <section class="w-full flex flex-col mt-10 mb-3 py-5 max-w-[800px] mx-auto"
      :class="isDark ? 'text-stone-200 ' : 'text-white'">
      <h1 class="text-7xl font-bold text-center mb-5">About me</h1>
      <p class="text-center text-xl ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere quae magnam fugit laborum corporis dolore
        blanditiis voluptas eveniet quaerat aliquid id libero debitis consequatur, incidunt qui veritatis maiores ea
        mollitia!
      </p>
    </section>

    <section class="w-full flex flex-col mt-10 mb-3 py-5" :class="isDark ? 'text-stone-200 ' : 'text-white'">
      <h1 class="text-7xl font-bold text-center mb-5">Experience</h1>
      <Experience />
    </section>

    <section class="w-full flex flex-col -mt-10 mb-3 py-5" :class="isDark ? 'text-stone-200 ' : 'text-white'">
      <h1 class="text-7xl font-bold text-center mb-5">Projects</h1>
      <Project :isDark="isDark" />
      <button
        class="border px-3 py-2 hover:bg-slate-50 hover:text-black hover:-translate-y-1 transition-all duration-500 w-fit mx-auto rounded-full text-white">
        <a href="/project">View more</a>
      </button>
    </section>

    <section class="mt-10 mb-3 py-5 px-3" :class="isDark ? 'text-stone-200 ' : 'text-white'">
      <h1 class="text-7xl font-bold text-center mb-5">Technologies</h1>
      <div class="grid grid-cols-7 max-md:grid-cols-2 gap-5">
        <div class="h-[200px] hover:-translate-y-3 duration-500 transition-all">
          <img src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png" alt=""
            class="w-full h-full object-contain">
        </div>
        <div class="h-[200px] hover:-translate-y-3 duration-500 transition-all">
          <img src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" alt=""
            class="w-full h-full object-contain">
        </div>
        <div class="h-[200px] hover:-translate-y-3 duration-500 transition-all">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/free-node-js-logo-icon-download-in-svg-png-gif-file-formats--nodejs-programming-language-pack-logos-icons-1174925.png?f=webp"
            alt="" class="w-full h-full object-contain">
        </div>
        <div class="h-[200px] hover:-translate-y-3 duration-500 transition-all">
          <img src="https://ajeetchaulagain.com/static/7cb4af597964b0911fe71cb2f8148d64/87351/express-js.png" alt=""
            class="w-full h-full object-contain">
        </div>
        <div class="h-[200px] hover:-translate-y-3 duration-500 transition-all">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png"
            alt="" class="w-full h-full object-contain">
        </div>
        <div class="h-[200px] hover:-translate-y-3 duration-500 transition-all">
          <img
            src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.png"
            alt="" class="w-full h-full object-contain">
        </div>
        <div class="h-[200px] hover:-translate-y-3 duration-500 transition-all">
          <img src="https://nextsoftware.io/files/images/logos/main/django-logo.png" alt=""
            class="w-full h-full object-contain">
        </div>
      </div>
    </section>

    <footer class="mt-5 py-1" :class="isDark ? 'bg-black' : 'bg-stone-900'">
      <h1 class="text-center  text-white">Code by Ayush Sharma</h1>
    </footer>

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