import React, { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import { BookContext } from "../contexts/BookContext";

// class BookList extends Component {
//     static contextType = ThemeContext;
//     render() {
//         // const data = this.context;
//         return (
//             <ThemeContext.Consumer>
//                 {(context)=>{
//                     const {isLightTheme, light, dark} = context;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <div className='book-list' style={{color:theme.syntax, background: theme.background}}>
//                             <h1>Book Lists</h1>
//                             <ul>
//                                 <li style={{background: theme.ui}}>The way of kings</li>
//                                 <li style={{background: theme.ui}}>The name of the wind</li>
//                                 <li style={{background: theme.ui}}>The final empire</li>
//                             </ul>
//                         </div>
//                     )
//                 }}
//
//             </ThemeContext.Consumer>
//         )
//     }
//
// }




const BookList = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    const {books} = useContext(BookContext);

    return (
        <div className='book-list' style={{color:theme.syntax, background: theme.bg}}>
            <ul>
                {books.map((book)=>{
                    return <li key={book.id} style={{background: theme.ui}}> {book.title}</li>
                })}
            </ul>
        </div>
    )
}

export default BookList;

