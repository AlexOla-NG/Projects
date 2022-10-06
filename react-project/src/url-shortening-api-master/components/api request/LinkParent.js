// STUB: this component will hold the shared data between LinkForm and LinkList

import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import LinkForm from "../api request/form/LinkForm";
import LinkList from "../api request/output/LinkList";

const LinkParent = () => {
  const API_URL = "https://api.shrtco.de/v2/shorten?url";

  const [formValue, setFormValue] = useState(null);
  const [responseList, setResponseList] = useState(
    JSON.parse(localStorage.getItem("apiResponseList")) || []
  ); // set to saved responseList from localstorage, else set to empty array
  const [snackbar, setSnackbar] = useState(null);

  const handleCloseSnackbar = () => setSnackbar(null);

  // STUB: get shortlink from API
  useEffect(() => {
    const getData = async () => {
      if (formValue) {
        try {
          const response = await fetch(`${API_URL}=${formValue}`);
          const data = await response.json();
          console.log(data);

          if (data.ok) {
            // STUB: save response to responseList state
            const { code, full_short_link, original_link } = data.result;

            setResponseList((prevValue) => {
              let newValue = [
                ...prevValue,
                { code, full_short_link, original_link },
              ];

              // STUB: track responseList with localstorage
              localStorage.setItem("apiResponseList", JSON.stringify(newValue));

              return newValue;
            });
          } else {
            setSnackbar({
              children: `${data.error}\nReason: ${data.disallowed_reason}`,
              severity: "error",
            });
          }
        } catch (error) {
          setSnackbar({
            children: `${error.message}\nReason: Disconnected internet`,
            severity: "error",
          });
        }
      }
    };

    getData();

    // eslint-disable-next-line
  }, [formValue]);

  // STUB: grab formValue from LinkForm onSubmit
  const handleFormValue = (param) => {
    setFormValue(param);
  };

  // STUB: grab snackbarSuccess msg from LinkForm onSubmit
  const handleSnackbarSuccess = (param) => {
    setSnackbar(param);
  };

  return (
    <div>
      <LinkForm
        onFormValueChange={handleFormValue}
        onSnackbarSuccess={handleSnackbarSuccess}
      />
      <LinkList responseList={responseList} />
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
    </div>
  );
};

export default LinkParent;
