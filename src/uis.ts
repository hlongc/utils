const now = +new Date();
let index = 0;

export function uid() {
  return `uid-${now}-${++index}`;
}
