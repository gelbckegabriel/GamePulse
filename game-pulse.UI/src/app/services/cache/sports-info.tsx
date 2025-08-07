// Create the RXJS BehaviorSubject here.
// Look the UserSlice + Store for reference - to be replaced.

import { Sport } from "@/app/interfaces/db-entities";
import { BehaviorSubject } from "rxjs";

class SportsService {
  private sportsSubject = new BehaviorSubject<Sport[]>([]);
  public sports$ = this.sportsSubject.asObservable();

  addSports(sportsData: Sport[]) {
    this.sportsSubject.next(sportsData);
  }

  getSports(): Sport[] {
    return this.sportsSubject.getValue();
  }

  getSportNames(): string[] {
    return this.sportsSubject.getValue().map((sport) => sport.name);
  }

  getSportName(id: number): string | undefined {
    const sports = this.sportsSubject.getValue();
    const sport = sports.find((sport) => sport.id === id);
    if (sport) {
      return sport.name;
    }
  }

  getSportId(name: string): number | undefined {
    const sports = this.sportsSubject.getValue();
    const sport = sports.find((sport) => sport.name === name);
    if (sport) {
      return sport.id;
    }
  }
}

export const sportsService = new SportsService();
