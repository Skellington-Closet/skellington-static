'use strict'

const chai = require('chai')
const expect = chai.expect
const sinon = require('sinon')
const proxyquire = require('proxyquire').noCallThru()

chai.use(require('sinon-chai'))

describe('static', function () {
  let skellingtonLoggerMock
  let loggerMock
  let expressMock
  let expressAppMock
  let plugin

  beforeEach(function () {
    loggerMock = {
      info: sinon.stub(),
      error: sinon.stub()
    }

    skellingtonLoggerMock = sinon.stub().returns(loggerMock)

    expressMock = {
      static: sinon.stub().returns('static')
    }

    expressAppMock = {
      use: sinon.stub()
    }

    plugin = proxyquire('../index', {
      'express': expressMock,
      'skellington-logger': skellingtonLoggerMock
    })
  })

  it('return an init function to serve the static files', function () {
    const result = plugin('filePath', 'route')
    expect(result.init).to.exist

    result.init('controller', 'bot', expressAppMock)

    expect(expressMock.static).to.have.been.calledWith('filePath')
    expect(expressAppMock.use).to.have.been.calledWith('route', 'static')
  })

  it('should log an error if filePath is missing', function () {
    const result = plugin(null, 'route')
    expect(result.init).not.to.exist
    expect(loggerMock.error).to.have.been.called
  })

  it('should log an error if route is missing', function () {
    const result = plugin('filePath')
    expect(result.init).not.to.exist
    expect(loggerMock.error).to.have.been.called
  })

  it('should log an error if no express app is passed', function () {
    const result = plugin('filePath', 'route')
    expect(result.init).to.exist

    result.init('controller', 'bot')
    expect(loggerMock.error).to.have.been.called
    expect(expressMock.static).not.to.have.been.called
    expect(expressAppMock.use).not.to.have.been.called
  })
})
