import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// Functional Component or StatelessComponent
// 基本こっちの下記かた
function Hello() {
  return (
    <section>
      <h1>こんにちわ。</h1>
      <p id='hello'>Helloコンポーネントが表示されました</p>
    </section>
  );
}

// ClassComponent
class Mourning extends React.Component {
  render() {
    return (
      <section>
        <h1>おはようございます</h1>
        <p id='morning'>Mourningコンポーネントが表示されました</p>
      </section>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <Hello />
    <Mourning />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
