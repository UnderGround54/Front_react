import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const url_api =  'http://localhost:8000/api/regions'

const Regions = () => {
    const [regions, setRegions] = useState([]);
    useEffect(() => {
        getAllRegions()
    },[])

    const getAllRegions = async () => {
        const res = await axios.get(url_api)
        setRegions(res.data)
    }

    const deleteRegion = async (id) => {
        const res = await axios.delete(`${url_api}/${id}`)
        if(res.data.message){
            console.log(res.data.message);
        }
        getAllRegions()

    }

  return (
    <div className='container mt-4'>
        <Link to="/regions/create" variant="contained" color="primary">Create</Link>
        <table className="table table-hover">
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">ID province</th>
                <th scope="col">Libelle</th>
                <th scope="col">Code Regions</th>
                <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {regions.map((regions) => (
                <tr className="table-active" key={regions.id}>
                    <th scope="row">{regions.id}</th>
                    <td>{regions.province_id}</td>
                    <td>{regions.libelle_reg}</td>
                    <td>{regions.code_reg}</td>
                    <td>
                        <button className='btn btn-warning'><Link to={`/regions/${regions.id}`}>Edit</Link></button>
                        <button className='btn btn-danger' onClick={()=> deleteRegion(regions.id)} variant="contained" size="small">Delete</button>
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
  )
}

export default Regions;