import React, { useState } from "react";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { questionPropTypes } from "./../types/quiz-types";
import Button from "@material-ui/core/Button";

//css

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      flexWrap: "wrap",
      flexDirection: "column",
      justifyContent: "center",
      background: "rgb(226,141,118)",

      "& > *": {
        margin: theme.spacing(1),
        padding: theme.spacing(3),
        width: theme.spacing(100),
        height: theme.spacing(40),
      },
    },
    heading: {
      textAlign: "center",
      marginBottom: "30px",
      color: "black",
    },
    question: {
      color: "black",
      fontSize: "1.2em",
      width: "100%",
    },
    quizOptions: {
      paddingTop: "20px",
    },
    btn: {
      position: "relative",
      bottom: "0px",
      marginTop: "30px",
      width: "100%",
    },
    quizRadio: {
      marginRight: "10px",
    },
  })
);

const QuestionCard: React.FC<questionPropTypes> = ({
  question,
  option,
  callback,
}) => {
  // console.log(question, option, callback);
  let [selectedAns, setSelectedAns] = useState("");
  const handleSelection = (e: any) => {
    setSelectedAns(e.target.value);
  };
  const classes = useStyles();

  return (
    <div>
      <h1 className={classes.heading}>Quiz App</h1>
      <div className={classes.root}>
        <Paper elevation={5}>
          <div className={classes.question}>
            <h3>{question}</h3>
          </div>
          <form
            onSubmit={(e: React.FormEvent<EventTarget>) =>
              callback(e, selectedAns)
            }
          >
            {option.map((opt: string, ind: number) => {
              return (
                <div key={ind} className={classes.quizOptions}>
                  <label>
                    <input
                      className={classes.quizRadio}
                      type="radio"
                      name="opt"
                      value={opt}
                      onChange={handleSelection}
                      required
                      checked={selectedAns === opt}
                    />
                    {opt}
                  </label>
                </div>
              );
            })}
            {/* <input   /> */}
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={classes.btn}
            >
              submit
            </Button>
          </form>
        </Paper>
      </div>
    </div>
  );
};

export default QuestionCard;
