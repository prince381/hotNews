<template>
    <div class="error-page">
        <div class="center-content">
            <i class="material-icons error">report_problem</i>
            <p class="sorry">Sorry, data failed to load properly!!
                <br>Please hit the button below to refresh the page or make sure you're navigating to a correct route.</p>
            <button class="refresh"><span>Refresh</span> <i class="material-icons">refresh</i></button>
        </div>
    </div>
</template>

<script>
    export default {
        mounted() {
            const refresh = document.querySelector('.refresh');

            refresh.addEventListener('click', (e) => {
                let currentRoute = window.location.href;
                window.location.href = currentRoute;
            })
        }
    }
</script>

<style scoped>

.error-page {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.center-content {
    text-align: center;
    width: 80%;
}

.error {
    font-size: 5rem;
    color: var(--unique);
    margin-bottom: 1rem;
}

.sorry {
    margin-bottom: 1.5rem;
    font-family: 'Montserat', serif;
    line-height: 1.7;
}

.refresh {
    display: inline-flex;
    justify-content: flex-start;
    align-items: center;
    padding: .6rem 1rem;
    border-radius: .7rem;
    border: none;
    outline: none;
    background: var(--unique);
    color: #fff;
    cursor: pointer;
    position: relative;
}

.refresh i {
    margin-left: 5px;
}

.refresh::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: .7rem;
    background: var(--unique);
    z-index: -1;
}

.refresh:hover::before {
    transition: all .3s ease;
    transform: scale(1.2,1.4);
    opacity: 0;
}

@media (min-width: 768px) {
    .error {
        font-size: 10rem;
    }

    .center-content {
        width: 50%;
    }
}

</style>