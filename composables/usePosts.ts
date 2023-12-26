interface Post {
  title: string;
  description: string;
  categories: string;
  date: string;
  _path: string;
}
interface PostState {
  postList: Array<Post>;
  keyword: string;
  categories: Array<string>;
}
export const usePosts = () => {
  const postState = useState<PostState>("posts", () => ({
    postList: [],
    keyword: "",
    categories: [],
  }));

  const resetFilter = () => {
    postState.value.keyword = "";
    postState.value.categories = [];
  };

  const setCategory = ({ category }: { category: string }) => {
    const router = useRouter();
    const route = useRoute();

    if (route.path != "/posts") {
      router.push("/posts");
    }
    const findIndex = postState.value.categories.findIndex(
      (c) => c === category
    );
    if (findIndex != -1) {
      postState.value.categories.splice(findIndex, 1);
      return;
    }
    postState.value.categories.push(category);
    // console.log("postState.value.categories", postState.value.categories);
  };
  const getPostList = async ({ limit = 0 }: { limit?: number } = {}) => {
    // console.log("getPost!", limit);

    postState.value.postList =
      // await useAsyncData(`posts-${actualPath}`, async () => {
      //return
      (
        await queryContent("/posts/")
          .where({
            title: {
              $contains: [postState.value.keyword],
            },
            categories: {
              $contains: [...postState.value.categories],
            },
          })
          .sort({ date: -1 })
          .limit(limit)
          .find()
      ).map((post: any) => ({
        title: post.title,
        description: post.description,
        categories: post.categories,
        date: post.date,
        _path: post._path,
      }));
    // .sort((a: any, b: any) => {
    //     const aDate = new Date(a.date);
    //     const bDate = new Date(b.date);
    //     return bDate.getTime() - aDate.getTime();
    //});//
    // });
    // console.log(postState.value.postList);

    // postState.value.postList = data.value as any;
  };

  return { postState, getPostList, setCategory, resetFilter };
};
