import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const BookDetails = (props) => {
    return (
      <div className="media overflow-auto">
        <div className="media-top">
          <a href="#">
            <img className="media-object" height="200" src="http://placehold.it/200x280" alt="Placehold" />
          </a>
        </div>
        <div className="media-body">
         
          <ul>
          <h4>{props.book.title}</h4>
            <li>Author:  {props.book.author}</li>
            <li>Price:  ${props.book.price}</li>
            <li>Year:  {props.book.year}</li>
            <br/>
            {sessionStorage.getItem("user")!=="customer"  && <button className="btn" onClick={e => props.deleteBook(props.book)}> <FaEdit style={{color:"blue"}}></FaEdit> </button>}
            {sessionStorage.getItem("user")!=="customer"  && <button className="btn" style={{marginLeft:"20px"}} onClick={e =>  props.deleteBook(props.book)}> <FaTrash style={{color:"red"}}></FaTrash> </button>}

            

           {sessionStorage.getItem("user")!=="admin" &&  props.cartBooks.indexOf(props.book)===-1  && <button className="btn btn-primary" onClick={e => props.addToCart(props.book)}>Buy</button>}
           
           {sessionStorage.getItem("user")!=="admin" && props.cartBooks.indexOf(props.book)>-1  && <button className="btn btn-danger" onClick={e => props.removeFromCart(props.book)}>Remove</button>}
          
          
          </ul>
        </div>
      </div>
    );
};


export default BookDetails;
