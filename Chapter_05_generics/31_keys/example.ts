type VideoFormatURLs = {
  format360p: URL;
  format480p: URL;
  format720p: URL;
  format1080p: URL;
};

declare const videos: VideoFormatURLs;

function loadVideoFormat(
  fileFormats: VideoFormatURLs,
  format: keyof VideoFormatURLs
) {
  // you know
}

type URLObject = {
  [k: string]: URL;
};

type Loaded<Key> = {
  format: Key;
  loaded: boolean;
};

async function loadFile<Formats extends URLObject, Key extends keyof Formats>(
  fileFormats: Formats,
  format: Key
): Promise<Loaded<Key>> {
  const data = fetch(fileFormats[format].href);
  return {
    format,
    loaded: data.response === 200,
  };
}

loadFile(videos, "format4k");

const result = await loadFile(videos, "format1080p");

if (result.format !== "format1080p") {
  throw new Error("Your implementation is wrong");
}
