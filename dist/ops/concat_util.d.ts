export declare function assertParams(aShape: number[], bShape: number[], axis: number): void;
export declare function computeOutShape(shapes: number[][], axis: number): number[];
export declare function computeGradientSliceShapes(aShape: [number, number], bShape: [number, number]): {
    aBegin: [number, number];
    aSize: [number, number];
    bBegin: [number, number];
    bSize: [number, number];
};
