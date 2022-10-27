import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from 'components/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
          {contacts.map(contact => 
            <li key={contact.id}>
              <ContactItem name={contact.name} number={contact.number} />
              <button type="button" onClick={() => onDeleteContact(contact.id)}>Delete</button>    
            </li>
          )}
        </ul>
    );
};

export default ContactList;

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDeleteContact: PropTypes.func.isRequired
}