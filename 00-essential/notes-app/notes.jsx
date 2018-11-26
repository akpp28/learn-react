var Note = React.createClass({
    render: function () {
        var style = {backgroundColor: this.props.color};
        return (
            <div className="note" style={style}>{this.props.children}</div>
        )
    }
});
var NoteEditor = React.createClass({
    getInitialState: function () {
        return {
            text: ''
        }
    },

    handleTextChange: function (event) {
        this.setState({text: event.target.value})
    },


    handleNoteAdd: function () {
        var newNote = {
            text: this.state.text,
            color: 'yellow',
            id: Date.now()
        };
        this.props.onNoteAdd(newNote);
        this.setState({'text': ''})

    },
    render: function () {
        return (
            <div className="note-editor">
                <textarea
                    placeholder="Enter your note here..."
                    rows="5"
                    className="textarea"
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <button onClick={this.handleNoteAdd}>Add</button>
            </div>
        )
    }
});
var NotesGrig = React.createClass({
        componentDidMount: function () {
            var elem = document.querySelector('.notes-grid');
            this.msnry = new Masonry(elem, {
                itemSelector: '.note',
                columnWidth: 200,
                gutter: 50
            });

        },
        componentDidUpdate: function(prevProps){
            if (this.props.notes.length !== prevProps.notes.length){
                this.msnry.reloadItems();
                this.msnry.layout();
            }

        },
        render: function () {
            return (
                <div className="notes-grid">
                    {
                        this.props.notes.map(function (note) {
                            return <Note key={note.id} color={note.color}>{note.text}</Note>
                        })
                    }
                </div>
            )
        }
    })
;
var NotesApp = React.createClass({
    getInitialState: function () {
        return {
            notes: [
                {'id': 1, 'text': 'aaa', 'color': '#00D700'},
                {
                    'id': 8,
                    'text': 'bbb  ddfsa fsdfsfsdfasd fsdaf s f sfd asfadfas dfas fasfdasd sdfasdfdasfasd af asdf asdf sdf asfd safsa;fdasjfsakldf; as;fk asd;fasjf ;aslf jas;dlkf jasdflk ',
                    'color': '#FFD300'
                },
                {'id': 2, 'text': 'bbb  dsfadfas dfas fasfdasd sdfasdfdasfasd af asdf asdf ', 'color': '#FFD300'},
                {'id': 3, 'text': 'bbb  dsfadfas dfas fasfdasd sdfasdfdasfasd af asdf asdf ', 'color': '#FFD300'},
                {'id': 4, 'text': 'bbb 2 ', 'color': '#FFD300'},
                {'id': 5, 'text': 'bbb  dsfadfas dfas fasfdasd sdfasdfdasfasd af asdf asdf ', 'color': '#FFD300'},
                {
                    'id': 6,
                    'text': 'bbb  dsfadfas dfas fasfdasd sdfasdfdasfasd af asdf asdf sdf asfd safsa;fdasjfsakldf; as;fk asd;fasjf ;aslf jas;dlkf jasdflk ',
                    'color': '#FFD300'
                },
                {'id': 7, 'text': 'bbb 2 dds', 'color': '#FFD300'},
            ]
        }
    },

    handleNoteAdd: function (newNote) {
        var newNotes = this.state.notes.slice();
        newNotes.unshift(newNote);
        this.setState({notes: newNotes});
    },
    render: function () {
        return (
            <div className="notes-app">
                NotesApp
                <NoteEditor onNoteAdd={this.handleNoteAdd}/>
                <NotesGrig notes={this.state.notes}/>
            </div>
        )
    }
});

ReactDOM.render(<NotesApp/>, document.getElementById('mount-point'));
