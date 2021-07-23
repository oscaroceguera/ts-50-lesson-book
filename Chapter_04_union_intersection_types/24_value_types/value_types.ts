type TechEventBase = {
  title: string;
  description: string;
  date: Date;
  capacity: number;
  rsvp: number;
  kind: "conference" | "meetup" | "webinar";
};

function getEventTeaser(event: TechEventBase) {
  switch (event.kind) {
    case "conference":
      return `${event.title} (Conference)`;
    case "meetup":
      return `${event.title} (Meetup)`;
    case "webinar":
      return `${event.title} (Webinar)`;
    case "concert":
  }
}
