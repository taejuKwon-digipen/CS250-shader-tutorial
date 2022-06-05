#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

out vec4 fragcolor;

float noise1d(float value){
    return cos(value+cos(value * 90.0) * 100.0); 

void main(){
    vec2 coord = gl_FragCoord.xy;
    vec3 color = vec3(0.4, 0.0, 1.0);
    color.r += noise1d(u_time * 0.1);
    color.g -= noise1d(u_time * 0.5);
    color.b += noise1d(u_time * 0.3);

    fragcolor = vec4(color, 1.0);
}