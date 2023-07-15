<template>
    <div id="container">
    <header id="header">
        <Logo />
        <SearchBar @imageList='imageList' />
    </header>
    <Gallery :images="images" />
    <Pagination @imageList='imageList' />
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Logo from "../components/Logo.vue";
import Gallery from  "../components/Gallery.vue";
import Pagination from "../components/Pagination.vue";
import gifService from '../services/gif.js';

export default {
    data() {
        return {
            images: null
        }
    },
    components: {
        SearchBar,
        Logo,
        Gallery,
        Pagination,
    },

    mounted() {
        debugger
        let params = {
                  api_key: import.meta.env.VITE_API_KEY,
                  limit: 10,
        }

        gifService.trending(params).then( imageList => {
            console.log(imageList);
            this.images = imageList;
        });
    },

    methods: {
        imageList(list) {
            this.images = [];
            this.images = list;
        }
    }
}
</script>