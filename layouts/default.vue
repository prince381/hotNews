<template>
  <div class="main-container">
    <Navigation></Navigation>
    <Nuxt keep-alive class="main-content" />
  </div>
</template>

<script>
import Navigation from '~/components/navigation'

export default {
  components: {
    'Navigation': Navigation
  }
}
</script>
