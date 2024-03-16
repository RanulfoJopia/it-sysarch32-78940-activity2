import React from 'react';
import Header from "./Header"
import Card from "./Card";
import Footer from "./Footer"
import Student from "./Student";

function App() {
    const student = Student();

    return (
        <>
            <Header />
            {student.map(student => (
                <Card key={student.id} {...student} />
            ))}
            <Footer />
        </>
    );
}

export default App;
