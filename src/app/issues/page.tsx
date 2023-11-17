"use client";
import { MSLayoutHomePage } from "@/components/ms-layout/MSLayoutHomePage";
import MSTable from "@/components/ms-table/MSTable";
import { GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
interface IrowS{id:number,lastName:string,firstName:string,age:number}
function Issuee() {
  const rows:IrowS[] = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 25 },
    { id: 6, lastName: 'Melisandre', firstName: "JK", age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
  ];
  const widthScreen=1700/5;
  
  return (
    <MSLayoutHomePage>
      <MSTable<IrowS[]> rows={rows} columns={handlerColumns({widthScreen})}/>
    </MSLayoutHomePage>
  )
}
const handlerColumns=({widthScreen}:{widthScreen:number})=>{
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: widthScreen },
    {
      field: "firstName",
      headerName: "First name",
      width: widthScreen,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: widthScreen,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: widthScreen,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: widthScreen,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];
  return columns
}
export default Issuee