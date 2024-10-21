import React from 'react';
import './TutorsPage.css'; // Import the CSS file for styling
import img from './tutor.jpg'

const tutors = [
    { id: 1, name: 'John Doe', image: img},
    { id: 2, name: 'Jane Smith', image: img},
    { id: 3, name: 'Alex Johnson', image: img},
    { id: 4, name: 'Ella Brown', image: img },
    { id: 5, name: 'Sam Wilson', image: img },
    { id: 6, name: 'Nina Davis', image: img },
    ];

const TutorsPage = () => {
    return (
        <div className="tutors-page">
        {/* Header Section */}
        <div className="header-section">
            <h1>Meet Our Popular Tutors</h1>
            <p>
            Want someone to instruct you? No worries. Here we introduce our CourseMania’s online tutors to assist & guide you in your professional path.
            </p>
            <button className="explore-btn">Explore</button>
        </div>
    
        {/* Grid of Tutor Cards */}
        <div className="tutors-grid">
            {tutors.map((tutor) => (
            <div className="tutorcard" key={tutor.id}>
                <div className="tutor-image-container">
                <img src={tutor.image} alt={tutor.name} className="tutor-image" />
                <div className="tutor-name">
                    <span>{tutor.name}</span>
                </div>
                </div>
            </div>
            ))}
        </div>
    
        {/* Find a Tutor Button */}
        <button className="find-tutor-btn">Find A Tutor</button>
        </div>
    );
    };
    
    export default TutorsPage;
