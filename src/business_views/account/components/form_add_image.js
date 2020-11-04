import React, { useContext, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Context } from '../../../store/context';

const FormAddImage = () => {

    let history = useHistory();
    
    const { id } = useParams()

    const [files, setFiles] = useState(null)

    const { actions } = useContext(Context)
    
    const onChange = (e) => {
        setFiles({[e.target.name]:e.target.files})
    }

    const addImage = (e) => { 
        e.preventDefault();
        const formData = new FormData()
        formData.append('product_image', files[0])

        actions.uploadImage(formData, id)

        history.push('/summary_business')
    }
    return (
                <form className="form-group " onSubmit={addImage}>
                <label>Imagen de tu producto</label>
                <input
                    type="file"
                    className="form-control-file"
                    name='img'
                    onChange={onChange}
                    required
                />
                <button>Upload</button>
            </form>

    )
}

export default FormAddImage
