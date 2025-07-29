// Create the RXJS BehaviorSubject here.
// Look the UserSlice + Store for reference - to be replaced.

import { User } from "@/app/shared/interfaces/db-entities";
import { BehaviorSubject } from "rxjs";

const initialUser: User = {
  id: "",
  name: "",
  nickname: "",
  xp: "",
  favoriteSport: "",
  email: "",
  city: "Curitiba",
  state: "PR",
  country: "BR",
  address: "",
};

class UserService {
  private userSubject = new BehaviorSubject<User>(initialUser);
  public user$ = this.userSubject.asObservable();

  signInUser(userData: Partial<User>) {
    const current = this.userSubject.getValue();
    this.userSubject.next({
      ...current,
      ...userData,
      city: "Curitiba",
      state: "PR",
    });
  }

  signOutUser() {
    this.userSubject.next({
      ...initialUser,
      city: "",
      state: "",
    });
  }

  getCurrentUser(): User {
    return this.userSubject.getValue();
  }
}

export const userService = new UserService();
