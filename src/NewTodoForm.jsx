import { useState } from 'react'


export function NewTodoForm({onSubmit}){
    const [newitem, setNewItem] = useState('')
    function handlersubmit(e){
        e.preventDefault()
        if (newitem==="") return

        onSubmit(newitem)
      }



    return <form onSubmit={handlersubmit} className='new-item-form'>
    <div className='form-row'>
      <label htmlFor="item">
        New Item
      </label>
      <input  value={newitem} onChange={e=> setNewItem(e.target.value)} type="text" id='item' />
    </div>
    <button className='btn'>Add</button>
  </form>
}