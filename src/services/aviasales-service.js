export const getSearchID = async () => {
  const res = await fetch('https://aviasales-test-api.kata.academy/search');
  const data = await res.json();
  return data.searchId;
};

export const getTickets = async (id) => {
  try {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${id}`);
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error();
  }
};
