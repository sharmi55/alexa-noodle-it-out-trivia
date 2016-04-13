/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

/**
 * This sample shows how to create a simple Trivia skill with a multiple choice format. The skill
 * supports 1 player at a time, and does not support games across sessions.
 */

'use strict';

/**
 * When editing your questions pay attention to your punctuation. Make sure you use question marks or periods.
 * Make sure the first answer is the correct one. Set at least 4 answers, any extras will be shuffled in.
 */
var questions = [
  {
      "Which of the following is not a raw fish dish?": [
          "Escargot",
          "Crudo",
          "Tuna tartare",
          "Ceviche"
      ]
  },
  {
      "Which animal's feces is collected to produce the beans of kopi luwak, the world's most expensive coffee?": [
          "Civet",
          "Wild cat",
          "Weasel",
          "Mink"
      ]
  },
  {
      "Which statement is true about a Po'boy sandwich?": [
          "It always contains seafood",
          "It's from New York City",
          "It's a cheese sandwich",
          "It's a fried blooming onion"
      ]
  },
  {
      "One of the main ingredients for hummus is:": [
          "Tahini",
          "Eggplant",
          "Zucchini",
          "Ground beef"
      ]
  },
  {
      "In Greek mythology, which fruit was Persephone tricked into eating by Hades, the god of the underworld?": [
          "Pomegranate",
          "Fig",
          "Date",
          "Peach"
      ]
  },
  {
      "Which of the following is not a beverage made of milk?": [
          "Coconut milk",
          "Kefir",
          "Eggnog",
          "Lassi"
      ]
  },
  {
      "Which of the following is a tube shaped pasta": [
          "Rigatoni",
          "Ravioli",
          "Linguine",
          "Gnocchi"
      ]
  },
  {
      "Which of the following is an herbal tea?": [
          "Rooibos",
          "Oolong",
          "Jasmine tea",
          "Sencha"
      ]
  },
  {
      "Which ingredient is necessary to make a cheese fondue?": [
          "White wine",
          "Chocolate",
          "Cayenne pepper",
          "Egg"
      ]
  },
  {
      "An alcoholic drink popular in South Korea is called:": [
          "Soju",
          "Vodka",
          "Ouzo",
          "Grappa"
      ]
  },
  {
      "One of the main ingredients in the puttanesca sauce is": [
          "Anchovy",
          "Nutmeg",
          "Turmeric",
          "Dried shrimp"
      ]
  },
  {
      "Agave nectar is": [
          "A sweetner",
          "Another name for tequila",
          "Mango juice",
          "Peach pulp"
      ]
  },
  {
      "Pierogi is the national dish of ": [
          "Poland",
          "Madagascar",
          "Tanzania",
          "Estonia"
      ]
  },
  {
      "What is another name for rocket lettuce?": [
          "Arugula",
          "Kale",
          "Endive",
          "Bok choy"
      ]
  },
  {
      "Which beverage is not considered a sparkling white wine?": [
          "Campari",
          "Cava",
          "Champagne",
          "Prosecco"
      ]
  },
  {
      "One of the main ingredients in sushi is": [
          "Rice vinegar",
          "Sesame seeds",
          "Miso",
          "Matcha"
      ]
  },
  {
      "Which of the following is a blue cheese?": [
          "Gorgonzola",
          "Brie",
          "Camembert",
          "Ricotta"
      ]
  },
  {
      "Adobo, a meat dish, originates from which country?": [
          "The Philippines",
          "Spain",
          "Burundi",
          "Algeria"
      ]
  },
  {
      "What is a Vietnamese sandwich called?": [
          "Banh mi",
          "Bibimbap",
          "Biryani",
          "Baguette"
      ]
  },
    {
        "The noodle dish called 'pho' originates from:": [
            "Vietnam",
            "China",
            "Thailand",
            "Cambodia",

        ]
    },
    {
        "If you cut herbs or leafy greens into fine ribbons, it is called a:": [
            "Chiffonade",
            "Julienne",
            "Marianne",
            "Mince"
        ]
    },
    {
        "Which step is not part of the chocolate making process? ": [
            "Boiling the cocoa beans",
            "Fermenting the cocoa beans",
            "Roasting the cocoa beans",
            "Sun drying the cocoa beans"
        ]
    },
    {
        "Za'atar is a blend of herbs, seeds and spices from the Middle East. The mix includes": [
            "Sesame seeds",
            "Cumin",
            "Cinnamon",
            "Mustard seeds"
        ]
    },
    {
        "In which country is eating a moving octopus considered a delicacy?": [
            "South Korea",
            "Russia",
            "Tajikistan",
            "Senegal"
        ]
    },
    {
        "Which dish is not of Jewish origin?": [
            "Tempura",
            "Challah",
            "Shakshuka",
            "Kugel"
        ]
    },
    {
        "Injera, a spongy flatbread, is eaten mainly by people from": [
            "Ethiopia",
            "Qatar",
            "Belgium",
            "Israel"
        ]
    },
    {
        "Tomatoes originate from": [
            "South America",
            "East Asia",
            "Italy",
            "Southern France"
        ]
    },
    {
        "Insects are not considered a delicacy in": [
            "Canada",
            "Cameroon",
            "Saudi Arabia",
            "Brazil"
        ]
    },
    {
        "What ingredient is needed to make kimchi?": [
            "Napa cabbage",
            "Yellow beetroot",
            "Tofu",
            "Kombucha"
        ]
    },
    {
         "In which country do they eat with their hands?": [
           "Nepal",
           "South Korea",
           "Ukraine",
           "Macedonia"
         ]
    },
    {
        "Which country produces the Iberian ham?": [
            "Spain",
            "Italy",
            "Germany",
            "The United States"
        ]
    },
    {
        "In which country do they eat fries covered in gravy and cheese curds?": [
            "Canada",
            "Norway",
            "Ivory Coast",
            "Portugal"
        ]
    },
    {
        "A pupusa is": [
            "A corn tortilla filled with cheese, meat or refried beans",
            "A sauce slow-cooked with nuts, spices and chocolate",
            "A taco stuffed with cacti, eggs and salsa",
            "A mix of meat and corn-meal dough steamed in a husk"
        ]
    },
    {
        "What is the most popular variety of avocado in the United States?": [
            "Haas",
            "Zutano",
            "Fuerte",
            "Pinkerton"
        ]
    },
    {
        "Which cheese originates from Cyprus": [
            "Halloumi",
            "Mozzarella",
            "Stilton",
            "Edam"
        ]
    },
    {
        "German sausage served with curry ketchup is called ": [
            "A currywurst",
            "A hotdog and curry",
            "A wurstcurry",
            "A bratwurst"
        ]
    },
    {
        "What is another name for eggplant?": [
            "Aubergine",
            "Coriander",
            "Courgette",
            "Capsicum"
        ]
    },
    {
        "What is the name of a French delicacy made from goose or duck liver?": [
            "Foie gras",
            "Bisque",
            "Eclair",
            "Fromage"
        ]
    },
    {
        "Which celebrity chef hosted the tv series called 'No Reservations'?": [
            "Anthony Bourdain",
            "Gordon Ramsey",
            "Jamie Oliver",
            "Nigella Lawson"
        ]
    },
    {
        "Sambal is a hot sauce eaten by": [
            "Indonesians",
            "Israelis",
            "Iranians",
            "Iraquis"
        ]
    },
    {
        "What is sorbet?": [
            "Frozen dessert made of water and fruit juice",
            "Strawberry ice-cream",
            "Another word for popsicle",
            "A frozen custard",
        ]
    },
    {
        "Horchata is ": [
            "A beverage made of ground nuts, rice or seeds",
            "A technique for finely dicing vegetables",
            "A type of Greek yogurt ",
            "A liquor made from horseradish"
        ]
    },
    {
        "Fortune cookies are from: ": [
            "The United States",
            "China",
            "Germany",
            "Japan"
        ]
    },
    {
        "A truffle is a type of": [
            "Fungi",
            "Potato",
            "Mineral",
            "Vegetable"
        ]
    },
    {
        "Who is the founder of molecular gastronomy?": [
            "Ferran Adria",
            "Jamie Oliver",
            "Wolfgang Puck",
            "Jacques Pepin"
        ]
    },
    {
        "A selection of several small dishes is not called:": [
            "Tagine",
            "Tapas",
            "Mezze",
            "Dim sum"
        ]
    },
    {
        "Portuguese custard tarts' main ingredient is": [
            "Egg",
            "Ground pork",
            "Cinnamon",
            "Salted cod"
        ]
    },
    {
        "Couscous is made of ": [
            "Semolina",
            "Rice",
            "Barley",
            "Quinoa"
        ]
    },
    {
        "In which country do they eat raw herring with onions?": [
            "The Netherlands",
            "Iraq",
            "Australia",
            "Eritrea"
        ]
    },
    {
        "What gives borscht its reddish color?": [
            "Beets",
            "Red food coloring",
            "Pig blood",
            "Tomatoes"
        ]
    }
];
// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        /**
         * Uncomment this if statement and populate with your skill's application ID to
         * prevent someone else from configuring a skill that sends requests to this function.
         */

