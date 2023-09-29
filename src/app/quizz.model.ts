// export class QuizList {
//     constructor(public quizId: number,public quizzName: string) { }
// }

// export class Quiz {
//     constructor(public quizId: number,public quizzName: string, public questions: Question[]) { }
// }

export class Quiz {
    constructor(public questionId: number, public question: string, public answers: string[], public correctAnswer: string) { }
}

export class Question {
    questionId!: number;
    question!: string; 
    answers!: string[];
    correctAnswer!: string
}

export class Answer {
    constructor(public answers: string[]) { }
}