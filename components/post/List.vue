// https://content.nuxtjs.org/api/composables/query-content
<template>
  <!-- <ContentList path="/posts" v-slot="{ list }">
        <div v-for="article in list" :key="article._path">
            <h2>{{ article.title }}</h2>
            <p>{{ article.description }}</p>
        </div>
    </ContentList> -->
  <h2 class="font-bold md:text-3xl text-xl">{{ title }}</h2>
  <!-- <ContentQuery
        path="/posts"
        :where="{ title: { $contains: searchKeyword } }"
        :limit="limit"
        ><template #default="{ data }"> -->
  <span v-if="isShowCnt">{{ postList.length }} 개의 포스트가 있어요.</span>
  <ul class="my-8">
    <li
      v-for="(post, i) of postList"
      :key="i"
      class="mb-4 pb-4 border-b-4 border-grey-900 transition duration-500 hover:text-blue-500 hover:translate-x-1"
    >
      <nuxt-link :to="post._path">
        <span
          class="mr-2 text-gray-500 text-sm md:text-md"
          v-for="(category, i) of post.categories?.split?.(' ')"
          :key="`post-category-${i}`"
          >#{{ category }}</span
        >
        <h3 class="font-bold md:text-xl">
          {{ post.title }}
        </h3>
        <p>{{ post.description }}</p>
        <span class="text-sm">{{ convertDate(post.date) }}</span>
      </nuxt-link>
    </li>
  </ul>
  <!-- </template>
        <template #not-found>
            <p>No post found.</p>
        </template></ContentQuery
    > -->
</template>

<script setup lang="ts">
const { title, searchKeyword, limit } = defineProps({
  title: {
    type: String,
    default: "",
  },
  searchKeyword: {
    type: String,
    default: "",
  },
  limit: {
    type: Number,
    default: 0,
  },
  isShowCnt: {
    type: Boolean,
    default: true,
  },
});

const convertDate = (data: string) => {
  if (!data) {
    return "";
  }
  const tmp = new Date(data);
  const month =
    tmp.getMonth() + 1 < 10 ? `0${tmp.getMonth() + 1}` : tmp.getMonth() + 1;
  const date = tmp.getDate() < 10 ? `0${tmp.getDate()}` : tmp.getDate();
  return `${tmp.getFullYear()}-${month}-${date}`;
};

const { postState, getPostList } = usePosts();

const postList = computed(() => postState.value.postList);

await useAsyncData("posts", async () => {
  await getPostList({ limit });
});
onMounted(async () => {});
</script>
