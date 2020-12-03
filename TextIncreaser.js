import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';

const TextIncreaser = (props) => {
  let [numberText, setNumberText] = useState(0);

  useEffect(() => {
    // console.log(props.numberText);
    // console.log(numberText);

    if (
      props.numberText != undefined &&
      props.numberText != null &&
      props.numberText != numberText
    ) {
      let velocity = 1;
      let numberToSum = 1;

      let velocityDefiner = numberText - props.numberText;

      if (velocityDefiner < 0) {
        velocityDefiner = velocityDefiner * -1;
      }

      if (velocityDefiner < 10) {
        velocity = 50;
      } else if (velocityDefiner < 100) {
        velocity = 5;
      }

      if (velocityDefiner > 40) {
        let divider = 15;

        if (velocityDefiner > 99999) {
          divider = 4;
        }

        let lengthNumberText = numberText.toString().length;
        let lengthPropNumberText = props.numberText.toString().length;

        if (lengthNumberText < lengthPropNumberText - 2) {
          numberToSum =
            Math.pow(10, lengthNumberText) * Math.floor(Math.random() * 10 + 1);
        } else {
          numberToSum = Math.round(velocityDefiner / divider);
        }

        // console.log(numberToSum);
      }

      // console.log(velocity);

      if (numberText < props.numberText) {
        setTimeout(() => {
          setNumberText(numberText + numberToSum);
        }, velocity);
      } else if (numberText > props.numberText) {
        setTimeout(() => {
          setNumberText(numberText - numberToSum);
        }, velocity);
      }
    }
  });

  return <Text {...props}>{numberText}</Text>;
};

export default TextIncreaser;
