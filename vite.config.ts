import * as reactPlugin from 'vite-plugin-react'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  jsx: 'react',
  plugins: [reactPlugin],
  optimizeDeps: {
    include: [
      'prismjs/components/prism-core',
      'prismjs/components/prism-clike',
      'prismjs/components/prism-javascript',
      'prismjs/themes/prism-tomorrow',
    ]
  }
}

export default config
