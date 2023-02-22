import './App.css';
import { useState } from 'react';
import contacts from './contacts.json';

function App() {

  const [allContacts, setAllContacts] = useState(contacts.slice(0,5))

    const addRandom = () => {

      let remainingContacts = contacts.filter((contact) => {
        return !allContacts.some((remainingContact) => remainingContact.id === contact.id)
      })

      let newContacts = [...allContacts]

      newContacts.push(remainingContacts[Math.floor(Math.random()*remainingContacts.length)])

      setAllContacts(newContacts)

      console.log(newContacts)

    }

    const nameSort = () => {
      let newContacts = [...allContacts]

      let sorted = newContacts.sort(function(a, b) {
        if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
       })

       setAllContacts(sorted);
    }

    const popularitySort = () => {
      let newContacts = [...allContacts]

      let sorted = newContacts.sort(function(a, b) {
        if(a.popularity > b.popularity) return -1;
        if(a.popularity < b.popularity) return 1;
        return 0;
       })

       setAllContacts(sorted);
    }

    const deleteContact = (contactId) => {

      let filteredContacts = allContacts.filter(contact => {
          return contact.id !== contactId;
        })

        setAllContacts(filteredContacts);
      }
  
        const wonOscar = (contact) => {
          if (contact.wonOscar === true)
            return (
              <p>🏆</p>
            )
        }
  
        const wonEmmy = (contact) => {
          if (contact.wonEmmy === true)
            return (
              <p>🏆</p>
            )
        }

  
      return (
        <div className="App">
          <button onClick={addRandom}>Add New Contact</button>
          <button onClick={nameSort}>Sort By Name</button>
          <button onClick={popularitySort}>Sort By Popularity</button>
          <table>

            <thead>

              <tr>
              <th>Delete</th>
                <th>Picture</th>
                <th>Name</th>
                <th>Popularity</th>
                <th>Won Oscar</th>
                <th>Won Emmy</th>
              </tr>

            </thead>

            <tbody>

              {
                allContacts.map((contact) => {
                  return (
                      <tr key={contact.id}>
                        <td><button onClick={() => deleteContact(contact.id)}>Delete</button></td>
                        <td><img src={contact.pictureUrl} alt="pfp"></img></td>
                        <td>{contact.name}</td>
                        <td>{contact.popularity.toFixed(2)}</td>
                        <td>{wonOscar(contact)}</td>
                        <td>{wonEmmy(contact)}</td>
                      </tr>
                  )
                })
              }
            </tbody>

          </table>
    </div>
      )
}


export default App;
