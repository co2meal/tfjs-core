import { DataType, Rank, ShapeMap, TypedArray } from './types';
export interface TensorData {
    dataId?: DataId;
    values?: TypedArray;
}
export declare class TensorBuffer<R extends Rank> {
    dtype: DataType;
    size: number;
    shape: ShapeMap[R];
    strides: number[];
    values: TypedArray;
    constructor(shape: ShapeMap[R], dtype: DataType, values: TypedArray);
    set(value: number, ...locs: number[]): void;
    get(...locs: number[]): number;
    locToIndex(locs: number[]): number;
    indexToLoc(index: number): number[];
    readonly rank: number;
    toTensor(): Tensor<R>;
}
export interface TensorTracker {
    registerTensor(t: Tensor): void;
    disposeTensor(t: Tensor): void;
    write(dataId: DataId, values: TypedArray): void;
    read(dataId: DataId): Promise<TypedArray>;
    readSync(dataId: DataId): TypedArray;
    registerVariable(v: Variable): void;
}
export interface OpHandler {
    cast<T extends Tensor>(x: T, dtype: DataType): T;
    buffer<R extends Rank>(shape: ShapeMap[R], dtype: DataType, values?: TypedArray): TensorBuffer<R>;
    print<T extends Tensor>(x: T, verbose: boolean): void;
    reshape<R2 extends Rank>(x: Tensor, shape: ShapeMap[R2]): Tensor<R2>;
    expandDims<R2 extends Rank>(x: Tensor, axis: number): Tensor<R2>;
    cumsum<T extends Tensor>(x: Tensor, axis: number, exclusive: boolean, reverse: boolean): T;
    squeeze<T extends Tensor>(x: Tensor, axis?: number[]): T;
    clone<T extends Tensor>(x: T): T;
    tile<T extends Tensor>(x: T, reps: number[]): T;
    gather<T extends Tensor>(x: T, indices: Tensor1D, axis: number): T;
    matMul(a: Tensor2D, b: Tensor2D, transposeA: boolean, transposeB: boolean): Tensor2D;
    dot(t1: Tensor, t2: Tensor): Tensor;
    norm(x: Tensor, ord: number | 'euclidean' | 'fro', axis: number | number[], keepDims: boolean): Tensor;
    slice<R extends Rank, T extends Tensor<R>>(x: T, begin: number | number[], size?: number | number[]): T;
    reverse<T extends Tensor>(x: T, axis?: number | number[]): T;
    concat<T extends Tensor>(tensors: T[], axis: number): T;
    stack<T extends Tensor>(tensors: T[], axis: number): Tensor;
    unstack<T extends Tensor>(value: T, axis: number): Tensor[];
    pad<T extends Tensor>(x: T, paddings: Array<[number, number]>, constantValue: number): T;
    batchNormalization<R extends Rank>(x: Tensor<R>, mean: Tensor<R> | Tensor1D, variance: Tensor<R> | Tensor1D, varianceEpsilon: number, scale?: Tensor<R> | Tensor1D, offset?: Tensor<R> | Tensor1D): Tensor<R>;
    all<T extends Tensor>(x: Tensor, axis: number | number[], keepDims: boolean): T;
    any<T extends Tensor>(x: Tensor, axis: number | number[], keepDims: boolean): T;
    logSumExp<T extends Tensor>(x: Tensor, axis: number | number[], keepDims: boolean): T;
    sum<T extends Tensor>(x: Tensor, axis: number | number[], keepDims: boolean): T;
    mean<T extends Tensor>(x: Tensor, axis: number | number[], keepDims: boolean): T;
    min<T extends Tensor>(x: Tensor, axis: number | number[], keepDims: boolean): T;
    max<T extends Tensor>(x: Tensor, axis: number | number[], keepDims: boolean): T;
    argMin<T extends Tensor>(x: Tensor, axis: number): T;
    argMax<T extends Tensor>(x: Tensor, axis: number): T;
    add<T extends Tensor>(a: Tensor, b: Tensor): T;
    addStrict<T extends Tensor>(a: T, b: T): T;
    sub<T extends Tensor>(a: Tensor, b: Tensor): T;
    subStrict<T extends Tensor>(a: T, b: T): T;
    pow<T extends Tensor>(base: T, exp: Tensor): T;
    powStrict<T extends Tensor>(base: T, exp: Tensor): T;
    mul<T extends Tensor>(a: Tensor, b: Tensor): T;
    mulStrict<T extends Tensor>(a: T, b: T): T;
    div<T extends Tensor>(a: Tensor, b: Tensor): T;
    floorDiv<T extends Tensor>(a: Tensor, b: Tensor): T;
    divStrict<T extends Tensor>(a: T, b: T): T;
    mod<T extends Tensor>(a: Tensor, b: Tensor): T;
    modStrict<T extends Tensor>(a: T, b: T): T;
    minimum<T extends Tensor>(a: Tensor, b: Tensor): T;
    minimumStrict<T extends Tensor>(a: T, b: T): T;
    maximum<T extends Tensor>(a: Tensor, b: Tensor): T;
    maximumStrict<T extends Tensor>(a: T, b: T): T;
    squaredDifference<T extends Tensor>(a: Tensor, b: Tensor): T;
    squaredDifferenceStrict<T extends Tensor>(a: T, b: T): T;
    transpose<T extends Tensor>(x: T, perm?: number[]): T;
    logicalNot<T extends Tensor>(x: T): T;
    logicalAnd<T extends Tensor>(a: Tensor, b: Tensor): T;
    logicalOr<T extends Tensor>(a: Tensor, b: Tensor): T;
    logicalXor<T extends Tensor>(a: Tensor, b: Tensor): T;
    where<T extends Tensor>(condition: Tensor, a: T, b: T): T;
    notEqual<T extends Tensor>(a: Tensor, b: Tensor): T;
    notEqualStrict<T extends Tensor>(a: T, b: T): T;
    less<T extends Tensor>(a: Tensor, b: Tensor): T;
    lessStrict<T extends Tensor>(a: T, b: T): T;
    equal<T extends Tensor>(a: Tensor, b: Tensor): T;
    equalStrict<T extends Tensor>(a: T, b: T): T;
    lessEqual<T extends Tensor>(a: Tensor, b: Tensor): T;
    lessEqualStrict<T extends Tensor>(a: T, b: T): T;
    greater<T extends Tensor>(a: Tensor, b: Tensor): T;
    greaterStrict<T extends Tensor>(a: T, b: T): T;
    greaterEqual<T extends Tensor>(a: Tensor, b: Tensor): T;
    greaterEqualStrict<T extends Tensor>(a: T, b: T): T;
    neg<T extends Tensor>(x: T): T;
    ceil<T extends Tensor>(x: T): T;
    floor<T extends Tensor>(x: T): T;
    sign<T extends Tensor>(x: T): T;
    round<T extends Tensor>(x: T): T;
    exp<T extends Tensor>(x: T): T;
    expm1<T extends Tensor>(x: T): T;
    log<T extends Tensor>(x: T): T;
    log1p<T extends Tensor>(x: T): T;
    sqrt<T extends Tensor>(x: T): T;
    rsqrt<T extends Tensor>(x: T): T;
    square<T extends Tensor>(x: T): T;
    reciprocal<T extends Tensor>(x: T): T;
    abs<T extends Tensor>(x: T): T;
    clipByValue<T extends Tensor>(x: T, clipValueMin: number, clipValueMax: number): T;
    sigmoid<T extends Tensor>(x: T): T;
    logSigmoid<T extends Tensor>(x: T): T;
    softplus<T extends Tensor>(x: T): T;
    sin<T extends Tensor>(x: T): T;
    cos<T extends Tensor>(x: T): T;
    tan<T extends Tensor>(x: T): T;
    asin<T extends Tensor>(x: T): T;
    acos<T extends Tensor>(x: T): T;
    atan<T extends Tensor>(x: T): T;
    sinh<T extends Tensor>(x: T): T;
    cosh<T extends Tensor>(x: T): T;
    tanh<T extends Tensor>(x: T): T;
    asinh<T extends Tensor>(x: T): T;
    acosh<T extends Tensor>(x: T): T;
    atanh<T extends Tensor>(x: T): T;
    erf<T extends Tensor>(x: T): T;
    step<T extends Tensor>(x: T, alpha: number): T;
    relu<T extends Tensor>(x: T): T;
    elu<T extends Tensor>(x: T): T;
    selu<T extends Tensor>(x: T): T;
    leakyRelu<T extends Tensor>(x: T, alpha: number): T;
    prelu<T extends Tensor>(x: T, alpha: T): T;
    softmax<T extends Tensor>(logits: T, dim: number): T;
    image: {
        resizeBilinear<T extends Tensor3D | Tensor4D>(images: T, size: [number, number], alignCorners: boolean): T;
        resizeNearestNeighbor<T extends Tensor3D | Tensor4D>(images: T, size: [number, number], alignCorners: boolean): T;
    };
    conv1d<T extends Tensor2D | Tensor3D>(x: T, filter: Tensor3D, stride: number, pad: 'valid' | 'same' | number, dataFormat: 'NWC' | 'NCW', dilation: number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    conv2d<T extends Tensor3D | Tensor4D>(x: T, filter: Tensor4D, strides: [number, number] | number, pad: 'valid' | 'same' | number, dataFormat: 'NHWC' | 'NCHW', dilations: [number, number] | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    conv2dTranspose<T extends Tensor3D | Tensor4D>(x: T, filter: Tensor4D, outputShape: [number, number, number, number] | [number, number, number], strides: [number, number] | number, pad: 'valid' | 'same' | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    depthwiseConv2d<T extends Tensor3D | Tensor4D>(x: T, filter: Tensor4D, strides: [number, number] | number, pad: 'valid' | 'same' | number, dataFormat: 'NHWC' | 'NCHW', dilations: [number, number] | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    maxPool<T extends Tensor3D | Tensor4D>(x: T, filterSize: [number, number] | number, strides: [number, number] | number, pad: 'valid' | 'same' | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    avgPool<T extends Tensor3D | Tensor4D>(x: T, filterSize: [number, number] | number, strides: [number, number] | number, pad: 'valid' | 'same' | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    localResponseNormalization<T extends Tensor3D | Tensor4D>(x: T, depthRadius: number, bias: number, alpha: number, beta: number): T;
    unsortedSegmentSum<T extends Tensor>(x: T, segmentIds: Tensor1D, numSegments: number): T;
    batchToSpaceND<T extends Tensor>(x: T, blockShape: number[], crops: number[][]): T;
    spaceToBatchND<T extends Tensor>(x: T, blockShape: number[], paddings: number[][]): T;
}
export declare function setTensorTracker(fn: () => TensorTracker): void;
export declare function setOpHandler(handler: OpHandler): void;
export declare type DataId = object;
export declare class Tensor<R extends Rank = Rank> {
    private static nextId;
    readonly id: number;
    dataId: DataId;
    readonly shape: ShapeMap[R];
    readonly size: number;
    readonly dtype: DataType;
    readonly rankType: R;
    readonly strides: number[];
    protected constructor(shape: ShapeMap[R], dtype: DataType, values?: TypedArray, dataId?: DataId);
    static make<T extends Tensor<R>, D extends DataType = 'float32', R extends Rank = Rank>(shape: ShapeMap[R], data: TensorData, dtype?: D): T;
    flatten(): Tensor1D;
    asScalar(): Scalar;
    as1D(): Tensor1D;
    as2D(rows: number, columns: number): Tensor2D;
    as3D(rows: number, columns: number, depth: number): Tensor3D;
    as4D(rows: number, columns: number, depth: number, depth2: number): Tensor4D;
    asType<T extends this>(this: T, dtype: DataType): T;
    readonly rank: number;
    get(...locs: number[]): number;
    buffer(): TensorBuffer<R>;
    data(): Promise<TypedArray>;
    dataSync(): TypedArray;
    dispose(): void;
    private isDisposedInternal;
    readonly isDisposed: boolean;
    private throwIfDisposed;
    toFloat<T extends this>(this: T): T;
    toInt(): this;
    toBool(): this;
    print(verbose?: boolean): void;
    reshape<R2 extends Rank>(newShape: ShapeMap[R2]): Tensor<R2>;
    reshapeAs<T extends Tensor>(x: T): T;
    expandDims<R2 extends Rank>(axis?: number): Tensor<R2>;
    cumsum<T extends Tensor>(axis?: number, exclusive?: boolean, reverse?: boolean): T;
    squeeze<T extends Tensor>(axis?: number[]): T;
    clone<T extends Tensor>(this: T): T;
    toString(verbose?: boolean): string;
    tile<T extends this>(this: T, reps: number[]): T;
    gather<T extends this>(this: T, indices: Tensor1D, axis?: number): T;
    matMul(b: Tensor2D, transposeA?: boolean, transposeB?: boolean): Tensor2D;
    dot(b: Tensor): Tensor;
    norm(ord?: number | 'euclidean' | 'fro', axis?: number | number[], keepDims?: boolean): Tensor;
    slice<T extends Tensor<R>>(this: T, begin: number | number[], size?: number | number[]): T;
    reverse<T extends Tensor>(this: T, axis?: number | number[]): T;
    concat<T extends Tensor>(this: T, x: T, axis?: number): T;
    stack(x: Tensor, axis?: number): Tensor;
    unstack(x: Tensor, axis?: number): Tensor[];
    pad<T extends Tensor>(this: T, paddings: Array<[number, number]>, constantValue?: number): T;
    batchNormalization(mean: Tensor<R> | Tensor1D, variance: Tensor<R> | Tensor1D, varianceEpsilon?: number, scale?: Tensor<R> | Tensor1D, offset?: Tensor<R> | Tensor1D): Tensor<R>;
    all<T extends Tensor>(axis?: number | number[], keepDims?: boolean): T;
    any<T extends Tensor>(axis?: number | number[], keepDims?: boolean): T;
    logSumExp<T extends Tensor>(axis?: number | number[], keepDims?: boolean): T;
    sum<T extends Tensor>(axis?: number | number[], keepDims?: boolean): T;
    mean<T extends Tensor>(axis?: number | number[], keepDims?: boolean): T;
    min<T extends Tensor>(axis?: number | number[], keepDims?: boolean): T;
    max<T extends Tensor>(axis?: number | number[], keepDims?: boolean): T;
    argMin<T extends Tensor>(axis?: number): T;
    argMax<T extends Tensor>(axis?: number): T;
    cast<T extends this>(dtype: DataType): T;
    add<T extends Tensor>(x: Tensor): T;
    addStrict<T extends this>(this: T, x: T): T;
    sub<T extends Tensor>(x: Tensor): T;
    subStrict<T extends this>(this: T, x: T): T;
    pow<T extends Tensor>(this: T, exp: Tensor): T;
    powStrict(exp: Tensor): Tensor<R>;
    mul<T extends Tensor>(x: Tensor): T;
    mulStrict<T extends this>(this: T, x: T): T;
    div<T extends Tensor>(x: Tensor): T;
    floorDiv<T extends Tensor>(x: Tensor): T;
    divStrict<T extends this>(this: T, x: T): T;
    minimum<T extends Tensor>(x: Tensor): T;
    minimumStrict<T extends this>(this: T, x: T): T;
    maximum<T extends Tensor>(x: Tensor): T;
    maximumStrict<T extends this>(this: T, x: T): T;
    mod<T extends Tensor>(x: Tensor): T;
    modStrict<T extends this>(this: T, x: T): T;
    squaredDifference<T extends Tensor>(x: Tensor): T;
    squaredDifferenceStrict<T extends this>(this: T, x: T): T;
    transpose<T extends Tensor>(this: T, perm?: number[]): T;
    notEqual<T extends Tensor>(x: Tensor): T;
    notEqualStrict<T extends this>(this: T, x: T): T;
    less<T extends Tensor>(x: Tensor): T;
    lessStrict<T extends this>(this: T, x: T): T;
    equal<T extends Tensor>(x: Tensor): T;
    equalStrict<T extends this>(this: T, x: T): T;
    lessEqual<T extends Tensor>(x: Tensor): T;
    lessEqualStrict<T extends this>(this: T, x: T): T;
    greater<T extends Tensor>(x: Tensor): T;
    greaterStrict<T extends this>(this: T, x: T): T;
    greaterEqual<T extends Tensor>(x: Tensor): T;
    greaterEqualStrict<T extends this>(this: T, x: T): T;
    logicalAnd(x: Tensor): Tensor;
    logicalOr(x: Tensor): Tensor;
    logicalNot<T extends Tensor>(this: T): T;
    logicalXor(x: Tensor): Tensor;
    where(condition: Tensor, x: Tensor): Tensor;
    neg<T extends Tensor>(this: T): T;
    ceil<T extends Tensor>(this: T): T;
    floor<T extends Tensor>(this: T): T;
    sign<T extends Tensor>(this: T): T;
    exp<T extends Tensor>(this: T): T;
    expm1<T extends Tensor>(this: T): T;
    log<T extends Tensor>(this: T): T;
    log1p<T extends Tensor>(this: T): T;
    sqrt<T extends Tensor>(this: T): T;
    rsqrt<T extends Tensor>(this: T): T;
    square<T extends Tensor>(this: T): T;
    reciprocal<T extends Tensor>(this: T): T;
    abs<T extends Tensor>(this: T): T;
    clipByValue(min: number, max: number): Tensor<R>;
    relu<T extends Tensor>(this: T): T;
    elu<T extends Tensor>(this: T): T;
    selu<T extends Tensor>(this: T): T;
    leakyRelu(alpha?: number): Tensor<R>;
    prelu(alpha: Tensor<R>): Tensor<R>;
    sigmoid<T extends Tensor>(this: T): T;
    logSigmoid<T extends Tensor>(this: T): T;
    softplus<T extends Tensor>(this: T): T;
    sin<T extends Tensor>(this: T): T;
    cos<T extends Tensor>(this: T): T;
    tan<T extends Tensor>(this: T): T;
    asin<T extends Tensor>(this: T): T;
    acos<T extends Tensor>(this: T): T;
    atan<T extends Tensor>(this: T): T;
    sinh<T extends Tensor>(this: T): T;
    cosh<T extends Tensor>(this: T): T;
    tanh<T extends Tensor>(this: T): T;
    asinh<T extends Tensor>(this: T): T;
    acosh<T extends Tensor>(this: T): T;
    atanh<T extends Tensor>(this: T): T;
    erf<T extends Tensor>(this: T): T;
    round<T extends Tensor>(this: T): T;
    step<T extends Tensor>(this: T, alpha?: number): T;
    softmax<T extends this>(this: T, dim?: number): T;
    resizeBilinear<T extends Tensor3D | Tensor4D>(this: T, newShape2D: [number, number], alignCorners?: boolean): T;
    resizeNearestNeighbor<T extends Tensor3D | Tensor4D>(this: T, newShape2D: [number, number], alignCorners?: boolean): T;
    conv1d<T extends Tensor2D | Tensor3D>(this: T, filter: Tensor3D, stride: number, pad: 'valid' | 'same' | number, dataFormat?: 'NWC' | 'NCW', dilation?: number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    conv2d<T extends Tensor3D | Tensor4D>(this: T, filter: Tensor4D, strides: [number, number] | number, pad: 'valid' | 'same' | number, dataFormat?: 'NHWC' | 'NCHW', dilations?: [number, number] | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    conv2dTranspose<T extends Tensor3D | Tensor4D>(this: T, filter: Tensor4D, outputShape: [number, number, number, number] | [number, number, number], strides: [number, number] | number, pad: 'valid' | 'same' | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    depthwiseConv2D<T extends Tensor3D | Tensor4D>(this: T, filter: Tensor4D, strides: [number, number] | number, pad: 'valid' | 'same' | number, dataFormat?: 'NHWC' | 'NCHW', dilations?: [number, number] | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    avgPool<T extends Tensor3D | Tensor4D>(this: T, filterSize: [number, number] | number, strides: [number, number] | number, pad: 'valid' | 'same' | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    maxPool<T extends Tensor3D | Tensor4D>(this: T, filterSize: [number, number] | number, strides: [number, number] | number, pad: 'valid' | 'same' | number, dimRoundingMode?: 'floor' | 'round' | 'ceil'): T;
    localResponseNormalization<T extends Tensor3D | Tensor4D>(this: T, radius?: number, bias?: number, alpha?: number, beta?: number): T;
    variable(trainable?: boolean, name?: string, dtype?: DataType): Variable<R>;
    unsortedSegmentSum<T extends Tensor>(this: T, segmentIds: Tensor1D, numSegments: number): T;
    batchToSpaceND<T extends Tensor>(this: T, blockShape: number[], crops: number[][]): T;
    spaceToBatchND<T extends Tensor>(this: T, blockShape: number[], paddings: number[][]): T;
}
export declare type Scalar = Tensor<Rank.R0>;
export declare type Tensor1D = Tensor<Rank.R1>;
export declare type Tensor2D = Tensor<Rank.R2>;
export declare type Tensor3D = Tensor<Rank.R3>;
export declare type Tensor4D = Tensor<Rank.R4>;
export declare type Tensor5D = Tensor<Rank.R5>;
export declare type Tensor6D = Tensor<Rank.R6>;
export declare class Variable<R extends Rank = Rank> extends Tensor<R> {
    trainable: boolean;
    private static nextVarId;
    name: string;
    private constructor();
    static variable<R extends Rank>(initialValue: Tensor<R>, trainable?: boolean, name?: string, dtype?: DataType): Variable<R>;
    assign(newValue: Tensor<R>): void;
}
declare const variable: typeof Variable.variable;
export { variable };
