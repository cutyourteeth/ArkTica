<template>
  <div class="curtainWrapper">
    <Carousel></Carousel>
    <div class="slogan">
      <h1>Ark-Tica</h1>
      <h2>
        welcome back to the
        <span>port</span>
      </h2>
    </div>
    <button class="entry">welcome</button>
  </div>
</template>

<script type="text/ecmascript-6">
import Carousel from '@/components/Public/Carousel'
export default {
  data () {
    return {
    }
  },
  methods: {

  },
  mounted () {
  },
  components: {
    Carousel
  }
}
</script>

<style scoped lang="scss">
@import "../../common/scss/mixin.scss";

.curtainWrapper {
  position: relative;
  width: 100%;
  height: 100vh;

  Carousel{
    height: 100%;
  }

  .slogan {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;

    & > h1 {
      @include basicTitle;
      letter-spacing: 10px;
      font-size: 35px;
      border-bottom: 1px solid rgba(255, 255, 255, 0.5);
      margin-bottom: 5px;

      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
    }

    & > h2 {
      border-top: 1px solid rgba(255, 255, 255, 0.5);

      & > span {
        color: rgb(115, 179, 230);
        font-weight: 600;
        letter-spacing: 4px;
        font-size: 1.3em;
        animation: bgRotate 28s infinite;
      }

      @media screen and (max-width: 768px) {
        letter-spacing: 1px;
      }
    }
  }

  .entry {
    position: absolute;
    display: inline-block;
    top: 90%;
    border: none;
    text-shadow: 0 0 0.5px rgba(255, 255, 255, 0.25);
    cursor: pointer;
    padding: 1em 2em;
    letter-spacing: 0.2em;
    font-size: 16px;
    border-radius: 1.5em;
    font-weight: 400;
    color: #3a3939;
    background-color: #fff;
    box-shadow: inset 0 0 0 1px #fff;
    top: 80%;
    left: 50%;
    transform: translateX(-50%);
    transition: background 0.35s ease-in-out, color 0.35s ease-in-out;

    @media screen and (max-width: 768px) {
      letter-spacing: 0.1em;
      padding: 0.75em 1.25em;
    }

    &:hover,
    &:active {
      background: rgba(255, 255, 255, 0.3);
      color: white;
    }
  }
}
</style>
