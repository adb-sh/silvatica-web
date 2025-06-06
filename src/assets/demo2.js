!(async function () {
  "use strict";

  const shader = await fetch("/scrollSpiral.glsl").then((data) => data.text());

  var canvas = document.querySelector("#webgl");
  if (!canvas) return;

  // Scroll variables
  var scroll = 0.0,
    velocity = 0.0,
    lastScroll = 0.0;

  // Initialize REGL from a canvas element
  var regl = createREGL({
    canvas: canvas,
    onDone: function (error, regl) {
      if (error) {
        alert(error);
      }
    },
  });

  // Loading a texture
  var img = new Image();
  img.src = "/img1.jpg";
  img.onload = function () {
    setTimeout(function () {
      document.body.classList.remove("loading");
    }, 1000);

    // Create a REGL draw command
    var draw = regl({
      frag: shader,
      vert: "attribute vec2 position; void main() { gl_Position = vec4(3.0 * position, 0.0, 1.0); }",
      attributes: { position: [-1, 0, 0, -1, 1, 1] },
      count: 3,
      uniforms: {
        globaltime: regl.prop("globaltime"),
        resolution: regl.prop("resolution"),
        aspect: regl.prop("aspect"),
        scroll: regl.prop("scroll"),
        velocity: regl.prop("velocity"),
        texture: regl.texture(img),
      },
    });

    // Hook a callback to execute each frame
    regl.frame(function (ctx) {
      // Resize a canvas element with the aspect ratio (100vw, 100vh)
      var aspect = canvas.scrollWidth / canvas.scrollHeight;
      canvas.width = 1024 * aspect;
      canvas.height = 1024;

      // Scroll amount (0.0 to 1.0)
      scroll =
        window.pageYOffset /
        (document.documentElement.scrollHeight - window.innerHeight);

      // Scroll Velocity
      // Inertia example:
      // velocity = velocity * 0.99 + (scroll - lastScroll);
      // lastScroll = scroll;

      // Clear the draw buffer
      regl.clear({ color: [0, 0, 0, 0] });

      // Execute a REGL draw command
      draw({
        globaltime: ctx.time,
        resolution: [ctx.viewportWidth, ctx.viewportHeight],
        aspect: aspect,
        scroll: scroll,
        velocity: velocity,
      });
    });
  };
})();
