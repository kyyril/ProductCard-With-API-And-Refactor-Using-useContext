/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';

const productEdit = ({product, onEditProduct, onCancelEdit}) => {

  const initialState = {
    nama : product.nama,
    deskripsi : product.deskripsi,
    imageURL : product.imageURL
  }

  const [formData,setFormData] = useState(initialState)
  const {nama,deskripsi,imageURL} = formData;
  const handleChangeEdit = (e) => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }

  const hanldeSubmit = (e) => {
    e.preventDefault()
    onEditProduct(product.id, formData)
  }
  const handleCancelEdit = () => {
    onCancelEdit()
  }

  return (
    <div className='product-edit'>
      <div className='edit-title'>Edit Product</div>
      <form onSubmit={hanldeSubmit}>
        <div className='form-group'>
          <input onChange={handleChangeEdit}
          name='nama' value={nama} type="text" className='edit-input-text' placeholder='nama'/>
        </div>
        <div className='form-group'>
          <input onChange={handleChangeEdit}
          name='deskripsi' value={deskripsi} type="text" className='edit-input-text' placeholder='deskripsi'/>
        </div>
        <div className='form-group'>
          <input onChange={handleChangeEdit}
          name='imageURL' value={imageURL} type="text" className='edit-input-text' placeholder='image url'/>
        </div>
        <input type="submit" className='edit-input-submit save' value='save'/>
        <button className='edit-input-submit cancel'
        onClick={handleCancelEdit}>cancel</button>
      </form>
    </div>
  )
}

export default productEdit;