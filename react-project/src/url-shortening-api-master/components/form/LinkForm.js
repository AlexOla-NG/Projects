import React, { useState, useEffect } from "react";
import { Form, FormikProvider, useFormik } from "formik";
import { Button, Stack, TextField } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { LinkSchema } from "./Schema";
import mobileBackgroundShorten from "../../images/bg-shorten-mobile.svg";
import desktopBackgroundShorten from "../../images/bg-shorten-desktop.svg";

const LinkForm = () => {
  const API_URL = "https://api.shrtco.de/v2/shorten?url";

  const [formValue, setFormValue] = useState(null);
  const [shortLink, setShortLink] = useState("");
  const [snackbar, setSnackbar] = useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  useEffect(() => {
    const getData = async () => {
      if (formValue) {
        const response = await fetch(`${API_URL}=${formValue}`);
        const data = await response.json();
        console.log(data);

        if (data.ok) {
          // STUB: get shortlink from response
          const { full_short_link } = data.result;

          setShortLink(full_short_link);
        } else {
          setSnackbar({
            children: `${data.error}\nReason: ${data.disallowed_reason}`,
            severity: "error",
          });
        }
      }
    };

    getData();
  }, [formValue]);

  const formik = useFormik({
    initialValues: {
      link: "",
    },
    validationSchema: LinkSchema,
    onSubmit: (values, actions) => {
      // console.log(values);

      const { link } = values;
      setFormValue(link);

      // STUB: popup successful msg on screen
      setSnackbar({
        children: "Your shortlink is ready",
        severity: "success",
      });

      actions.resetForm();
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
      {!!snackbar && (
        <Snackbar
          open
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
          onClose={handleCloseSnackbar}
          autoHideDuration={10000}
        >
          <Alert {...snackbar} onClose={handleCloseSnackbar} />
        </Snackbar>
      )}
    </FormikProvider>
  );
};

export default LinkForm;
