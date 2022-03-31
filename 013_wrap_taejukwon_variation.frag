#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;
//Taeju Kwon
//wrap grid frag
//CS250
//Spring 2022
out vec4 FragColor;

void main() {
  vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.7059, 0.2157, 0.6824);

    color += sin((coord.x * cos(u_time / 6.0) * 40.0) * sin(coord.y * cos(u_time /6.0) * 10.0 ));
    color += cos((coord.y * sin(u_time / 6.0) * 40.0) * cos(coord.x * sin(u_time /6.0) * 10.0 ));
    
    color += sin(u_time * 10.0) * 0.5;

    FragColor= vec4(color, 1.0);
}