import { useDispatch, useSelector } from "react-redux";
import { selectContacts } from "../redux/selectors";
import { delContactThunk } from "../redux/operations";

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  return (
    <div>
      <ul>
        {contacts.map((contact) => (
          <li key={contact.id}>
            <h2>{contact.name}</h2>
            <p>{contact.number}</p>
            <button onClick={() => dispatch(delContactThunk(contact.id))}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
