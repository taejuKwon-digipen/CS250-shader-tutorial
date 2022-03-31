#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

const float PI = 3.141592653589793;

out vec4 fragcolor;

//Taeju Kwon
//scale frag
//CS250
//Spring 2022

mat2 scale(vec2 scale){
    return mat2(scale.x, 0.0,0.0,scale.y);
}

float polygonShape(vec2 position, float radius, float sides){
    position =position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;

    return step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}

void main() {
    vec2 coord = gl_FragCoord.xy/ u_resolution;

    coord -= vec2(0.5);
    coord = scale(vec2(sin(u_time) * 2.0)) * coord;coord += vec2(0.5);

    vec3 color = vec3 (0.01 ,0.799, 0.8);
    float polygon = polygonShape(coord, 0.6, 6.0);
    color += vec3(polygon);

    fragcolor = vec4(color, 1.0);
}