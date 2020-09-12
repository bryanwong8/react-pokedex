const getType = type => {
  switch (type) {
    case 'bug':
      return '#A8B820';
    case 'dragon':
      return '#7038F8';
    case 'electric':
      return '#F8D030';
    case 'fairy':
      return '#EE99AC';
    case 'fighting':
      return '#C03028';
    case 'fire':
      return '#F08030';
    case 'flying':
      return '#A890F0';
    case 'ghost':
      return '#A292BC';
    case 'grass':
      return '#52c41a';
    case 'ground':
      return '#927D44';
    case 'ice':
      return '#98D8D8';
    case 'normal':
      return '#bfbfbf';
    case 'psychic':
      return '#F85888';
    case 'poison':
      return '#B763CF';
    case 'rock':
      return '#B8A038';
    case 'steel':
      return '#B8B8D0';
    case 'water':
      return '#83B2FF';
    default:
      break;
  }
};

export default getType;
