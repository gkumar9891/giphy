<template>
    <div id="container">
    <header id="header">
        <Logo />
        <SearchBar />
    </header>
  </div>
</template>

<script>
import SearchBar from "../components/SearchBar.vue";
import Logo from "../components/Logo.vue";
import Gallery from  "../components/Gallery.vue";
import gifService from '../services/gif.js';

export default {
    data() {
        return {
            images: []
        }
    },
    components: {
        SearchBar,
        Logo,
        Gallery,
    },

    mounted() {
        gifService.trending();
    }
}
</script>