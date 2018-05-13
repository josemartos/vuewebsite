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
    import Home from './pages/home/Home.vue';
    import MainHeader from './components/header/Header.vue';
    import MainFooter from './components/footer/Footer.vue';

    export default {
		components: {
            MainHeader,
            Home,
            MainFooter
		}
    }
</script>
