import Contact from 'components/Contact';

const ContactsList = ({ contactsList }) => {
  return (
    <ul>
      {contactsList.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number}></Contact>
      ))}
    </ul>
  );
};

export default ContactsList;
