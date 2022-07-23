import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const url_api =  'http://localhost:8000/api/regions'
const CreerRegion = () => {
    const [libelle_reg, setLibelleReg] = useState('')
    const [code_reg, setCodeReg] = useState('')
    const [province_id, setProvinceId] = useState('')

    const navigate = useNavigate()

    const creerRegion = async (e) => {
        e.preventDefault()
        const res = await axios.post(url_api,{
            libelle_reg:libelle_reg,
            code_reg:code_reg,
            province_id:province_id
        })
        if(res.data.message)
            console.log(res.data.message);
        navigate('/regions')
    }

  return (
    <div className='container col-md-6'>
            <div className='card'>
                <div className='card-header'>
                    <h3>Creer un province</h3>
                </div>
                <div className='card-body'>
                    <form onSubmit={creerRegion}>
                        <div className='mb-6'>
                            <label className='form-label'>Libelle</label>
                            <input type="text" onChange={(e)=> setLibelleReg(e.target.value)} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Code</label>
                            <input type="text" onChange={(e)=> setCodeReg(e.target.value)} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Province ID</label>
                            <input type="text" onChange={(e)=> setProvinceId(e.target.value)} className='form-control' />
                        </div>
                        <button type='submit' className='btn btn-success'>Creer</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default CreerRegion