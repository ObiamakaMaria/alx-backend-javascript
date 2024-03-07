import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((returnPromises) => {
    const myArray = [];

    for (const object of returnPromises) {
      const tmpDict = {};
      tmpDict.status = object.status;

      if (object.status === 'rejected') {
        tmpDict.value = `${object.reason}`;
      } else {
        tmpDict.value = object.value;
      }
      myArray.push(tmpDict);
    }

    return myArray;
  });
}
