import Chance from 'chance';

const chance = new Chance();

export const tabs = {
  'teams': {
    label: 'Select Teams',
  },
  'players': {
    label: 'Select Players',
  },
  'result': {
    label: 'Attempt Trade',
  },
};

export const calculateContractsValue = (players) => (
  players.reduce((acc, player) => {
    return acc + player.salary;
  }, 0)
);

const positions = [
  'PG',
  'SG',
  'SF',
  'PF',
  'C',
];

export const teams = [
  { label: "Atlanta Hawks", value: "Atlanta Hawks"},
  { label: "Boston Celtics", value: "Boston Celtics"},
  { label: "Brooklyn Nets", value: "Brooklyn Nets"},
  { label: "Charlotte Hornets", value: "Charlotte Hornets"},
  { label: "Chicago Bulls", value: "Chicago Bulls"},
  { label: "Cleveland Cavaliers", value: "Cleveland Cavaliers"},
  { label: "Dallas Mavericks", value: "Dallas Mavericks"},
  { label: "Denver Nuggets", value: "Denver Nuggets"},
  { label: "Detroit Pistons", value: "Detroit Pistons"},
  { label: "Golden State Warriors", value: "Golden State Warriors"},
  { label: "Houston Rockets", value: "Houston Rockets"},
  { label: "Indiana Pacers", value: "Indiana Pacers"},
  { label: "LA Clippers", value: "LA Clippers"},
  { label: "Los Angeles Lakers", value: "Los Angeles Lakers"},
  { label: "Memphis Grizzlies", value: "Memphis Grizzlies"},
  { label: "Miami Heat", value: "Miami Heat"},
  { label: "Milwaukee Bucks", value: "Milwaukee Bucks"},
  { label: "Minnesota Timberwolves", value: "Minnesota Timberwolves"},
  { label: "New Orleans Pelicans", value: "New Orleans Pelicans"},
  { label: "New York Knicks", value: "New York Knicks"},
  { label: "Oklahoma City Thunder", value: "Oklahoma City Thunder"},
  { label: "Orlando Magic", value: "Orlando Magic"},
  { label: "Philadelphia 76ers", value: "Philadelphia 76ers"},
  { label: "Phoenix Suns", value: "Phoenix Suns"},
  { label: "Portland Trail Blazers", value: "Portland Trail Blazers"},
  { label: "Sacramento Kings", value: "Sacramento Kings"},
  { label: "San Antonio Spurs", value: "San Antonio Spurs"},
  { label: "Toronto Raptors", value: "Toronto Raptors"},
  { label: "Utah Jazz", value: "Utah Jazz"},
  { label: "Washington Wizards", value: "Washington Wizards"},
];

export const allPlayers = {};

teams.forEach((team) => {
  let times = 12;
  const maxSalary = 30;
  const minSalary = 1;
  const minYears = 1;
  const maxYears = 5;
  const players = [];

  for(let i = 0;i < times; i++) {
    const randomSalary = ((Math.random() * (maxSalary - minSalary)) + minSalary);
    const years = Math.floor(Math.random() * (maxYears - minYears)) + minYears;
    players.push({
      name: chance.name({ gender: 'male' }),
      position: positions[Math.floor(Math.random() * positions.length)],
      salary: randomSalary,
      years: years,
    });
  }

  allPlayers[team.label] = players.sort((a,b) => b.salary - a.salary);
});
