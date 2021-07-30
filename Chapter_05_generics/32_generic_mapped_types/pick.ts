/**
 * Pick <0, K> crea un nuevo objeto con las claves de propiedad seleccionadas
 * K del objeto O. se define como:
 * type Pick<O, K extends keyof O> = { [P in K]: O[P]; }
 */

type VideoFormatURLs = {
  format360p: URL;
  format480p: URL;
  format720p: URL;
  format1080p: URL;
};

type HD = Pick<VideoFormatURLs, "format1080p" | "format720p">;

// equivalente a
type HD_After_pick = {
  format1080p: URL;
  format720p: URL;
};
