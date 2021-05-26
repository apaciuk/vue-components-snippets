div :style="{ backgroundImage: `url(${image})`}">>

import heroImg from "assets/hero.jpg";
export default {
  name: 'HomePage',
   data() {
    return {
      image: heroImg,
    };
  }
