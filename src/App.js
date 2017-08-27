import { createStore } from  'redux';

const counter = (state = 0, action) => {
  switch (action.type) {
    case 'INC':
      return state + 1;
    case 'DEC':
      return state - 1;
    default:
      return state;
  }
}

class App {
  constructor() {
    this.store = this.createStore(counter);
    this.renderContent();
    this.store.subscribe(() => {
      this.renderContent();
    });
    document.addEventListener('click', () => {
      this.store.dispatch({
        type: 'INC'
      });
    });
  }

  createStore(reducer) {
    let state;
    let listeners = [];
    const getState = () => {
      return state;
    }
    const dispatch = (action) => {
      state = reducer(state, action);
      listeners.forEach(listener => {
        listener();        
      });
    }
    const subscribe = (callback) => {
      listeners.push(callback);
      return () => {
        listeners = listeners.filter(listener => {
        return callback !== listener;
      });
      }
    }
    dispatch({});
    return { getState, dispatch, subscribe };
  }

  renderContent() {
    var d = document.createElement('div');
    d.innerText = this.store.getState();
    document.body.appendChild(d);
  }
}

export default App;
