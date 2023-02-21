import {
  Button,
  Container,
  IconButton,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import { questionBankData } from "../../data/QuestionBank/questionBank";
import "./QuestionBank.css";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function QuestionBank(props) {
  const startId = Math.floor(Math.random() * questionBankData.length) + 1;
  const [questionNum, setQuestionNum] = React.useState(startId);
  const [nextIcon, setNextIcon] = React.useState(true);

  let generatedIds = [null];
  if (startId !== null) {
    generatedIds.push(startId);
  }

  const isNotMobile = props.isNotMobile;

  const optionRefs = React.useRef([null]);

  const question = questionBankData.find((ques) => ques.id === questionNum);

  optionRefs.current = question.options.map(
    (i) => optionRefs.current[i] ?? React.createRef()
  );

  const optionClickHandler = (selectedOption, selectedElement) => {
    if (selectedOption === question.correctAnswer) {
      selectedElement.current.style.border = "2px solid green";
      selectedElement.current.style.fontWeight = "bold";
      setNextIcon(false);
    } else {
      selectedElement.current.style.border = "2px solid red";
      selectedElement.current.style.color = "grey";
    }
  };

  const nextClickHandler = () => {
    optionRefs.current.forEach((ref) => {
      ref.current.style.border = "none";
      ref.current.style.fontWeight = "normal";
      ref.current.style.color = "black";
    });

    let newId = Math.floor(Math.random() * questionBankData.length) + 1;

    while (generatedIds.includes(newId) || newId === questionNum) {
      newId = Math.floor(Math.random() * questionBankData.length) + 1;
    }

    generatedIds.push(newId);
    setQuestionNum(newId);
    setNextIcon(true);
  };

  const optionChoices = question.options.map((option, i) => {
    return (
      <Typography
        variant={isNotMobile ? "h6" : "subtitle1"}
        className="QuestionBank__option"
        onClick={() => optionClickHandler(option.id, optionRefs.current[i])}
        ref={optionRefs.current[i]}
      >
        ({option.id}) {option.text}
      </Typography>
    );
  });

  return (
    <Container class="QuestionBank__paper">
      <Typography variant={isNotMobile ? "h5" : "h6"}>
        (Q). {question.question}
        <Typography variant={"caption"}>{question.paperDetails}</Typography>
      </Typography>

      {optionChoices}

      <button
        disabled={nextIcon}
        onClick={nextClickHandler}
        className="QuestionBank__NextButton"
      >
        Next
      </button>
    </Container>
  );
}

export default QuestionBank;
