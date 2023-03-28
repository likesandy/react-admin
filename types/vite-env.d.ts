/// <reference types="vite/client" />

interface ImportMeta {
  readonly env: ImportMetaEnv
}

interface ViteEnv {
  VITE_TEST1: string
  VITE_TEST2: boolean
  VITE_TEST3: number
}

interface ImportMetaEnv extends ViteEnv {}
