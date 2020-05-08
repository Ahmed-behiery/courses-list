import React from "react";

const CourseForm = (props) => {


    
    return(
        <div>

                <form onSubmit={props.addCourse} className="top">
                    <input type="text" onChange={props.updateCourse} value={props.current} />
                    <button type="submit"> Add Courses </button>
                </form>

        </div>
    )
}
export default CourseForm;