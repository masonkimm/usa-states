console.log('JS connected.');

const search = document.getElementById('search');
const matchList = document.getElementById('match-list');

// search the states.json and filter through
const searchStates = async (searchText) => {
  const res = await fetch('../data/states.json');
  const states = await res.json();
  // console.log(states);

  // get matches to current text input
  let matches = states.filter((state) => {
    const regex = new RegExp(`^${searchText}`, 'gi');
    // to see if any matches
    return state.name.match(regex) || state.abbr.match(regex);
  });

  if (searchText.length === 0) {
    matches = [];
  }

  console.log(matches);
};

search.addEventListener('input', () => {
  searchStates(search.value);
});
