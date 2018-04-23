export const otherAttributes = [
  { title: 'PhoneNumber', value: 'phoneNumber', type: 'phoneNumber' },
  { title: 'Address', value: 'address', type: 'string' },
  { title: 'Email', value: 'email', type: 'string' },
  { title: 'DOB', value: 'dob', type: 'integer' },
  { title: 'Doctor', value: 'doctor', type: 'string' },
  { title: 'Notes', value: 'note', type: 'paragraph' }
];

const contactList = JSON.parse(
  `[{
  "id": 22143,
  "firstName": "Benjamin",
  "lastName": "Jacobi",
  "phoneNumber": "(023) 302-3161 x60451",
  "address": "123 Magnolia Lane, Los Angeles, CA 90038",
  "email": "ben@gmail.com",
  "dob": "09-09-85",
  "doctor": "Dr. Leroy",
  "note": "Easily aggravated with waiting, has problems breathing"
}, {
  "id": 17385,
  "firstName": "Joe",
  "lastName": "Smith",
  "phoneNumber": "456-847-9521",
  "address": "783 Tamarind Ave, Los Angeles, CA 90038",
  "email": "joe@gmail.com",
  "dob": "11-03-85",
  "doctor": "Dr. George",
  "note": "Broken leg on last visit"
}]`
);

export default class fakeData {
  constructor(size = 10) {
    this.size = size;
    this.datas = [];
  }
  dataModel(index) {
    return contactList[index];
  }
  getObjectAt(index) {
    if (index < 0 || index > this.size) {
      return undefined;
    }
    if (this.datas[index] === undefined) {
      this.datas[index] = this.dataModel(index);
    }
    return this.datas[index];
  }
  getAll() {
    if (this.datas.length < this.size) {
      for (let i = 0; i < this.size; i++) {
        this.getObjectAt(i);
      }
    }
    return this.datas
      .slice()
      .sort(
        (contact1, contact2) =>
          `${contact1.firstName}${contact1.LastName}`.toUpperCase() >
          `${contact2.firstName}${contact2.LastName}`.toUpperCase()
      );
  }

  getSize() {
    return this.size;
  }
}
