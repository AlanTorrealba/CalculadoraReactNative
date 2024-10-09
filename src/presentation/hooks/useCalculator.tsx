import React, {useEffect, useRef, useState} from 'react';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [formula, setFormula] = useState('');
  const [number, setNumber] = useState('0');
  const [prevNumber, setPrevNumber] = useState('0');

  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstFormulaPart = formula.split( ' ' ).at(0);
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
    const result =  calculateSubResult();
    setFormula(`${result}`);
    lastOperation.current = undefined;
    setPrevNumber('0');
  };

  const calculateSubResult = (): number => {
    const [firstValue, operation, secondValue] = formula.split( ' ' );
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);
    if (isNaN(num2)) return num1;
    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.divide:
        return num2 / num1;
      case Operator.multiply:
        return num1 * num2;
      case Operator.subtract:
        return num1 - num2;
      default:
        throw new Error('operation no implemented');
    }
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
