import React, {useState, useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const url_api =  'http://localhost:8000/api/regions'
const EditRegion = () => {
    const [libelle_reg, setLibelleReg] = useState('')
    const [code_reg, setCodeReg] = useState('')
    const [province_id, setProvinceId] = useState('')
    const navigate = useNavigate()

    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        const res =  await axios.put(`${url_api}/${id}`, {
            libelle_reg: libelle_reg,
            code_reg:code_reg,
            province_id:province_id,
        })
        if(res.data.message)
            console.log(res.data.message);
        navigate('/regions')
    }

    useEffect(() => {
        const getRegionsById = async () => {
            const res = await axios.get(`${url_api}/${id}`)
            setLibelleReg(res.data.libelle_reg)
            setCodeReg(res.data.code_reg)
            setProvinceId(res.data.province_id)
        }
        getRegionsById()
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

  return (
    <div className='container col-md-6'>
            <div className='card'>
                <div className='card-header'>
                    <h3>Update un region</h3>
                </div>
                <div className='card-body'>
                    <form onSubmit={update}>
                        <div className='mb-3'>
                            <label className='form-label'>Libelle</label>
                            <input type="text" value={libelle_reg} onChange={(e)=> setLibelleReg(e.target.value)} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Code</label>
                            <input type="text" value={code_reg} onChange={(e)=> setCodeReg(e.target.value)} className='form-control' />
                        </div>
                        <div className='mb-3'>
                            <label className='form-label'>Id Province</label>
                            <input type="text" value={province_id} onChange={(e)=> setProvinceId(e.target.value)} className='form-control' />
                        </div>
                        <button type='submit' className='btn btn-success'>Enregistrer</button>
                    </form>
                </div>
            </div>
        </div>
  )
}

export default EditRegion