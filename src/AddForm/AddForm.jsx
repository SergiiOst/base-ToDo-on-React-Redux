import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { addContactsThunk } from "../redux/operations";

const AddForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(addContactsThunk(values));
    options.resetForm();
  };
  const initialValues = {
    name: "",
    number: "",
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="name" placeholder="Enter name" />
          <Field name="number" placeholder="Enter number" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddForm;
