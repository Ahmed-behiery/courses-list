import React, {Component} from 'react';
import CourseForm from './component/CourseForm';
import CourseList from './component/CourseList';





class App extends Component {
    state = {
      courses:  [
            {name: "HTML"},
            {name: "CSS"},
            {name: "Javascript"},
            {name: "Jquery"}

      ],
      current: ""
    }

    // updateCourse
    updateCourse = (e) => {
      this.setState({
        current: e.target.value
      })

    }

    // AddCourses
    AddCourse = (e) =>{
      e.preventDefault();
      let current = this.state.current;
      let courses = this.state.courses;
      if (current === "") {
        return false
      } else {
        courses.push({name: current});
        this.setState({
          courses,
          current: ""
        })

      }
    }

    // deletecourse

    deleteCourse = (index) => {
      const courses = this.state.courses;
      courses.splice(index, 1);
      this.setState({courses})
    }

    // edit-course
    editCourse =(index, value) => {
      let courses = this.state.courses;
      let course = courses[index];
      course["name"] = value;
      this.setState({courses})
    }



  render(){
    const {courses} = this.state;
    const courseList = courses.map((course, index) => {
      return(
        <CourseList details={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
      )
    })
    return (
      <div className="App">

                   <h2>Add Course</h2>
                   <CourseForm current={this.state.current} addCourse={this.AddCourse} updateCourse={this.updateCourse}  />
                    <ul>{courseList}</ul>
      </div>


          );
       }
}

export default App;
