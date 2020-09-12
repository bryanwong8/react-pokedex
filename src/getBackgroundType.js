const getBackgroundType = type => {
  switch (type) {
    case 'bug':
      return '#C6D16E';
    case 'dragon':
      return '#A27DFA';
    case 'electric':
      return '#FAE078';
    case 'fairy':
      return '#F4BDC9';
    case 'fighting':
      return '#D67873';
    case 'fire':
      return '#F5AC78';
    case 'flying':
      return '#A1BBEC';
    case 'ghost':
      return '#705898';
    case 'grass':
      return '#A7DB8D';
    case 'ground':
      return '#E0C068';
    case 'ice':
      return '#BCE6E6';
    case 'normal':
      return '#d9d9d9';
    case 'psychic':
      return '#ffadd2';
    case 'poison':
      return '#d3adf7';
    case 'rock':
      return '#C9BB8A';
    case 'water':
      return '#91d5ff';
    default:
      break;
  }
};

export default getBackgroundType;
