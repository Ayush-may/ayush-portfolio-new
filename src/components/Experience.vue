<script>
import { experiences } from '../utils';

export default {
  data() {
    return {
      experiences
    }
  }
}

</script>

<template>
  <div class="text-white text-xl font-bold flex flex-1 flex-col items-center justify-center">
    <div class="max-w-[700px] h-fit flex flex-col gap-10">
      <div class="flex h-[200px] items-start gap-2 p-2" v-for="(experience, index) in experiences" :key="index">
        <h1 class="mt-1">{{ experience.years }}</h1>
        <div class="flex flex-1 items-center flex-col mt-2">
          <span class="bg-gradient-to-t from-yellow-300 to-yellow-200 min-w-3 min-h-3 block rounded-full"></span>
          <div class="block w-1 min-h-full rounded-b-full  bg-yellow-300"></div>
        </div>
        <div class="">
          <h1 class="text-3xl capitalize ">{{ experience.headerName }}</h1>
          <h1 class="text-lg font-light capitalize opacity-50">{{ experience.role }}</h1>
          <p class="text-sm opacity-70 font-light mt-5">{{ experience.desc }}</p>
        </div>
      </div>
    </div>
  </div>
</template>