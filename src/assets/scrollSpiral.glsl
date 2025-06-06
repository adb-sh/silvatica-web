#define TWO_PI 6.2831853072
#define PI 3.14159265359

precision highp float;

uniform float globaltime;
uniform vec2 resolution;
uniform float aspect;
uniform float scroll;
uniform float velocity;
uniform sampler2D texture;

const float timescale = 0.1;
const float twist = 2.0;

vec2 rotate(vec2 v, float angle) {
  float c = cos(angle);
  float s = sin(angle);
  return v * mat2(c, -s, s, c);
}

float nsin(float value) {
  return sin(value * TWO_PI) * 0.5 + 0.5;
}

void main(void) {
  float time = globaltime * timescale;
  vec2 center = vec2(sin(TWO_PI * time * 0.2), cos(TWO_PI * time * 0.2)) * nsin(time * 0.3) * 0.5;
  vec2 tx = (gl_FragCoord.xy / resolution.xy - 0.5 - center) * vec2(aspect, 1.0);
  float len = 1.0 - length(tx);
  float zoom = 1.0 + scroll - len * 3.0 * (1.0 - scroll) + len * velocity * 2.0;

  vec4 imgColor = texture2D(
    texture,
    rotate(
      (tx + center) * vec2(1.0, -1.0) * zoom,
      twist * TWO_PI * nsin(len + time) * scroll + time
    ) + 0.5
  );

  gl_FragColor = imgColor;
}
