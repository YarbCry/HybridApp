// new Date() creates an object for the current system date and time.
const now = new Date();
console.log(now instanceof Date);

// A timestamp of zero represents the Unix epoch in UTC.
const epoch = new Date(0);
console.log(epoch.toISOString());

// ISO 8601 strings describe an exact and unambiguous point in time.
const dateFromString = new Date("2019-10-11T16:30:33.250Z");
console.log(dateFromString.toISOString());

// Numeric components create a Date in the system's local time zone.
const localDate = new Date(2019, 0, 11, 15, 45, 55, 55);
console.log(localDate.toString());

console.log(dateFromString.constructor === Date);
console.log(typeof Date.now());

// Date.parse() and Date.UTC() both return timestamp numbers.
const timestamp = Date.parse("2019-10-11T00:00:00Z");
console.log(new Date(timestamp).toISOString());

const utcTimestamp = Date.UTC(2019, 9, 11, 16, 30, 33);
console.log(new Date(utcTimestamp).toISOString());

// Local getters return components in the computer's local time zone.
const localGetterDate = new Date(2019, 9, 11, 16, 30, 33, 250);
console.log(localGetterDate.getDate());
console.log(localGetterDate.getDay());
console.log(localGetterDate.getFullYear());
console.log(localGetterDate.getHours());
console.log(localGetterDate.getMilliseconds());
console.log(localGetterDate.getMinutes());
console.log(localGetterDate.getMonth());
console.log(localGetterDate.getSeconds());
console.log(localGetterDate.getTime());
console.log(localGetterDate.getTimezoneOffset());

// UTC getters return individual date and time components without local offsets.
console.log(dateFromString.getUTCDate());
console.log(dateFromString.getUTCDay());
console.log(dateFromString.getUTCFullYear());
console.log(dateFromString.getUTCHours());
console.log(dateFromString.getUTCMilliseconds());
console.log(dateFromString.getUTCMinutes());
console.log(dateFromString.getUTCMonth());
console.log(dateFromString.getUTCSeconds());

// Local setters modify the existing Date object.
const localUpdate = new Date(2019, 9, 11, 16, 30, 33);
localUpdate.setDate(12);
localUpdate.setFullYear(2020);
localUpdate.setHours(19);
localUpdate.setMilliseconds(200);
localUpdate.setMinutes(20);
localUpdate.setMonth(8);
localUpdate.setSeconds(34);
console.log(localUpdate.toString());

// UTC setters change the corresponding components in UTC.
const universal = new Date("2019-10-11T16:30:33.000Z");
universal.setUTCDate(12);
universal.setUTCFullYear(2018);
universal.setUTCHours(18);
universal.setUTCMilliseconds(166);
universal.setUTCMinutes(22);
universal.setUTCMonth(8);
universal.setUTCSeconds(10);
console.log(universal.toISOString());

// Date conversion methods provide formats for people, APIs, and storage.
const displayDate = new Date(2019, 9, 11, 19, 30, 33);
console.log(displayDate.toDateString());
console.log(displayDate.toISOString());
console.log(displayDate.toJSON());
console.log(displayDate.toLocaleDateString("en-GB"));
console.log(displayDate.toLocaleDateString("lo-LA"));
console.log(displayDate.toLocaleString("en-GB"));
console.log(displayDate.toLocaleTimeString("en-GB"));
console.log(displayDate.toString());
console.log(displayDate.toTimeString());
console.log(displayDate.toUTCString());
console.log(displayDate.valueOf());
console.log(displayDate.valueOf() === displayDate.getTime());

// An invalid date stores NaN as its internal time value.
const invalidDate = new Date("not a date");
console.log(invalidDate.toString());
console.log(Number.isNaN(invalidDate.getTime()));
