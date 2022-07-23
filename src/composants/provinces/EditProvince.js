import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'

const url_api =  'http://localhost:8000/api/provinces'

const EditProvince = () => {

    const [libelle_prov, setLibelle] = useState('')
    const [code_prov, setCode] = useState('')
    const navigate =  useNavigate()

    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const res = await axios.put(`${url_api}/${id}`, {
            libelle_prov:libelle_prov,
            code_prov:code_prov
        })
        if(res.data.message){
            console.log(res.data.message);
        }
        navigate('/')
    }

    useEffect( () => {
        const getProvinceById = async () => {
            const res = await axios.get(`${url_api}/${id}`)
            setLibelle(res.data.libelle_prov)
            setCode(res.data.code_prov)
        }
        getProvinceById()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    return (
        <div className='container col-md-6'>
            <div className='card'>
                <div className='card-header'>
                    <h3>Update un province</h3>
                </div>
                <div className='card-body'>
                    <form onSubmit={update}>
                        <div className='mb-3'>
                            <label className='form-label'>Libelle</label>
                            <input type="text" value={libelle_prov} onChange={(e)=> setLibelle(e.target.value)} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Code</label>
                            <input type="text" value={code_prov} onChange={(e)=> setCode(e.target.value)} className='form-control' />
                        </div>
                        <button type='submit' className='btn btn-success'>Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditProvince