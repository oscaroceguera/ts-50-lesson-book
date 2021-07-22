type Result = {
  title: string;
  url: string;
  abstract: string;
};

declare function search(
  term: string,
  callback: (result: Result[]) => void,
  tags?: string[]
): void;
