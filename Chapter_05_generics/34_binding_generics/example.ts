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

function combinePreferences(
  defaultP: UserPreferences,
  userP: Partial<UserPreferences>
) {
  return { ...defaultP, ...userP };
}

declare const prefs: {
  format: "format360p" | "format480p" | "format720p" | "format1080p";
  subtitles: {
    active: boolean;
    language: "english" | "german" | "french";
  };
  theme: "dark" | "light";
};
