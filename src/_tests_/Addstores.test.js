import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import AddStores from '../components/Addstores'

describe('testing for the AddStores component', ()=>{

    test ('Renders out starting text',()=>{
        const {container} = render(<AddStores/>)
        expect(container.textContent).toContain("add")
    })

    test('Clicking button makes user addStores',()=>{
        const  {getByTestId, container} = render(<AddStores/>)
        const button = getByTestId("add_button")

        expect(container.textContent).toContain("")
        fireEvent.change(input, { target: { value: '$23.0' } })
        expect(container.textContent).toContain("what typed")
    })
})