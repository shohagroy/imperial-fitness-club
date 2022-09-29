import React from 'react';
import './QuestionAnswer.css';



const QuestionAnswer = () => {

    return (
        <div className='question-main-container'>
            <div className='ans-countainer'>
                <h3>How dose React Work?</h3>
                <p>  <strong>Ans:</strong> React is a declarative, efficient and flexible JavaScript library for building user interfaces. <br/> React creates a virtual DOM that is a copy of the real DOM tree using JavaScript. So when React needs to modify the DOM, it will use the virtual DOM. Then the virtual DOM will try to find the changes by comparing it with the real DOM. Then update only the variable contents.</p>
            </div>
            <div className='ans-countainer'>
                <h3>Difference Between Props & State?</h3>
                <p>  <strong>Ans:</strong> Difference between props and state: <br/>PROPS:<br/> </p>
                <ol>
                    <li>The Data is passed from one component to another. </li>
                    <li>It is Immutable (cannot be modified). </li>
                    <li>Props can be used with state and functional components Props are read-only. </li>
                    <li>The Data is passed within the component only. </li>
                </ol>
                
                <br/> STATE: <br/>
                <ol>
                    <li>It is Mutable ( can be modified). </li>
                    <li>State can be used only with the state components class component (Before 16.0).</li>
                    <li>State is both read and write.</li>
                </ol>
            </div>
            <div className='ans-countainer'>
                <h3>What useEffect is used for other than data load?</h3>
                <strong>Ans:</strong> 
                <ol>
                    <li>validating input field</li>
                    <li>live filtering</li>
                    <li>trigger animation on new array value</li>
                    <li>update paragraph list on fetched API data updat</li>
                    <li>updating fetched API data to get BTC updated price</li>
                </ol>
            </div>
            
        </div>
    );
};

export default QuestionAnswer;