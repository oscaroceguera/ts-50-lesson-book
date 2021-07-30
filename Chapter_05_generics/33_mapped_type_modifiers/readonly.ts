type VideoFormatURLs = {
  format360p: URL;
  format480p: URL;
  format720p: URL;
  format1080p: URL;
};

type SubtitleURLs = { english: URL; german: URL; french: URL };

type UserPreferences = {
  format: keyof VideoFormatURLs;
  subtitles: {
    active: boolean;
    language: keyof SubtitleURLs;
  };
  theme: "dark" | "light";
};

type Const<Obj> = {
  readonly [Key in Obj]: Obj[Key];
};

const defaultUP: Const<UserPreferences> = {
  format: "format1080p",
  subtitles: {
    active: false,
    language: "english",
  },
  theme: "light",
};
defaultUP.format = "format720p";
