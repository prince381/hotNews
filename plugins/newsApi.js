export default ({ app, $http }, inject) => {

    function subText(txt) {
        let arrText = txt.split(' '), text;

        if (arrText.length > 30) {
            const subtext = arrText.slice(0,30);
            text = subtext.join(' ') + '...';
        } else text = txt

        return text
    }

    function parseText(txt,replacement) {
        const re = /https:.+/ig;
        let parsedTxt;
        if (re.test(txt)) {
            parsedTxt = replacement
        } else parsedTxt = txt

        return parsedTxt
    }

    function removeDuplicates(arr) {
        let titles = arr.map(obj => obj.title),
            duplicates = [];
        const size = titles.length;

        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                if (i != j && titles[i] === titles[j]) {
                    if (duplicates.indexOf(titles[i]) < 0) duplicates.push(titles[i])
                }
            }
        }
        function isDuplicated(arr) {
            return function(obj) {
                if (arr.indexOf(obj.title) < 0) {
                    return true
                } else return false
            }
        } 
        let newArray = arr.filter(isDuplicated(duplicates));
        return newArray
    }

    function getValidNews(arr) {
        let newArray = arr.filter(obj => {
            const src = obj.source.name,
            author = obj.author,
            content = obj.description,
            image = obj.urlToImage;
        
            let authorOrSrc = false;
            if (src !== null || author !== null) authorOrSrc = true;
            let contentOrImg = false;
            if (content !== null && image !== null) contentOrImg = true;

            return authorOrSrc && contentOrImg

        }).map(obj => {
            let src = obj.source.name,
                author = obj.author,
                title = obj.title,
                desc = subText(obj.description),
                url = obj.url,
                image = obj.urlToImage,
                date = obj.publishedAt;
            if (src == null || src == '') src = author;
            if (author == null || author == '') author = src;
            if ((author == null && src == null) || (author == '' && src == '')) {
                author = 'Anonymous';
                src = 'Anonymous';
            }

            return {
                source: src,
                author: parseText(author,src),
                title: title,
                content: desc,
                url: url,
                img: image,
                date: date,
                found: true
            }
        })

        return newArray
    }

    function getRelated(arr) {
        let newArray = arr.filter(obj => {
            const src = obj.source.name,
            author = obj.author,
            content = obj.description,
            image = obj.urlToImage;
        
            let authorOrSrc = false;
            if (src !== null || author !== null) authorOrSrc = true;
            let contentOrImg = false;
            if (content == null && image !== null) contentOrImg = true;

            return authorOrSrc && contentOrImg

        }).map(obj => {
            let title = obj.title,
                url = obj.url,
                date = obj.publishedAt;

            return {
                title: title,
                url: url,
                date: date
            }
        })

        return newArray
    }

    inject('fetchFromNewsAPI', async category => {
        const newsApi = await $http.$get(`https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=6de1cb3976964889989a42bfb2eef149`);

        const news = await getValidNews(newsApi.articles);
        const related = await getRelated(newsApi.articles);

        return { realNews: removeDuplicates(news), relatedNews: removeDuplicates(related) }
    })

    inject('logData', data => console.log(data))

}