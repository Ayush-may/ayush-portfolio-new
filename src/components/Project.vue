<script>
import { projects } from '../utils';


export default {
  props: {
    isDark: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      projects
    }
  },
}

</script>

<template>
  <div class="p-5 flex flex-col  w-full min-h-[100vh]">
    <div class="grid grid-cols-3 max-md:grid-cols-1 w-full gap-5 gap-y-8 mt-10">
      <div class="group h-60 flex-1 flex flex-col transition-transform duration-300 relative
       shadow-md overflow-hidden"
        :class="isDark ? 'border border-stone-700 bg-stone-800' : 'border border-stone-700 bg-slate-50'"
        v-for="(project, index) in projects" :key="index">
        <div class="w-full h-full group-hover:h-56 duration-300">
          <img :src="project.src" class="w-full h-full object-cover" alt="">
        </div>
        <div class="absolute -bottom-[130px] w-full group-hover:bottom-0 
          transition-all duration-300 p-3 flex-1 flex flex-col min-h-fit"
          :class="isDark ? 'text-stone-200 bg-stone-800' : 'text-black  bg-white'">
          <h1 class="font-bold text-xl flex items-center ">
            {{ project.name }}
          </h1>
          <div class="flex gap-1 mb-2">
            <span class="text-[10px] font-light opacity-50 font-serif" v-for="(stack, index2) in project.stacks"
              :key="index2">{{ stack }}</span>
          </div>
          <p class="opacity-50 text-sm h-16 overflow-hidden text-ellipsis ">{{ project.desc }}
          </p>
          <div class="flex mt-4 text-sm gap-5">
            <div class="text-stone-500">
              <i class="pi pi-star me-1"></i><span>{{ project.star }}</span>
            </div>
            <div class="text-stone-500">
              <a href="project.github"><i class="pi pi-github me-1"></i></a>
            </div>
            <div class="text-stone-500 hover:text-stone-400 duration-300 transition-colors cursor-pointer">
              <a :href="project.linkedin"><i class="pi pi-linkedin me-1"></i></a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>