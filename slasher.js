const scenario = {
    slasher: 'Jason',
    location: 'Camp CodeClan',
    weapon: 'Machete'
  };
  
  const changeScenario = function() {
    scenario.slasher = 'Freddie Kruger';
    scenario.location = 'Cabin';
    scenario.weapon = 'Knife glove';
  
    const plotTwist = function(location) {
      if (scenario.location === location) {
        scenario.murderer = 'Ash Williams';
      }
  
      const unexpectedOutcome = function(slasher) {
        if (scenario.slasher === slasher) {
          scenario.weapon = 'Chainsaw';
        }
      }
  
      unexpectedOutcome('Ash Williams');
    }
  
    plotTwist('Elm Street');
  }
  
  const declareSlasher = function() {
    return `The slasher is ${scenario.slasher}.`
  }
  
  changeScenario();
  const verdict = declareSlasher();
  console.log(verdict);