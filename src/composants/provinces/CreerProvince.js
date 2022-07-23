import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const url_api =  'http://localhost:8000/api/provinces'

const CreerProvince = () => {

    const [libelle_prov, setLibelle] = useState('')
    const [code_prov, setCode] = useState('')
    const navigate =  useNavigate()

    const store = async (e) => {
        e.preventDefault()
        const res = await axios.post(url_api, {
            libelle_prov:libelle_prov,
            code_prov:code_prov
        })
        if(res.data.message){
            console.log(res.data.message);
        }
        navigate('/')
    }

    return (
        <div className='container col-md-6'>
            <div className='card'>
                <div className='card-header'>
                    <h3>Creer un province</h3>
                </div>
                <div className='card-body'>
                    <form onSubmit={store}>
                        <div className='mb-6'>
                            <label className='form-label'>Libelle</label>
                            <input type="text" onChange={(e)=> setLibelle(e.target.value)} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Code</label>
                            <input type="text" onChange={(e)=> setCode(e.target.value)} className='form-control' />
                        </div>
                        <button type='submit' className='btn btn-success'>Creer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreerProvince