<template>
  <PageRoot>
    <MainHeader />
    <section>
      <Home />
    </section>
    <MainFooter />
    <Social />
  </PageRoot>
</template>

<script>
import Home from './pages/Home.vue';
import PageRoot from './layout/PageRoot.vue';
import MainHeader from './components/Header.vue';
import MainFooter from './components/Footer.vue';
import Social from './components/Social.vue';

export default {
  components: {
    Home,
    PageRoot,
    MainHeader,
    MainFooter,
    Social
  }
};
</script>
