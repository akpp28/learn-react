import React, {Component} from "react";
import {ListGroup, ListGroupItem, PageHeader} from "react-bootstrap";
import {LinkContainer} from "react-router-bootstrap";


import "./Home.css";
import {userService} from "../services/user-service";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            notes: []
        };
    }

    async componentDidMount() {
        if (!this.props.isAuthenticated) {
            return;
        }

        try {
            const notes = await this.notes();
            this.setState({notes});
        } catch (e) {
            alert(e);
        }

        this.setState({isLoading: false});
    }

    notes() {
        const result = userService.getAllNotes();
        console.log('result', result)
        return result
        // return API.get("notes", "/notes");
    }

    renderNotesList(notes) {
        return [{}].concat(notes).map(
            (note, i) =>
                i !== 0
                    ? <LinkContainer
                        key={note.id}
                        to={`/notes/${note.id}/`}
                    >
                        <ListGroupItem header={note.content.trim().split("\n")[0]}>
                            {"Created: " + new Date(note.created_at).toLocaleString()}
                        </ListGroupItem>
                    </LinkContainer>
                    : <LinkContainer
                        key="new"
                        to="/notes/new"
                    >
                        <ListGroupItem>
                            <h4>
                                <b>{"\uFF0B"}</b> Create a new note
                            </h4>
                        </ListGroupItem>
                    </LinkContainer>
        );
    }

    renderLander() {
        return (
            <div className="lander">
                <h1>Scratch</h1>
                <p>A simple note taking app</p>
            </div>
        );
    }

    renderNotes() {
        return (
            <div className="notes">
                <PageHeader>Your Notes</PageHeader>
                <ListGroup>
                    {!this.state.isLoading && this.renderNotesList(this.state.notes)}
                </ListGroup>
            </div>
        );
    }

    render() {
        return (
            <div className="Home">
                {this.props.isAuthenticated ? this.renderNotes() : this.renderLander()}
            </div>
        );
    }
}