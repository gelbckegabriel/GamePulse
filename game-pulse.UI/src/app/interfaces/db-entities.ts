export interface User {
  id: string;
  name: string;
  nickname: string;
  xp: string;
  favoriteSport: string;
  email: string;
  city: string;
  state: string;
  country: string;
  address: string;
}

export interface Sport {
  id: number;
  name: string;
}

export interface Game {
  id: number;
  sport_id: number;
  sport_name?: string;
  court_id: number;
  court_name: string;
  game_day?: string;
  game_date: Date;
  game_date_formatted?: string;
  best_player_id?: string;
}
