import React from "react";
import PropTypes from 'prop-types';
import { BtnWrap } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
      <BtnWrap>
          {options.map(feedbackBtn => {
              return (
                <button onClick={() => onLeaveFeedback(feedbackBtn)} name={feedbackBtn} key={feedbackBtn}>
                  {feedbackBtn}
                </button>
              );
          })}
    </BtnWrap>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired
}