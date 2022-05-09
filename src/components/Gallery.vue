<template>
    <div v-if="imageList && imageList.length > 0" class="gallery">
        <img src="" alt="">
    </div>
</template>

<script>
export default {
    props: ['imageList']
}
</script>