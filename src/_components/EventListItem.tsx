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

export default ({ page, search }) => {
  const dateString = getDateString(
    new Date(page.date),
    page.dateEnd && new Date(page.dateEnd)
  );

  return (
    <figure class="card bg-base-200">
      <div class="card-body flex-col md:flex-row gap-6">
        {page.imgUrl ? (
          <img
            class="h-64 md:h-full md:w-64 object-cover rounded"
            src={page.imgUrl}
            alt="Event Thumbnail"
          />
        ) : null}
        <div>
          <h2 class="text-3xl font-light text-primary dark:text-primary-dark">
            {page.title}
          </h2>
          <p class="my-2">{dateString}</p>
          <p class="my-2">{page.location}</p>
          {page.eventUrl && (
            <p class="my-2" data-markdown="true">
              <a href={page.eventUrl} alt="event Url">{page.eventUrl}</a>
            </p>
          )}
        </div>
      </div>
    </figure>
  );
};
