<script>
export default {
  props: {
    changeDarkMode: {
      type: Function,
      required: true
    },
    isDark: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      tags: [{
        href: "/",
        name: "Home"
      }, {
        href: "/projects",
        name: "Projects"
      },
      ]
    }
  }
  , methods: {
    changeColorMode() {
      this.changeDarkMode()
    }
  }
}
</script>

<template>
  <nav class="py-3 shadow-sm fixed w-full top-0 z-10"
    :class="isDark ? 'text-stone-200 bg-stone-900' : 'text-white bg-[#E42944]'">
    <div class="relative flex flex-row justify-center gap-2 flex-1">
      <router-link :to="tag.href" class="hover:-translate-y-0.5 hover:opacity-70 duration-300 transition-all"
        v-for="(tag, index) in tags" :key="index">{{ tag.name }}</router-link>

      <div>
        <i v-if="isDark" @click="changeColorMode"
          class="pi pi-sun text-yellow-400 p-2 rounded-full hover:bg-stone-600 transition-colors duration-100 absolute right-2 cursor-pointer"></i>
        <i v-else @click="changeColorMode"
          class="pi pi-moon text-white p-2 rounded-full hover:bg-red-400 transition-colors duration-100 absolute right-2 cursor-pointer"></i>
      </div>

    </div>
  </nav>
</template>