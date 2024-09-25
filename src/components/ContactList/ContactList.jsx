import css from './ContactList.module.css'

import Contact from "../Contact/Contact";
import { useSelector } from 'react-redux';
import { deleteContact } from '../../redux/store';
import { useDispatch } from 'react-redux';

export default function ContactList() {
  const contacts = useSelector((state) => state.contacts.items);
  const dispatch = useDispatch();
  return (
    <ul className={css.contactList}>
      {contacts.map((contact) => (
        <li key={contact.id}>
<Contact data={contact} onDelete={() => dispatch(deleteContact(contact.id))} />
        </li>
      ))}
    </ul>
  )

}