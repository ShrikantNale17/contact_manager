import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import '../CSS/App.css';
import { useEffect, useState } from 'react';
import { uuid } from 'uuidv4'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import api from '../Api/Contacts';
import EditContact from './EditContact';

function App() {
  const LOCAL_STORAGE_KEY = "contacts"
  const [contacts, setContacts] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResult, setSearchResult] = useState([])

  const getContacts = async () => {
    const response = await api.get("/contacts")
    return response.data
  }

  const addContactHandler = async (contact) => {
    const request = {
      id: uuid(),
      ...contact
    }

    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data])
    console.log(contact)
  }

  const updateContactHandler = async (contact) => {

    const response = await api.put(`/contacts/${contact.id}`, contact)
    const { id } = response.data

    setContacts(contacts.map(contact => {
      return contact.id === id ? { ...response.data } : contact
    }))
  }

  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const filterContacts = contacts.filter(contact => contact.id !== id)
    setContacts(filterContacts)
  }

  const getContactDetails = (id) => {
    return 0
  }

  const searchHandler = (searchValue) => {
    setSearchTerm(searchValue)
    if (searchValue !== "") {
      const searchContacts = contacts.filter(contact => {
        return Object.values(contact).join(" ").toLowerCase().includes(searchValue.toLowerCase())
      })
      setSearchResult(searchContacts)
    } else {
      setSearchResult(contacts)
    }
  }

  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await getContacts()
      if (allContacts)
        setContacts(allContacts)
    }
    getAllContacts()
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler} />} />
          <Route path="/edit/*" element={<EditContact updateContactHandler={updateContactHandler} />} />
          <Route path="/" element={<ContactList contactList={searchTerm.length < 1 ? contacts : searchResult} removeContactHandler={removeContactHandler} getContactDetails={getContactDetails} searchHandler={searchHandler} />} />
          <Route path="/view/:id" element={<ContactDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
