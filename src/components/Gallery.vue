<template>
    <div>
    <h4>Trending GIFs</h4>
    <div v-if="images && images.length > 0" class="gallery">
            <img  v-for="image in images" :key="image" :src="image.images.original.url" alt="">
    </div>
    </div>
</template>

<script>
export default {
    props: ['images']
}
</script>