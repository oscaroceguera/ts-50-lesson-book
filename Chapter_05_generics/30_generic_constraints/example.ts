type VideoFormatURLs = {
  format360p: URL;
  format480p: URL;
  format720p: URL;
  format1080p: URL;
};

type SubtitleURLs = {
  english: URL;
  german: URL;
  french: URL;
};

function isAvaliable<FormatList>(
  obj: FormatList,
  key: string | number | symbol
): key is keyof FormatList {
  return key in obj;
}

// An object with videos formats
declare const videoFormats: VideoFormatURLs;

if (isAvaliable(videoFormats, "format720p")) {
  // Inferred type 'VideoFormatURLs'
  // format is now keyof VideoFormatURLs
}

// An object with video formats
declare const subtitles: SubtitleURLs;

if (isAvaliable(subtitles, "french")) {
  // Inferred type 'SubtitleURLs'
  // format is now keyof SubtitleURLs
}

// avaliable even ones without a cooncrete type declaration:
if (isAvaliable({ name: "Stefan", age: 34 }, "age")) {
  // key is now "name" | "age"
}

// works with all non-object types
if (isAvaliable("A string", "length")) {
  // Also strings have methods,
  // like length, indexOf, ...
}

if (isAvaliable(1233, aKey)) {
  // Also numbers hace methods
  // aKey is now everything number has to offer
}
