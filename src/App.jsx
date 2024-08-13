import { useEffect } from "react";
import AddForm from "./AddForm/AddForm";
import Contacts from "./Contacts/Contacts";
import { useDispatch } from "react-redux";
import { fetchContacts } from "./redux/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <AddForm />
      <Contacts />
    </>
  );
}

export default App;
