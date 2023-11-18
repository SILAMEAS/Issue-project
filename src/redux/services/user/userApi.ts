import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type IGetIssues = {
  id: number;
  name: string;
  email: number;
};

export const userApi = createApi({
  reducerPath: "userApi",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000",
  }),
  endpoints: (builder) => ({
    getIssues: builder.query<any, null>({
      query: () => "api/issues",
    }),
    getUserById: builder.query<any, { id: string }>({
      query: ({ id }) => `users/${id}`,
    }),
  }),
});

export const { useGetIssuesQuery, useGetUserByIdQuery } = userApi;
