/**
 * Copyright (c) Minimouli
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { Channel } from '@minimouli/ipc'
import { Tree } from './tree/tree.js'
import type { IssuedEvents, ReceivedEvents } from './types/events/framework.event.type.js'

const channel = Channel.fromCurrentProcess<IssuedEvents, ReceivedEvents>()

channel.on('init', () => {
    channel.emit('init:success')
})

channel.on('plan', () => {
    const plans = Tree.currentContext().suites.map((suite) => suite.plan())
    channel.emit('plan:result', plans)
})

channel.on('run', () => {

    const suites = Tree.currentContext().suites

    void (async () => {
        await Promise.all(suites.map((suite) => suite.execute()))
        const results = suites.map((suite) => suite.synthesize())

        channel.emit('run:result', results)
    })()
})

export * from './blocks/after-all.block.js'
export * from './blocks/after-each.block.js'
export * from './blocks/before-all.block.js'
export * from './blocks/before-each.block.js'
export * from './blocks/expect.block.js'
export * from './blocks/sleep.block.js'
export * from './blocks/suite.block.js'
export * from './blocks/test.block.js'
