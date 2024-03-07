import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const myNewObject = {
      photo: await uploadPhoto(),
      user: await createUser(),
    };

    return myNewObject;
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
