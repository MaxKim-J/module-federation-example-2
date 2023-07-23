let init = false;
let id = 0;
const initialize = () => {
  if (!init) {
    id = Math.floor(Math.random() * 90000) + 10000;
    init = true;
  }
};

initialize();
export const getId = () => {
  return id;
};
export const getVersion = () => {
  return 'v1.0.11';
};
