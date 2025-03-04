// import { PATH_DB } from '../constants/contacts.js';

// export const writeContacts = async (updatedContacts) => {};
const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, '../db/contacts.json');

const writeContacts = async (contacts) => {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  } catch (error) {
    console.error('Error writing contacts:', error.message);
  }
};

module.exports = writeContacts;
