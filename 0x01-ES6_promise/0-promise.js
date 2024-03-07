export default function getResponseFromAPI() {
  const newProomiseObject = new Promise((resolve, reject) => {
    const i = 5;

    if (i > 2) {
      resolve('I is 2');
    } else {
      reject(RangeError);
    }
  });

  return newProomiseObject;
}
