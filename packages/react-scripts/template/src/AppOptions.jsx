import React from 'react';
import './AppOptions.css';
const kButtonColors = ['#3aa757', '#e8453c', '#f9bb2d', '#4688f1'];

export default class AppOptions extends React.Component {
  handleButtonClick(item) {
    chrome.storage.sync.set({color: item}, function() {
      console.log('color is ' + item);
    });
  }

  render() {
    return (
      <div className="Options">
        {
          kButtonColors.map(item => (
            <button
              key={item}
              style={{
                backgroundColor: item
              }}
              onClick={() => this.handleButtonClick(item)}
            />
          ))
        }
      </div>
    );
  }
}