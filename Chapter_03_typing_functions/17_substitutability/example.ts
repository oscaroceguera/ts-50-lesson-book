type Result = {
  title: string;
  url: string;
  abstract: string;
};

type SearchFn = (
  query: string,
  tags?: string[] | undefined
) => Promise<Result[]>;

const dummyContentSearchFn: SearchFn = function () {
  return Promise.resolve([
    {
      title: "Form Design Patterns",
      url: "/form-design-patterns",
      abstract: "A practical book on accessible forms",
    },
  ]);
};

dummyContentSearchFn();
