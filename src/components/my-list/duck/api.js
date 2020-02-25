export const getData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: 'data1', display: true },
        { name: 'data2', display: true },
        { name: 'data3', display: true },
        { name: 'data4', display: false },
        { name: 'data5', display: false },
        { name: 'data6', display: true },
        { name: 'data7', display: true }
      ]);
    }, 3000);
  });
