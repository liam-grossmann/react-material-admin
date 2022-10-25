import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { DataService } from '../../services/DataService';

const columns: GridColDef[] = [
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'emailAddress',
    headerName: 'Email',
    width: 250,
    editable: true,
  },
  {
    field: 'mobile',
    headerName: 'Mobile',
    width: 150,
    editable: true,
  },
  {
    field: 'country',
    headerName: 'Country',
    width: 150,
    editable: true,
  }
];

const dataService = new DataService();
const customers = dataService.getCustomers();
const rows = customers;

export default function MuiGrid() {
  return (
    <Box sx={{ height: '525px', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
  );
}
