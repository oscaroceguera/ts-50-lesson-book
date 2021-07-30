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

const defaultUp: UserPreferences = {
  format: "format1080p",
  subtitles: {
    active: true,
    language: "english",
  },
  theme: "light",
};

const userPreferences = {
  format: "format720p",
};

function combinePreferences(defaultP: UserPreferences, userP: unknown) {
  return { ...defaultUp, ...userP };
}

type OptionalUserPreferences = {
  format?: keyof VideoFormatURLs;
  subtitles?: {
    active?: boolean;
    language?: keyof SubtitleURLs;
  };
  theme?: "dark" | "light";
};

type Optional<Obj> = {
  [Key in keyof Obj]?: Obj[Key];
};

function combinePreferences(
  defaultP: UserPreferences,
  userP: Optional<UserPreferences>
) {
  return { ...defaultP, ...userP };
}

// OK
const prefs = combinePreferences(defaultUp, { format: "format720p" });

// Boom!
// const prefs2 = combinePreferences(defaultUp, { format: "format720p" });
