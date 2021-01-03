/// <reference path="../../../../cli/types/cypress.d.ts" />

import * as serverCt from '@packages/server-ct'
import api from './run'

const DEFAULT_BROWSER_NAME = 'chrome'

// 1. create new express routes for serving top
// 2. boot websocket server
// 3. open browser to runner-ct entrypoint (top)

type Options = Cypress.PluginConfigOptions & Cypress.InternalConfigOptions

// No sure on the complete interface for `options`. It at least contains the union of the above two interfaces.
export const run = (options: Options) => {
  // we are in run mode
  if (options.runProject) {
    // set options.browser to chrome unless already set
    options.browser = options.browser || DEFAULT_BROWSER_NAME
    api.ready(options)
  }

  // @ts-ignore - types are incomplete...
  return serverCt.start(options.projectRoot, options)
}