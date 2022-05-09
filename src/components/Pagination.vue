<template>
  <nav class="pagination">
    <ul>
      <li>
        <a href="#" class="prev" @click.prevent="prev()">&lt;</a>
      </li>
      <li v-for="i in total" :class="i < current ? 'display-none': ''" :key="i">
        <a href="#" :class="i == current ? 'active': ''" @click.prevent="next(i)">{{ i }}</a>
      </li>
      <li>
        <a href="#" class="next" @click.prevent="next()">&gt;</a>
      </li>
    </ul>
  </nav>
</template>

<script>

import gifServices from '../services/gif.js'

export default {
    data() {
        return {
            current: 2,
            total: 4,
        }
    },
    
    methods: {
        next(i) {
            if(i){
                 this.current = i;
                 this.total = this.current + 2;
    
            } else {
                 this.current++;
                 this.total++;
            }

            let params = {
                  api_key: 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY',
                  limit: 10,
                  offset: this.current * 10 - 9
            }

            gifServices.trending(params).then( images => {
                this.$emit('imageList', images);
            });
        },
        prev(){
            if(this.current != 1){
              this.current--;
              this.total--;

              let params = {
                  api_key: 'Dst7UyI10lCaZeA9seXlAWA2qaXf0uGY',
                  limit: 10,
                  offset: this.current * 10 - 9
          }

          gifServices.trending(params).then( images => {
                this.$emit('imageList', images);
          });
           }

           

           
        } 
    }
}
</script>