type Talk = {
  title: string;
  abstract: string;
  speaker: string;
};

type TechEventBase = {
  title: string;
  description: string;
  date: Date;
  capacity: number;
  rsvp: number;
};

type Conference = TechEventBase & {
  location: string;
  price: number;
  talks: Talk[];
  kind: "conference";
};

type Meetup = TechEventBase & {
  location: string;
  price: number;
  talks: Talk[];
  kind: "meetup";
};

type Webinar = TechEventBase & {
  url: string;
  price?: number;
  talks: Talk;
  kind: "webinar";
};

type TechEvent = Webinar | Conference | Meetup;

function getEventTeaser(event: TechEvent) {
  switch (event.kind) {
    case "conference":
      return `${event.title} (Conference), ` + `priced at ${event.price} USD`;
    case "meetup":
      return `${event.title} (Meetup), ` + `hosted at ${event.location}`;
    case "webinar":
      return `${event.title} (Webinar), ` + `avaliable online at ${event.url}`;
    case "conference":
      throw new Error("Not sure what to do with that!");
  }
}

const script19 = {
  title: "ScriptConf",
  date: new Date("2019-10-25"),
  capacity: 300,
  rsvp: 289,
  description: "The feel-good JS conference",
  kind: "conference",
  price: 129,
  location: "Central Linz",
  talks: [
    {
      speaker: "Vitaly Friedman",
      title: "Designing with Privacy in mind",
      abstract: "...",
    },
  ],
};

getEventTeaser(script19);

// Fixating value types
const script19Fix: TechEvent = {
  title: "ScriptConf",
  date: new Date("2019-10-25"),
  capacity: 300,
  rsvp: 289,
  description: "The feel-good JS conference",
  // kind: "conference",
  // kind: "conference" as "conference",
  kind: "conference" as const,
  price: 129,
  location: "Central Linz",
  talks: [
    {
      speaker: "Vitaly Friedman",
      title: "Designing with Privacy in mind",
      abstract: "...",
    },
  ],
};

getEventTeaser(script19Fix);
