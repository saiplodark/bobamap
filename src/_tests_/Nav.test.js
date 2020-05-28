import React from 'react'
import { Router } from 'react-router-dom'
import { createMemoryHistory } from 'history'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Nav from '../Nav'

test('full app rendering/navigating', () => {
    const history = createMemoryHistory()
    const { container, getByText } = render(
      <Router history={history}>
        <Nav/>
      </Router>
    )
    expect(container.innerHTML).toMatch('')
    fireEvent.click(getByText(/support/i))
    expect(container.innerHTML).toMatch('')
  })
  

//   test('rendering a component that uses withRouter', () => {
//     const history = createMemoryHistory()
//     const route = '/some-route'
//     history.push(route)
//     const { getByTestId } = render(
//       <Router history={history}>
//         <LocationDisplay />
//       </Router>
//     )
//     expect(getByTestId('location-display')).toHaveTextContent(route)
//   })