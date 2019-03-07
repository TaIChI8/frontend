<template lang="pug">
div
  BaseSlider
  PageIndexAboutUs
  PageIndexFacts
  PageIndexServices
  PageIndexDevices
  // PageIndexServices2
  PageIndexQuotes
  PageIndexTeam
  PageIndexBrands
  // PageIndexGallery
  PageIndexReviews
  PageIndexClients
  PageIndexStories
</template>

<script>
import BaseSlider from '~/components/base/BaseSlider'
import PageIndexAboutUs from '~/components/pages/PageIndexAboutUs'
import PageIndexFacts from '~/components/pages/PageIndexFacts'
import PageIndexServices from '~/components/pages/PageIndexServices'
import PageIndexDevices from '~/components/pages/PageIndexDevices'
import PageIndexServices2 from '~/components/pages/PageIndexServices2'
import PageIndexQuotes from '~/components/pages/PageIndexQuotes'
import PageIndexTeam from '~/components/pages/PageIndexTeam'
import PageIndexBrands from '~/components/pages/PageIndexBrands'
import PageIndexGallery from '~/components/pages/PageIndexGallery'
import PageIndexReviews from '~/components/pages/PageIndexReviews'
import PageIndexClients from '~/components/pages/PageIndexClients'
import PageIndexStories from '~/components/pages/PageIndexStories'

export default {
  components: {
    BaseSlider, PageIndexAboutUs, PageIndexFacts, PageIndexServices, PageIndexDevices, PageIndexServices2, PageIndexQuotes, PageIndexTeam, PageIndexBrands, PageIndexGallery, PageIndexReviews, PageIndexClients, PageIndexStories
  }
}
</script>
