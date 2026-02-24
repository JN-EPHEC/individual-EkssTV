import type { User } from "../types/user";
import loadData from "./loadData";

async function deleteUser(
    id: number,
    setData: (users: User[]) => void
    ) {
  try {
    await fetch(`http://localhost:3000/api/users/${id}`, {
      method: "DELETE",
    });
    await loadData(setData)
  } catch (err) {
    console.error("Erreur :", err);
  }
}
export default deleteUser