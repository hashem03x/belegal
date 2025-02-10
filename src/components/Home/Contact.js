import React from "react";

function Contact() {
  return (
    <div className="container section-padding">
        <h2 className="section-title text-center">Feel Free to Reach with us</h2>
      <form
        className="p-5"
        style={{
          borderRadius: "18px",
          boxShadow:
            " rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        }}
      >
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="message" class="form-label">
            Message
          </label>
            <textarea id="message" className="form-control" placeholder="Enter Your message"></textarea>
        </div>
        <div className="w-100 text-center">
        <button  class="dark-primary-button m-auto">
          Send
        </button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
