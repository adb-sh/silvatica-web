export const layout = "Base.tsx";

const getDateString = (start: Date, end: Date) => {
  if (!end)
    return start.toLocaleDateString("us", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const isSameYear = start.getFullYear() === end.getFullYear();
  // const isSameMonth = isSameYear && start.getMonth() === end.getMonth();

  const startString = start.toLocaleDateString("us", {
    year: isSameYear ? undefined : "numeric",
    month: "long",
    day: "numeric",
  });

  const endString = end.toLocaleDateString("us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return `${startString} to ${endString}`;
};

export default ({ title, date, dateEnd, children, search, page, ...props }) => {
  const user = search.page(`user=true basename=${page.data.user}`);

  const dateString = getDateString(
    new Date(date),
    dateEnd && new Date(dateEnd)
  );

  return (
    <div class="container mx-auto mt-24">
      <div class="flex m-4">
        <div class="w-full p-4">
          <section class="xl:w-3/4">
            <div class="flex justify-between flex-wrap items-end">
              {user ? (
                <div class="flex items-center gap-4">
                  <a class="shrink-0" href={user.url} alt="Go to user">
                    <img
                      class="w-16 h-16 rounded-full"
                      src={user.octocatUrl}
                      alt={`octocat from ${user.name}`}
                    />
                  </a>
                  <div>
                    <h1 class="text-3xl font-light text-primary dark:text-primary-dark">
                      {title}
                    </h1>
                    <p>
                      by{" "}
                      <b>
                        <a href={user.url}>{user.name}</a>
                      </b>
                      , <span>{dateString}</span>
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <h1 class="text-3xl font-light text-primary dark:text-primary-dark">
                    {title}
                  </h1>
                  <span>{dateString}</span>
                </>
              )}
            </div>
            <div data-markdown="true" class="mt-4">
              {props.location && <p class="my-2">{props.location}</p>}
              {props.eventUrl && (
                <p class="my-2" data-markdown="true">
                  <a href={props.eventUrl}>{props.eventUrl}</a>
                </p>
              )}
              {children}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
