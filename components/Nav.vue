<template>
    <nav class="w-screen bg-blue-700">
    <div class="container  mx-auto bg-blue-700">

<!-- Open mobile menu button-->
        <button v-on:click="showmenu = true" class="focus:outline-none inline-flex md:hidden items-center justify-center p-2 rounded-md text-gray-100
         " aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

<!-- Menu xs-->  
  <transition name="fade">      
<div v-if="showmenu" class="bg-gray-50 m-2 fixed top-0 w-4/6 md:hidden rounded shadow-2xl">

<!-- Close mobile menu button-->    
    <div class="container flex justify-end">
        <button  v-on:click="showmenu = false" class="focus:outline-none p-2 rounded-md text-gray-400
        hover:bg-gray-100"> 
          <svg class="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
    </div>

<!-- Menu items xs-->  
    <div class="p-3 hover:text-gray-500"> <a href="#">Home</a></div>
    <div class="p-3 hover:text-gray-500"> <a href="#" >Home</a></div>
    <div class="p-3 hover:text-gray-500"> <a href="#">Tevékenység</a></div>
    <div class="p-3 hover:text-white"> <a href="#">Pályázatok</a></div>
    <div class="p-3 hover:text-white"> <a href="#">Kapcsolat</a></div>
    <div class="p-3 hover:text-white"> <a href="#">Facebook</a></div>
</div>     
</transition>

<!-- Menu top-->
      <div class=" justify-end text-gray-200 mr-20 hidden md:flex">
        <div class="p-3 hover:text-white"> <a href="#">Home</a></div>
        <div class="p-3 hover:text-white"> <a href="#" >Home</a></div>
        <div class="p-3 hover:text-white"> <a href="#">Tevékenység</a></div>
        <div class="p-3 hover:text-white"> <a href="#">Pályázatok</a></div>
        <div class="p-3 hover:text-white"> <a href="#">Kapcsolat</a></div>
        <div class="p-3 hover:text-white"> <a href="#">Facebook</a></div>
      </div>
    </div>

  <header>
    <div class="container mx-auto bg-blue-700">
      <img class="hover:opacity-80 mx-auto max-w-xs" src="/hajnalpelika-logo.svg" alt="hajnalpelika logo">
    </div>

  </header>    
  </nav>
</template>

<script>
export default {
  data () {
    return {
      showmenu: false
    }
  },
  transition: 'home'
}
</script>

<style>

</style>