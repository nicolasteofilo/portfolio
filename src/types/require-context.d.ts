type RequireContext = {
  keys: () => string[];
  <T = unknown>(id: string): T;
};

declare const require: {
  context: (path: string, deep?: boolean, filter?: RegExp) => RequireContext;
};
