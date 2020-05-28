import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import Showstores from '../components/Showstores'

describe('testing for the Showstores component', ()=>{

    test ('Renders out starting text',()=>{
        const {container} = render(<Showstores/>)
        expect(container.textContent).toContain("Edit Comment")
    })

    test('user edit store comment',()=>{
        const  {getByTestId} = render(<Showstores/>)
        const input = getByTestId("input-comment")
        // expect(input.value).toBe('')
        fireEvent.change(input, { target: { value: 'newC' } })
        expect(input.value).toBe('newC')
    })
})
