<template>
  <div class="main">
    <MainHeader />
    <section>
      <Home />
    </section>
    <MainFooter />
  </div>
</template>

<script>
import Home from "./pages/Home.vue";
import MainHeader from "./components/Header.vue";
import MainFooter from "./components/Footer.vue";

export default {
  components: {
    MainHeader,
    Home,
    MainFooter
  }
};
</script>
