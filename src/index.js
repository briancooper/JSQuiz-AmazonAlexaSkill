/**
 Copyright 2014-2015 Amazon.com, Inc. or its affiliates. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at

 http://aws.amazon.com/apache2.0/

 or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
 */

'use strict';

var questions = [
    { //1
        "Where is the correct place to insert JavaScript?": [
            "head",
            "body",
            "div",
            "footer"
        ]
    },
    { //2
        "What function can you use to print a current web page in javaScript?": [
            "window dot print",
            "print dot this",
            "print",
            "print dot window"
        ]
    },
    { //3
        "Which operator assigns a value?": [
            "equals",
            "greater than",
            "double equals",
            "exclamation mark"
        ]
    },
    { //4
        "What word do you use to declare a variable?": [
            "var",
            "variable",
            "dim",
            "v"
        ]
    },
    { //5
        "Which event occurs when a user clicks a button?": [
            "on click",
            "on change",
            "on load",
            "on mouse down"
        ]
    },
    { //6
        "Which event occurs when a user presses a keyboard key?": [
            "on key down",
            "on click",
            "on load",
            "on change"
        ]
    },
    { //7
        "Which event occurs when a user moves the mouse over an H T M L element?": [
            "on mouse hover",
            "on click",
            "on mouse out",
            "on key down"
        ]
    },
    { //8
        "Which event occurs when a user moves the mouse over an H T M L element?": [
            "on mouse out",
            "on click",
            "on mouse hover",
            "on key down"
        ]
    },
    { //9
        "Which event occurs when the browser has finished loading the page?": [
            "on load",
            "on click",
            "on change",
            "on key down"
        ]
    },
    { //10
        "What character is used to separate JavaScript statements?": [
            "semi colon",
            "period",
            "slash",
            "comma"
        ]
    },
    { //11
        "In the SOLID principle, what does the S stand for?": [
            "Single responsibility",
            "string",
            "singleton",
            "semi colon"
        ]
    },
    { //12
        "In the SOLID principle, what does the O stand for?": [
            "Open-closed",
            "open beta",
            "object oriented",
            "on"
        ]
    },
    { //13
        "In the SOLID principle, what does the L stand for?": [
            "Liskov substitution",
            "limitations",
            "Linting",
            "logic"
        ]
    },
    { //14
        "In the SOLID principle, what does the I stand for?": [
            "Interface segregation",
            "inheritance",
            "inversion",
            "index"
        ]
    },
    { //15
        "In the SOLID principle, what does the D stand for?": [
            "Dependency inversion",
            "document",
            "distributed",
            "dispatch"
        ]
    },
    { //16 *
        "What technology allows javascript to send and retrieve data from a server asynchronously?": [
            "A Jacks", //AJAX
            "S Q L",
            "Web Forms",
            "DOM"
        ]
    },
    { //17
        "What is the primary data format used for asynchronous browser server communication?": [
            "J SON",
            "X M L",
            "C S V",
            "POX"
        ]
    },
    { //18
        "DOM stands for?": [
            "Document Object Model",
            "down",
            "demonstrate",
            "Dependency object model"
        ]
    },
    { //19
        "What programming interface for H T M L, X M L, and S V G provides a structured representation the document and defines how programs can access and change the structure of that document?": [
            "DOM",
            "function",
            "callback",
            "closure"
        ]
    },
    { //20
        "JavaScript is standardized by a specification named?": [
            "ECMAScript",
            "W 3 C",
            "open standards",
            "U N"
        ]
    },
    { //21
        "JavaScript operator that checks a object and returns true if that object is of the specified type?": [
            "instance of",
            "type of",
            "Exclamation mark equal equal",
            "equal equal equal"
        ]
    },
    { //22
        "JavaScript operator that returns the type of a variable?": [
            "type of",
            "instance of",
            "Exclamation mark equal equal",
            "equal equal equal"
        ]
    },
    { //23
        "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?": [
            "index of",
            "push",
            "sort",
            "reverse"
        ]
    },
    { //24
        "Which built-in method returns the length of the string?": [
            "length",
            "sort",
            "reverse",
            "push"
        ]
    },
    { //25
        "Which built-in method removes the last element from an array and returns that element?": [
            "pop",
            "push",
            "sort",
            "reverse"
        ]
    },
    { //26
        "Which built-in method adds one or more elements to the end of an array and returns the new length of the array?": [
            "push",
            "reverse",
            "pop",
            "sort"
        ]
    },
    { //27
        "Which built-in method sorts the elements of an array?": [
            "sort",
            "reverse",
            "push",
            "pop"
        ]
    },
    { //28
        "Which built-in method reverses the order of the elements of an array?": [
            "reverse",
            "sort",
            "pop",
            "push"
        ]
    },
    { //29
        "Which built-in method returns the character at the specified index?": [
            "char at",
            "sort",
            "pop",
            "push"
        ]
    },
    { //30
        "Which built-in method combines the text of two strings and returns a new string?": [
            "con cat",
            "push",
            "reverse",
            "sort"
        ]
    },
    { //31
        "Which built-in method calls a function for each element in the array?": [
            "for each",
            "con cat",
            "reverse",
            "sort"
        ]
    },
    { //32
        "Which built-in method calls a function for each element in the array?": [
            "sub string", //substr()
            "con cat",
            "reverse",
            "sort"
        ]
    },
    { //33
        "Which built-in method calls a function for each element in the array?": [
            "to lower case", //toLowerCase()
            "con cat",
            "reverse",
            "sort"
        ]
    },
    { //34
        "Which built-in method calls a function for each element in the array?": [
            "to upper case", //toUpperCase()
            "con cat",
            "reverse",
            "sort"
        ]
    },
    { //35
        "Which built-in method calls a function for each element in the array?": [
            "to string", //toString()
            "con cat",
            "reverse",
            "sort"
        ]
    },
    { //36
        "Which function of a string object looks for a match between a regular expression and a specified string?": [
            "search", //search()
            "match",
            "replace",
            "con cat"
        ]
    },
    { //37
        "Which of the following functions of an Array object joins all elements of an array into a string?": [
            "join", //join()
            "pop",
            "push",
            "map"
        ]
    },
    { //38
        "Which module format allows for both modules and dependencies to be asynchronously loaded?": [
            "a m d",
            "common J S",
            "factory",
            "Angular"
        ]
    },
    { //39
        "What technique used for backwards compatibility in browsers will intercept a p i calls and implement a new a p i , thus creating an abstraction layer between the caller and the target?": [
            "shim",
            "poly fill",
            "fall back",
            "chrome"
        ]
    },
    { //40
        "What is the process called when you run a program that analyzes code for potential errors?": [
            "linting",
            "heisenbug detector",
            "replace",
            "concat"
        ]
    },
    { //41 *
        "Which design pattern restricts instantiation of a class to a single object?": [
            "singleton",
            "observer",
            "mediator",
            "module"
        ]
    },
    { //42
        "Which design pattern creates objects based on a template of an existing object through cloning?": [
            "prototype",
            "singleton",
            "observer",
            "mediator"
        ]
    },
    { //43
        "Which design pattern provides a generic interface for creating objects, where we can specify the type of object we wish to be created?": [
            "factory",
            "singleton",
            "prototype",
            "module"
        ]
    },
    { //44
        "Which design pattern has an object, known as a subject, and maintains a list of objects depending on it, automatically notifying them of any changes to state?": [
            "observer",
            "factory",
            "module",
            "mediator"
        ]
    },
    { //45
        "Which design pattern is a special method used to initialize a newly created object once memory has been allocated for it?": [
            "constructor",
            "observer",
            "factory",
            "singleton"
        ]
    },
    { //46
        "Which function of a string object looks for a match between a regular expression and a specified string?": [
            "search", 
            "match",
            "replace",
            "concat"
        ]
    },
    { //47
        "Which design pattern has classes which offer functionality that can be easily inherited by a sub-class or group of sub-classes for the purpose of function re-use?": [
            "mixin",
            "module",
            "factory",
            "reuse"
        ]
    },
    { //48
        "Which design pattern aims to encapsulate method invocation, requests or operations into a single object and gives us the ability to both parameterize and pass method calls around that can be executed at our discretion?": [
            "command",
            "singleton",
            "mixin",
            "factory"
        ]
    },
    { //49
        "Which architectural design pattern  encourages improved application organization through a separation of concerns. It enforces the isolation of business data from user interfaces, with a third component traditionally managing logic and user-input?": [
            "M V C",
            "M V V M",
            "M V P",
            "Mustache"
        ]
    },
    { //50
        "What is the name of the solution that can be repeated to address commonly occurring problem in software design?": [
            "design pattern",
            "loop",
            "closure",
            "testing"
        ]
    }
];

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function (event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

     if (event.session.application.applicationId !== "arn:aws:lambda:us-east-1:748224983427:function:JavascriptInterviewQuestions") {
         context.fail("Invalid Application ID");
      }

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

    // dispatch custom intents to handlers here
    if ("AnswerIntent" === intentName) {
        handleAnswerRequest(intent, session, callback);
    } else if ("AnswerOnlyIntent" === intentName) {
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

var ANSWER_COUNT = 4,
    GAME_LENGTH = 5;

function getWelcomeResponse(callback) {
    var sessionAttributes = {},
        cardTitle = "JavaScript Quiz",
        speechOutput = "Javascrip Quiz. I will ask you " + GAME_LENGTH.toString()
            + " questions, try to get as many right as you can. Just say the number of the answer. Let's begin.",
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
        buildSpeechletResponse(cardTitle, speechOutput, repromptText, shouldEndSession));
}

function populateGameQuestions() {
    var gameQuestions = [],
        randomNum;

    // Pick 5 random questions from the list to ask the user, make sure there are no repeats
    while (gameQuestions.length != GAME_LENGTH) {
        randomNum = Math.floor(Math.random() * (questions.length - 1));
        if (gameQuestions.indexOf(randomNum) == -1) {
            gameQuestions.push(randomNum);
        }
    }
    return gameQuestions;
}

function populateRoundAnswers(gameQuestions, index, correctAnswer) {
    // Get the answers for a given question, and place the correct answer at the spot marked by the
    // correctAnswer variable
    var answers = [],
        answersCopy = questions[gameQuestions[index]][Object.keys(questions[gameQuestions[index]])[0]],
        temp, i;
    for (i = 0; i < ANSWER_COUNT; i++) {
        answers[i] = answersCopy[i];
    }
    temp = answers[0];
    answers[0] = answers[correctAnswer];
    answers[correctAnswer] = temp;
    return answers;
}

function handleAnswerRequest(intent, session, callback) {
    var cardTitle = "JavaScript Quiz",
        speechOutput = "";

    var answerSlot = intent.slots.Answer;
    // If the user provided answer isn't a number > 0 and < 5,
    // return an error message to the user
    if (!answerSlot || !answerSlot.value || isNaN(parseInt(answerSlot.value))
        || !(parseInt(answerSlot.value) < ANSWER_COUNT+1 && parseInt(answerSlot.value) > 0)) {
        speechOutput = "Your answer must be a number between 1 and 4."
        callback(session.attributes,
            buildSpeechletResponse(cardTitle, speechOutput, speechOutput, false));
    }
    else {
        // If the user responded with an answer but there is no game in progress, ask the user
        // if they want to start a new game
        if (!session.attributes || !session.attributes.questions) {
            speechOutput = "There is no game in progress. To start a new game, say, " +
                "start game.";
            callback(session.attributes,
                buildSpeechletResponse(cardTitle, speechOutput, speechOutput, false));
        }
        else {
            var gameQuestions = session.attributes.questions,
                correctAnswerIndex = parseInt(session.attributes.correctAnswerIndex),
                currentScore = parseInt(session.attributes.score),
                currentQuestionIndex = parseInt(session.attributes.currentQuestionIndex),
                correctAnswerText = session.attributes.correctAnswerText;

            var speechOutputAnalysis = "";
            if (parseInt(answerSlot.value) == correctAnswerIndex) {
                currentScore++;
                speechOutputAnalysis = "correct. ";
            } else {
                speechOutputAnalysis = "wrong. The correct answer is " + correctAnswerText + ". ";
            }
            // if currentQuestionIndex is 4, we've reached 5 questions (zero-indexed) and can exit the game session
            if (currentQuestionIndex == GAME_LENGTH - 1) {
                speechOutput = "That answer is " + speechOutputAnalysis + "You got " +
                    currentScore.toString() + " out of " + GAME_LENGTH.toString() + " questions correct. Thank you for playing!";
                callback(session.attributes,
                    buildSpeechletResponse(cardTitle, speechOutput, "", true));
            }
            else {
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
                speechOutput += "That answer is " + speechOutputAnalysis + "Your score is " + currentScore.toString() + ". " + repromptText;

                var sessionAttributes = {
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
                    buildSpeechletResponse(cardTitle, speechOutput, repromptText, false));
            }
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

    // Do not edit the help dialogue. This has been created by the Alexa team to demonstrate best practices.

    var speechOutput = "I will ask you " + GAME_LENGTH.toString() + " multiple choice questions, try to get as many right as you can! "
            + "To give an answer to a question, respond with the number of the answer by saying one, two, three, or four. "
            + "To start a new game at any time, say, start game. "
            + "To repeat the last question asked, say, repeat.",
        repromptText = "To give an answer to a question, respond with the number of the answer. "
            + "To start a new game, say, start game",
        shouldEndSession = false;
    callback(session.attributes,
        buildSpeechletResponseWithoutCard(speechOutput, repromptText, shouldEndSession));
}

function handleFinishSessionRequest(intent, session, callback) {
    // End the session with a "Good bye!" if the user wants to quit the game
    callback(session.attributes,
        buildSpeechletResponseWithoutCard("Good bye!", "", true));
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
