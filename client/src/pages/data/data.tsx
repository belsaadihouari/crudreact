import "./data.css";
import Layout from "../../component/layout/layout";
import Box from "@mui/material/Box";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

interface Datarows {
  id: number | null;
  email: string | null;
  username: string | null;

  isAdmin: boolean;
}

const Data = () => {
  const [rows, setRows] = useState<Datarows[]>([
    {
      id: 0,
      username: "",
      email: "",
      isAdmin: false,
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("http://localhost:8085/get", {
          method: "GET",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        });
        const response = await res.json();
        setRows(response);
      } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
      }
    };

    fetchData();
  }, []);

  const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "username",
      headerName: "Username",
      width: 200,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: false,
    },
    {
      field: "isAdmin",
      headerName: "is Admin?",
      type: "text",
      width: 110,
      editable: false,
    },
    {
      field: "fullName",
      headerName: "Merge",
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
