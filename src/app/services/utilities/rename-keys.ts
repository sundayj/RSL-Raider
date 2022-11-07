/**
 * Replaces the names of multiple object keys with the values provided.
 *
 * Use Object.keys() in combination with Array.prototype.reduce() and the spread operator (...) to get the object's keys and rename them according to keysMap.
 * @param keysMap - A key value object where the key matches a key in the object provided, and the value is the new name desired for the specified kep.
 * @param obj - The object for which you would like keys renamed.
 * @example
 * const obj = { name: 'Bobo', job: 'Front-End Master', shoeSize: 100 };
 * renameKeys({ name: 'firstName', job: 'passion' }, obj);
 * // { firstName: 'Bobo', passion: 'Front-End Master', shoeSize: 100 }
 */
export const renameKeys = (keysMap: { [x: string]: any; }, obj: { [x: string]: any; }) =>
  Object.keys(obj).reduce(
    (acc, key) => ({
      ...acc,
      ...{ [keysMap[key] || key]: obj[key] }
    }),
    {}
  );
