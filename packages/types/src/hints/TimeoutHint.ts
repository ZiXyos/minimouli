/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { HintBase, HintCategory, HintType } from './Hint.js'
import type { ms } from '../Unit.js'

interface TimeoutHint extends HintBase {
    type: HintType.TIMEOUT
    category?: HintCategory.TIMEOUT
    timeout: ms
}

export type {
    TimeoutHint
}
