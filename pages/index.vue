<template>
  <main>
    <ButtonGroup v-on:selected-filter-emit="setSelectedURLFilter" />
    <section class="videoCardGroup" v-if="videos.length > 0">
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
    <section v-else class="loadingClass">
      <h1 class="loadingMsg">Fetching Videos</h1>
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
      urlFilter: "vue.js",
      filterKeywords: {
        Vue: [
          "vue",
          "vue directives",
          "beginner vue js tutorial",
          "intermediate vue tutorial",
          "why vue is bad for web development",
          "vue mongodb example",
          "vue firebase",
          "vue sqlite3",
          "vue errors",
          "vue 3 tips and tricks",
          "vue 3 beginners",
          "vue 3 vs vue 2",
          "write better vue js code",
          "vue static site",
          "optimizing vue for development",
        ],
        Nuxt: [
          "what is nuxt js",
          "optimizing nuxt js",
          "nuxt for beginners",
          "nuxt static site",
          "downsides of using nuxt",
          "pros of using nuxt",
          "features of nuxt js",
          "nuxt js folder structure",
          "nuxt js errors",
          "nuxt js firebase",
          "nuxt SEO",
          "nuxt js authentication",
          "nuxt js middleware",
          "nuxt js SSR",
          "nuxt js config",
        ],
      },
    };
  },
  methods: {
    async fetchFirstTwenty() {
      let youtubeURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.urlFilter}&key=AIzaSyBzRgIibcEp2J5umezi40NFz23BmlZZvI0`;
      let ytURL = youtubeURL;
      let resp = await this.$axios.get(ytURL);
      this.videos = resp.data.items;
      console.log("Fetching Videos...");
      // console.log(this.vueAsDefaultFilter);
    },
    setSelectedURLFilter(data) {
      let randInt = Math.floor(Math.random() * this.filterKeywords.Vue.length);
      // #TODO make a randomizer function to select different search terms to improve the first 20 results
      // #SELECT THE INCOMING DATA AND REDIRECT THE OUTPUT TO A RANDOM VALUE IN ITS DATA OBJECT
      if (data === "Vue") {
        let newData = this.filterKeywords.Vue[randInt];
        console.log(newData);
        console.log("inside Vue");
        // console.log(newData);
        this.urlFilter = newData;
        this.youtubeURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.urlFilter}&key=AIzaSyBzRgIibcEp2J5umezi40NFz23BmlZZvI0`;
        this.fetchFirstTwenty();
      } else {
        console.log(newData);
        console.log("inside Nuxt");
        let newData = this.filterKeywords.Nuxt[randInt];
        // console.log(newData);
        this.urlFilter = newData;
        this.youtubeURL = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${this.urlFilter}&key=AIzaSyBFy3TI3-fnyWwap-RViSfUXPFdbRXIgFs`;
        this.fetchFirstTwenty();
      }
    },
  },
  mounted() {
    this.fetchFirstTwenty();
  },
};
</script>

<style>
main {
  @apply min-h-screen bg-one text-three text-center px-2;
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
.loadingClass {
  @apply min-h-screen flex flex-col justify-center items-center text-white;
}
.loadingMsg {
  @apply font-semibold text-4xl tracking-widest animate-pulse animate-bounce duration-700 uppercase;
}
</style>