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
        <a
          class="watcher"
          :href="`https://www.youtube.com/watch?v=${video.id.videoId}`"
          slot="watch"
          target="_blank"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
            height="2rem"
            fill="#002500"
          >
            <path
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"
            />
          </svg>
          Watch Video</a
        >
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
        "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=vue.js&key=AIzaSyBFy3TI3-fnyWwap-RViSfUXPFdbRXIgFs";
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
  @apply grid md:grid-cols-3;
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
  @apply mb-4 bg-two text-ten uppercase font-bold px-4 py-2 rounded-xl tracking-widest  w-auto text-lg inline-flex items-center gap-x-3;
}
</style>