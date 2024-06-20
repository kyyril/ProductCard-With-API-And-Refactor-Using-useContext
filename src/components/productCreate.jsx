// eslint-disable-next-line no-unused-vars
import React,{useState} from 'react'

const productCreate = ({ProductCreate}) => {
    const initialState = {
        nama: '',
        deskripsi: '',
        imageURL: ''
    };

    const [showForm, setShowForm] = useState(false)
    const [formData, setFormData] = useState(initialState)

    const handleShow = () => {
        setShowForm(!showForm)//setShowForm menjadi nilai kebalikan dari showForm
    }

    const {nama,deskripsi,imageURL} = formData;
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        ProductCreate(formData) //kirim ke app
        setFormData(initialState);
    }

  return (
    <div className='product-create'>
        <div className='toggle-add'>
            <button className='edit-input-submit add-toggle' onClick={handleShow}>
                {showForm ? "Close" : "Add Product"}
            </button>
        </div>
        {showForm && (
        <form className="form-group" onSubmit={handleSubmit}>
            <div className='form-add-title'>Add Product</div>
                <div className='form'>
                    <input type="text" className='add-input-text' name='nama' value={nama} onChange = {handleChange} placeholder='Nama'/>
                    <input type="text" className='add-input-text' name='deskripsi' value={deskripsi} onChange = {handleChange} placeholder='Deskripsi'/>
                    <input type="text" className='add-input-text' name='imageURL' value={imageURL} onChange = {handleChange} placeholder='Image URL'/>
                </div>
                <input type="submit" className='edit-input-submit add' />
        </form>
        )}
        </div>

        )
    }

export default productCreate