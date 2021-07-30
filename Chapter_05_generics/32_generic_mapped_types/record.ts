/**
 * Record <K, T> crea un tipo de objeto donde todos los tipos T obtienen el tipo K como diccionario
 * Se define como:
 * type Record<K extends string | number | symbol, T> = { [P in K]: T }
 */

type URLObject = Record<string, URL>;
