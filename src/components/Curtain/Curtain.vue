<template>
  <div class="curtainWrapper">
    <Carousel :theme="theme"></Carousel>
    <div class="slogan">
      <h1>Ark-Tica</h1>
      <h2>{{theme.text}}</h2>
    </div>
    <button class="entry">welcome</button>
  </div>
</template>

<script type="text/ecmascript-6">
import Carousel from '@/components/Public/Carousel'
export default {
  props: {
    loadTime: {
      type: Object
    }
  },
  data () {
    return {
      themes: [{
        name: 'pole',
        text: 'welcome back to the port',
        background: [
          '//img0.ph.126.net/-7Hk6njU8AF24z5yHFApuA==/1668865137018202872.jpg',
          '//img1.ph.126.net/ib0cZbgkrnyKLdfJ_hVvyg==/6597838325286995212.jpg',
          '//img1.ph.126.net/rnHXMP8NR5ypclBlkN_DRw==/1706301308920514296.jpg',
          '//img1.ph.126.net/lFiKB5rjttuXZhFC_dZaNA==/6597352341147786499.jpg'
        ]
      }, {
        name: 'night',
        text: 'night, deep sleepy night awaits',
        background: [
          '//img0.ph.126.net/dsKVTYIrw8CNpRXGk0a-vw==/2040693581252982372.jpg',
          '//img0.ph.126.net/wX73PF4M7kr2EF2msFIzFA==/6599299576239889152.jpg',
          '//img0.ph.126.net/_IcBs08hvac2WObV3aQ7lA==/6608205620426192409.jpg',
          '//img0.ph.126.net/5mubBz8v410XsyG-hMPymQ==/116530640458758939.jpg',
          '//img1.ph.126.net/LFz8Y6LxzWTQyxSNiRRKaQ==/1941332914473925501.jpg'
        ]
      }],
      theme: {}
    }
  },
  methods: {
    wait (ms) {
      return new Promise(function (resolve, reject) {
        setTimeout(function () {
          resolve()
        }, ms)
      })
    },
    setTheme () {
      const themeName = this.loadTime.hour <= 17 ? 'pole' : 'night'
      this.themes.forEach(value => {
        if (value.name === themeName) this.theme = value
      })
    }
  },
  mounted () {
    this.setTheme()
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

  Carousel {
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
