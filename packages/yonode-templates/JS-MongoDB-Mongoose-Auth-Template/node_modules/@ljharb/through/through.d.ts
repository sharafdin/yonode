/// <reference types="node" />

import stream from 'stream';

export interface ThroughStream extends stream.Transform {
    autoDestroy: boolean;
    paused: boolean;
    readable: boolean;
    writable: boolean;
    destroy: () => ThroughStream | undefined;
    end: (data: unknown) => ThroughStream | undefined;
    pause: () => ThroughStream | undefined;
    push: (chunk: unknown) => ThroughStream;
    queue: (chunk: unknown) => ThroughStream;
    resume: () => ThroughStream;
}

declare function through(
    write?: (data: unknown) => void,
    end?: () => void,
    opts?: { autoDestroy?: boolean },
): ThroughStream

export = through;