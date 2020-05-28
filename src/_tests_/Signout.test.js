import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import Signout from '../components/Signout'

describe('testing for the Signout component', ()=>{

    test ('Renders out starting text',()=>{
        const {container} = render(<Signout/>)
        expect(container.textContent).toContain("logout")
    })

    test('Clicking button makes user signout',()=>{
        const  {getByTestId, container} = render(<Signout/>)
        const button = getByTestId("signout-button")

        expect(container.textContent).toContain("user still logged in")
        fireEvent.click(button)
        expect(container.textContent).toContain("user signed out")
    })
})