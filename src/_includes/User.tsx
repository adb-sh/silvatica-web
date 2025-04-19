export const layout = "Base.tsx";

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export default ({ page, search, comp, children, ...props }) => (
  <div class="container mx-auto mt-24">
    <div class="flex flex-col lg:flex-row m-4 gap-4 items-stretch">
      <div class="relative">
        <div class="basis-96 grow sticky top-20">
          <comp.UserItem page={page.data} />
        </div>
      </div>
      <div class="card basis-96 grow bg-base-200 w-full">
        <section class="card-body" data-markdown="true">
          {children}
        </section>
      </div>
    </div>
    <div role="tablist" class="tabs tabs-lg tabs-lifted m-4">
      <input
        type="radio"
        name="my_tabs_2"
        role="tab"
        class="tab checked:!bg-base-200"
        aria-label="Recent&nbsp;Posts"
        checked
      />
      <div role="tabpanel" class="tab-content bg-base-200 card">
        <section class="card-body">
          {(() => {
            const posts = search.pages(
              `blog=true user=${page.data.basename}`,
              "date=desc",
              3
            );
            return posts.length ? (
              <div class="grid xl:grid-cols-3 gap-8">
                {posts.map((post) => (
                  <a href={post.url}>
                    <comp.BlogListItem page={post} />
                  </a>
                ))}
              </div>
            ) : (
              <div class="flex justify-center">
                <img
                  class="w-[30rem] ratio-square"
                  src={`/posts-404-${getRandomInt(0, 4)}.webp`}
                  alt="no posts from this user"
                />
              </div>
            );
          })()}
        </section>
      </div>

      {page.data.social?.find((s) => s.name === "github") ? (
        <>
          <input
            type="radio"
            name="my_tabs_2"
            role="tab"
            class="tab checked:!bg-base-200"
            aria-label="Github&nbsp;Stats"
          />
          <div role="tabpanel" class="tab-content bg-base-200 card">
            <div class="card-body">
              <div class="flex flex-col gap-4">
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${
                    page.data.social?.find((s) => s.name === "github").title
                  }&theme=tokyonight&show_icons=true&hide_border=true&count_private=true`}
                  class="w-96 grow"
                />
                <img
                  src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${
                    page.data.social?.find((s) => s.name === "github").title
                  }&theme=tokyonight&show_icons=true&hide_border=true&layout=compact`}
                  class="w-96 grow"
                />
              </div>
            </div>
          </div>
        </>
      ) : null}
    </div>
  </div>
);
