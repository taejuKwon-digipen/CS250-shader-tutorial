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
        float radius = 0.3;
        float rad = radians(360.0 / 20.0) * float (i);

        color += 0.003 / length(coord + vec2(radius * cos(rad), radius * sin(rad)));
    }

    glcolor = vec4(color,1.0);
}