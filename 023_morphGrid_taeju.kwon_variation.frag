#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 glcolor;

float random2d(vec2 coord) {
    return fract(sin(dot(coord.xy, vec2(100,100))) * 3000.0);
}

void main() {
    vec2 coord = gl_FragCoord.xy * 0.06;
    coord == u_time + vec2(sin(coord.y), cos(coord.x));

    float rand01 = fract(random2d(floor(coord)) + u_time / 10.0);
    float rand02 = fract(random2d(floor(coord)) + u_time / 40.0);

    rand01 *= 0.8 - length(fract(coord));
    glcolor = vec4(rand01 * 10.0, rand01 * rand02 * 10.0 , 0.0, 100.0);
}