<template>
  <div class="index-page">
    <loading v-if="$fetchState.pending"></loading>
    <Error v-else-if="$fetchState.error"></Error>
    <div v-else class="content">
      <div class="category-block" v-for="(arr,cat) in news" :key="cat">
        <div class="cat-content">
          <h2 class="block-text">{{ toTitleCase(cat) }}.</h2>
          <p class="sub-text">The latest and best {{ cat }} articles selected by our editorial office.</p>
          <div class="grid-items">
            <div class="article" v-for="(art,index) in arr" :key="index">
              <div class="article-content">
                <div class="art-img">
                  <img :src="art.img" alt="Image not available" v-if="art.found" @error="art.found = !art.found">
                  <img :src="require(`~/assets/images/${cat}.jpg`)" alt="image nont found" v-if="!art.found">
                </div>
                <p class="art-source">{{ art.source }}</p>
                <p class="art-title">{{ art.title }}</p>
                <a :href="art.url" target="_blank" class="read-more">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import error from '~/components/loaderror'

export default {
  components: {
    'Error': error
  },
  data() {
    return {
      news: {
        business: [],
        health: [],
        entertainment: [],
        sports: [],
        science: [],
        technology: []
      }
    }
  },
  async fetch() {
    for (let cat in this.news) {
      const {realNews} = await this.$fetchFromNewsAPI(cat);
      this.news[cat] = [...realNews.slice(0,6)]
    }
  },
  methods: {
    toTitleCase(char) {
      let arr = char.split('')
      arr[0] = arr[0].toUpperCase()
      let word = arr.join('')
      return word
    }
  }
  
}
</script>
