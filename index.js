const express = require('express')
const logger = require('skellington-logger')('skellington-static')

module.exports = (filePath, route) => {
  if (!filePath || !route) {
    logger.error(`filePath and route are required. Not serving static content`)
    return {}
  }

  logger.info(`serving static content from ${filePath} at ${route}`)

  return {
    init: (controller, bot, expressApp) => {
      expressApp.use(route, express.static(filePath))
    }
  }
}

