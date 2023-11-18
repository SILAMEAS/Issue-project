"use client";

import { MSButton } from "@/components/ms-button/MSButton";
import { MSText } from "@/components/ms-text/MSText";
import { ConstantRoute } from "@/constant/Route";
import { SchemaCreateIssue } from "@/utils/schema/issue/DTO";
import { InterfaceCreateIssue } from "@/utils/schema/issue/Interface";

import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import SimpleMDE from "react-simplemde-editor";

function NewIssue() {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InterfaceCreateIssue>({
    defaultValues: {
      title: "",
      description: "",
    },
    resolver: zodResolver(SchemaCreateIssue),
  });
  //** state store message error from backend  */
  const [error, setError] = useState<string | null>(null);
  //** loading submit */
  const [isSubmiting, setIsSubmiting] = React.useState<boolean>(false);
  //** function submit */
  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmiting(true);
      await axios.post("/api/issues", data).then((res) => {
        // ** Redirect to /issues *
        router.replace(ConstantRoute.ISSUE.home);
        setIsSubmiting(false);
      });
    } catch (error: any) {
      setError("Error unexpected");
    }
  });
  return (
    <Stack
      width={"100vw"}
      spacing={2}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <form onSubmit={onSubmit} style={{ width: "80%" }}>
        <Stack spacing={3}>
          {/** Title Input */}
          <TextField
            id="outlined-search"
            label="Search field"
            type="search"
            {...register("title")}
          />
          {/** Title Input error*/}

          {errors.title && <MSText text={errors.title.message} />}
          <Box border={1}>
            <Controller
              name="description"
              control={control}
              render={({ field }) => (
                <SimpleMDE placeholder="description new issues" {...field} />
              )}
            />
          </Box>
          {/** Title Input error*/}
          {errors.description && <MSText text={errors.description.message} />}
          <MSButton title={" Create New Issue"} type="submit" />
        </Stack>
      </form>
      <MSButton
        title={" Back"}
        bgColor="error"
        onClick={() => router.push(ConstantRoute.ISSUE.home)}
      />
    </Stack>
  );
}

export default NewIssue;
