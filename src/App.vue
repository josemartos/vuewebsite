<template>
  <PageRoot>
    <MainHeader />
    <section>
      <Home />
    </section>
    <MainFooter />
  </PageRoot>
</template>

<script>
import Home from "./pages/Home.vue";
import PageRoot from "./components/PageRoot.vue";
import MainHeader from "./components/Header.vue";
import MainFooter from "./components/Footer.vue";

export default {
  components: {
    Home,
    PageRoot,
    MainHeader,
    MainFooter
  }
};
</script>
