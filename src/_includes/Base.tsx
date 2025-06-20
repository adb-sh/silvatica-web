export default ({ title, children, search, site, comp, user }) => (
  <html lang="de">
    <head>
      <title>{title ? `${title} - ${site.title}` : site.title}</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="author"
        content={
          (user && search.page(`user=true basename=${user}`)?.title) ??
          site.title
        }
      />
      <meta name="publisher" content={site.title} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
      <link rel="stylesheet" href="/main.css" />

      <link rel="stylesheet" type="text/css" href="https://tickets.silvatica.site/silvatica/2025/widget/v1.css" crossorigin />
      <script type="text/javascript" src="https://tickets.silvatica.site/widget/v1.de.js" async crossorigin></script>

      <script src="/regl.min.js"></script>
      <script src="/scrollSpiral.glsl" type="x-shader/x-fragment" id="fragmentShader"></script>
      <script src="/demo2.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    </head>
    <body
      class="bg-body text-text flex flex-col justify-between min-h-screen relative"
    >
      <div>
        <comp.Header />
        <main class="content">{children}</main>
      </div>
      <comp.Footer />
    </body>
  </html>
);
