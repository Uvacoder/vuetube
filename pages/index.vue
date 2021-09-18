<template>
  <main>
    <ButtonGroup />
    <section class="videoCardGroup">
      <video-card v-for="video in videos" :key="video.etag">
        <img
          :src="video.snippet.thumbnails.high.url"
          :alt="video.snippet.title"
          slot="thumbnail"
        />
        <h2 class="title" slot="title">{{ video.snippet.title }}</h2>
        <h3 class="channelTitle" slot="channelTitle">
          {{ video.snippet.channelTitle }}
        </h3>
        <h4 class="description" slot="description">
          {{ video.snippet.description || "Learn Vue.js Today!" }}
        </h4>
        <a class="watcher" href="" slot="watch">Watch Video</a>
      </video-card>
    </section>
  </main>
</template>

<script>
import VideoCard from "~/components/VideoCard.vue";
export default {
  components: { VideoCard },
  data() {
    return {
      videos: [],
    };
  },
  methods: {
    async fetchFirstTwenty() {
      let ytURL =
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=vue.js&key=AIzaSyA3TBqjc6i7MiMNLjnkY0Q8Cyszn_5coc0";
      let resp = await this.$axios.get(ytURL);
      this.videos = resp.data.items;
      console.log("Fetching Videos...");
      console.log(this.videos);
    },
  },
  mounted() {
    this.fetchFirstTwenty();
  },
};
</script>

<style>
main {
  @apply min-h-screen bg-two text-three text-center px-2;
}
img {
  @apply w-full h-3/4 object-cover;
}
.videoCardGroup {
  @apply grid md:grid-cols-2;
}
.title {
  @apply uppercase font-bold text-lg px-4 pt-4;
}
.description {
  @apply bg-five text-one py-4 px-8 mx-8 rounded-lg;
}
.channelTitle {
  @apply text-one capitalize font-bold tracking-widest;
}
.watcher {
  @apply mb-4 bg-two text-ten uppercase font-bold px-4 py-2 rounded-xl;
}
</style>