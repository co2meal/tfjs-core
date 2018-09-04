/// <reference types="webgl2" />
export interface WebGL2DisjointQueryTimerExtension {
    TIME_ELAPSED_EXT: number;
    GPU_DISJOINT_EXT: number;
}
export interface WebGL1DisjointQueryTimerExtension {
    TIME_ELAPSED_EXT: number;
    QUERY_RESULT_AVAILABLE_EXT: number;
    GPU_DISJOINT_EXT: number;
    QUERY_RESULT_EXT: number;
    createQueryEXT: () => {};
    beginQueryEXT: (ext: number, query: WebGLQuery) => void;
    endQueryEXT: (ext: number) => void;
    deleteQueryEXT: (query: WebGLQuery) => void;
    isQueryEXT: (query: WebGLQuery) => boolean;
    getQueryObjectEXT: (query: WebGLQuery, queryResultAvailableExt: number) => number;
}
export interface WebGLContextAttributes {
    alpha?: boolean;
    antialias?: boolean;
    premultipliedAlpha?: boolean;
    preserveDrawingBuffer?: boolean;
    depth?: boolean;
    stencil?: boolean;
    failIfMajorPerformanceCaveat?: boolean;
}
