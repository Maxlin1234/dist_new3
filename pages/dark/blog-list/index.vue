<template>
  <div>
    <CommonNavbar />
    <main class="main-bg">
      <InnerPagesBlogHeader :data="metadata" />
      <InnerPagesBlogList />
    </main>
    <StartupFooter />
  </div>
</template>

<script setup>
const metadata = {
  subTitle: "DOME 2.0 戶外穹頂劇場",
  title: "臺灣當代文化實驗場（C-LAB）自 2020 年正式啟動「科技媒體實驗平台」，著重於媒體實驗創新與社會鏈結，以跨域、共創、協作方式，打造文化與科技的實驗平台。"
}
// OUR BLOG
// Latest News.
//= Page Head

useHead({
  titleTemplate: `%s - Blog List`,
  bodyAttrs: {
    class: 'main-bg'
  }
})
</script>
