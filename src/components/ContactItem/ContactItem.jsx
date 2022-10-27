import React from 'react';
import PropTypes from 'prop-types';

const ContactItem = ({ name, number }) => {
    return (
      <>
        <span>{name}:</span>
        <span>{number}</span>
      </>
    );
};

export default ContactItem;

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired
}