<template>
  <article class="home">
    <nav class="nav">
      <div class="page-container">
        <ul class="nav_list">
          <li>
            <a
              href="https://500px.com/martosjosele/"
              target="_blank"
              title="500px photography profile"
            >photography</a>
          </li>
          <li>
            <a
              title="All job related info to date"
              href="/assets/pdf/CV_JoseMartos.pdf"
              download
            >resume</a>
          </li>
          <li>
            <a
              href="https://www.quellevardeviaje.com/"
              target="_blank"
              title="A web article written in Spanish"
            >writings</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="greetings">
      <a
        href="mailto:martosjosele@gmail.com?subject=Hi%20there"
        title="Say hi to Jose, or send him a gift"
      >
        drop me
        <span>@</span> line
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'Home'
};
</script>

<style lang="scss" scoped>
.nav {
  background-color: $c-grey100;
  text-align: center;
  position: relative;
}

.nav_list {
  display: flex;
  flex-wrap: wrap;
  transition: all 0.3s;

  li {
    flex: 1;
  }

  a {
    color: $c-grey300;
    display: inline-block;
    font-size: rem(24px);
    font-weight: 300;
    padding-bottom: 5px;
    text-align: center;
    transition: all 0.3s;

    &:hover {
      color: $c-black;
    }
  }

  li:nth-child(2) a {
    color: $c-grey600;

    &:hover {
      color: $c-black;
    }
  }

  @media screen and (max-width: $phone) {
    a {
      font-size: rem(20px);
      padding: 8px 0 11px;
      width: 100%;
    }

    li:nth-child(2) a {
      background-color: $c-grey200-hover;
    }

    li {
      flex: 100% 1;
    }
  }
}

.greetings {
  padding-top: 20px;
  text-align: center;

  a {
    color: $c-grey300;
    font-size: rem(20px);
    transition: all 0.3s;

    &:hover {
      color: $c-grey400;
    }
  }

  span {
    color: $c-grey400;
  }
}
</style>
