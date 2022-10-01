import * as Yup from "yup";

// STUB: define form validation
const LinkSchema = Yup.object().shape({
  link: Yup.string().url().required("Please add a link"),
});

export { LinkSchema };
