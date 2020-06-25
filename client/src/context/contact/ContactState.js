import React, { useReducer } from 'react';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
  CLEAR_CURRENT,
} from '../type';

const ContactState = (props) => {
  const initalState = {
    contacts: [
      {
        type: 'personal',
        _id: '5ef31f7c15fd9c003c811152',
        name: 'hung',
        email: 'hung@gmail.com',
        phone: '11-22-222-22',
        user: '5ef2cfaf478c172a48df2dcd',
        date: '2020-06-24T09:40:12.328Z',
        __v: 0,
      },
      {
        type: 'professional',
        _id: '5ef31f5715fd9c003c811151',
        name: 'hoang',
        email: 'hoang@gmail.com',
        phone: '11-22-222',
        user: '5ef2cfaf478c172a48df2dcd',
        date: '2020-06-24T09:39:35.530Z',
        __v: 0,
      },
    ],
    current: null,
    filtered: null,
  };

  const [state, dispatch] = useReducer(ContactReducer, initalState);

  //Add contact
  const addContact = (contact) => {
    dispatch({ type: ADD_CONTACT, payload: contact });
  };
  //Delete contact
  const deleteContact = (_id) => {
    dispatch({ type: DELETE_CONTACT, payload: _id });
  };
  //Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };
  //Update Contact
  const updateContact = (contact) => {
    dispatch({ type: UPDATE_CONTACT, payload: contact });
  };
  //Filter Contact
  const filterContacts = (text) => {
    dispatch({ type: FILTER_CONTACTS, payload: text });
  };
  //Clear Filer
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        filtered: state.filtered,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent,
        updateContact,
        filterContacts,
        clearFilter,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};
export default ContactState;
