import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import {
  FormField,
  Input,
  Label,
  Button,
} from 'components/Phonebook/Phonebook.styled';

const Phonebook = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleChange = e => {
    switch (e.currentTarget.name) {
      case 'name':
        setName(e.currentTarget.value);
        break;
      case 'number':
        setPhone(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  const formSubmitHandle = data => {
    if (contacts.filter(contact => contact.name === data.name).length > 0) {
      alert(`${data.name} is already in contacts`);
      return;
    }

    dispatch(addContact(data));
    console.log(data);
  };

  const clickOnBtnSubmit = e => {
    e.preventDefault();
    formSubmitHandle({ name, phone });
    reset();
  };

  return (
    <FormField onSubmit={clickOnBtnSubmit}>
      <Label htmlFor="Name">
        Name
        <Input
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </Label>
      <Label htmlFor="Number">
        Number
        <Input
          type="tel"
          name="number"
          value={phone}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>
      <Button type="submit">Add contacts</Button>
    </FormField>
  );
};

export default Phonebook;
