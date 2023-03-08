const getNextId = () => {
  let nextId = localStorage.getItem("nextid");
  if (!nextId || isNaN(nextId)) {
    nextId = 1;
  } else {
    nextId = parseInt(nextId) + 1;
  }
  localStorage.setItem("nextid", nextId.toString());
  return nextId;
};

export default getNextId;
