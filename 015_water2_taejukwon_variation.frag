#version 300 es
precision mediump float;

//Taeju Kwon
//water color 2
//CS250
//Spring 2022

uniform vec2 u_resolution;
uniform float u_time;

const int AMOUNT = 2;
out vec4 fragcolor ;

void main()
{
    vec2 coord = 20.0 * (gl_FragCoord.xy - u_resolution / 2.0) / max(u_resolution.y , u_resolution.x);
    float len;

    for(int i = 0; i < AMOUNT; i++)
    {
        len = length(vec2(coord.x, coord.y)) ;
        coord.x = coord.x - sin(coord.y * sin(len)) + sin(u_time / 9.0);
        coord.y = coord.y + cos(coord.x * cos(len)) + cos(u_time / 12.0);
    }
    fragcolor = vec4(sin(len * 2.0 ), cos(len * 3.0), sin(len * 1.0), 1.0);
}