//     if (event.session.application.applicationId !== "amzn1.echo-sdk-ams.app.d1a03701-fc16-4236-a599-0ef4550ea86a") {
//         context.fail("Invalid Application ID");
//      }

        if (event.session.new) {
            onSessionStarted({requestId: event.request.requestId}, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};
/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId
        + ", sessionId=" + session.sessionId);

    getWelcomeResponse(callback);
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId
        + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // handle yes/no intent after the user has been prompted
    if (session.attributes && session.attributes.userPromptedToContinue) {
        delete session.attributes.userPromptedToContinue;
        if ("AMAZON.NoIntent" === intentName) {
            handleFinishSessionRequest(intent, session, callback);
        } else if ("AMAZON.YesIntent" === intentName) {
            handleRepeatRequest(intent, session, callback);
        }
    }

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("DontKnowIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.YesIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.NoIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AMAZON.StartOverIntent" === intentName) {
        getWelcomeResponse(callback);
    } else if ("AMAZON.RepeatIntent" === intentName) {
        handleRepeatRequest(intent, session, callback);
    } else if ("AMAZON.HelpIntent" === intentName) {
        handleGetHelpRequest(intent, session, callback);
    } else if ("AMAZON.StopIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else if ("AMAZON.CancelIntent" === intentName) {
        handleFinishSessionRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId
        + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

// ------- Skill specific business logic -------

var ANSWER_COUNT = 4;
var GAME_LENGTH = 5;
var CARD_TITLE = "Noodle It Out"; // Be sure to change this for your skill.

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        speechOutput = "Noodle It Out. I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin. ",
        shouldEndSession = false,

        gameQuestions = populateGameQuestions(),
        correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT)), // Generate a random index for the correct answer, from 0 to 3
        roundAnswers = populateRoundAnswers(gameQuestions, 0, correctAnswerIndex),

        currentQuestionIndex = 0,
        spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0],
        repromptText = "Question 1. " + spokenQuestion + " ",

        i, j;

    for (i = 0; i < ANSWER_COUNT; i++) {
        repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
    }
    speechOutput += repromptText;
    sessionAttributes = {
        "speechOutput": repromptText,
        "repromptText": repromptText,
        "currentQuestionIndex": currentQuestionIndex,
        "correctAnswerIndex": correctAnswerIndex + 1,
        "questions": gameQuestions,
        "score": 0,
        "correctAnswerText":
            questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
    };
    callback(sessionAttributes,
        buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [];
    var indexList = [];
    var index = questions.length;

    if (GAME_LENGTH > index){
        throw "Invalid Game Length.";
    }

    for (var i = 0; i < questions.length; i++){
        indexList.push(i);
    }

    // Pick GAME_LENGTH random questions from the list to ask the user, make sure there are no repeats.
    for (var j = 0; j < GAME_LENGTH; j++){
        var rand = Math.floor(Math.random() * index);
        index -= 1;

        var temp = indexList[index];
        indexList[index] = indexList[rand];
        indexList[rand] = temp;
        gameQuestions.push(indexList[index]);
    }

    return gameQuestions;
}

