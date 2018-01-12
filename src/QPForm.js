/**
 * Created by vthirumaraiselvan on 1/11/18.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './form.css';

export default class QPForm extends React.Component {

    render() {
        return (
          <form>
              <div class="form-group row">
                  <label for="course-name" class="col-sm-2 col-form-label">Course Name: </label>
                  <textarea class="col-sm-5" id="course-name" placeholder="Eg:Electronic Circuits-I"></textarea>
              </div>
              <div class="form-group row">
                  <label for="course-code" class="col-sm-2 col-form-label">Course Code: </label>
                  <textarea class="col-sm-5" id="course-code" placeholder="MA-2151"></textarea>
              </div>
              <div class="form-group row">
                  <label for="year" class="col-sm-2 col-form-label">Year</label>
                  <textarea class="col-sm-5"  id="year" placeholder="2012"></textarea>
              </div>
              <div class="form-group row">
                  <label for="month" class="col-sm-2 col-form-label">Month</label>
                  <textarea class="col-sm-5" id="month"  placeholder="December"></textarea>
              </div>
              <div class="form-group row">
                  <label for="semester" class="col-sm-2 col-form-label">Semester</label>
                  <textarea class="col-sm-5"  id="semester" placeholder="4"></textarea>
              </div>
              <div class="form-group row">
                  <label for="department" class="col-sm-2 col-form-label">Department</label>
                  <textarea class="col-sm-5"  id="" placeholder="ECE"></textarea>
              </div>
              <div class="form-group row">
                  <label for="Regulation" class="col-sm-2 col-form-label">Regulation</label>
                  <textarea class="col-sm-5" id="" placeholder=""></textarea>
              </div>
              <label>Part - A</label>
              <div class="form-group row">
                 <label for="question-1" class="col-sm-2 col-form-label">Question 1</label>
                  <textarea class="col-sm-8" id="question-1" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="question-2" class="col-sm-2 col-form-label">Question 2</label>
                  <textarea class="col-sm-8" id="question-2" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="question-3" class="col-sm-2 col-form-label">Question 3</label>
                  <textarea class="col-sm-8" id="question-3" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="question-4" class="col-sm-2 col-form-label">Question 4</label>
                  <textarea class="col-sm-8" id="question-4" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="question-5" class="col-sm-2 col-form-label">Question 5</label>
                  <textarea class="col-sm-8" id="question-5" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="question-6" class="col-sm-2 col-form-label">Question 6</label>
                  <textarea class="col-sm-8" id="question-6" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="question-7" class="col-sm-2 col-form-label">Question 7</label>
                  <textarea class="col-sm-8" id="question-7" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="question-8" class="col-sm-2 col-form-label">Question 8</label>
                  <textarea class="col-sm-8" id="question-8" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="question-9" class="col-sm-2 col-form-label">Question 9</label>
                  <textarea class="col-sm-8" id="question-9" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="question-10" class="col-sm-2 col-form-label">Question 10</label>
                  <textarea class="col-sm-8" id="question-10" rows="2"></textarea>
              </div>
              <label>Part - B</label>

              <div class="form-group row">
                  <label for="question-1B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-1B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-1B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-1B" min="1" max="16"></input>
              </div>
              <hr/>


              <div class="form-group row">
                  <label for="question-2B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-2B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-2B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-2B" min="1" max="16"></input>
              </div>
              <hr/>

              <div class="form-group row">
                  <label for="question-3B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-3B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-3B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-3B" min="1" max="16"></input>
              </div>
              <hr/>

              <div class="form-group row">
                  <label for="question-4B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-4B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-4B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-4B" min="1" max="16"></input>
              </div>
              <hr/>


              <div class="form-group row">
                  <label for="question-5B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-5B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-5B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-5B" min="1" max="16"></input>
              </div>
              <hr/>


              <div class="form-group row">
                  <label for="question-6B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-6B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-6B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-6B" min="1" max="16"></input>
              </div>
              <hr/>

              <div class="form-group row">
                  <label for="question-7B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-7B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-7B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-7B" min="1" max="16"></input>
              </div>
              <hr/>

              <div class="form-group row">
                  <label for="question-8B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-8B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-8B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-8B" min="1" max="16"></input>
              </div>
              <hr/>

              <div class="form-group row">
                  <label for="question-9B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-9B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-9B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-9B" min="1" max="16"></input>
              </div>
              <hr/>

              <div class="form-group row">
                  <label for="question-10B" class="col-sm-2 col-form-label">Question</label>
                  <textarea class="col-sm-8" id="question-10B" rows="2"></textarea>
              </div>
              <div class="form-group row">
                  <label for="mark-10B" class="col-sm-2 col-form-label">Mark</label>
                  <input type="number" class="col-sm-2" id="mark-10B" min="1" max="16"></input>
              </div>
              <hr/>

          </form>

        );
    }
}
