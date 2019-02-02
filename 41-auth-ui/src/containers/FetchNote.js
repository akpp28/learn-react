import React, {Component} from "react";
import {userService} from "../services/user-service";

import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./FetchNote.css";

export default class FetchNote extends Component {
    constructor(props) {
        super(props);


        this.state = {
            isLoading: null,
            isDeleting: null,
            note: null,
            content: "",
            attachmentURL: null
        };
    }

    async componentDidMount() {
        try {
            const note = await this.getNote();
            const {content} = note;

            this.setState({
                note,
                content,
                // attachmentURL
            });
        } catch (e) {
            alert(e);
        }
    }

    getNote() {
        return userService.fetchNote(this.props.match.params.id)
    }

    validateForm() {
        return this.state.content.length > 0;
    }

    formatFilename(str) {
        return str.replace(/^\w+-/, "");
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleFileChange = event => {
        this.file = event.target.files[0];
    }

    saveNote(content) {
        return userService.editNote(this.props.match.params.id, content);
    }

    handleSubmit = async event => {
        event.preventDefault();

        this.setState({isLoading: true});

        try {
            await this.saveNote({
                content: this.state.content,
            });
            this.props.history.push("/");
        } catch (e) {
            alert(e);
            this.setState({isLoading: false});
        }
    }


    handleDelete = async event => {
        event.preventDefault();

        const confirmed = window.confirm(
            "Are you sure you want to delete this note?"
        );

        if (!confirmed) {
            return;
        }

        this.setState({isDeleting: true});
    }

    render() {
        return (
            <div className="Notes">
                {this.state.note &&
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="content">
                        <FormControl
                            onChange={this.handleChange}
                            value={this.state.content}
                            componentClass="textarea"
                        />
                    </FormGroup>
                    {this.state.note.attachment &&
                    <FormGroup>
                        <ControlLabel>Attachment</ControlLabel>
                        <FormControl.Static>
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={this.state.attachmentURL}
                            >
                                {this.formatFilename(this.state.note.attachment)}
                            </a>
                        </FormControl.Static>
                    </FormGroup>}
                    <FormGroup controlId="file">
                        {!this.state.note.attachment &&
                        <ControlLabel>Attachment</ControlLabel>}
                        <FormControl onChange={this.handleFileChange} type="file"/>
                    </FormGroup>
                    <LoaderButton
                        block
                        bsStyle="primary"
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                        isLoading={this.state.isLoading}
                        text="Save"
                        loadingText="Saving…"
                    />
                    <LoaderButton
                        block
                        bsStyle="danger"
                        bsSize="large"
                        isLoading={this.state.isDeleting}
                        onClick={this.handleDelete}
                        text="Delete"
                        loadingText="Deleting…"
                    />
                </form>}
            </div>
        );
    }
}