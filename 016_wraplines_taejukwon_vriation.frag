#version 300 es
precision mediump float;

out vec4 fragcolor;
uniform float u_time;
uniform vec2 u_resolution;

void main() {

    vec2 coord = gl_FragCoord.xy/ u_resolution.xy;
    float color = 0.0;
    color += sin(coord.x * 50.0 + sin(u_time + coord.y * 10.0 + sin(coord.y * 50.0 + u_time * 20.0)) *2.0);
    color += cos(coord.x * 20.0 + cos(u_time + coord.y * 10.0 + cos(coord.x * 50.0 + u_time * 20.0))*2.0);
    color += sin(coord.x * 30.0 + sin(u_time + coord.y * 10.0 + sin(coord.y * 50.0 + u_time * 20.0)) * 2.0);
    color += cos(coord.x * 50.0 + cos(u_time + coord.y * 15.0 + cos(coord.x * 50.0 + u_time * 20.0 ))*2.0);
 
    fragcolor = vec4(vec3(color,color,color), 1.0);
 }