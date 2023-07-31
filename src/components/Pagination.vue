<template>
  <nav class="pagination">
    <ul>
      <li>
        <a href="#" class="prev" @click.prevent="prev()">&lt;</a>
      </li>
      <li
        v-for="i in total"
        :class="i < current ? 'display-none' : ''"
        :key="i"
      >
        <a
          href="#"
          :class="i == current ? 'active' : ''"
          @click.prevent="next(i)"
          >{{ i }}</a
        >
      </li>
      <li>
        <a href="#" class="next" @click.prevent="next()">&gt;</a>
      </li>
    </ul>
  </nav>
</template>

<script>
import gifServices from "../services/gif.js";

export default {
  // data() {
  //     return {
  //         total: 4,
  //     }
  // },

  computed: {
    current() {
      return this.$store.getters["paginationCurrent"];
    },

    total() {
      return this.$store.getters["paginationTotal"];
    },

    searchTitle() {
      return this.$store.getters["searchTitle"];
    },
  },

  methods: {
    next(i) {
      if (i) {
        this.$store.dispatch("setPaginationCurrent", i);
        this.$store.dispatch("setPaginationTotal", this.current + 3);
      } else {
        this.$store.dispatch("setPaginationCurrent", this.current + 1);
        this.$store.dispatch("setPaginationTotal", this.total + 1);
      }

      let params = {
        api_key: import.meta.env.API_KEY,
        limit: 10,
        offset: this.current * 10 - 9,
      };

      if (this.searchTitle != "") {
        console.log(this.searchTitle);
        params["q"] = this.searchTitle;

        gifServices.search(params).then((images) => {
          this.$emit("imageList", images);
        });
      } else {
        gifServices.trending(params).then((images) => {
          this.$emit("imageList", images);
        });
      }
    },

    prev() {
      if (this.current != 1) {
        this.$store.dispatch("setPaginationCurrent", this.current - 1);
        this.$store.dispatch("setPaginationTotal", this.total - 1);

        let params = {
          api_key: import.meta.env.VITE_API_KEY,
          limit: 10,
          offset: this.current * 10 - 9,
        };

        if (this.searchTitle != "") {
          console.log(this.searchTitle);
          params["q"] = this.searchTitle;

          gifServices.search(params).then((images) => {
            this.$emit("imageList", images);
          });
        } else {
          gifServices.trending(params).then((images) => {
            this.$emit("imageList", images);
          });
        }
      }
    },
  },
};
</script>