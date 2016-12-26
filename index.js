const express = require('express')
const logger = require('skellington-logger')('skellington-static')

module.exports = (filePath, route) => {
  if (!filePath || !route) {
    logger.error(`filePath and route are required. Not serving static content`)
    return {}
  }

  return {
    init: (controller, bot, expressApp) => {
      if (expressApp) {
        logger.info(`serving static content from ${filePath} at ${route}`)
        expressApp.use(route, express.static(filePath))
      } else {
        logger.error(`you must configure Skellington with a port to serve static assets`)
      }
    }
  }
}

