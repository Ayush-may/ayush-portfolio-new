<script>

export default {
  props: {
    isDark: {
      type: Boolean,
      required: true
    }
  }
}

</script>

<template>
  <div class="flex-[1] flex justify-evenly items-center">
    <div class="flex flex-col">
      <div class="text-6xl font-bold" :class="isDark ? 'text-stone-200' : 'text-white'">
        <h1 class="">I'm a</h1>
        <h1 class="">Frontend</h1>
        <h1>Developer<span class="text-yellow-200">.</span> </h1>
      </div>

      <div class="text-rose-200 mt-3 flex items-center gap-3 fixed bottom-2 left-[50%] translate-x-[-50%]"
        :class="isDark ? 'text-stone-400' : 'text-rose-200'">
        <p>Social Media: </p>
        <div class="flex gap-2">
          <i class="pi pi-discord text-xl"></i>
          <i class="pi pi-linkedin text-xl"></i>
          <i class="pi pi-github text-xl"></i>
        </div>
      </div>

      <div class="mt-4 flex gap-2">
        <button class="p-2 flex-1" :class="isDark ? 'bg-stone-200' : 'bg-white'">Hire me</button>
        <button class="p-2 flex-1" :class="isDark ? 'bg-stone-200' : 'bg-white'">Resume</button>
      </div>

    </div>
    <div class="w-[350px] h-[350px] rounded-full overflow-hidden">
      <img src="/public/images/ayush_image.jpg" alt="">
    </div>
  </div>
</template>