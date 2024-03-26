import { Meteor } from 'meteor/meteor';
import { Stuffs } from '../../api/stuff/Stuff.js';
import { Passwords } from '../../api/password/Password.js';
import { History } from '../../api/history/History';

/* eslint-disable no-console */

// Initialize the database with a default data document.
const addData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Stuffs.collection.insert(data);
};

const addPasswordData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  Passwords.collection.insert(data);
};

const addHistoryData = (data) => {
  console.log(`  Adding: ${data.name} (${data.owner})`);
  History.collection.insert(data);
};

// Initialize the StuffsCollection if empty.
if (Stuffs.collection.find().count() === 0) {
  if (Meteor.settings.defaultData) {
    console.log('Creating default data.');
    Meteor.settings.defaultData.forEach(data => addData(data));
  }
}

// Initialize the PasswordsCollection if empty.
if (Passwords.collection.find().count() === 0) {
  if (Meteor.settings.defaultPasswords) {
    console.log('Creating default data.');
    Meteor.settings.defaultPasswords.forEach(data => addPasswordData(data));
  }
}

// Initialize the HistoryCollection if empty.
if (History.collection.find().count() === 0) {
  if (Meteor.settings.defaultHistory) {
    console.log('Creating default data.');
    Meteor.settings.defaultHistory.forEach(data => addHistoryData(data));
  }
}
