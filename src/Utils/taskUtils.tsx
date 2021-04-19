export function getId() {
  let id = 1;
  return function () {
    return id++;
  };
}
