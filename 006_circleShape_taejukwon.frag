#ifdef GL_ES
precision mediump float;
#endif

//Taeju Kwon
//color frag
//CS250
//Spring 2022

uniform vec2 u_resolution;

vec3 drawCircle(vec2 position, vec3 color, float size)
{
    float circle = sqrt(pow(position.x, 2.0)+pow(position.y, 2.0));
    circle = smoothstep(size, size + 0.003, 1.0-circle);
    return color * circle;
}

void main() {
    vec2 position = gl_FragCoord.xy/u_resolution;
    vec3 color = vec3(0.0);
    float circle = 0.0;

    circle = distance(position, vec2(0.5));
    circle += 0.5;
    vec3 circle2 = drawCircle(position - vec2(0.5,0.5), vec3 (1.0,0.799, 0.8), 0.9);

    color += circle2;
    gl_FragColor = vec4(color, 1.0);
}