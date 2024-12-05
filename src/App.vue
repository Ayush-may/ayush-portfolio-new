<template>
  <div class="flex flex-col w-full h-[100vh] bg-[#E42944]">
    <nav class="flex justify-center gap-2 py-3 shadow-sm relative">
      <a href="#" class="text-black">Home</a>
      <!-- <a href="#" class="text-white">About</a> -->
      <a href="#" class="text-white">Projects</a>
      <a href="#" class="text-white">Experience</a>
      <a href="#" class="text-white">Blogs</a>
      <a href="#" class="text-white">Contact</a>

      <div class="">
        <i class="pi pi-moon text-white p-2 rounded-full hover:bg-red-400 transition-colors duration-100 absolute right-2 cursor-pointer" ></i>
      </div>
    </nav>
    <div class="flex-[1] flex justify-evenly items-center">
      <div class="flex flex-col">
        <div class="text-white text-6xl font-bold">
          <h1 class="">I'm a</h1>
          <h1 class="">Frontend</h1>
          <h1>Developer<span class="text-yellow-200">.</span> </h1>
        </div>

        <div class="text-rose-200 mt-3 flex items-center gap-3 fixed bottom-2 left-[50%] translate-x-[-50%]">
          <p>Social Media: </p>
          <div class="flex gap-2">
            <i class="pi pi-discord text-rose-200 text-xl"></i>
            <i class="pi pi-linkedin text-rose-200 text-xl"></i>
            <i class="pi pi-github text-rose-200 text-xl"></i>
          </div>
        </div>

        <div class="mt-4 flex gap-2">
          <button class="bg-white p-2 flex-1">Hire me</button>
          <button class="bg-white p-2 flex-1">Resume</button>
        </div>

      </div>
      <div class="w-[350px] h-[350px] rounded-full overflow-hidden">
        <img src="/public/images/ayush_image.jpg" alt="">
      </div>
    </div>

  </div>
</template>