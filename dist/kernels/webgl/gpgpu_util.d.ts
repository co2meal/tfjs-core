export declare function getWebGLContextAttributes(): WebGLContextAttributes;
export interface TextureConfig {
    internalFormatFloat: number;
    textureFormatFloat: number;
    internalFormatHalfFloat: number;
    internalFormatPackedFloat: number;
    downloadTextureFormat: number;
    downloadUnpackNumChannels: number;
    defaultNumChannels: number;
    textureTypeHalfFloat: number;
}
export declare function createWebGLContext(canvas?: HTMLCanvasElement): WebGLRenderingContext;
export declare function createVertexShader(gl: WebGLRenderingContext): WebGLShader;
export declare function createVertexBuffer(gl: WebGLRenderingContext): WebGLBuffer;
export declare function createIndexBuffer(gl: WebGLRenderingContext): WebGLBuffer;
export declare function getTextureConfig(gl: WebGLRenderingContext, textureHalfFloatExtension?: any): TextureConfig;
export declare function createFloat32MatrixTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLTexture;
export declare function createFloat16MatrixTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLTexture;
export declare function createUnsignedBytesMatrixTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLTexture;
export declare function createPackedMatrixTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): WebGLTexture;
export declare function bindVertexProgramAttributeStreams(gl: WebGLRenderingContext, program: WebGLProgram, vertexBuffer: WebGLBuffer): boolean;
export declare function uploadPixelDataToTexture(gl: WebGLRenderingContext, texture: WebGLTexture, pixels: ImageData | HTMLImageElement | HTMLCanvasElement | HTMLVideoElement): void;
export declare function uploadMatrixToTexture(gl: WebGLRenderingContext, texture: WebGLTexture, rows: number, columns: number, matrix: Float32Array, numChannels: number, textureConfig: TextureConfig): void;
export declare function uploadMatrixToPackedTexture(gl: WebGLRenderingContext, texture: WebGLTexture, rows: number, columns: number, matrix: Float32Array, textureConfig: TextureConfig): void;
export declare function downloadMatrixFromOutputTextureAsync(gl: WebGLRenderingContext, getBufferSubDataAsyncExtension: any, rows: number, columns: number, textureConfig: TextureConfig): Promise<Float32Array>;
export declare function downloadFloat32MatrixFromOutputTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): Float32Array;
export declare function downloadByteEncodedFloatMatrixFromOutputTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): Float32Array;
export declare function downloadMatrixFromPackedOutputTexture(gl: WebGLRenderingContext, rows: number, columns: number, textureConfig: TextureConfig): Float32Array;
