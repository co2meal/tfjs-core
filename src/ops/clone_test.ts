/**
 * @license
 * Copyright 2017 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */

import * as tf from '../index';
import {describeWithFlags} from '../jasmine_util';
// tslint:disable-next-line:max-line-length
import {ALL_ENVS, expectArraysClose} from '../test_util';

describeWithFlags('clone', ALL_ENVS, () => {
  it('returns a tensor with the same shape and value', () => {
    const a = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 3]);
    const aPrime = tf.clone(a);
    expect(aPrime.shape).toEqual(a.shape);
    expectArraysClose(aPrime, a);
  });

  it('accepts a tensor-like object', () => {
    const res = tf.clone([[1, 2, 3], [4, 5, 6]]);
    expect(res.dtype).toBe('float32');
    expect(res.shape).toEqual([2, 3]);
    expectArraysClose(res, [1, 2, 3, 4, 5, 6]);
  });
});
