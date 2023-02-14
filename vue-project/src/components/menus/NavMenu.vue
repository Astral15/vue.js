
<script setup>
const menu = [
  { routeName: 'Home', title: 'Main Page' },
  { routeName: 'About', title: 'About Us' },
  { routeName: 'Contact', title: 'Nbg' },
  { routeName: 'Products', title: 'Products' },
  { routeName: 'Cart', title: 'Cart' },

]

</script>
<template>
    <div class="flex flex-wrap py-2">
        <div class="w-full px-4">
            <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-cyan-500 rounded">
                <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div
                        class="w-full relative flex justify-between lg:w-auto px-4 lg:static lg:block lg:justify-start">
                        <a class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                            href="#pablo">
                            cyan Menu
                        </a>
                        <button
                            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button">
                            <span class="block relative w-6 h-px rounded-sm bg-white"></span>
                            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                            <span class="block relative w-6 h-px rounded-sm bg-white mt-1"></span>
                        </button>
                    </div>
                    <div class="flex lg:flex-grow items-center" id="example-navbar-info">
                        <RouterLink v-for="item in menu" :key="item.index" :to="{ name: item.routeName }"
                            class="flex flex-col lg:flex-row list-none ml-auto">
                            {{ item.title }}
                        </RouterLink>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>