<template>
    <div class="categorical">
        <loading v-if="$fetchState.pending"></loading>
        <Error v-else-if="$fetchState.error"></Error>
        <div class="news" v-else>
            <div class="news-content">
                <div class="news-body">
                    <div class="left">       
                        <h1 class="heading">Top Headlines related to {{ toTitleCase(heading) }}:</h1>
                        <ul class="newslist">
                            <li class="news-item" v-for="(item, index) in bucket" :key="index">
                                <div class="img-container">
                                    <img :src="item.img" alt="Image not available" class="n-img" v-if="item.found" @error="item.found = !item.found">
                                    <img :src="require(`~/assets/images/${heading}.jpg`)" alt="image nont found" v-if="!item.found">
                                </div>
                                <div class="text-content">
                                    <div class="src-date">
                                        <p class="src">{{ item.source }}</p>
                                        <p class="datetime">{{ formatDate(item.date) }}</p>
                                    </div>
                                    <a :href="item.url" target="_blank" class="title">{{ item.title }}</a>
                                    <p class="text">{{ item.content }}</p>
                                    <div class="author-browse">
                                        <p class="author">{{ item.author }}</p>
                                        <a :href="item.url" target="_blank" class="browse">Read more</a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="right">
                        <p class="other">Other related news</p>
                        <ul class="other-news">
                            <li class="side-item" v-for="(rel, i) in related" :key="i">
                                <p class="datetime">{{ formatDate(rel.date) }}</p>
                                <a :href="rel.url" target="_blank" class="link-title">{{ rel.title }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import loading from '~/components/loading'
import error from '~/components/loaderror'

export default {
    components: {
        'loading': loading,
        'Error': error
    },
    data() {
        return {
            bucket: [],
            heading: this.$route.params.category,
            related: [],
            found: true
        }
    },
    async fetch() {
        const category = this.$route.params.category;

        const {realNews, relatedNews} = await this.$fetchFromNewsAPI(category);
        const {mediaNews, mediaRelated} = await this.$fetchFromMediaStack(category);

        this.bucket = [...realNews, ...mediaNews];
        this.related = this.getRandomNews([...relatedNews, ...mediaRelated]);
    },
    methods: {
        toTitleCase(char) {
            let arr = char.split('')
            arr[0] = arr[0].toUpperCase()
            let word = arr.join('')
            return word
        },
        formatDate(str) {
            let dateStr = new Date(str);
            let gmtDate = dateStr.toGMTString();
            return gmtDate
        },
        getRandomNews(arr) {
            const count = arr.length;
            
            if (count >= 10) {
                let randNum = [],
                    randomNews = [];

                for (let i = 0; i < 7; i++) {
                    let randn = Math.round(Math.random() * count);
                    if (randNum.indexOf(randn) < 0) {
                        randNum.push(randn)
                    } else {
                        randNum.push(randn + 1)
                    }
                }

                for (let idx of randNum) {
                    randomNews.push(arr[idx])
                }

                return randomNews
            } else return arr
        }
    },
    mounted() {
        
    }
}
</script>