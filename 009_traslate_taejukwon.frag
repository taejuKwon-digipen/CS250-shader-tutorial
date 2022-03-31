#version 300 es
precision mediump float;

out vec4 fragColor;
uniform vec2 u_resolution;
uniform float u_time;


//Taeju Kwon
//translate frag
//CS250
//Spring 2022

float drawCircle(vec2 position, float radius)
{
    return step(radius, length(position - vec2(0.5)));
}

void main() {
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3 (1.0,0.799, 0.8);

    vec2 translate = vec2(sin(u_time/20.0), cos(u_time));
    coord += translate;

    color += vec3(drawCircle(coord, 0.2));

    fragColor = vec4(color, 1.0);
}
