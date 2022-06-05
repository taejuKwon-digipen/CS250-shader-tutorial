#version 300 es
precision mediump float;

out vec4 glcolor;

uniform vec2 u_resolution;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution;
    vec3 color = vec3 (0.0);
    vec2 translate = vec2(-0.5,-0.5);
    coord += translate;
    
    for(int i = 0; i < 20; i++)
    {
        float radius = 0.2;
        float rad = radians(180.0 / 20.0) * float (i);
        float rad2 = radians(180.0 / 20.0) * float (i);

        color += 0.003 / length(coord + vec2(radius * cos(rad), radius * sin(rad)));

        color += 0.003 / length(coord + vec2(radius * sin(rad2), radius * cos(rad2)));
    }

    glcolor = vec4(color,1.0);
}