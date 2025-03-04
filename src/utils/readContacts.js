// import { PATH_DB } from '../constants/contacts.js';
// import fs from 'node:fs/promises';

// export const readContacts = async () => {
//   try {
//     return JSON.parse(await fs.readFile(PATH_DB, 'utf8'));
//   } catch (err) {
//     throw `Error reading file:', ${err}`;
//   }
// };
const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.join(__dirname, '../db/contacts.json');

const readContacts = async () => {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error reading contacts:', error.message);
    return [];
  }
};

module.exports = readContacts;
