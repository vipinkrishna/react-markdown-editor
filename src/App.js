import React from 'react';
import { Remarkable } from 'remarkable';
import './App.css';
export default class MarkdownEditor extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.handleChange = this.handleChange.bind(this);
    this.state = { value: `**bold** _italic_ ~~strikethrough~~` };
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div className="MarkdownEditor">
        <textarea
          className="markdown-input"
          onChange={this.handleChange}
          defaultValue={this.state.value}
        />
        <div
          className="markdown-output"
          dangerouslySetInnerHTML={this.getRawMarkup()}
        />
      </div>
    );
  }
}
