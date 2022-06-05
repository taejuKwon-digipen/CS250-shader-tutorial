#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 glfragcolor;

void main() {

    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.6, 0.2627, 0.2627);
    vec2 translate = vec2(-0.5, -0.5);
    coord += translate;

    color.r += abs(0.3 + length(coord) - 0.6 * abs ( sin (u_time * 0.9 / 12.0)));
    color.g += abs(0.3 + length(coord) - 0.4 * abs ( sin (u_time * 0.1 / 5.0)));
    color.b += abs(0.5 + length(coord) - 0.6 * abs ( sin (u_time * 0.5 / 9.0)));
    glfragcolor = vec4(0.1 / color, 1.0);
}




