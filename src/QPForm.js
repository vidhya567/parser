/**
 * Created by vthirumaraiselvan on 1/11/18.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './form.css';

export default class QPForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name  = target.name;
        console.log("Changing Input ",value,name);
        this.setState({
           [name] : value
        });
    }

    render() {
        return (
          <form>
              <div className="form-group row">
                  <label for="course-name" className="col-sm-2 col-form-label">Course Name: </label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-5" name="course-name" placeholder="Eg:Electronic Circuits-I"></input>
              </div>
              <div className="form-group row">
                  <label for="course-code" className="col-sm-2 col-form-label">Course Code: </label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-5" name="course-code" placeholder="MA-2151"></input>
              </div>
              <div className="form-group row">
                  <label for="year" className="col-sm-2 col-form-label">Year</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-5"  name="year" placeholder="2012"></input>
              </div>
              <div className="form-group row">
                  <label for="month" className="col-sm-2 col-form-label">Month</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-5" name="month"  placeholder="December"></input>
              </div>
              <div className="form-group row">
                  <label for="semester" className="col-sm-2 col-form-label">Semester</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-5"  name="semester" placeholder="4"></input>
              </div>
              <div className="form-group row">
                  <label for="department" className="col-sm-2 col-form-label">Department</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-5"  name="" placeholder="ECE"></input>
              </div>
              <div className="form-group row">
                  <label for="Regulation" className="col-sm-2 col-form-label">Regulation</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-5" name="" placeholder=""></input>
              </div>
              <label>Part - A</label>
              <div className="form-group row">
                 <label for="question-1" className="col-sm-2 col-form-label">Question 1</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-1" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="question-2" className="col-sm-2 col-form-label">Question 2</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-2" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="question-3" className="col-sm-2 col-form-label">Question 3</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-3" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="question-4" className="col-sm-2 col-form-label">Question 4</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-4" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="question-5" className="col-sm-2 col-form-label">Question 5</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-5" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="question-6" className="col-sm-2 col-form-label">Question 6</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-6" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="question-7" className="col-sm-2 col-form-label">Question 7</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-7" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="question-8" className="col-sm-2 col-form-label">Question 8</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-8" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="question-9" className="col-sm-2 col-form-label">Question 9</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-9" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="question-10" className="col-sm-2 col-form-label">Question 10</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-10" rows="2"></input>
              </div>
              <label>Part - B</label>

              <div className="form-group row">
                  <label for="question-1B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-1B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-1B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-1B" min="1" max="16"></input>
              </div>
              <hr/>


              <div className="form-group row">
                  <label for="question-2B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-2B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-2B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-2B" min="1" max="16"></input>
              </div>
              <hr/>

              <div className="form-group row">
                  <label for="question-3B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-3B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-3B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-3B" min="1" max="16"></input>
              </div>
              <hr/>

              <div className="form-group row">
                  <label for="question-4B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-4B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-4B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-4B" min="1" max="16"></input>
              </div>
              <hr/>


              <div className="form-group row">
                  <label for="question-5B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-5B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-5B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-5B" min="1" max="16"></input>
              </div>
              <hr/>


              <div className="form-group row">
                  <label for="question-6B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-6B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-6B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-6B" min="1" max="16"></input>
              </div>
              <hr/>

              <div className="form-group row">
                  <label for="question-7B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-7B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-7B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-7B" min="1" max="16"></input>
              </div>
              <hr/>

              <div className="form-group row">
                  <label for="question-8B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-8B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-8B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-8B" min="1" max="16"></input>
              </div>
              <hr/>

              <div className="form-group row">
                  <label for="question-9B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-9B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-9B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-9B" min="1" max="16"></input>
              </div>
              <hr/>

              <div className="form-group row">
                  <label for="question-10B" className="col-sm-2 col-form-label">Question</label>
                  <input type = "text" onChange={this.handleInputChange} className="col-sm-8" name="question-10B" rows="2"></input>
              </div>
              <div className="form-group row">
                  <label for="mark-10B" className="col-sm-2 col-form-label">Mark</label>
                  <input type="number" onChange={this.handleInputChange} className="col-sm-2" name="mark-10B" min="1" max="16"></input>
              </div>
              <hr/>

          </form>

        );
    }
}
