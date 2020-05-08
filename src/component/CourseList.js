import React, {Component, Fragment} from 'react';


class CourseList extends Component {

    state = {
        isEdit: false
    }

    renderCourse = () => {
        return(

            <li className="li">
                 <p> {this.props.details.name} </p> 
                 <button className="update" onClick={() => {this.toggleEdit()}}> Edit Course </button>   
                 <button className="delete" onClick={() => {this.props.deleteCourse(this.props.index)} }> Delete Course </button> 
            </li>


        )
    }

    updateCourse = (e) => {
        e.preventDefault();
        this.props.editCourse(this.props.index, this.input.value);
        this.toggleEdit();
    }

    renderUpdateCourse = () => {
        return(
            <form  className="bott">
                <input type="text" defaultValue={this.props.details.name} ref={(v) => {this.input = v}} />
                <button onClick={this.updateCourse} type="submit" > Update Course </button>
            </form>
        )
    }

    toggleEdit = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }


  render(){
      let isEdit = this.state.isEdit;
    return (
      <Fragment>

            { isEdit ? this.renderUpdateCourse() : this.renderCourse() }

      </Fragment>
  
  
  );
}
}

export default CourseList;
