export default ({ page, search }) => {
  const user = search.page(`user=true basename=${page.user}`);

  return (
    <figure class="flex flex-col mb-16">
      <div class="flex w-full justify-between flex-wrap items-end">
        {user ? (
          <div class="flex items-center gap-4">
            {/* <img class="w-16 h-16 rounded-full" src={user.imgUrl} /> */}
            <div>
              <h2 class="text-3xl font-light text-primary dark:text-primary-dark">
                {page.title}
              </h2>
              <p>
                by <b>{user.name}</b>,{" "}
                <span>
                  {new Date(page.date).toLocaleDateString("us", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
              </p>
            </div>
          </div>
        ) : (
          <>
            <h2 class="text-3xl font-light text-primary dark:text-primary-dark">
              {page.title}
            </h2>
            <span>
              {new Date(page.date).toLocaleDateString("us", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </>
        )}
      </div>
      <div class="overflow-hidden flex flex-col no-underline">
        <div class="my-5 grow base-80">{page.excerpt}</div>
        {page.imgUrl ? (
          <img
            class="max-h-96 w-30 shrink grow object-cover rounded"
            src={page.imgUrl}
            alt="Blog Post Thumbnail"
          />
        ) : null}
      </div>
    </figure>
  );
};
