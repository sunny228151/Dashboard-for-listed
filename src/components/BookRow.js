import React from 'react'

export const BookRow = ({books , setBooks , setBookid, setName , setAuthor , setEdit, setActive} ) => {
    const book_delete=(index)=>{
        let copy = books;
        copy.splice(index,1);
        setBooks([...copy]);
    }
    const book_edit =(index) =>{
        const book=books[index];   // book representing the editable row
        setBookid(book.bookid);
        setName(book.name);
        setAuthor(book.author);
        setEdit(true);     // we are currently updating 
        setActive(index);   // the current index which we have to update
      }  
  return (
    <div className="data">
        <table>
            {
                books.map((book,index) =>{
                    return (
                        <div>
                            <tbody>
                                <tr>
                                    <th>{book.bookid}</th>
                                    <th>{book.name}</th>
                                    <th>{book.author}</th>
                                    <button onClick={()=>book_delete(index)}>Delete</button>
                                    <button onClick={()=>book_edit(index)}>Edit</button>
                                </tr>
                            </tbody>
                        </div>
                    )
                })
            }
        </table>
    </div>
  )
}