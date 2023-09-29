<template>
    <div>
      <CommonNavbar :curve="true" :noStatic="true" />
      <main class="main-bg">
        <OnePageHeader />
        <OnePageBlog />
        <OnePageAbout />
        <OnePageMarq />
        <OnePageServices />
        <OnePagePortfolio />
        <OnePageIntro />
        <OnePageTestimonials />
        <OnePageImageSection />
        <OnePageTeam />
        <OnePageContact />
      </main>
      <OnePageFooter />
    </div>
  </template>
  
  <script setup>
  definePageMeta({
  layout: 'default'
});
  //= Page Head
  useHead({
    titleTemplate: `%s - One Page`,
    bodyAttrs: {
      class: 'main-bg'
    }
    // sub-bg
  })
  </script>
  