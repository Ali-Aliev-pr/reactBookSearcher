import './App.css';
import React, {useState} from 'react';
import Page from "./Page";
// import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    const [inputText, setInputText] = useState('');

    const handler = () => {
        fetch('https://www.googleapis.com/books/v1/volumes?q='+inputText+'t&key=AIzaSyDb600b-TCHDVm1wRp1wmLBY9GUmnj0GKI'+"&maxResults=40")
            .then(res => res.json())
            .then(item => {
                let array = [];
                console.log(item.items)
                for (let i = 0; i < item.items.length; i++) {
                    array.push({id: array.length,
                                title: item.items[i].volumeInfo.title,
                                description: item.items[i].volumeInfo.description,
                                img: item.items[i].volumeInfo.imageLinks && item.items[i].volumeInfo.imageLinks.thumbnail ? item.items[i].volumeInfo.imageLinks.thumbnail : null})
                }
                setBooks(array);
                console.log(books);
            })
    }

    // const view = () => {
    //     {books.map(i => console.log(i))}
    // }

    const inputChange = (text) => {
        setInputText(text)
    }

  return (
    <div className='container'>
        <div className="searchBlock">
            <div className="block">
                <p className="title">Book Searcher!</p>
                <div className="searcherBlock">
                    <input type="text" onChange={e => inputChange(e.target.value)}/>
                    <button onClick={handler}>Press!</button>
                    {/*<button onClick={view}>View</button>*/}
                </div>
            </div>
        </div>
        <div className="cards">
            {books.map((i) => {
                return (
                    <div>
                        <Page
                            title={i.title}
                            // text={i.description}
                            img={i.img}
                        />
                    </div>
                )
            } )}
        </div>
    </div>
  );
}

export default App;