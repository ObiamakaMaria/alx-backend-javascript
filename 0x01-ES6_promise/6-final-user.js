import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((returnPromises) => {
    const myNewArray = [];

    for (const object of returnPromises) {
      const myTempDict = {};
      myTempDict.status = object.status;

      if (object.status === 'rejected') {
        myTempDict.value = `${object.reason}`;
      } else {
        myTempDict.value = object.value;
      }
      myNewArray.push(myTempDict);
    }

    return myNewArray;
  });
}
