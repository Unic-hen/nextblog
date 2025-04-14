const str = `
let num = 10;
function hello() {
  console.log("Hello, World!");
  return num + 10;
}
const run = () => {
  console.log(hello());
};

run();
`;
const keywords = [
  {
    value: "let",
    condition: (str, char, current) =>
      char === "l" && str.slice(current, current + 3) === "let",
    do: (current) => (current += 3),
  },
  {
    value: "const",
    condition: (str, char, current) =>
      char === "c" && str.slice(current, current + 5) === "const",
    do: (current) => (current += 5),
  },
  {
    value: "function",
    condition: (str, char, current) =>
      char === "f" && str.slice(current, current + 8) === "function",
    do: (current) => (current += 8),
  },
  {
    value: "return",
    condition: (str, char, current) =>
      char === "r" && str.slice(current, current + 6) === "return",
    do: (current) => (current += 6),
  },
];
const tokenizer = (str) => {
  let current = 0;
  let tokens = [];
  while (current < str.length) {
    const char = str[current];
    if (char === " ") {
      current++;
      continue;
    }
    keywords.forEach((keyword) => {
      if (keyword.condition(str, char, current)) {
        tokens.push({
          type: "keyword",
          value: keyword.value,
        });
        keyword.do(current);
      }
    });
    if (/[a-zA-Z]/.test(char)) {
      let identifier = "";
      while (/[a-zA-Z0-9]/.test(str[current])) {
        identifier += str[current];
        current++;
      }
      if (identifier !== "") {
        tokens.push({
          type: "identifier",
          value: identifier,
        });
      }
    }
    if (char === "'" || char === '"') {
      tokens.push({
        type: "string tag",
        value: char,
      });
      current++;
    }
    if (char === "(" || char === "{") {
      tokens.push({
        type: "left paren",
        value: char,
      });
      current++;
    }
    if (char === ")" || char === "}") {
      tokens.push({
        type: "right paren",
        value: char,
      });
      current++;
    }
    if (char === ".") {
      tokens.push({
        type: "dot",
        value: char,
      });
      current++;
    }
    if (/[+\-*\/=]/.test(char)) {
      tokens.push({
        type: "operator",
        value: char,
      });
      current++;
    }
    if (/[0-9]/.test(char)) {
      let number = "";
      while (/[0-9]/.test(str[current])) {
        number += str[current];
        current++;
      }
      tokens.push({
        type: "number",
        value: number,
      });
    }

    current++;
  }
  return tokens;
  // TODO: 实现代码高亮
};
const tokens = tokenizer(str);
console.log(tokens);

const parser = () => {
  // TODO: 实现代码解析
  tokens.forEach((token) => {
    if (token.type === "keyword") {
      return {
        type: token.value,
      };
    }
  });
};
const compiler = () => {
  // TODO: 实现代码编译
};
let num = 10;
function hello() {
  console.log("Hello, world!");
  return num + 10;
}
const run = () => {
  console.log(hello());
};
run();
