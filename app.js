// const doAsyncTask = (cb) => {
//   setImmediate(() => {
//     console.log("Async Task calling callback");
//     cb()
//   })
// }
// doAsyncTask(() => {
//   console.log(message);
// });

// let message = 'Callback called';

// :*Swallow error*:

// const fs = require('fs');

// const readFileThenDo = next => {
//   fs.readFile('./myfile.hhs', (err, data) => {
//     next(err, data);
//   });
// };

// readFileThenDo((err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   } else {
//     console.log(err);
//   }
// });

// NOTE: You can't catch an error on async code

// :* Promises *:
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Async func called, resolve it');
    resolve();
  }, 1000);
});

const doAsyncTask = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Async shit happened');
      let data = 'abc';
      resolve(data);
    }, 1000);
  });
  return promise;
};

let call = doAsyncTask();
call
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log('[ERROR]', err);
  });
