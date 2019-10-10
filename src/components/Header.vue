<template>
  <header>
    <a href="/" title="martos website" class="logo">martos website</a>

    <div class="info">
      <h1 class="title">Hi, I am Jos&eacute; Martos</h1>
      <p class="position">
        <vue-typer :text="typerText" :repeat="0" :type-delay="100" />
      </p>
    </div>
  </header>
</template>

<script>
import { VueTyper } from 'vue-typer';

export default {
  name: 'Header',
  components: {
    VueTyper
  },
  data() {
    return {
      typerText: ['frontendDeveloper', 'front-end developer']
    };
  }
};
</script>

<style lang="scss" scoped>
header {
  padding: 120px 0 70px;
  text-align: center;

  @media screen and (max-width: $phone) {
    padding: 90px 0 50px;
  }
}

.logo {
  @include retina-background-image(
    '/assets/png/martosjose-logo',
    'png',
    64px,
    64px
  );

  height: 64px;
  left: 1rem;
  overflow: hidden;
  position: absolute;
  text-indent: -300px;
  top: 1rem;
  transition: all 0.2s;
  width: 64px;

  @media screen and (max-width: $phone) {
    background-size: cover;
    height: 48px;
    left: 50%;
    transform: translateX(-50%);
    width: 48px;
  }
}

.title {
  color: $c-black;
  font-size: rem(22px);
  font-weight: 300;
  margin-bottom: 5px;
  text-align: center;
}

.position {
  color: $c-grey300;
  font-size: rem(18px);
  text-align: center;
}
</style>
