#version  300 es
precision mediump float;

out vec4 FragColor;

//Taeju Kwon
//color frag
//CS250
//Spring 2022

void main() {
    vec3 color = vec3 (0.1, 0.5, 0.3);
    FragColor = vec4(color, 1.0);
}