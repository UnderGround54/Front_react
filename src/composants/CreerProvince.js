import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const url_api =  'http://localhost:8000/api/provinces'

const CreerProvince = () => {

    const [libelle_prov, setLibelle] = useState('')
    const [code_prov, setCode] = useState('')
    const navigate =  useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(url_api, {
            libelle_prov:libelle_prov,
            code_prov:code_prov
        })
        navigate('/')
    }

    return (
        <div>
            <h3>Creer un province</h3>
            <form onSubmit={store}>
                <div className='mb-3'>
                    <label className='form-label'>Libelle</label>
                    <input type="text" value={libelle_prov} onChange={(e)=> setLibelle(e.target.value)} className='form-control' />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Code</label>
                    <input type="text" value={code_prov} onChange={(e)=> setCode(e.target.value)} className='form-control' />
                </div>
                <button type='submit' className='btn btn-success'>Creer</button>
            </form>
        </div>
    )
}

export default CreerProvince