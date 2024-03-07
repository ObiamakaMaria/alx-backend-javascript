import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([
    uploadPhoto(),
    createUser(),
  ]).then((objects) => {
    console.log(`${objects[0].body} ${objects[1].firstName} ${objects[1].lastName}`);
  }).catch(() => console.log('Signup system offline'));
}
