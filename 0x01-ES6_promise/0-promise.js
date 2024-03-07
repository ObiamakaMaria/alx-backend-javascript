export default function getResponseFromAPI() {
  const newProomiseObject = new Promise((resolve, reject) => {
    const j = 5;

    if (j > 2) {
      resolve('This is a test');
    } else {
      reject(RangeError);
    }
  });

  return newProomiseObject;
}
