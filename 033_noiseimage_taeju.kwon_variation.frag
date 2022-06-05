#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

uniform sampler2D u_tex0;

float amount = 0.0;

 float random2d(vec2 coord)
 {
     return fract(cos(dot(coord.xy, vec2(12.9998, 78.233)))* 43758.5453);
 }

out vec4 glfragcolor;

void main(){
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.0);

    vec4 image = texture2D(u_tex0, coord);

    image.r += noise;
    image.g *= noise;
    image.b += noise;

    glfragcolor = vec4(color, 1.0);
}