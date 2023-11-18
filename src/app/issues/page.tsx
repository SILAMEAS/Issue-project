// import { IGetIsues } from "@/utils/schema/issue/Interface";
// import Issuee from "./PageIssue";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/issues");
//   return res.json();
// }

// export default async function ListIssue() {
//   const res = await fetch("http://localhost:3000/api/issues");
//   const data: IGetIsues[] = await res.json();
//   return <Issuee<IGetIsues> data={data} />;
// }
"use client";

import { MSButton } from "@/components/ms-button/MSButton";
import { MSLayoutHomePage } from "@/components/ms-layout/MSLayoutHomePage";
import MSTable from "@/components/ms-table/MSTable";
import { ConstantRoute } from "@/constant/Route";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { useGetIssuesQuery } from "@/redux/services/user/userApi";

import { MSText } from "@/components/ms-text/MSText";
import { $modifyHeader } from "@/utils/common/$table";
import { $isArray } from "@/utils/common/checkValidate";
import { useWindowSize } from "@react-hook/window-size";
import { useRouter } from "next/navigation";

function Issuee() {
  const [widthS] = useWindowSize();
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

  const getIssues = useGetIssuesQuery(null);
  console.log(getIssues.currentData);
  const width = widthS / 5;
  const route = useRouter();
  if (!$isArray(getIssues.data)) {
    return <MSText text={"no data"} />;
  }
  return (
    <MSLayoutHomePage>
      <MSTable<any>
        rows={getIssues.currentData}
        columns={$modifyHeader({
          headerTable: [
            { field: "id", headerName: "ID", width },
            { field: "title", headerName: "title", width },
            { field: "status", headerName: "status", width },
            { field: "description", headerName: "description", width },
            { field: "createAt", headerName: "Date Create", width },
          ],
        })}
      />
      <MSButton
        title={" Create Issue"}
        onClick={() => route.push(ConstantRoute.ISSUE.create)}
      />
    </MSLayoutHomePage>
  );
}

export default Issuee;
