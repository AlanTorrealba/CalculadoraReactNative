import React, {useEffect, useRef, useState} from 'react';

enum Operator {
  add ='+',
  subtract ='-',
  multiply = 'x',
  divide= '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    console.log(lastOperation.current);
    if (lastOperation.current) {
      const firstFormulaPart = formula.split(' ').at(0);
      setFormula(`${firstFormulaPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  const buildNumber = (numberString: string) => {
    if (number.includes('.') && numberString === '.') return;
    if (number.startsWith('0') || number.startsWith('-0')) {
      if (numberString === '.') {
        return setNumber(number + numberString);
      }
      if (numberString === '0' && !number.includes('.')) {
        return setNumber(number + numberString);
      }
      if (numberString !== '0' && !number.includes('.')) {
        return setNumber(numberString);
      }
      if (numberString === '0' && !number.includes('.')) {
        return;
      }
      return setNumber(number + numberString);
    }
    setNumber(number + numberString);
  };
  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPrevNumber(number.slice(0, -1));
    } else {
      setPrevNumber(number);
    }
    setNumber('0');
  };
  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };
  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };
  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };
  const subtracOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };
  const clearBuild = () => {
    if (number === '0' && prevNumber.length > 1) return setPrevNumber('0');
    setNumber('0');
    lastOperation.current = undefined;
    setFormula('');
  };
  const delBuild = () => {
    if (number === '0') return;
    if ((number.length === 2 && number.includes('-')) || number.length === 1) {
      return setNumber('0');
    }
    return setNumber(number.substring(0, number.length - 1));
  };
  const toggleSing = () => {
    if (number.includes('-')) {
      return setNumber(number.replace('-', ''));
    }

    return setNumber('-' + number);
  };
  const calculateResult = () => {
    const num1 = Number(number);
    const num2 = Number(prevNumber);
    switch (lastOperation.current) {
      case Operator.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operator.divide:
        setNumber(`${num2 / num1}`);
        break;
      case Operator.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operator.subtract:
        setNumber(`${num2 - num1}`);
        break;
      default:
        throw new Error('operation no implemented');
    }
    setPrevNumber('0');
  };
  return {
    //Properties
    prevNumber,
    number,
    formula,

    //methods
    buildNumber,
    clearBuild,
    delBuild,
    toggleSing,
    subtracOperation,
    divideOperation,
    multiplyOperation,
    addOperation,
    calculateResult,
  };
};
