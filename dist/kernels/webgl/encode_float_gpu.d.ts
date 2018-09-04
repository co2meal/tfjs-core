import { GPGPUProgram } from './gpgpu_math';
export declare class EncodeFloatProgram implements GPGPUProgram {
    variableNames: string[];
    userCode: string;
    outputShape: number[];
    constructor(outputShape: number[]);
}
