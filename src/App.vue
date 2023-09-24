<template>

    <main class="bg-black pb-10">
      <header class="">
        <HomeView></HomeView>
      </header>
      <section class="">
        <AboutView></AboutView>
      </section>
      <footer>
        <FooterHome></FooterHome>
      </footer>
    </main>
</template>

<script>
  import HomeView from '@/views/HomeView.vue';  
  import AboutView from '@/views/AboutView.vue';
  import FooterHome from '@/components/FooterHome.vue';  
  export default {
    components: {
      HomeView,
      AboutView,
      FooterHome
    },
  };
</script>

<style>

</style>
