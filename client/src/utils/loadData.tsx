import type { User } from "../types/user";

async function loadData(setData: (users: User[]) => void) {
  try {
    const res = await fetch("http://localhost:3000/api/users");
    const users = await res.json();
    setData(users); //
  } catch (err) {
    console.error(err);
  }
}
export default loadData