function populateRoundAnswers(gameQuestionIndexes, correctAnswerIndex, correctAnswerTargetLocation) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswerTargetLocation variable. Note that you can have as many answers as you want but
    // only ANSWER_COUNT will be selected.
    var answers = [],
        answersCopy = questions[gameQuestionIndexes[correctAnswerIndex]][Object.keys(questions[gameQuestionIndexes[correctAnswerIndex]])[0]],
        temp, i;

    var index = answersCopy.length;

    if (index < ANSWER_COUNT){
        throw "Not enough answers for question.";
    }

    // Shuffle the answers, excluding the first element.
    for (var j = 1; j < answersCopy.length; j++){
        var rand = Math.floor(Math.random() * (index - 1)) + 1;
        index -= 1;

        var temp = answersCopy[index];
        answersCopy[index] = answersCopy[rand];
        answersCopy[rand] = temp;
    }

    // Swap the correct answer into the target location
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswerTargetLocation];
    answers[correctAnswerTargetLocation] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var speechOutput = "";
    var sessionAttributes = {};
    var gameInProgress = session.attributes && session.attributes.questions;
    var answerSlotValid = isAnswerSlotValid(intent);
    var userGaveUp = intent.name === "DontKnowIntent";

    if (!gameInProgress) {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game. Set a flag to track that we've prompted the user.
        sessionAttributes.userPromptedToContinue = true;
        speechOutput = "There is no game in progress. Do you want to start a new game? ";
        callback(sessionAttributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, speechOutput, false));
    } else if (!answerSlotValid && !userGaveUp) {
        // If the user provided answer isn't a number > 0 and < ANSWER_COUNT,
        // return an error message to the user. Remember to guide the user into providing correct values.
        var reprompt = session.attributes.speechOutput;
        var speechOutput = "Your answer must be a number between 1 and " + ANSWER_COUNT + ". " + reprompt;
        callback(session.attributes,
            buildSpeechletResponse(CARD_TITLE, speechOutput, reprompt, false));
    } else {
        var gameQuestions = session.attributes.questions,
            correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
            currentScore = parseInt(session.attributes.score),
            currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
            correctAnswerText = session.attributes.correctAnswerText;

        var speechOutputAnalysis = "";

        if (answerSlotValid && parseInt(intent.slots.Answer.value) == correctAnswerIndex) {
            currentScore++;
            speechOutputAnalysis = "correct. ";
        } else {
            if (!userGaveUp) {
                speechOutputAnalysis = "wrong. "
            }
            speechOutputAnalysis += "The correct answer is " + correctAnswerIndex + ": " + correctAnswerText + ". ";
        }
        // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
        if (currentQuestionIndex == GAME_LENGTH - 1) {
            speechOutput = userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "You got " + currentScore.toString() + " out of "
                + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
            callback(session.attributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, "", true));
        } else {
            currentQuestionIndex += 1;
            var spokenQuestion = Object.keys(questions[gameQuestions[currentQuestionIndex]])[0];
            // Generate a random index for the correct answer, from 0 to 3
            correctAnswerIndex = Math.floor(Math.random() * (ANSWER_COUNT));
            var roundAnswers = populateRoundAnswers(gameQuestions, currentQuestionIndex, correctAnswerIndex),

                questionIndexForSpeech = currentQuestionIndex + 1,
                repromptText = "Question " + questionIndexForSpeech.toString() + ". " + spokenQuestion + " ";
            for (var i = 0; i < ANSWER_COUNT; i++) {
                repromptText += (i+1).toString() + ". " + roundAnswers[i] + ". "
            }
            speechOutput += userGaveUp ? "" : "That answer is ";
            speechOutput += speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

            sessionAttributes = {
                "speechOutput": repromptText,
                "repromptText": repromptText,
                "currentQuestionIndex": currentQuestionIndex,
                "correctAnswerIndex": correctAnswerIndex + 1,
                "questions": gameQuestions,
                "score": currentScore,
                "correctAnswerText":
                    questions[gameQuestions[currentQuestionIndex]][Object.keys(questions[gameQuestions[currentQuestionIndex]])[0]][0]
            };
            callback(sessionAttributes,
                buildSpeechletResponse(CARD_TITLE, speechOutput, repromptText, false));
        }
    }
}

