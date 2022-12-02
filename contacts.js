const fs = require("fs");
const path = require("path");
const contactPath = "./db/contacts.json";


// const fileOperations = async({contactPath, actions}) => {
//     switch(actions) {
//       case "read":
//         const text = await fs.readFile(contactPath, "utf8");
//       console.log(text)
//       break;
//     default:
//       console.log("Unknown")
//     }
// }
//console.log(contactPath)


// TODO: задокументувати кожну функцію
function listContacts() {
    // ...твій код
  }
  
  function getContactById(contactId) {
    // ...твій код
  }
  
  function removeContact(contactId) {
    // ...твій код
  }
  
  function addContact(name, email, phone) {
    // ...твій код
  }

  const todoUser = {
    listContacts,
    getContactById,
    removeContact,
    addContact
  };

  module.exports=todoUser;
  