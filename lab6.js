const a = {
  name: Promise.resolve('Aleksei Fitisov')
};

async function task(x) {
  return x.name; // возвращаем значение свойство объекта
};

task(a).then((x) => {
  console.log(x);
})