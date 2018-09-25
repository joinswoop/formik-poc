const asyncSubmission = values =>
  new Promise((resolve, reject) => {
    // reset any existing form errors in the store
    setTimeout(() => {
      console.log('Form submission success', values);
      if (Math.floor(Math.random() * 3) + 1 === 3) {
        // We have an error
        // dispatch error message
        reject({});
      } else {
        resolve();
      }
    }, 3000);
  });

export default asyncSubmission;
