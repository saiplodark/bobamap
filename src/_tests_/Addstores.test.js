import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import AddStores from '../components/Addstores'

describe('testing for the AddStores component', ()=>{

    test ('Renders out starting text',()=>{
        const {container} = render(<AddStores/>)
        expect(container.textContent).toContain("add")
    })

    test('user input store name',()=>{
        const  {getByTestId} = render(<AddStores/>)
        const input = getByTestId("input-name")
        fireEvent.change(input, { target: { value: 'boba' } })
        expect(input.value).toBe('boba')
    })
})


//test id at input which one I want to test