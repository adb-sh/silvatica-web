export default ({search, site}) =>
  [
    ...search.pages("menu.header=true"),
    ...site.extraNavItems.filter(s => s.menu?.header)
  ]
    .sort((a, b) => a.menu?.headerIndex - b.menu?.headerIndex)
    .map((page) => {
      const subpages = search.pages(`menu.headerRef=${page.title}`, "date=desc");
      return subpages.length > 0 ? (
        <li class="dropdown dropdown-end">
          <div tabindex="0" role="button" class="btn btn-ghost">
            {page.title}
          </div>
          <ul
            tabindex="0"
            class="dropdown-content menu bg-base-300 rounded-box z-[1] w-52 p-2 shadow"
          >
            {subpages.map((subpage) => (
              <li>
                <a class="block dropdown-item" href={subpage.url}>
                  {subpage.title}
                </a>
              </li>
            ))}
          </ul>
        </li>
      ) : (
        <li>
          <a href={page.url} class="btn btn-ghost">
            {page.title}
          </a>
        </li>
      );
    });
