import '../App.css';
import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";

import { Link, Outlet } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';

export const BOOKS = gql`
  query getBooks {
    books {
      _id
      name
      price
      pubDate
    }
}
`

const Dashboard = () => {
    const { loading, error, data } = useQuery(BOOKS);
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    if (!data) return <p>Unknown state</p>
    let {books} = data
    // console.log('books', books)
  
    const handleClick = (event) => {
      const el = document.getElementById('ab')
      el.innerText = 'Already edited'
      console.log('handleClick', el)
    }
  
    return (
  
      <div className='center'>
        <h3>Dashboard</h3>

        <div>
          <Card className='center'
            style={{
              width: 400,
              backgroundColor: "yellow",
            }}
          >
              <CardContent>
                <Typography
                  style={{ fontSize: 14 }}
                  color="textSecondary"
                >
                    To be or not to be, that is the question.
                </Typography>
  
                <Typography variant="h5" component="h2">
                    Books
                </Typography>
  
                <Typography id='books' component="div" align="left"
                  style={{
                    marginBottom: 12,
                  }}
                  color="textSecondary"
                >
                    <ul>
                        {
                          books.map( (el, i) => (
                              <li key={i}
                              >
                                {/* Route path="book/:bookName */}
                                <Link to={`/book/${el.name}`}>
                                    {el.name}  
                                </Link>  
                                   |
                                {el.price} 
                                   | 
                                {el.pubDate && new Date(el.pubDate).toLocaleDateString('en-US')} 
                              </li>
                          ))
                        }
                    </ul>
                </Typography>
  
                <Typography id='ab' variant="body2" component="p">
                    Edit Me
                </Typography>
              </CardContent>
  
              <CardActions>
                <Button size="medium" onClick={handleClick}>ClickMe</Button>
              </CardActions>
  
          </Card>
  
        </div>  <p>&nbsp;</p>

      </div>
    )
}

export default Dashboard