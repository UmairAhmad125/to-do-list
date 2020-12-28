const Projectgenertor = (name) => ({
  id: Math.round(Math.random() * 20000000).toString(),
  name,
  todo: [],
});


export default Projectgenertor;
