$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("consult_dictionary/DefinitionApple.feature");
formatter.feature({
  "line": 2,
  "name": "Lookup a definition",
  "description": "In order to talk better\nAs an English student\nI want to look up word definitions",
  "id": "lookup-a-definition",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@smoke"
    }
  ]
});
formatter.scenario({
  "line": 7,
  "name": "Looking up the definition of \u0027apple\u0027",
  "description": "",
  "id": "lookup-a-definition;looking-up-the-definition-of-\u0027apple\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "the user is on the Wikionary home page",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "the user looks up the definition of the word \u0027apple\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "they should see the definition \u0027A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinitionSteps.givenTheUserIsOnTheWikionaryHomePage()"
});
formatter.result({
  "duration": 4875657102,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 46
    }
  ],
  "location": "DefinitionSteps.whenTheUserLooksUpTheDefinitionOf(String)"
});
formatter.result({
  "duration": 1315800407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "A common, round fruit produced by the tree Malus domestica, cultivated in temperate climates.",
      "offset": 32
    }
  ],
  "location": "DefinitionSteps.thenTheyShouldSeeADefinitionContainingTheWords(String)"
});
formatter.result({
  "duration": 1200516816,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Looking up the definition of \u0027pear\u0027",
  "description": "",
  "id": "lookup-a-definition;looking-up-the-definition-of-\u0027pear\u0027",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "the user is on the Wikionary home page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "the user looks up the definition of the word \u0027pear\u0027",
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "they should see the definition \u0027An edible fruit produced by the pear tree, similar to an apple but elongated towards the stem.\u0027",
  "keyword": "Then "
});
formatter.match({
  "location": "DefinitionSteps.givenTheUserIsOnTheWikionaryHomePage()"
});
formatter.result({
  "duration": 405223128,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "pear",
      "offset": 46
    }
  ],
  "location": "DefinitionSteps.whenTheUserLooksUpTheDefinitionOf(String)"
});
formatter.result({
  "duration": 4324433666,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An edible fruit produced by the pear tree, similar to an apple but elongated towards the stem.",
      "offset": 32
    }
  ],
  "location": "DefinitionSteps.thenTheyShouldSeeADefinitionContainingTheWords(String)"
});
formatter.result({
  "duration": 703502655,
  "status": "passed"
});
});