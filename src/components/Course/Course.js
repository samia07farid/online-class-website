import React, { useState } from 'react';
import './Cource.css'
import courseInfo from '../../fakedata/course-info';
import Subjects from '../Subjects/Subjects';
import Cart from '../Cart/Cart';


const Course = () => {
    // eslint-disable-next-line no-unused-vars
    const [subjects, setSubjects] = useState(courseInfo);
    const [cart, setCart] = useState([]);

    const handleAddCourse = (courses) => {
        const newCart = [...cart, courses];
        setCart(newCart);
    }

    return (
        <div>
            <div>
              <Cart cart={cart}></Cart>
            </div>
            <div>
                {
                    subjects.map(subject => <Subjects 
                        subject = {subject}
                        handleAddCourse = {handleAddCourse}
                        key={subject.key}
                    ></Subjects>)

                }
            </div>
        </div>
    );
};

export default Course;