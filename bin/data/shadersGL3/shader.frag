#version 150

// this is how we receive the texture
uniform float red;

in vec2 texCoordVarying;

out vec4 outputColor;

void main()
{
  vec2 st = texCoordVarying;
  outputColor = vec4(vec3(red, 0.0, 0.0), 1.0);
}