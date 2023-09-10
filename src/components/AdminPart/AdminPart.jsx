import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMaster, setInputMasterNameValue, setImage } from '../../redux/adminSlice'

const AdminPart = () => {
    const dispatch = useDispatch()
    const { inputMasterNameValue, image } = useSelector(state => state.admin)


    const nameInputRef = React.useRef()
    const imageRef = React.useRef()
    const formRef = React.useRef()



    const transformFile = (file) => {
        const reader = new FileReader()

        if (file) {
            reader.readAsDataURL(file)
            reader.onloadend = () => {
                dispatch(setImage(reader.result))
            }
        } else {
            dispatch(setImage(''))
        }
    }
    const onChangeName = () => {
        dispatch(setInputMasterNameValue(nameInputRef.current.value))
    }

    const onSelectImage = () => {
        const file = imageRef.current.files[0]
        transformFile(file)
    }

    const onAddClick = (e) => {
        e.preventDefault()
        const name = inputMasterNameValue
        dispatch(setInputMasterNameValue(''))
        dispatch(setImage(''))
        imageRef.current.value = ''

        dispatch(addMaster({ name, img: image }))
        window.alert('Нового майстра додано')
    }

    return (

        <div className='addmaster'>
            <div className="addmaster__title">Створити нового майстра</div>
            <div className="addmaster__body">
                <form ref={formRef} action="" className="addmaster__form">
                    <label htmlFor="name" className="addmaster__input-label"></label>
                    <input ref={nameInputRef} onChange={onChangeName} value={inputMasterNameValue} name='name' type="text" placeholder="Ім'я" className='addmaster__input addmaster__input-text' />
                    <label htmlFor="image" className="addmaster__input-label">оберить фото</label>
                    <input ref={imageRef} onChange={onSelectImage} name='image' type="file" className='addmaster__input addmaster__input-photo' />
                </form>
                <div className="addmaster__preview">
                    {image ? <img src={image} alt="" /> : <p>No image selected</p>}
                </div>
            </div>
            <button onClick={(e) => onAddClick(e)} className={"addmaster__add-btn btn" + ((inputMasterNameValue.length < 1 || image.length < 1) ? " _blocked" : "")}>Додати майстра</button>
        </div>
    )
}

export default AdminPart