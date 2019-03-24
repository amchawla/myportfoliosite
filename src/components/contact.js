import React, { Component } from 'react';
import {Grid, Cell } from 'react-mdl';
import { List, ListItem, ListItemContent } from 'react-mdl/lib/List';

class Contact extends Component {
    render() {
        return (
        <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>
                    <h2>Amit Chawla</h2>
                    <img 
                    src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                    alt="avatar"
                    style={{height:'250px'}}
                    />
                        <p style={{ width: '75%', margin: 'auto', paddintTop: '1em' }}>
                            When you’re developing a new project you often need filler text to work on design elements. Lorem Ipsum is dummy text that helps with that. Numerous several sites have cropped up to make the process of generating dummy text as simple as possible. One that I’ve used, lipsum.com, shown here, lets you customize how many paragraphs of text you want, or how many words, bytes or lists. It then generates that text automatically at the click of a button. The resulting dummy text is shown in the next step.
                            </p>
                </Cell>
                <Cell col={6}>
                    <h2>Contact Me</h2>
                    <hr />
                    <div className="contact-list">
                    <List>
                        <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                            <i className="fa fa-phone-square" aria-hidden="true" />
                            91+ (808) 708-7880
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                <i className="fa fa-envelope-square" aria-hidden="true" />
                                someone@gmail.com
                            </ListItemContent>
                        </ListItem>
                        <ListItem>
                            <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                <i className="fa fa-skype" aria-hidden="true" />
                                My SkypeID
                            </ListItemContent>
                        </ListItem> 
                        <ListItem>
                            <ListItemContent style={{ fontSize: '30px', fontFamily: 'Anton' }}>
                                <i className="fa fa-skype" aria-hidden="true" />
                                My SkypeID
                            </ListItemContent>
                        </ListItem>     
                    </List>
                        </div>
                </Cell>
            </Grid>
        </div>
        
        )
    }
}

export default Contact;