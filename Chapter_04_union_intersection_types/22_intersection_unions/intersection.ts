type Talk = {
  title: string;
  abstract: string;
  speaker: string;
};

// ORIGINAL
// type Conference = {
//   title: string;
//   description: string;
//   date: Date;
//   capacity: number;
//   rsvp: number;
//   kind: string;
//   location: string;
//   price: number;
//   talks: Talk[];
// };

// ORIGINAL
// type Meetup = {
//   title: string;
//   description: string;
//   date: Date;
//   capacity: number;
//   rsvp: number;
//   kind: string;
//   location: string;
//   price: string;
//   talks: Talk[];
// };

// ORIGINAL
// type Webinar = {
//   title: string;
//   description: string;
//   data: Date;
//   capacity: number;
//   rsvp: number;
//   kind: string;
//   url: string;
//   price?: number;
//   taks: Talk;
// };

// Intersection Types
type TechEventBase = {
  title: string;
  description: string;
  date: Date;
  capacity: number;
  rsvp: number;
  kind: string;
};

// refactor the original three types to combine 'TechEventBase'
// Conference, Meetup and Webinar
type Conference = TechEventBase & {
  location: string;
  price: number;
  talks: Talk[];
};

type Meetup = TechEventBase & {
  location: string;
  price: number;
  talks: Talk[];
};

type Webinar = TechEventBase & {
  url: string;
  price?: number;
  talks: Talk;
};
