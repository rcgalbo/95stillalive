/* global it */

import React from 'react'
import ReactDOM from 'react-dom'
import Windows95 from './Windows95'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Windows95 />, div)
})
