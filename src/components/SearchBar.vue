<template>
  <div class="form">
    <form action="#" @submit.prevent="getGif">
      <div class="display-flex">
        <input v-model="title" placeholder="search for the title" type="text" class="flex-grow-1" />
        <button type="submit" class="btn search">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="30px"
            height="30px"
            viewBox="0 0 30 30"
            version="1.1"
          >
            <!-- Generator: Sketch 51 (57462) - http://www.bohemiancoding.com/sketch -->
            <title>search</title>
            <desc>Created with Sketch.</desc>
            <defs>
              <path
                d="M11.5482521,20.4090671 L4.24727698,28.2009189 C3.68084207,28.8054377 2.73159653,28.8363108 2.12707771,28.2698759 C1.5225589,27.703441 1.4916858,26.7541954 2.0581207,26.1496766 L9.40599838,18.3077689 C7.95982241,16.4371424 7.0978836,14.0789715 7.0978836,11.5181818 C7.0978836,5.44914339 11.9392549,0.518181818 17.9252787,0.518181818 C23.9113026,0.518181818 28.7526738,5.44914339 28.7526738,11.5181818 C28.7526738,17.5872202 23.9113026,22.5181818 17.9252787,22.5181818 C15.539851,22.5181818 13.3361963,21.7351359 11.5482521,20.4090671 Z M17.9252787,19.5181818 C22.242011,19.5181818 25.7526738,15.9425536 25.7526738,11.5181818 C25.7526738,7.09381 22.242011,3.51818182 17.9252787,3.51818182 C13.6085464,3.51818182 10.0978836,7.09381 10.0978836,11.5181818 C10.0978836,15.9425536 13.6085464,19.5181818 17.9252787,19.5181818 Z"
                id="path-1"
              />
            </defs>
            <g id="search" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="icons/search">
                <mask id="mask-2" fill="white">
                  <use xlink:href="#path-1" />
                </mask>
                <use id="Mask" fill="#FFFFFF" fill-rule="nonzero" xlink:href="#path-1" />
                <g id="colors/gradients/_master" mask="url(#mask-2)">
                  <g transform="translate(0.250000, 0.250000)" id="colors/gradients/white">
                    <g />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </button>
      </div>
    </form>
  </div>
</template>

<script>

import gifServices from "../services/gif.js";

export default {
    data() {
        return {
            title: ''
        }
    },

    methods: {
        getGif() {

        if(this.title != '') {
          this.$store.dispatch("setPaginationCurrent", 1);
          this.$store.dispatch("setPaginationTotal", 4);
          this.$store.dispatch("setSearchTitle", this.title);
        }

        let params = {
                  api_key: import.meta.env.VITE_API_KEY,
                  limit: 10,
                  q: this.title,
        }

          gifServices.search(params).then( images => {
                this.$emit('imageList', images);
          });
        }
    }
}
</script>