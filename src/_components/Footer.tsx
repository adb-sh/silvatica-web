export default ({ search, site }) => (
  <footer class="bg-neutral dark:bg-secondary-dark">
    <div class="flex justify-center p-5">
      <img src="/falter-white.webp" class="h-12 py-2" />
    </div>
    <div class="container mx-auto text-white px-8 py-4 flex justify-between flex-wrap">
      <span class="copyright">
        © {new Date().getFullYear()} - {site.title}
      </span>
      <span>
        {[
          ...search.pages("menu.footer=true"),
          ...site.extraNavItems.filter((s) => s.menu?.footer),
        ]
          .sort((a, b) => a.menu?.footerIndex - b.menu?.footerIndex)
          .map((page) => (
            <a href={page.url} class="underline mx-2">
              {page.title}
            </a>
          ))}
      </span>
    </div>
  </footer>
);
