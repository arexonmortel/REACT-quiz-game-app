import he from "he"
 let triviaData = [

    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the nickname of Northampton town&#039;s rugby union club?",
    "correct_answer": "Saints",
    "incorrect_answers": [
    "Harlequins",
    "Saracens",
    "Wasps"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which of the following sports is not part of the triathlon?",
    "correct_answer": "Horse-Riding",
    "incorrect_answers": [
    "Cycling",
    "Swimming",
    "Running"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "hard",
    "question": "With which doubles partner did John McEnroe have most success?",
    "correct_answer": "Peter Fleming",
    "incorrect_answers": [
    "Mark Woodforde",
    "Michael Stich",
    "Mary Carillo"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "medium",
    "question": "Which nation hosted the FIFA World Cup in 2006?",
    "correct_answer": "Germany",
    "incorrect_answers": [
    "United Kingdom",
    "Brazil",
    "South Africa"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which country has hosted the 2018 FIFA World Cup?",
    "correct_answer": "Russia",
    "incorrect_answers": [
    "Germany",
    "United States",
    "Saudi Arabia"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "medium",
    "question": "In what sport does Fanny Chmelar compete for Germany?",
    "correct_answer": "Skiing",
    "incorrect_answers": [
    "Swimming",
    "Showjumping",
    "Gymnastics"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "In bowling, what is the term used for getting three consecutive strikes?",
    "correct_answer": "Turkey",
    "incorrect_answers": [
    "Flamingo",
    "Birdie",
    "Eagle"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which African American is in part responsible for integrating  Major League baseball?",
    "correct_answer": "Jackie Robinson",
    "incorrect_answers": [
    "Curt Flood",
    "Roy Campanella",
    "Satchell Paige"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "easy",
    "question": "Which player holds the NHL record of 2,857 points?",
    "correct_answer": "Wayne Gretzky",
    "incorrect_answers": [
    "Mario Lemieux ",
    "Sidney Crosby",
    "Gordie Howe"
    ]
    },
    {
    "category": "Sports",
    "type": "multiple",
    "difficulty": "medium",
    "question": "What is the name of the AHL affiliate of the Toronto Maple Leafs?",
    "correct_answer": "Toronto Marlies",
    "incorrect_answers": [
    "Toronto Rock",
    "Toronto Argonauts",
    "Toronto Wolfpack"
    ]
    }
    ]

    triviaData = triviaData.map(item => ({
      ...item,
      question: he.decode(item.question),
      correct_answer: he.decode(item.correct_answer),
      incorrect_answers: item.incorrect_answers.map(incorrect => he.decode(incorrect))

    }))

    triviaData.sort(()=>.5 - Math.random())

    export default triviaData;