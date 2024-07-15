/**
 * Generics
 * @link https://www.typescriptlang.org/docs/handbook/2/generics.html#handbook-content
 */

export function identity<T>(arg: T): T {
  return arg;
}

/**
 * How to Use TypeScript Generics with Functional React Components
 * @link https://www.freecodecamp.org/news/typescript-generics-with-functional-react-components/
 */
const foo: <T>(x: T) => T = (x) => x;

const foo1 = <T>(x: T): T => x;
