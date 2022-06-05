#version 300 es
precision mediump float;

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float size = 6.0;
float speed = 10.0;
bool flip = true;

out vec4 glfragcolor;

void main(){
    vec2 coord = gl_FragCoord.xy / u_resolution.xy;
    vec3 color = vec3(0.0);

    vec4 image = texture2D (u_tex0 , coord);

    if(flip){
        image.a = sin(floor(coord.x * size) - u_time * speed);
    } else {{
        image.a = sin(floor(coord.y * size) - u_time * speed);
    }}

    glfragcolor = image;
}