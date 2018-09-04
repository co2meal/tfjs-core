/// <reference types="webgl2" />
/// <reference types="webgl-ext" />
import { WebGL1DisjointQueryTimerExtension, WebGL2DisjointQueryTimerExtension } from './webgl_types';
export interface FenceContext {
    query: WebGLQuery | WebGLSync;
    isFencePassed(): boolean;
}
export declare class GPGPUContext {
    gl: WebGLRenderingContext;
    textureFloatExtension: {};
    textureHalfFloatExtension: {};
    colorBufferFloatExtension: {};
    colorBufferHalfFloatExtension: {};
    getBufferSubDataAsyncExtension: {};
    loseContextExtension: WebGLLoseContext;
    disjointQueryTimerExtension: WebGL2DisjointQueryTimerExtension | WebGL1DisjointQueryTimerExtension;
    vertexBuffer: WebGLBuffer;
    indexBuffer: WebGLBuffer;
    framebuffer: WebGLFramebuffer;
    outputTexture: WebGLTexture | null;
    program: WebGLProgram | null;
    private disposed;
    private autoDebugValidate;
    private disjoint;
    private textureConfig;
    constructor(gl?: WebGLRenderingContext);
    dispose(): void;
    enableAutomaticDebugValidation(enabled: boolean): void;
    createFloat32MatrixTexture(rows: number, columns: number): WebGLTexture;
    createFloat16MatrixTexture(rows: number, columns: number): WebGLTexture;
    createUnsignedBytesMatrixTexture(rows: number, columns: number): WebGLTexture;
    uploadPixelDataToTexture(texture: WebGLTexture, pixels: ImageData | HTMLImageElement | HTMLCanvasElement): void;
    createPackedMatrixTexture(rows: number, columns: number): WebGLTexture;
    deleteMatrixTexture(texture: WebGLTexture): void;
    uploadMatrixToTexture(texture: WebGLTexture, rows: number, columns: number, matrix: Float32Array): void;
    uploadMatrixToPackedTexture(texture: WebGLTexture, rows: number, columns: number, matrix: Float32Array): void;
    downloadFloat32MatrixFromOutputTexture(texture: WebGLTexture, rows: number, columns: number): Float32Array;
    downloadByteEncodedFloatMatrixFromOutputTexture(texture: WebGLTexture, rows: number, columns: number): Float32Array;
    downloadFloat32MatrixFromBuffer(buffer: WebGLBuffer, rows: number, columns: number): Float32Array;
    maybeCreateBufferFromTexture(texture: WebGLTexture, rows: number, columns: number): WebGLBuffer | WebGLTexture;
    createAndWaitForFence(): Promise<void>;
    private createFence;
    downloadMatrixFromPackedTexture(texture: WebGLTexture, rows: number, columns: number): Float32Array;
    private vertexAttrsAreBound;
    createProgram(fragmentShaderSource: string): WebGLProgram;
    deleteProgram(program: WebGLProgram): void;
    setProgram(program: WebGLProgram | null): void;
    getUniformLocation(program: WebGLProgram, uniformName: string, shouldThrow?: boolean): WebGLUniformLocation;
    getAttributeLocation(program: WebGLProgram, attribute: string): number;
    getUniformLocationNoThrow(program: WebGLProgram, uniformName: string): WebGLUniformLocation;
    setInputMatrixTexture(inputMatrixTexture: WebGLTexture, uniformLocation: WebGLUniformLocation, textureUnit: number): void;
    setOutputMatrixTexture(outputMatrixTexture: WebGLTexture, rows: number, columns: number): void;
    setOutputPackedMatrixTexture(outputPackedMatrixTexture: WebGLTexture, rows: number, columns: number): void;
    setOutputMatrixWriteRegion(startRow: number, numRows: number, startColumn: number, numColumns: number): void;
    setOutputPackedMatrixWriteRegion(startRow: number, numRows: number, startColumn: number, numColumns: number): void;
    debugValidate(): void;
    executeProgram(): void;
    blockUntilAllProgramsCompleted(): void;
    private getQueryTimerExtension;
    private getQueryTimerExtensionWebGL2;
    private getQueryTimerExtensionWebGL1;
    beginQuery(): WebGLQuery;
    endQuery(): void;
    waitForQueryAndGetTime(query: WebGLQuery): Promise<number>;
    private getQueryTime;
    private isQueryAvailable;
    pollFence(fenceContext: FenceContext): Promise<void>;
    private itemsToPoll;
    pollItems(): void;
    private addItemToPoll;
    private bindTextureToFrameBuffer;
    private unbindTextureToFrameBuffer;
    private downloadMatrixDriver;
    private setOutputMatrixTextureDriver;
    private setOutputMatrixWriteRegionDriver;
    private throwIfDisposed;
    private throwIfNoProgram;
}
export declare function binSearchLastTrue(arr: Array<() => boolean>): number;
