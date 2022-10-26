import { JSONFile } from 'lowdb/node';
import { Low } from 'lowdb';
import sqlite3 from 'sqlite3';
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';

const champLinksFile = ".\\champ-links.json";
const champLinkAdapter = new JSONFile(champLinksFile);
const champLinkDB = new Low(champLinkAdapter);

const LoadChampLinks = async (dbKey) => {
  await champLinkDB.read();
  champLinkDB.data = champLinkDB.data || { links: [] };
};

// open the database
const DB = new sqlite3.Database('..\\src\\db\\champs.db', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.error(err.message);
  } else {
    console.log('Connected to the champs database.');
  }
});

const testSQL = `SELECT * FROM Factions`;

const TestSQLQuery = () => {
  DB.all(testSQL, [], (err, rows) => {
    if (err){
      throw err;
    }
    rows.forEach((row) => {
      console.log(row);
    })
  });

  DB.close();
};

LoadChampLinks();

TestSQLQuery();
