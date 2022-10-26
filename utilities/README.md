# Utilities

This folder contains various js scripts that can be run from this folder's `package.json`.

| Script                         | Description                                                                                                                         |
|:-------------------------------|:------------------------------------------------------------------------------------------------------------------------------------|
| `get-or-update-champ-links.js` | Scrapes AyumiLove's Raid Shadow Legends category for champ names and their data links. Puts the scraped data in `champ-links.json`. | 
| `get-champ-data.js`            | Scrapes each champ's link for required data and stores that data in the sqlite3 database, `src\db\champs.db`.                       |
