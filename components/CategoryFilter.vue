<template>
  <ul class="flex mb-8 flex-wrap">
    <li
      v-for="(category, i) of categoryList"
      :key="`category-${i}`"
      :class="[
        `mr-3 p-1 px-2 rounded-3xl transition duration-500 hover:scale-125 hover:bg-blue-400 hover:text-white`,
        { 'bg-blue-400 text-white': getIsSelected(category) },
      ]"
    >
      <a
        href="javascript:void(0)"
        @click="setCategory({ category }), getList()"
      >
        #{{ category }}
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
const { data } = await useAsyncData("category", async () => {
  return await queryContent("/posts/").find();
});
// console.log("data11", data.value);

const postList = data.value as any;
// console.log(postList);
const tmpList = postList
  .flatMap((post: any) => post.categories?.split?.(" "))
  .filter((v: any) => v);
const set = new Set(tmpList);
const categoryList = [...set];
// console.log(categoryList);
const { postState, setCategory, getPostList } = usePosts();

const getList = async () => {
  await useAsyncData("search", async () => {
    getPostList();
  });
};

const getIsSelected = (category: string) => {
  return postState.value.categories.findIndex((c) => c === category) > -1;
};
</script>
