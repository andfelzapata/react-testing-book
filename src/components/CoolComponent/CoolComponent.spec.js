import React from 'react'
import CoolComponent from './index'
import ShallowRenderer from 'react-test-renderer/shallow'
import expect from 'expect'

describe('<CoolComponent />', () => {
  const renderer = new ShallowRenderer()
  renderer.render(<CoolComponent message={'Hello World'}/>)
  const result = renderer.getRenderOutput()

  it('It should be a div', () => {
    expect(result.type).toBe('div')
  })

  it('It should display a message', () => {
    expect(result.props.children).toEqual([
      <h2>Cool Component</h2>,
      'Hello World'
    ])
  })

})