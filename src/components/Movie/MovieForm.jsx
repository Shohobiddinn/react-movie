import { Component } from "react";
export default class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            director: "",
            releaseYear: "",
            genre: ""
        };
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChange} />
                <input type="text" placeholder="Director" value={this.state.director} onChange={this.handleChange} />
                <input type="text" placeholder="Release Year" value={this.state.releaseYear} onChange={this.handleChange} />
                <input type="text" placeholder="Genre" value={this.state.genre} onChange={this.handleChange} />
                <button type="submit">Add Movie</button>
            </form>
        );
    }
}