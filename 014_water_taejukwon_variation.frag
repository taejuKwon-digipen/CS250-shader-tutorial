#version 300 es
precision mediump float;

uniform vec2 u_resolution;
uniform float u_time;

out vec4 FragColor;

void main() {
    vec2 coord = 9.0 * gl_FragCoord.xy / u_resolution;
    
    for(int n = 1; n < 5; n+=1){
        float i = float(n);
        coord += vec2(0.7 / i * sin(i * coord.y + u_time + 0.7 * i) + 0.8, 0.4 / i * sin(coord.x * u_time + 0.3 * i) + 2.0);
        coord += vec2(0.1 / i * tan(i * coord.y + u_time + 0.1 * i) + 0.8, 0.4 / i * tan(coord.x * u_time + 0.2 * i) + 2.0);
        coord += vec2(0.7 / i * cos(i * coord.y + u_time + 0.7 * i) + 0.8, 0.4 / i * cos(coord.x * u_time + 0.3 * i) + 2.0);
    }
    coord += vec2(0.7 / sin(coord.x + u_time + 0.3) + 0.8, 0.4/sin(coord.x + u_time + 2.0) +1.6);
    vec3 color = vec3(0.5 * sin(coord.x) + 0.5, 0.5 * cos(coord.y) + 0.5, sin(coord.x + coord.y));
    FragColor = vec4(color, 1.0);
}