import React from 'react';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import style from './Contacts.module.css';

const Contacts = () => {
  return (
    <div className={style.contacts}>
        <ContactForm/>
        <Filter/>
        <ContactList />
    </div>
  )
}

export default Contacts
