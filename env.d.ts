declare module '__STATIC_CONTENT_MANIFEST' {
  const manifest: string
  export default manifest
}

declare module '*.bin' {
  const content: ArrayBuffer
  export default content
}
