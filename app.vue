<script setup>
onMounted(() => {
  window.planity = {
    key: '-NddMr64Snomwp2NVAd3',
    container: document.getElementById('planity'),
  }
  document.getElementById('planity').innerHTML = 'test injection'
})
</script>

<template>
  <div>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum neque ullam impedit asperiores culpa similique quod
      molestias ea sunt nostrum error reprehenderit cum iusto modi, rem sit soluta numquam enim?</p>
    <div id="planity" />
    <p>Commenter les scripts dans le fichier <i>nuxt.config.ts</i> pour que l'injection fonctionne.</p>
  </div>
</template>
