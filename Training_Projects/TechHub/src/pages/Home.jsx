import { HomeHeader, SplitLayout } from "@features/ui";
import { BlogsGroupDisplay } from "@features/blogs";

function Home() {
  return (
    <>
      <HomeHeader />
      <SplitLayout>
        <BlogsGroupDisplay title="Trending on TechHub" />
        <BlogsGroupDisplay
          title="Explore in Programming"
          category={"Programming"}
        />
        <BlogsGroupDisplay
          title="In the Era of AI"
          category={"Artificial Intelligence"}
        />
        <BlogsGroupDisplay title="Latest Tech" category={"Technology"} />
        <BlogsGroupDisplay
          title="Dive into the Web World"
          category={"Web Development"}
        />
      </SplitLayout>
    </>
  );
}

export default Home;
