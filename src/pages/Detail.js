import '../App.css';
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import { useParams, Link } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

export const BOOK = gql`
   query anyName($bookName: String!) {
      bookByName(name: $bookName) {
        name
        count
        price
        subscribers
        pubDate
      }
  }
`
/**
  Route path="book/:bookName 
  <Link to={`/book/${el.name}`}></Link>
 */
const Detail = () => {
    const { bookName } = useParams();
    const { loading, error, data } = useQuery(
      BOOK,
      { variables: { bookName } }
    );
    if (loading) return <p>Loading</p>
    if (error) return <p>{error.message}</p>
    if (!data) return <p>Unknown state</p>
    const book = data.bookByName[0]
    // console.log('data', book.subscribers, Array.isArray(book.subscribers))

    const handleClick = (event) => {
        const el = document.getElementById('ab')
        el.innerText = 'Already edited'
        console.log('handleClick', el)
    }
  
    return (
        <div className='center'>
            <h4>Detail</h4>
            <Card className='center'
                style={{
                width: 700,
                backgroundColor: "skyblue",
                }}
            >
                <CardContent>
                    <Typography variant="h5" component="h2">
                        {book.name}
                    </Typography>

                    <Typography id='books' component="div" align="left"
                        style={{
                            marginBottom: 12,
                        }}
                    >
                        <table>
                            <thead></thead>
                            <tbody>
                                <tr>
                                    <td>In stock: </td>
                                    <td>{book.count}</td>
                                </tr>
                                <tr>
                                    <td>Price: </td>
                                    <td>{book.price}</td>
                                </tr>
                                <tr>
                                    <td>Date published: </td>
                                    <td>{book.pubDate}</td>
                                </tr>
                                <tr>
                                    <td>Subscriber acct numbers: </td>
                                    <td>
                                        <ul>
                                            {
                                                book.subscribers.map( (item, i) => (
                                                    <li key={i}>
                                                        {item} 
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot></tfoot>
                        </table>
                    </Typography>

                    <CardActions>
                        <Link to={`/books`}>
                            <Button size="large">Back to Books</Button>
                        </Link>
                    </CardActions>
                </CardContent>
            </Card>
        </div>
    )

}

export default Detail
