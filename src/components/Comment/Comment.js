import React from 'react';

const Comment = (props) => {
    const {name,email}=props.comment;
    //console.log(props.comment);
    return (
        <div>
            <p>{name}: {email}</p>

        </div>
    );
};

export default Comment;