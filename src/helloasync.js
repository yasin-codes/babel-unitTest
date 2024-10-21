export const helloAsync = (name) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name) {
        resolve(`Hello, ${name}!`);
      } else {
        reject("Empty");
      }
    }, 1000);
  });
};
