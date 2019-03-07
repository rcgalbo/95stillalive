const LOG_PREFIX = '[WINDOWS95]'

const log = {
  error: (msg) => {
    console.error(LOG_PREFIX + ' ' + 'Error: ' + msg)
  }
}

export default log
