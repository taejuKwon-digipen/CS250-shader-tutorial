#version 300 es
precision mediump float;

//Taeju Kwon
//rotate frag
//CS250
//Spring 2022

uniform vec2 u_resolution;
uniform float u_time;
const float PI = 3.141592653589793;

out vec4 FragColor;

float polygonShape(vec2 position, float radius, float sides){
    position =position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;

    return step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}

mat2 rotate(float angle) {
    return mat2(cos(angle), -sin(angle),sin(angle), cos(angle));
}

void main() {
    vec2 coord = gl_FragCoord.xy/ u_resolution;
    vec3 color = vec3 (0.01 ,0.799, 0.8);

    coord -= vec2(0.5);
    coord = rotate(u_time/0.4) * coord;
    coord += vec2 (0.5);
    float polygon = polygonShape(coord, 0.6, 6.0);
    coord += vec2(0.5);

    color += vec3(polygon);

    FragColor = vec4(color, 1.0);
}