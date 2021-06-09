<template>
    <div class="loading">
        <div class="circle circle1"></div>
        <div class="circle circle2"></div>
        <div class="circle circle3"></div>
        <div class="circle circle4"></div>
    </div>
</template>

<style lang="css" scoped>
.loading {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.circle {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    background: #000;
    margin-right: .5rem;
    background: var(--unique);
    animation: bounce .6s ease infinite;
}

.circle2 {
    animation-delay: .1s;
}

.circle3 {
    animation-delay: .2s;
}

.circle4 {
    margin-right: 0;
    animation-delay: .3s;
}

@keyframes bounce {
    from {
        transform: translateY(-12px);
    }
    to {
        transform: translateY(0px);
    }
}
</style>