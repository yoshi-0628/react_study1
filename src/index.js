import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';

// ES6~ 代入不可
const name = {
  firstName: '宜久',
  lastName: '飯島',
};

const someHtml = { __html: '<h2>これはH2タグです</h2>' };

// ES6~ 代入可能
let count = 0;

for (let i = 0; i < 10; i++) {
  count++;
}

function Hello() {
  return (
    <section>
      <h1>
        こんにちわ{name.lastName + name.firstName}
        {count + 1}回目の訪問ですね
      </h1>
      <p id='hello'>Helloコンポーネントが表示されました</p>
      <br />
      {/* エスケープしない場合はdangerouslySetInnerHTML */}
      <span dangerouslySetInnerHTML={someHtml} />

      <div
        className='imageBox'
        htmlFor='foorrr'
        style={{ marginTop: '10px', padding: '20px' }}
        data-role='sss'
      >
        <img
          src='https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'
          alt='Google'
        />
      </div>
    </section>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Hello />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
