import React from 'react';

function CommentsForm() {
  return (
    <div className="comments-from">
      <div className="sec-head mb-60">
        <h5>Leave a comment</h5>
      </div>
      <form id="contact-form" method="post" action="contact.php">
        <div className="messages"></div>
        <div className="controls row">
          <div className="col-lg-6">
            <div className="form-group mb-30">
              <input id="form_name" type="text" name="name" placeholder="Name" required="required" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="form-group mb-30">
              <input id="form_email" type="email" name="email" placeholder="Email" required="required" />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group mb-30">
              <textarea id="form_message" name="message" placeholder="Message" rows="4" required="required"></textarea>
            </div>
          </div>
          <div className="col-12 text-center mt-20">
            <button type="submit">
              <span className="text">Post comment</span>
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default CommentsForm