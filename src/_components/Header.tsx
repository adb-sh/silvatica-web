export default ({ ...props }) => (
  <>
    <div class="drawer-content flex flex-co fixed w-full top-0 z-10">
      <header class="navbar backdrop-blur-md bg-neutral/50 shadow-xl">
        <div class="navbar-start">
          <a class="btn btn-ghost text-xl" href="/">
            <img
              src="/silvatica-white.webp"
              class="h-full py-2"
            />
            {/* <p class="text-xl font-medium">
              {props.site.title}
            </p> */}
          </a>
        </div>

        <ul class="navbar-end gap-2">
          <div class="flex-none lg:hidden">
            <label
              for="my-drawer"
              aria-label="open sidebar"
              class="btn btn-square btn-ghost"
            >
              <i class="ph-light ph-list text-2xl" />
            </label>
          </div>
          <div class="hidden lg:flex">
            <props.comp.HeaderMenuItems {...props} />
          </div>
        </ul>
      </header>
    </div>
    <div class="drawer drawer-end">
      <input id="my-drawer" type="checkbox" class="drawer-toggle" />
      <div class="drawer-side z-20">
        <label
          for="my-drawer"
          aria-label="close sidebar"
          class="drawer-overlay"
        ></label>
        <nav class="p-4 w-80 min-h-full bg-base-200">
          <ul>
            <li>
              <a class="btn btn-ghost w-full" href="/">
                <img
                  src="/falter-white.webp"
                  class="h-12 py-2"
                />
                {/* <p>{props.site.title}</p> */}
              </a>
              <props.comp.HeaderMenuItems {...props} />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>
);
