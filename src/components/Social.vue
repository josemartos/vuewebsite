<template>
  <div class="social">
    <a href="https://github.com/josemartos" target="_blank" title="See Github account">
      <GithubIcon />
    </a>
  </div>
</template>

<script>
import GithubIcon from 'assets/svg/github-icon.svg';

export default {
  name: 'Social',
  components: {
    GithubIcon
  }
};
</script>

<style lang="scss" scoped>
.social {
  position: absolute;
  right: 1rem;
  bottom: 1rem;

  a {
    display: inline-block;
  }

  @media screen and (max-width: $phone) {
    right: 0.5rem;
    bottom: 0.5rem;
  }
}
</style>
