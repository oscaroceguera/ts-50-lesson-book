type Format360 = {
  format360p: URL;
};
type Format480 = {
  format480p: URL;
};
type Format720 = {
  format720p: URL;
};
type Format1080 = {
  format1080p: URL;
};

type AvailableFormats = Format360 | Format480 | Format720 | Format1080;

const hq: AvailableFormats = {
  format720p: new URL("..."),
  format1080p: new URL("..."),
};

const lofi: AvailableFormats = {
  format360p: new URL("..."),
  format480p: new URL("..."),
};

type VideoFormatURLs = {
  format360p: URL;
  format480p: URL;
  format720p: URL;
  format1080p: URL;
};

type split = keyof VideoFormatURLs;

// Equivalent to
type SplitAfterKeyof =
  | "format360p"
  | "format480p"
  | "format720p"
  | "format1080p";

// Other form
type SplitTwo = {
  [P in keyof VideoFormatURLs]: P;
};

// Equivalent to
type SplitTwoAfter = {
  format360p: "format360p";
  format480p: "format480p";
  format720p: "format720p";
  format1080p: "format1080p";
};
