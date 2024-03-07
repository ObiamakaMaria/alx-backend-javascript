export default function getFullResponseFromAPI(success) {
  const myNewObject = new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });

  return myNewObject;
}
