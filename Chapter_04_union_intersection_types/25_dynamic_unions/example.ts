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

type EventKind = "conference" | "webinar" | "meetup";

function filterByKind(list: TechEvent[], kind: EventKind): TechEvent[] {
  return list.filter((el) => el.kind === kind);
}

// A list of thech events we get from a back end
declare const eventList: TechEvent[];

filterByKind(eventList, "conference"); // OK
filterByKind(eventList, "webinar"); // Ok
filterByKind(eventList, "meetup"); // Ok
filterByKind(eventList, "concert"); // Bang: 'concert' is not part of EventKind
