import React, { useState } from 'react';
import './SearchLabel.css';
import Img from './redwarningattentionsign1.jpg';
function SearchLabel({ personArray, reloadList }) {
    const [searchTerm, setSearchTerm] = useState('');

    function handleClick() {
        if (searchTerm.trim() === '') {
            reloadList(personArray);
        } else {
            const searchTerms = searchTerm.toLowerCase().split(' ');
            const filteredStudents = personArray.filter(student => {
                const fullName = student.firstName.toLowerCase() + ' ' + student.lastName.toLowerCase();
                // Проверяем содержит ли полное имя все введенные слова из поля label
                return searchTerms.every(term => fullName.includes(term));
            });
            
            if (filteredStudents.length === 0) {
                reloadList([{ id: -1, firstName: 'SUCH DATA', lastName: ' SORRY, THERE IS NO', img: Img, email: '', ipAdress: '', style: '#student { margin-left: 620px; }' }]);
            } else {
                reloadList(filteredStudents);
            }
        }
    }


    return (
        <>
            <div className="search">
                <div className="">
                    <input className='shadow p-3 mb-5 bg-body-tertiary rounded' id='label' type="text" placeholder="Type something" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    <button type="button" className="btn btn-success" id='button' onClick={handleClick}>Search</button>
                </div>
            </div>
        </>
    );
}

export default SearchLabel;
