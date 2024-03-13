export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new RangeError('Position outside range');
  }
  const BufferArray = new ArrayBuffer(length);
  const Int8arr = new Int8Array(BufferArray, 0, length);

  Int8arr.set([value], position);

  return new DataView(BufferArray);
}
