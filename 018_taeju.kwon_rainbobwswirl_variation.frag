#version 300 es
precision mediump float;

out vec4 glcolor;
uniform float u_time;
uniform vec2 u_resolution;

void main()
{
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3(0.0);

    float angle = atan(coord.x + 10.0, coord.y - 0.2) * 10.0;
    float len = length (coord - vec2(0.5, 0.25));

    color.r += sin(len * 20.0 + angle * 20.0 + u_time);
    color.g += cos(len * 30.0 + angle * 60.0 - u_time);
    color.b += sin(len * 50.0 + angle * 50.0 + 3.0);

    glcolor = vec4(color, 1.0);
}