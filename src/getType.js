const getTypeColor = type => {
  switch (type) {
    case 'bug':
      return '#92BC2C';
    case 'dragon':
      return '#0C69C8';
    case 'electric':
      return '#FFE981';
    case 'fairy':
      return '#EE90E6';
    case 'fighting':
      return '#D3425F';
    case 'fire':
      return '#FF555E';
    case 'flying':
      return '#A1BBEC';
    case 'ghost':
      return '#5F6DBC';
    case 'grass':
      return '#8BF18B';
    case 'ground':
      return '#DA7C4D';
    case 'ice':
      return '#75D0C1';
    case 'normal':
      return '#A0A29F';
    case 'psychic':
      return '#FFDBE9';
    case 'poison':
      return '#B763CF';
    case 'rock':
      return '#C9BB8A';
    case 'water':
      return '#83B2FF';
    default:
      break;
  }
};

export default getTypeColor;
