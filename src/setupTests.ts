import '@testing-library/jest-dom'
import '@testing-library/user-event'
import 'cross-fetch/polyfill'

// mock window.console functions
window.console.trace = jest.fn()
window.console.debug = jest.fn()
window.console.info = jest.fn()
window.console.warn = jest.fn()
window.console.error = jest.fn()
window.console.log = jest.fn()
