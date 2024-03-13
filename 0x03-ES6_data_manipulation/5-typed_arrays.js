export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }
  const arrayBuffer = new ArrayBuffer(length);
  const arrayInt8 = new Int8Array(arrayBuffer, 0, length);

  arrayInt8.set([value], position);

  return new DataView(arrayBuffer);
}
