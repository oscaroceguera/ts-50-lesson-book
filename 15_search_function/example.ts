interface Me {
  name: string;
  age: number;
  hobby: string;
}

// The declare keyword make the function available without implement
declare function someStuff(name: string, age: number): Me;

// ---

type Result = {
  title: string;
  url: string;
  abstract: string;
};

// Option - ONE
function search(query: string, tags?: string[]): Promise<Result[]> {
  let queryString = `?query=${query}`;

  if (tags && tags.length) {
    queryString += `&tags==${tags.join()}`;
  }

  return fetch(`/search${queryString}`).then((response) => response.json());
}

// Option - TWO
// function searchSecondOption(query: string, tags?: string[]) {
//   let queryString = `?query=${query}`;

//   if (tags && tags.length) {
//     queryString += `&tags==${tags.join()}`;
//   }

//   return fetch(`/search${queryString}`).then(
//     (response) => response.json() as Promise<Result[]>
//   );
// }

search("Ember");
search("Ember", []);
search("Ember", ["Javascript"]);
search("Ember", ["Javascript", "CSS"]);
