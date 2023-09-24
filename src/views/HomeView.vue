<template>
    <main class="bg-home">

        <header>
            <NavbarHome></NavbarHome>
        </header> 

        <section class="grid place-items-center md:mt-16 mt-12 xl:px-0 md:px-0 sm:px-8 px-4">
            <article class="flex flex-col items-center text-center md:w-4/6 w-11/12 md:px-0 px-4">
                <h1 class="md:text-7xl sm:text-5xl text-4xl">
                    //Desarrolla con nosotros e impulsa tu marca
                </h1>
                <p class="sm:text-xl text-base opacity-60 mt-6 md:w-4/5 w-full">
                    Somos un grupo de jóvenes profesionales apasionados por la tecnología y nuestro objetivo es desarrollar ideas que le puedan ayudar en el crecimiento su empresa, marca o emprendimiento.
                </p>
                <div class="mt-14">
                    <a href="#" class="sm:text-base text-xs bg-purple-700 py-2.5 md:px-8 px-2.5 rounded-lg  duration-300 border-2 border-transparent hover:border-purple-700 hover:bg-transparent">
                        ¡Contáctenos y obtenga una oferta!
                    </a>
                </div>
            </article>
        </section>
        <section class="flex flex-wrap justify-center items-center sm:px-4 sm:w-full">
            <article class="flex flex-wrap gap-6 mt-24 px-2 sm:w-full justify-center">
                <div class="flex flex-col items-center sm:items-start gap-2 pt-4 sm:border-r pr-0 sm:pr-6">
                    <h3 class="text-3xl">+28</h3>
                    <p class="opacity-80">Clientes satisfechos</p>
                </div>
                <div class="flex flex-col items-center sm:items-start gap-2 pt-4 sm:border-r pr-0 sm:pr-6">
                    <h3 class="text-3xl">+3</h3>
                    <p class="opacity-80">Años de experiencia</p>
                </div>
                <div class="flex flex-col items-center sm:items-start gap-2 pt-4 ">
                    <h3 class="text-3xl">+30</h3>
                    <p class="opacity-80">Proyectos realizados</p>
                </div>
            </article>
        </section>
        <span class="md:text-4xl sm:text-3xl text-2xl absolute top-0 left-0 md:mt-72 md:ml-16 sm:mt-96 mt-72 ml-4">
            <font-awesome-icon :icon="['fasl', 'star-of-life']" spin />
        </span>
        <span class="md:text-4xl sm:text-3xl text-2xl absolute bottom-0 right-0 md:mb-10 sm:mb-40 mb-40 mr-4 sm:mr-16 md:mr-36">
            <font-awesome-icon :icon="['fasl', 'star-of-life']" spin spin-reverse />
        </span>

        
    </main>
</template>

<script>
    import NavbarHome from '@/components/NavbarHome.vue';
    export default {
        components: {
            NavbarHome
        },
    };
</script>

<style scoped>
.bg-home{
    background-image: url(../assets/footer-svg.webp);
    background-repeat: no-repeat;
    background-size: cover;
}
.spinner {
    animation: spinner 2s infinite linear;
}

   @keyframes spinner {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
   }

.spinnerInvert{
    animation: spinnerInvert 2s infinite linear;
}

@keyframes spinnerInvert {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(-360deg);
        }
   }
</style>