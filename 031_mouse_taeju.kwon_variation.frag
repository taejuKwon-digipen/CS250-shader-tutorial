#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 glfragcolor;

void main(){
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.0);

    color.r = u_mouse.y/u_resolution.x; 
    color.b = u_mouse.x/u_resolution.y;
    color.g = u_mouse.x * u_mouse.y / u_resolution.x;

    glfragcolor = vec4(color, 1.0);
}