type VideoFormatURLs = {
  format360p: URL;
  format480p: URL;
  format720p: URL;
  format1080p: URL;
};

declare const videos: VideoFormatURLs;

function isFormatValiable(
  obj: VideoFormatURLs,
  key: string
): key is keyof VideoFormatURLs {
  return key in obj;
}

function loadFormat(format: string): void {
  if (isFormatValiable(videos, format)) {
    videos[format];
  }
}

loadFormat("format1080p");

type SubtitleURLs = {
  english: URL;
  german: URL;
  french: URL;
};

function isSubtitleValiable(
  obj: SubtitleURLs,
  key: string
): key is keyof SubtitleURLs {
  return key in obj;
}
