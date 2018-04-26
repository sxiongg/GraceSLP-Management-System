export const otherAttributes = [
  { title: 'Position', value: 'position', type: 'string' },
  { title: 'Available', value: 'daysAvailable', type: 'string' },
  { title: 'Start Time', value: 'startTime', type: 'string' },
  { title: 'End Time', value: 'endTime', type: 'string' },
  { title: 'Email', value: 'email', type: 'string' }
];

// const contactList = JSON.parse(
//   `[{
//   "id": 22143,
//   "firstName": "Benjamin",
//   "lastName": "Jacobi",
//   "number": "456-982-8574",
//   "address": "123 Magnolia Lane, Los Angeles, CA 90038",
//   "email": "ben@gmail.com",
//   "dob": "09-09-85",
//   "doctor": "Dr. Leroy",
//   "note": "Easily aggravated with waiting, has problems breathing"
// }, {
//   "id": 17385,
//   "firstName": "Joe",
//   "lastName": "Smith",
//   "number": "456-847-9521",
//   "address": "783 Tamarind Ave, Los Angeles, CA 90038",
//   "email": "joe@gmail.com",
//   "dob": "11-03-85",
//   "doctor": "Dr. George",
//   "note": "Broken leg on last visit"
// }]`
// );

// export default class fakeData {
//   constructor(size = 2) {
//     this.size = size;
//     this.datas = [];
//   }
//   dataModel(index) {
//     return contactList[index];
//   }
//   getObjectAt(index) {
//     if (index < 0 || index > this.size) {
//       return undefined;
//     }
//     if (this.datas[index] === undefined) {
//       this.datas[index] = this.dataModel(index);
//     }
//     return this.datas[index];
//   }
//   getAll() {
//     if (this.datas.length < this.size) {
//       for (let i = 0; i < this.size; i++) {
//         this.getObjectAt(i);
//       }
//     }
//     return this.datas
//       .slice()
//       .sort(
//         (contact1, contact2) =>
//           `${contact1.firstName}${contact1.LastName}`.toUpperCase() >
//           `${contact2.firstName}${contact2.LastName}`.toUpperCase()
//       );
//   }

//   getSize() {
//     return this.size;
//   }
// }
