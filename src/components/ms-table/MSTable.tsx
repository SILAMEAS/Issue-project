import Box from "@mui/material/Box";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";


export default function MSTable<T extends any[]>({
  rows,
}: Readonly<{ rows: T }>) {
  const widthRes=2000/5;
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: widthRes },
    {
      field: "firstName",
      headerName: "First name",
      width: widthRes,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: widthRes,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: widthRes,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: widthRes,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
