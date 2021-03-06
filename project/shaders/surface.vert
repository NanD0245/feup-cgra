#ifdef GL_ES
precision highp float;
#endif

attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D distortionmap;
uniform float subtract;
uniform float multiply;
uniform float timeFactor;


void main() {

    vec2 manipulatedTexCoord = mod( (aTextureCoord + vec2(0.00005*timeFactor, 0.00005*timeFactor)) / 2.0, vec2(1.0, 1.0) );

    float offsetR = (texture2D(distortionmap, manipulatedTexCoord).r  - subtract) * multiply;
    float offsetG = (texture2D(distortionmap, manipulatedTexCoord).g  - subtract) * multiply;

    if (aTextureCoord.s + offsetR >= 0.0 && aTextureCoord.s + offsetR <= 1.0 && aTextureCoord.t + offsetG >= 0.0 && aTextureCoord.t + offsetG <= 1.0) 
        vTextureCoord = vec2(aTextureCoord.s + offsetR , aTextureCoord.t + offsetG);
    else if (aTextureCoord.s + offsetR >= 0.0 && aTextureCoord.s + offsetR <= 1.0)
        vTextureCoord = vec2(aTextureCoord.s + offsetR, aTextureCoord.t);
    else if (aTextureCoord.t + offsetG >= 0.0 && aTextureCoord.t + offsetG <= 1.0)
        vTextureCoord = vec2(aTextureCoord.s, aTextureCoord.t + offsetG);
    else
        vTextureCoord = vec2(aTextureCoord.s, aTextureCoord.t);

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition , 1.0);
}