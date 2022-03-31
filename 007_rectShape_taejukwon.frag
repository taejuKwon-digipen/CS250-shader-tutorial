#version 300 es
precision mediump float;

out vec4 FragColors;
uniform vec2 u_resolution;

//Taeju Kwon
//rect shape frag
//CS250
//Spring 2022

float rectshape(vec2 position, vec2 scale)
{
    scale = vec2(0.5) - scale * 0.5;
    vec2 shaper = vec2(step(scale.x, position.x), step(scale.y, position.y));
    //shaper += vec2(step(scale.x, 1.0 - position.x), step(scale.y, 1.0 - position.y));
    return shaper.x * shaper.y;
}

void main() {
    vec2 position = gl_FragCoord.xy/ u_resolution;
    vec3 color = vec3(0.1, 0.5, 0.3);
    float rectangle = rectshape(position, vec2(0.3, 0.3));
    color = vec3(rectangle);
    FragColors = vec4(color, 1.0);
}