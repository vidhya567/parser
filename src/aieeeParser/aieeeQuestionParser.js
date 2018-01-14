import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

export default class aieeeParser extends React.Component {
    constructor(props) {
        super(props);
        this.state = {textValue: ''};
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        this.setState({textValue : event.target.value});
        console.log("Input Change",this.state.textValue);
    }

    handleSubmit(event) {
        var questionText = this.state.textValue;
        var splitWords = questionText.split(" ");
        var options = ["(1)","(2)","(3)","(4)"];
        var questionStartRegex = RegExp('^\\d+[.]$');
        var index = 0;
        var traversalLength = splitWords.length;
        console.log("Handle Submit");
        for (index = 0 ; index < traversalLength; index++) {
            var word = splitWords[index];
            if (questionStartRegex.test(word)) {

                index += 1;
                word = splitWords[index];
                var questionPart = "";
                while (word != options[0]) {
                    console.log("Trying to find Question Part",questionPart);
                    questionPart += (word+" ");
                    index += 1;
                    word = splitWords[index];
                }
                console.log("Question Part",questionPart);


                for (var i = 0;i < 4;i++) {
                    var currentOption = options[i];
                    var nextOption;
                    if (i != 3) {
                        nextOption = options[i + 1];
                    } else {
                        nextOption = undefined;
                    }
                    if (word == currentOption) {
                        index += 1;
                        word = splitWords[index];
                        var optionPart = "";
                        while (word != nextOption || !questionStartRegex.test(word)) {
                            console.log("Option Building",i, optionPart);
                            optionPart += (word + " ");
                            index += 1;
                            word = splitWords[index];
                        }
                        console.log("option Data",optionPart);
                    }

                }
            }
        }
        event.preventDefault();
    }

    render() {
        return (
          <form onSubmit={this.handleSubmit}>
              <div className="row"> Text to Parse:</div>
              <div className="row">
                  <textarea value={this.state.textValue} onChange={this.handleInputChange} rows="100" cols="150">Put question text here...</textarea>
              </div>
              <div className="row">
                <input type="submit" value="Parse Text"/>
              </div>
          </form>
        );
    }
}