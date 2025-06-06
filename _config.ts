import lume from "lume/mod.ts";
import code_highlight from "lume/plugins/code_highlight.ts";
import jsx_preact from "lume/plugins/jsx_preact.ts";
import mdx from "lume/plugins/mdx.ts";
import minify_html from "lume/plugins/minify_html.ts";
import pagefind from "lume/plugins/pagefind.ts";
import postcss from "lume/plugins/postcss.ts";
import tailwindcss from "lume/plugins/tailwindcss.ts";
import sass from "lume/plugins/sass.ts";
import feed from "lume/plugins/feed.ts";
// import * as colors from "https://esm.sh/twind@0.16.19/colors";
import daisyui from "npm:daisyui@4";
import themes from "https://esm.sh/daisyui@4/src/theming/themes";
import anchor from "npm:markdown-it-anchor";
import metas from "lume/plugins/metas.ts";
import lightningCSS from "lume/plugins/lightningcss.ts";
import googleFonts from "lume/plugins/google_fonts.ts";

const site = lume(
  {
    src: "./src",
    location: new URL("https://silvatica-web.adb-sh.deploy.fish/"),
  },
  {
    markdown: {
      options: {
        xhtmlOut: true,
        linkify: true,
      },
      plugins: [
        [
          anchor,
          {
            permalink: anchor.permalink.ariaHidden({
              placement: "before",
            }),
          },
        ],
      ],
    },
  }
);

site
  .use(jsx_preact())
  .use(mdx())
  .use(pagefind())
  .use(code_highlight())
  .use(googleFonts({
    fonts: {
      "text": "https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap",
      "stencil": "https://fonts.googleapis.com/css2?family=Black+Ops+One&display=swap",
    }
  }))
  .use(sass())
  .use(
    tailwindcss({
      options: {
        theme: {
          screens: {
            sm: "480px",
            md: "720px",
            lg: "920px",
            xl: "1100px",
          },
          fontFamily: {
            sans: ["text", "sans-serif"],
            mono: ["stencil", "mono"]
          },
        },
        plugins: [daisyui],
        daisyui: {
          themes: [
            {
              custom: {
                ...themes.black,
                primary: themes.forest.primary,
                secondary: themes.forest.secondary,
                info: themes.coffee.info,
                success: themes.coffee.success,
                warning: themes.coffee.warning,
                error: themes.coffee.error,
              },
            },
            // "nord",
            "custom",
          ],
          darkTheme: "custom",
        },
      },
    })
  )
  .use(postcss())
  .use(
    feed({
      title: "=data.title",
      output: ["/feed.rss", "/feed.json"],
      query: "blog=true",
      sort: "date=desc",
      info: {
        title: "=site.title",
        description: "=site.description",
      },
      items: {
        title: "=title",
        description: "=excerpt",
      },
    })
  )
  .use(metas())
  .copy("media")
  .copy("assets", ".")
  .use(lightningCSS())
  .use(
    minify_html({
      options: {
        do_not_minify_doctype: true,
        keep_closing_tags: true,
        keep_html_and_head_opening_tags: true,
        keep_spaces_between_attributes: true,
      },
    })
  );

export default site;
