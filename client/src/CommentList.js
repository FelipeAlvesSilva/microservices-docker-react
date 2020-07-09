import React from 'react';

export default ({ comments }) => {
  const renderedComments = comments.map(comment => {
    let content;

    switch (comment.status.toLowerCase()) {
      case 'approved':
        content = comment.content;
        break;
      case 'pending':
        content = 'This comment is awaiting moderation';
        break;
      case 'rejected':
        content = 'This comment has been rejected';
        break;
    }

    return <li key={comment.id}>{content}</li>
  });

  return (
    <div>
      <ul>
        {renderedComments}
      </ul>
    </div>
  );
};