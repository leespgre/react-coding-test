/**
 * Created by sanolab on 2017/11/02.
 */
import React, {Component} from 'react'

class BookDetails extends Component {
    constructor(props) {
    super(props);
    this.state = {value: props.bookDetails.shelf};


    this.handleChange = this.handleChange.bind(this)

}


handleChange(event) {
    this.setState({value: event.target.value});
    this.props.updateBook(this.props.bookDetails,event.target.value)

}




    render() {
        const {bookDetails}=this.props;

        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${ bookDetails.imageLinks ? bookDetails.imageLinks.smallThumbnail : 'http://via.placeholder.com/128x193?text=No%20Cover'})` }}></div>
                    <div className="book-shelf-changer">
                        <select value={this.state.value} onChange={
                         this.handleChange
                        }>
                            <option value="none">Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                        <div>
                            {this.state.test}
                        </div>
                    </div>
                </div>
                <div className="book-title">{bookDetails.title}</div>
                <div className="book-authors">{bookDetails.authors ? bookDetails.authors.join(', ') : ''}</div>
            </div>
        )
    }
}

export default BookDetails;