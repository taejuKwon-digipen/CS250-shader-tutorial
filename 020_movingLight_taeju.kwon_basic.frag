#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;

out vec4 glcolor;

void main() {
    vec2 coord = (gl_FragCoord.xy * 2.0 - u_resolution) / min(u_resolution.x, u_resolution.y);
    coord.x += sin(u_time) + cos(u_time * 2.1);
    coord.y += cos(u_time) + sin(u_time * 1.6);

    float color = 0.0;

    color += 0.1 * (abs(sin(u_time)) * 0.1) / length(coord);
    glcolor = vec4(vec3(color), 1.0);
}