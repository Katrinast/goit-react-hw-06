import { IoPerson } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

import css from './Contact.module.css'

export default function Contact({ data: { id, name, number }, onDelete }) {
  return (
    <div className={css.boxItem}>
        <div>
        <p className={css.nameText}><IoPerson /> {name}</p>
      
        <p><FaPhone /> {number}</p>
        </div>
      <button onClick={() => onDelete(id)} className={css.deleteBtn}>Delete</button>
    </div>
  )
}