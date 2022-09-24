import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Button, Stack, TextField } from "@mui/material";
import { LinkSchema } from "./Schema";

const LinkForm = () => {
  const formik = useFormik({
    initialValues: {
      link: "",
    },
    validationSchema: LinkSchema,
    onSubmit: (values, actions) => {
      console.log("submitting...");
      console.log(values);
      console.log(actions);
      setTimeout(() => {
        console.log("submited!!");
        actions.resetForm();
      }, 2000);
    },
  });

  const { errors, touched, isSubmitting, handleSubmit, getFieldProps } = formik;

  // TODO: stopped here
  // add image and color to background of LinkForm
  const style = {
    border: "3px solid",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    px: 5,
    py: 3,
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={2} sx={style}>
          <TextField
            fullWidth
            type="url"
            placeholder="Shorten a link here..."
            {...getFieldProps("link")} // hooks up onBlur and onChange for specific fields
            error={Boolean(touched.link && errors.link)} // activate yup validation when field is out of focus
            helperText={touched.link && errors.link} // display error message
            sx={{ flexBasis: { sx: "100%", md: "70vw" } }}
          />

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="cyanBg"
            loading={isSubmitting}
            sx={{
              p: 1.3,
              fontSize: "1.15rem",
              fontWeight: 600,
              flexBasis: { sx: "100%", md: "content" },
            }}
          >
            {isSubmitting ? "loading..." : "Shorten It!"}
          </Button>
        </Stack>
      </Form>
    </FormikProvider>
  );
};

export default LinkForm;
