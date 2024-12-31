<script>
import Experience from './Experience.vue';
import Project from './Project.vue';
import Typewriter from 'typewriter-effect/dist/core';

export default {
  components: {
    Project,
    Experience,
  },
  props: {
    isDark: {
      type: Boolean,
      required: true
    }
  },
  mounted() {
    const role = document.getElementById('role');
    new Typewriter(role, {
      strings: ["Frontend", "Backend", "Full-Stack"],
      autoStart: true,
      loop: true,

    })
  }
}

</script>

<template>
  <div class="min-h-[100vh] flex-[1] flex max-lg:flex-col justify-evenly items-center relative">
    <div class="w-[200px] h-[200px] rounded-full overflow-hidden hidden mt-20 max-lg:block">
      <img v-if="!isDark" src="/images/ayush_image.jpg" alt="">
      <img v-else src="/images/ayush_image_bw.jpg" alt="">
    </div>
    <div class="flex flex-col max-lg:text-center">
      <div class="text-6xl font-bold" :class="isDark ? 'text-stone-200' : 'text-white'">
        <h1 class="">I'm a</h1>
        <h1 id="role">Frontend</h1>
        <h1>Developer<span class="text-yellow-200">.</span> </h1>
      </div>

      <div class="mt-3 flex items-center gap-3 absolute bottom-2 left-[50%] translate-x-[-50%] max-md:hidden "
        :class="isDark ? 'text-stone-400' : 'text-rose-200'">
        <!-- <p>Social Media: </p> -->
        <div class="flex gap-2">
          <i class="pi pi-discord text-xl cursor-pointer hover:-translate-y-1 transition-transform duration-300"></i>
          <i class="pi pi-linkedin text-xl cursor-pointer hover:-translate-y-1 transition-transform duration-300"></i>
          <i class="pi pi-github text-xl cursor-pointer hover:-translate-y-1 transition-transform duration-300"></i>
        </div>
      </div>

      <!-- small screen -->
      <div
        class="mt-3 flex items-center gap-3 fixed bottom-5 left-5 translate-x-[-50%] md:hidden z-10 bg-black p-2 rounded-md"
        :class="isDark ? 'text-stone-400' : 'text-rose-200'">
        <!-- <p>Social Media: </p> -->
        <div class="flex flex-col gap-2">
          <i class="pi pi-discord text-xl cursor-pointer hover:-translate-y-1 transition-transform duration-300"></i>
          <i class="pi pi-linkedin text-xl cursor-pointer hover:-translate-y-1 transition-transform duration-300"></i>
          <i class="pi pi-github text-xl cursor-pointer hover:-translate-y-1 transition-transform duration-300"></i>
        </div>
      </div>

      <div class="mt-4 flex gap-2">
        <button class="p-2 flex-1 hover:-translate-y-1 duration-300 transition-all" :class="isDark ? 'bg-stone-200' : 'bg-white'">WhatsApp</button>
        <button class="p-2 flex-1 hover:-translate-y-1 duration-300 transition-all" :class="isDark ? 'bg-stone-200' : 'bg-white'">Resume</button>
      </div>
    </div>
    <div class="w-[350px] h-[350px] rounded-full overflow-hidden max-lg:hidden">
      <img v-if="!isDark" src="/images/ayush_image.jpg" alt="">
      <img v-else src="/images/ayush_image_bw.jpg" alt="">
    </div>
  </div>

</template>