import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Button, Stack, TextField } from "@mui/material";
import { LinkSchema } from "./Schema";
import mobileBackgroundShorten from "../../images/bg-shorten-mobile.svg";
import desktopBackgroundShorten from "../../images/bg-shorten-desktop.svg";

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
    // border: "3px solid",
    backgroundImage: {
      xs: `url(${mobileBackgroundShorten})`,
      sm: `url(${desktopBackgroundShorten})`,
    },
    backgroundSize: {
      xs: "70% auto",
      sm: "cover",
    },
    backgroundRepeat: "no-repeat",
    backgroundPosition: {
      xs: "right top",
      sm: "bottom",
    },
    bgcolor: "violetBg.main",
    borderRadius: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    px: 6,
    py: 4,
  };

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack sx={style}>
          <TextField
            fullWidth
            type="url"
            placeholder="Shorten a link here..."
            {...getFieldProps("link")} // hooks up onBlur and onChange for link textfield
            error={Boolean(touched.link && errors.link)} // activate yup validation when field is out of focus
            helperText={touched.link && errors.link} // display error message
            sx={{
              bgcolor: "#fff",
              borderRadius: 1,
              flexBasis: { sx: "100%", md: "60vw" },
            }}
          />

          <Button
            fullWidth
            size="large"
            type="submit"
            variant="cyanBg"
            sx={{
              mt: { xs: 2, md: 0 }, // remove the margin top on larger screens
              p: 2,
              fontSize: "1.15rem",
              fontWeight: 600,
              flexBasis: { sx: "100%", md: "15vw" },
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
