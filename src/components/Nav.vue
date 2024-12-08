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
      {
        href: "",
        name: "Experience"
      },
      {
        href: "",
        name: "Blogs"
      },
      {
        href: "",
        name: "Contact"
      }

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
  <nav class="flex justify-center gap-2 py-3 shadow-sm relative" :class="isDark ? 'text-stone-200' : 'text-white'">
    <router-link :to="tag.href" class="" v-for="(tag, index) in tags" :key="index">{{ tag.name }}</router-link>

    <div class="">
      <i v-if="isDark" @click="changeColorMode"
        class="pi pi-sun text-yellow-400 p-2 rounded-full hover:bg-stone-600 transition-colors duration-100 absolute right-2 cursor-pointer"></i>
      <i v-else @click="changeColorMode"
        class="pi pi-moon text-white p-2 rounded-full hover:bg-red-400 transition-colors duration-100 absolute right-2 cursor-pointer"></i>
    </div>
  </nav>
</template>