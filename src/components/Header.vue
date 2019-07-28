<template>
  <header>
    <a href="/" title="martos website" class="logo">martos website</a>

    <h1 class="title">Jos&eacute; Manuel Martos Romero</h1>
    <p class="position">front-end developer</p>
  </header>
</template>

<style lang="scss" scoped>
@import "~styles/core/core";

header {
  padding: 120px 0 70px;
  text-align: center;

  @media screen and (max-width: $phone) {
    padding: 90px 0 50px;
  }
}

.logo {
  @include retina-background-image("/assets/png/logo", "png", 131px, 64px);

  height: 64px;
  left: 10px;
  overflow: hidden;
  position: absolute;
  text-indent: -300px;
  top: 10px;
  transition: all 0.2s;
  width: 131px;

  @media screen and (max-width: $phone) {
    background-size: cover;
    height: 48px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
  }
}

.title {
  color: $c-grey400;
  font-size: 22px;
  font-weight: 300;
  margin-bottom: 5px;
  text-align: center;
}

.position {
  color: $c-grey300;
  font-size: 18px;
  margin: 0 auto;
  max-width: 75%;
  text-align: center;

  a {
    color: $c-grey400;
  }
}
</style>
