import { LightningElement } from "lwc";

export default class QuizApplication extends LightningElement {
  correctAnswers = 0;
  showMessage = false;
  quizQuestions = [
    {
      id: "Question1",
      question: "Which one of the following is not a loop?",
      choices: {
        id: "ans1",
        a: "for:each",
        b: "iterator",
        c: "map loop"
      },
      correctAns: "c"
    },
    {
      id: "Question2",
      question: "Which one of the following is not a valid file in LWC folder?",
      choices: {
        id: "ans2",
        a: ".svg",
        b: ".apxc",
        c: ".js"
      },
      correctAns: "b"
    },
    {
      id: "Question3",
      question: "Which one of the following is not a country?",
      choices: {
        id: "ans3",
        a: "Andhra",
        b: "India",
        c: "USA"
      },
      correctAns: "a"
    },
    {
      id: "Question4",
      question: "Which one of the following is not a decorator?",
      choices: {
        id: "ans4",
        a: "@api",
        b: "@lwc",
        c: "@track"
      },
      correctAns: "b"
    }
  ];
  //storing selected answers
  selected = {};
  //to disable and enabel the submit button
  get allNotAnswered() {
    return !(Object.keys(this.selected).length === this.quizQuestions.length);
  }
  // to check if all answers are coorect or not
  get allCorrect() {
    return `slds-text-heading_medium slds-text-title_bold ${
      this.correctAnswers === this.quizQuestions.length
        ? "slds-text-color_success"
        : "slds-text-color_destructive"
    }`;
  }

  //radio button change handler
  changeHandler(event) {
    console.log("name", event.target.name);
    console.log("value", event.target.value);
    const { name, value } = event.target;
    this.selected = { ...this.selected, [name]: value };
  }
  //to handle the submit action
  handleSubmit(event) {
    event.preventDefault();
    let chk = this.quizQuestions.filter(
      (item) => this.selected[item.id] === item.correctAns
    );
    this.showMessage = true;
    this.correctAnswers = chk.length;
  }
  handleReset(event) {
    this.selected = {};
    this.correctAnswers = 0;
    this.showMessage = false;
  }
}
