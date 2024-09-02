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
  <ul class="my-8 post-list">
    <li
      v-for="(post, i) of postList"
      :key="i"
      class="mb-4 pb-4 transition duration-500 hover:text-blue-500 hover:translate-x-1 post-item"
    >
    <PostCard 
      :path="post._path"
      :categoryList="post.categories?.split?.(' ')"
      :title="post.title"
      :description="post.description"
      :date="post.date"
    />
    </li>
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

<style scoped>
  .post-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

.post-item {
  width: 100%;
  max-width: 300px; /* 카드의 최대 너비 */
  margin: 0 auto;
  padding: 16px;
  background-color: #fff;
  border: 1px solid #e5e7eb; /* 테두리 색상 (연한 회색) */
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* 살짝의 그림자 */
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.post-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
}
</style>