declare module "@vue/runtime-core" {
    export interface GlobalComponents {
        kButton: typeof import('vxx-ui').Button
        kInput: typeof import('vxx-ui').Input
        kUpload: typeof import('vxx-ui').Upload
        kShake: typeof import('vxx-ui').Shake
        kLink: typeof import('vxx-ui').Link
    }
}
export { }