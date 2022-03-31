#version 300 es
precision mediump float;

//Taeju Kwon
//polygon frag
//CS250
//Spring 2022

const float PI = 3.141592653589793;

out vec4 fragColor;
uniform vec2 u_resolution;


float polygonShape(vec2 position, float radius, float sides){
    position =position * 2.0 - 1.0;
    float angle = atan(position.x, position.y);
    float slice = PI * 2.0 / sides;

    return step(radius, cos(floor(0.5 + angle / slice) * slice - angle) * length(position));
}

void main() {
    vec2 position = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3 (1.0,0.799, 0.8);
    float polygon = polygonShape(position, 0.6, 6.0);
    color += vec3(polygon);
    
    fragColor = vec4(color, 1.0);
}