function handleRepeatRequest(intent, session, callback) {
    // Repeat the previous speechOutput and repromptText from the session attributes if available
    // else start a new game session
    if (!session.attributes || !session.attributes.speechOutput) {
        getWelcomeResponse(callback);
    } else {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(session.attributes.speechOutput, session.attributes.repromptText, false));
    }
}

function handleGetHelpRequest(intent, session, callback) {
    // Provide a help prompt for the user, explaining how the game is played. Then, continue the game
    // if there is one in progress, or provide the option to start another one.

    // Set a flag to track that we're in the Help state.
    session.attributes.userPromptedToContinue = true;

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH + " multiple choice questions. Respond with the number of the answer. "
        + "For example, say one, two, three, or four. To start a new game at any time, say, start game. "
        + "To repeat the last question, say, repeat. "
        + "Would you like to keep playing?",
        repromptText = "To give an answer to a question, respond with the number of the answer . "
        + "Would you like to keep playing?";
        var shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
}

function isAnswerSlotValid(intent) {
    var answerSlotFilled = intent.slots && intent.slots.Answer && intent.slots.Answer.value;
    var answerSlotIsInt = answerSlotFilled && !isNaN(parseInt(intent.slots.Answer.value));
    return answerSlotIsInt && parseInt(intent.slots.Answer.value) < (ANSWER_COUNT + 1) && parseInt(intent.slots.Answer.value) > 0;
}

// ------- Helper functions to build responses -------


function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
