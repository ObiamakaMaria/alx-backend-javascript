export default function cleanSet(set, startString) {
  const newArray = [];
  set.forEach((element) => {
    let elem;

    if (element.startsWith(startString)) {
      const idx = element.indexOf(startString);
      elem = element.substring(startString.length - 1);
      console.log(idx);
      newArray.push(elem);
    }
    return elem;
    });

  return newArray.join('-');
}
