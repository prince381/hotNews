<template>
    <header class="default-header">
      <nav class="navigation">
        <nuxt-link to="/" class="logo">
          <img src="~/assets/images/hotNews.png" alt="hotNews logo" class="logo-img" width="60" height="70">
        </nuxt-link>
        <ul class="navlinks">
          <li class="list-item" v-for="category in categories" :key="category">
            <nuxt-link :to="`/${category}`">{{ toTitleCase(category) }}</nuxt-link>
          </li>
          <li class="list-item-date">
            <p class="list-date"></p>
            <p class="list-time"></p>
          </li>
        </ul>
        <div class="mode-toggler">
          <input type="checkbox" id="mode">
          <label for="mode">
            <img src="~/assets/images/sun.png" alt="lightmode" width="30" height="30">
            <img src="~/assets/images/moon.png" alt="darkmode" width="30" height="30">
          </label>
        </div>
        <div class="date-time">
          <p class="date"></p>
          <p class="time"></p>
        </div>
        <div class="hamburger">
          <div class="line line1"></div>
          <div class="line line2"></div>
          <div class="line line3"></div>
        </div>
      </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            categories: [
                'business',
                'entertainment',
                'health',
                'sports',
                'science',
                'technology'
            ]
        }
    },
    methods: {
      toTitleCase(char) {
          let arr = char.split('')
          arr[0] = arr[0].toUpperCase()
          let word = arr.join('')
          return word
      }
    },
    mounted() {
        const date = document.querySelector('.date'),
            listDate = document.querySelector('.list-date'),
            time = document.querySelector('.time'),
            listTime = document.querySelector('.list-time'),
            hamburger = document.querySelector('.hamburger'),
            navlinks = document.querySelector('.navlinks'),
            links = document.querySelectorAll('.list-item');

        function animateClock() {
            let dateString = new Date().toDateString()
            date.textContent = dateString
            listDate.textContent = dateString
            let hr = new Date().getHours(),
                min = new Date().getMinutes(),
                sec = new Date().getSeconds(),
                mode = hr < 12 ? 'AM': 'PM';

            hr = hr > 12 ? hr - 12: hr;

            hr = hr < 10 ? '0' + hr: hr == 0 ? 12: hr;
            min = min < 10 ? '0' + min: min;
            sec = sec < 10 ? '0' + sec: sec;
            time.textContent = hr + ':' + min + ':' + sec;
            listTime.textContent = hr + ':' + min + ':' + sec;
            time.setAttribute('data-attribute', mode)
            listTime.setAttribute('data-attribute', mode)

            requestAnimationFrame(animateClock)
        }

        animateClock()

        hamburger.addEventListener('click',() => {
            let content = document.querySelector('.main-content');
            hamburger.classList.toggle('clicked')
            navlinks.classList.toggle('active')
            content.classList.toggle('shifted')
            document.body.classList.toggle('fixed')
        })

        links.forEach(link => {
            link.addEventListener('click',() => {
                let content = document.querySelector('.main-content');
                navlinks.classList.remove('active')
                content.classList.remove('shifted')
                hamburger.classList.remove('clicked')
                document.body.classList.remove('fixed')
            })
        })

        let toggler = document.querySelector('#mode');
        toggler.addEventListener('click',() => {
            if (toggler.checked == true) {
                document.querySelector('body').classList.add('dark')
            } else {
                document.querySelector('body').classList.remove('dark')
            }
        })
    }
}
</script>
