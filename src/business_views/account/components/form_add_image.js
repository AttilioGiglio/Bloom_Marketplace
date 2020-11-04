import React, { useContext, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { Context } from '../../../store/context';

const FormAddImage = () => {

    let history = useHistory();
    
    const { id } = useParams()

    console.log(id)

    const [files, setFiles] = useState(null)

    const { actions } = useContext(Context)
    
    const addImage = (e) => { 
        e.preventDefault();
        
        let formData = new FormData();

        formData.append('product_image', files[0]);

        actions.uploadImage(formData, id)

        // history.push('/summary_business')
    }
    return (
                <form className="form-group " onSubmit={addImage}>
                <label>Imagen de tu producto</label>
                <input
                    type="file"
                    className="form-control-file"
                    name='img'
                    onChange={e => setFiles(e.target.files)}
                    required
                />
                <button>Upload</button>
            </form>

    )
}

export default FormAddImage
