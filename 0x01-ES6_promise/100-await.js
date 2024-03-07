import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const newObject = {
      photo: await uploadPhoto(),
      user: await createUser(),
    };

    return newObject;
  } catch (error) {
    return {
      photo: null,
      user: null,
    };
  }
}
