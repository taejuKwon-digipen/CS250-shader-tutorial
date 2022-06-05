#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mousedown;

uniform sampler2D u_tex0;

out vec4 fragColor;
out vec4 texture2d;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    fragColor = texture2d(u_tex0, coord);
}