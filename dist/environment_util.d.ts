export interface Features {
    'DEBUG'?: boolean;
    'IS_BROWSER'?: boolean;
    'IS_NODE'?: boolean;
    'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_VERSION'?: number;
    'WEBGL_DISJOINT_QUERY_TIMER_EXTENSION_RELIABLE'?: boolean;
    'WEBGL_VERSION'?: number;
    'HAS_WEBGL'?: boolean;
    'WEBGL_RENDER_FLOAT32_ENABLED'?: boolean;
    'WEBGL_DOWNLOAD_FLOAT_ENABLED'?: boolean;
    'WEBGL_GET_BUFFER_SUB_DATA_ASYNC_EXTENSION_ENABLED'?: boolean;
    'BACKEND'?: string;
    'TEST_EPSILON'?: number;
    'IS_CHROME'?: boolean;
    'IS_TEST'?: boolean;
}
export declare enum Type {
    NUMBER = 0,
    BOOLEAN = 1,
    STRING = 2
}
export declare const URL_PROPERTIES: URLProperty[];
export interface URLProperty {
    name: keyof Features;
    type: Type;
}
export declare function isWebGLVersionEnabled(webGLVersion: 1 | 2, isBrowser: boolean): boolean;
export declare function getWebGLDisjointQueryTimerVersion(webGLVersion: number, isBrowser: boolean): number;
export declare function isRenderToFloatTextureEnabled(webGLVersion: number, isBrowser: boolean): boolean;
export declare function isDownloadFloatTextureEnabled(webGLVersion: number, isBrowser: boolean): boolean;
export declare function isWebGLGetBufferSubDataAsyncExtensionEnabled(webGLVersion: number, isBrowser: boolean): boolean;
export declare function isChrome(): boolean;
export declare function getFeaturesFromURL(): Features;
