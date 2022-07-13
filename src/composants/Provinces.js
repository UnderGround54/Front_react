import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Grid,Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const url_api =  'http://localhost:8000/api'

const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
  
  const useStyles = makeStyles({
      table: {
        minWidth: 700,
      },
    });

const Provinces = () => {
    const [provinces, setProvinces] = useState([]);

    useEffect(() => {
        getAllProvinces()
    },[])

    const getAllProvinces = async () => {
        const res = await axios.get(`${url_api}/provinces`)
        setProvinces(res.data)
    }
    const deleteProvince = async (id) => {
        await axios.delete(`${url_api}/provinces/${id}`)
        getAllProvinces()
    }
    const classes = useStyles();
    
    return (
        <div>
            <Grid container>
                <Link to="/provinces/create" variant="contained" color="primary">Create</Link>
            </Grid>
            <TableContainer component={Paper}>
                <Table  className={classes.table} aria-label="customized table">
                    <TableHead>
                    <TableRow>
                        <StyledTableCell>ID</StyledTableCell>
                        <StyledTableCell align="right">Libelle Prov</StyledTableCell>
                        <StyledTableCell align="right">Code prov</StyledTableCell>
                        <StyledTableCell align="right">Action</StyledTableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {provinces.map((province) => (
                        <StyledTableRow key={province.id}>
                        <StyledTableCell component="th" scope="row">
                            {province.id}
                        </StyledTableCell>
                        <StyledTableCell align="right">{province.libelle_prov}</StyledTableCell>
                        <StyledTableCell align="right">{province.code_prov}</StyledTableCell>
                        <StyledTableCell align="right">
                            <Button variant="contained" size="small" color="primary"><Link to={`/provinces/${province.id}`}>Edit</Link></Button>
                            <Button onClick={()=> deleteProvince(province.id)} variant="contained" size="small" color="secondary">Delete</Button>
                        </StyledTableCell>
                        </StyledTableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    )
}

export default Provinces