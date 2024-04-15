import "./data.css";
import Layout from "../../component/layout/layout";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
const rows = [
  { id: 1, email: "Snow", username: "stat1401@gmail.com", isAdmin: 14 },
  { id: 2, email: "Lannister", username: "Cersei", isAdmin: 31 },
  { id: 3, email: "Lannister", username: "Jaime", isAdmin: 31 },
  { id: 4, email: "Stark", username: "Arya", isAdmin: 11 },
  { id: 5, email: "Targaryen", username: "Daenerys", isAdmin: null },
  { id: 6, email: "Melisandre", username: "houari", isAdmin: 150 },
  { id: 7, email: "Clifford", username: "Ferrara", isAdmin: 44 },
  { id: 8, email: "Frances", username: "Rossini", isAdmin: 36 },
  { id: 9, email: "Roxie", username: "Harvey", isAdmin: 65 },
];
const columns: GridColDef<(typeof rows)[number]>[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "username",
    headerName: "Username",
    width: 200,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
    editable: true,
  },
  {
    field: "isAdmin",
    headerName: "is Admin ?",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) => {
      if (params && params.row) {
        return `${params.row.username || ""} ${params.row.email || ""}`;
      }
      return "";
    },
  },
];

const Data = () => {
  return (
    <Layout>
      <div className="containerdata">
        <Box className="box" sx={{ height: 400, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: {
                  pageSize: 8,
                },
              },
            }}
            pageSizeOptions={[5]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Box>
      </div>
    </Layout>
  );
};

export default Data;
