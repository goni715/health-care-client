import * as React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Controller, useFormContext } from "react-hook-form";
import { Input } from "@mui/material";
import convertToBase64 from "@/helper/convertToBase64";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type TProps = {
  name: string;
  label: string;
};

const PHFileUploader = ({ name, label }: TProps) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <Button
        component="label"
        role={undefined}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
      >
        {label}
        <Controller
          name={name}
          render={({
            field: { onChange, value, ...field },
            fieldState: { error },
          }) => (
            //   <VisuallyHiddenInput
            //   type="file"
            //   {...field}
            <>
              <Input
                {...field}
                type={name}
                value={value?.fileName}
                onChange={async (e) => {
                  const base64String = await convertToBase64(
                    (e?.target as HTMLInputElement).files?.[0] as File
                  );
                  onChange(base64String);
                }}
                style={{ display: "none" }}
              />
            </>
          )}
        />
      </Button>
      <br />
      {errors[name] && (
        <span style={{ color: "red", fontSize: "12px" }}>
          {errors[name]?.message as string}
        </span>
      )}
    </>
  );
};

export default PHFileUploader;
