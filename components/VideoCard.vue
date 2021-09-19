<template>
  <section>
    <slot name="thumbnail">
      <img src="~/assets/img/V1.png" alt="video-img" />
    </slot>
    <div>
      <slot name="title">
        <p class="title">Video Title</p>
      </slot>
      <slot name="channelTitle">
        <p class="channelTitle">Channel</p>
      </slot>
      <slot name="description">
        <p class="description">Video Description...</p>
      </slot>
      <slot name="watch"></slot>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    console.log("Video Card Mounted");
  },
};
</script>

<style scoped>
section {
  @apply flex flex-col justify-center items-center rounded-xl overflow-hidden m-4 h-auto;
}
p {
  @apply w-3/4 text-center  overflow-ellipsis mx-auto;
}
div {
  @apply bg-six w-full text-center justify-center items-center flex flex-col gap-y-4;
}
</style>