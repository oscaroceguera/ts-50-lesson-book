type Result = {
  title: string;
  url: string;
  abstract: string;
};

function search(query: string, tags?: string[]): Promise<Result[]> {
  let queryString = `?query=${query}`;

  if (tags && tags.length) {
    queryString += `&tags==${tags.join()}`;
  }

  return fetch(`/search${queryString}`).then((response) => response.json());
}

// type SearchFn = typeof search;
type SearhFn = (
  query: string,
  tags?: string[] | undefined
) => Promise<Result[]>;

/* ********************************************************************** */

/**
 * FUNCTION TYPES IN OBJECTS
 */

// option 2
type AssembleFn = (includeTags: boolean) => string;

type Query = {
  query: string;
  tags?: string[];
  //assemble: (includeTags: boolean) => string; // option 1
  assemble: AssembleFn; // option 2
};

const query: Query = {
  query: "Ember",
  tags: ["javascript"],
  assemble(includeTags = false) {
    let query = `?query=${this.query}`;
    if (includeTags && typeof this.tags !== "undefined") {
      query += `&${this.tags.join(".")}`;
    }
    return query;
  },
};

/**
 * FUNCTION TYPES IIN FUNCTIONS
 */
type SearchFnTwo = (
  query: string,
  tags?: string[] | undefined
) => Promise<Result[]>;

declare function displaySearch(
  inputId: string,
  outputId: string,
  search: SearchFnTwo
): void;

/**
 * ANONYMOUUS FUNCTIONS
 */
