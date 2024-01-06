import React from 'react'
import renderer from 'react-test-renderer'
import App from '.'

it('renders without crashing', () => {
  const component = renderer.create(<App />)
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
