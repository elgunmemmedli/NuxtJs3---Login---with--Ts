<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
</script>

<template>
  <div>
    <h1 class="text-center">Hello</h1>

    <div class="d-flex justify-content-center align-items-center mt-5 pt-5">
      <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/4Zc1HqB6klQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

