#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

out vec4 GL_fragcolor;

void main() {
    vec2 coord = 6.0 * gl_FragCoord.xy / u_resolution;
    
    for(int n = 1; n < 5; n++){
        float i = float(n);
        coord += vec2(0.7 / i * sin(i + coord.y + u_time + 0.7 * i) + 0.8, 0.4 / i * sin(coord.x + u_time + 0.3 * i) + 1.6);
    }
    coord += vec2(0.7 / sin(coord.y + u_time + 0.3) + 0.8, 0.4/sin(coord.x+u_time+0.3) +1.6);
    vec3 color = vec3(0.5 * sin(coord.x) + 0.5, 0.5 * sin(coord.y) + 0.5, sin(coord.x + coord.y));
    GL_fragcolor = vec4(color, 1.0);
}