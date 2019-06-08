import React from 'react';
import './AppPopup.css';

export default class AppPopup extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: ''
    };
  }

  componentDidMount() {
    chrome.storage.sync.get('color', data => {
      this.setState({
        color: data.color
      });
    });
  }

  handleButtonClick = () => {
    const { color } = this.state;

    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  }

  render() {
    const { color } = this.state;

    return (
      <div className="App">
        <button
          onClick={this.handleButtonClick}
          style={{
            backgroundColor: color
          }}
        />
      </div>
    )
  }
}
