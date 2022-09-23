import type { ReactElement } from 'react'
import { useEffect, useState } from 'react';
import Layout from '../layouts'
import type { NextPageWithLayout } from './_app'
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Page: NextPageWithLayout = () => {
  const [users, setUsers] = useState([{
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
  }])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get("/api/users/");
        setUsers(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchProduct()
  }, [])

  return (
    <TableContainer component={Paper} sx={{ maxWidth: 650}} style={{margin: '100px auto',}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">FullName</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user, index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id ??  ''}
              </TableCell>
              <TableCell align="right">{(user.first_name ?? '') + ' ' + (user.first_name)}</TableCell>
              <TableCell align="right">{user.email ?? ''}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout title="Home">
      {page}
    </Layout>
  )
}

export default Page