/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import type { Stream, ReadableContent } from './Stream.js'

enum ReadableMode {
    NULL = 0,
    FLOW = 1,
    PAUSE = 2
}

interface Readable extends Stream {

    /**
     * Returns if the stream is readable or not.
     */
    get readable(): boolean

    /**
     * Reads data from the stream.
     */
    read(length: number): ReadableContent

    /**
     * Reads the remaining contents of the stream.
     */
    getContents(): Promise<{
        contents: ReadableContent
        error: string | undefined
    }>

    /**
     * Returns the internal reading state.
     */
    get mode(): ReadableMode

}

export {
    ReadableMode
}
export type {
    Readable
}
