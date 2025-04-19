const iconMap = new Map([
  ["github", "ph-github-logo"],
  ["linkedin", "ph-linkedin-logo"],
]);

export default ({ page, showButton }) => {
  return (
    <div class="card bg-base-200 h-full">
      <div class="card-body justify-between">
        <div class="flex flex-col items-center gap-4">
          <figure>
            <div
              class="swap swap-flip hover:swap-active focus-within:swap-active"
              tabindex="0"
            >
              {page.octocatUrl ? (
                <img
                  class="w-48 rounded swap-off rounded-full"
                  src={page.octocatUrl}
                  alt={page.name}
                />
              ) : (
                <div class="avatar placeholder w-48 swap-on rounded-full">
                  <div class="bg-neutral text-neutral-content w-48 rounded-full">
                    <span class="text-3xl">{page.name.slice(0, 2)}</span>
                  </div>
                </div>
              )}
              {page.imgUrl ? (
                <img
                  class="w-48 rounded swap-on rounded-full"
                  src={page.imgUrl}
                  alt={page.name}
                />
              ) : (
                <div class="avatar placeholder w-48 swap-on rounded-full">
                  <div class="bg-neutral text-neutral-content w-48 rounded-full">
                    <span class="text-3xl">{page.name.slice(0, 2)}</span>
                  </div>
                </div>
              )}
            </div>
          </figure>
          <p class="text-2xl font-medium text-primary">{page.name}</p>
          {page.description.split("\n").map((s) => (
            <p>{s}</p>
          ))}
          <ul>
            {page.social?.map((s) => (
              <li>
                <a
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  class="btn"
                >
                  <i class={`ph-light ${iconMap.get(s.name)} text-2xl`} />
                  <span>{s.title ?? s.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {showButton ? (
          <div class="mt-4 card-actions justify-center">
            <a href={page.url} class="btn btn-primary">
              Show Profile
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
};
