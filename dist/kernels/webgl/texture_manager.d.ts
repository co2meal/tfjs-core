import { GPGPUContext } from './gpgpu_context';
import { TextureUsage } from './tex_util';
export declare class TextureManager {
    private gpgpu;
    private numUsedTextures;
    private numFreeTextures;
    private freeTextures;
    private logEnabled;
    private usedTextures;
    constructor(gpgpu: GPGPUContext);
    acquireTexture(shapeRC: [number, number], usage: TextureUsage): WebGLTexture;
    releaseTexture(texture: WebGLTexture, shape: [number, number], logicalTexType: TextureUsage): void;
    private log;
    getNumUsedTextures(): number;
    getNumFreeTextures(): number;
    dispose(): void;
}
