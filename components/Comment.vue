<template>
  <div ref="comment"></div>
</template>

<script setup lang="ts">
const comment = ref();
onMounted(() => {
  const scriptElem = document.createElement("script");
  scriptElem.src = "https://utteranc.es/client.js";
  scriptElem.async = true;
  scriptElem.setAttribute("repo", "ParkBeomMin/parkbeommin.github.io");
  scriptElem.setAttribute("issue-term", "title");
  scriptElem.setAttribute("theme", "github-light");
  scriptElem.setAttribute("label", "✨💬✨");
  scriptElem.crossOrigin = "anonymous";
  comment.value.appendChild(scriptElem);
});
</script>
