type Talk = {
  title: string;
  abstract: string;
  speaker: string;
};

type Conference = {
  title: string;
  description: string;
  date: Date;
  capacity: number;
  rsvp: number;
  kind: string;
  location: string;
  price: number;
  talks: Talk[];
};

type Meetup = {
  title: string;
  description: string;
  date: Date;
  capacity: number;
  rsvp: number;
  kind: string;
  location: string;
  price: number;
  talks: Talk[];
};

type Webinar = {
  title: string;
  description: string;
  data: Date;
  capacity: number;
  rsvp: number;
  kind: string;
  url: string;
  price?: number;
  talks: Talk;
};

// Union Types
type TechEvent = Webinar | Conference | Meetup;

function printEvent(event: TechEvent) {
  if (event.price) {
    // Price exists!
    if (typeof event.price === "number") {
      // We know that price is a number
      console.log("Price inEUR: ", event.price);
    } else {
      // We know that price is a string, so the event is free!
      console.log("It is free!");
    }
  }

  if (Array.isArray(event.talks)) {
    // talks is an array
    event.talks.forEach((talk) => {
      console.log(talk.title);
    });
  } else {
    // It's just a single talk
    console.log(event.talks.title);
  }
}
