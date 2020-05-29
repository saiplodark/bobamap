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
    test('user input store img',()=>{
        const  {getByTestId} = render(<AddStores/>)
        const input = getByTestId("input-img")
        fireEvent.change(input, { target: { value: 'asd' } })
        expect(input.value).toBe('asd')
    })
    test('user input store address',()=>{
        const  {getByTestId} = render(<AddStores/>)
        const input = getByTestId("input-address")
        fireEvent.change(input, { target: { value: 'AZ12345' } })
        expect(input.value).toBe('AZ12345')
    })
    test('user input store comment',()=>{
        const  {getByTestId} = render(<AddStores/>)
        const input = getByTestId("input-comment")
        fireEvent.change(input, { target: { value: 'good drink' } })
        expect(input.value).toBe('good drink')
    })
})


//test id at input which one I want to test