import { JSONFile } from "lowdb/node";
import { Low } from "lowdb";
import * as cheerio from 'cheerio';
import fetch from 'node-fetch';


const file = ".\\champ-links.json";
const adapter = new JSONFile(file);
const db = new Low(adapter);

const existingLinks = [];

const loadDB = async () => {
  await db.read();
  db.data = db.data || { links: [] };
  if (db.data.links.length > 0){
    db.data.links.forEach(li => {
      existingLinks.push(Object.values(li)[0]);
    })
  }
}

const SaveLinksToDB = async (links) => {
  links.forEach(li => {
    db.data.links.push(li);
  })
  await db.write()
}

const BASE_URL = "https://ayumilove.net/";
const RSL_CATEGORY = "category/raid-shadow-legends/";

const GetChampNameFromLink = (link) => {
  let startIndex = link.indexOf("raid-shadow-legends-") + 20;
  let endIndex = link.indexOf("-skill-mastery-equip-guide");
  return link.substring(startIndex, endIndex);
};

const GetLinks = (body) => {
  const $ = cheerio.load(body);
  const links = [];
  $('a')
    .filter((i, el) => {
     return $(el).attr('href').includes('skill-mastery-equip-guide');
  })
    .each((i, el) => {
      let href = $(el).attr('href');

      if (!existingLinks.includes(href)){
        let champName = GetChampNameFromLink(href);

        links.push({
          [champName]: href
        });
      }
    });

  return links;
}

loadDB();

fetch(`${BASE_URL}${RSL_CATEGORY}`)
  .then(res => res.text())
  .then(body => GetLinks(body))
  .then(links => SaveLinksToDB(links))
  .catch(error => console.log(error));
