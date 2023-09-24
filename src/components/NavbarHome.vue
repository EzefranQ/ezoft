<template>
    <nav class="flex items-center justify-between py-8 relative xl:px-20 md:px-14 sm:px-8 px-6">
        <div class="w-full">
            <img src="../assets/ezoft.webp" alt="">
        </div>
        <ul class="gap-20 hidden lg:flex">
            <li v-for="link in links" :key="link.id">
                <a :href="link.link" class="text-white text-opacity-100 hover:text-opacity-80 duration-300 text-lg border-hover" :class="link.class">
                    {{ link.name }}
                </a>
            </li>
        </ul>
        <button class="lg:hidden text-white text-3xl z-50"  v-on:click="toggleNav">
            <font-awesome-icon icon="fa-solid fa-bars" />
        </button>

        <transition name="slide-fade">
            <ul class="lg:hidden absolute w-screen h-screen z-40 fix-mobile" v-if="isActive">
                <div class="absolute gap-6 flex flex-col items-center justify-center -mt-10 w-full h-screen fix-mr">
                    <li class="" v-for="link in links" :key="link.id">
                        <a :href="link.link" class="text-white text-opacity-100 hover:text-opacity-80 duration-300 text-lg border-hover" :class="link.class">
                            {{ link.name }}
                        </a>
                    </li>
                </div>
            </ul>  
        </transition>
    </nav>
</template>

<script>
    export default {
        name: 'NavbarHome',
        data() {
            return {
                links:[
                    {name:'Inicio', link:'#'},
                    {name:'Nosotros', link:'#'},
                    {name:'Personal', link:'#'},
                    {name:'¡Contáctenos!', link:'#', class: 'bg-purple-700 rounded-lg py-2 px-4 -mx-8 hover:text-opacity-100'},
                    {name:'Trabajo', link:'#'},
                ],
                isActive: false,
            }
        },
        methods:{
            toggleNav(){
                this.isActive = !this.isActive;
            }
        }
    };
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s;
  -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.fix-mobile{
    height: 100vh;
    margin-top: 70vh;
}
.fix-mr{
    transform: translateX(calc(-10px + -5vw));
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
}

@media screen and (max-width: 768px) {
    .fix-mr{
        transform: translateX(calc(-10px + 0vw));
    }   
}
@media screen and (max-width: 320px) {
    .fix-mr{
        transform: translateX(calc(-10px + -3vw));
    }

}
</style>