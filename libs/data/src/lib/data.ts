export interface Conference {
  id: number;
  name: string;
  short_name: string;
  abbreviation: string;
}

export interface Team {
  id: number;
  school: string;
  mascot: string;
  abbreviation: string;
  alt_name_1: string;
  alt_name_2: string;
  alt_name_3: string;
  conference: string;
  division: string;
  color: string;
  alt_color: string;
  logos: string[];
}

export interface Player {
  id: number;
  first_name:	string;
  last_name:	string;
  height: number;
  weight: number;
  jersey: number;
  year: number;
  position:	string;
  home_city:	string;
  home_state:	string;
  home_country:	string;
}
