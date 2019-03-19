import React, { createContext, useCallback, useContext, useReducer } from 'react';

const reducer = (state, action) => {
  const actionIs = str => action === str;
  const stateIs = str => state === str;

  if (actionIs('pause')) {
    if (stateIs('top-running')) {
      return 'top-paused';
    }

    if (stateIs('top-paused')) {
      return 'top-running';
    }

    if (stateIs('bottom-running')) {
      return 'bottom-paused';
    }

    if (stateIs('bottom-paused')) {
      return 'bottom-running';
    }
  }

  if (actionIs('click-top')) {
    if (stateIs('initial') || stateIs('top-running')) {
      return 'bottom-running';
    }
  }

  if (actionIs('click-bottom')) {
    if (stateIs('initial') || stateIs('bottom-running')) {
      return 'top-running';
    }
  }

  if (actionIs('reset')) {
    return 'initial';
  }

  return state;
};

const Context = createContext();

export const useTimersStateContext = () => useContext(Context);

export function TimersStateContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, 'initial');
  const stateIs = useCallback(str => state === str, [state]);

  return (
    <Context.Provider
      value={{
        state,
        stateIs,
        dispatch,
        reset() {
          dispatch('reset');
        },
        pause() {
          dispatch('pause');
        },
        clickTop() {
          dispatch('click-top');
        },
        clickBottom() {
          dispatch('click-bottom');
        },
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
