import React, { useState } from "react";
// import modal from "../src/modalBtn.png"; // Uncomment if you have an image
import "./modal.css"
export const CommentComp = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="comment-comp">
        <div className="comment-top-section">
          <div className="Comment-text">
            <h5>Comment</h5>
          </div>
          <div className="modal-btn">
            <button onClick={handleModalOpen}>
              Modal
              {/* <img src={modal} alt="modalImg" /> */}
            </button>
          </div>
        </div>
        <div className="comment-box">
          <input type="text" placeholder="Enter your comment" />
        </div>

        <div className="display-comment">
          <div className="comments">
            <div className="user-img">
              <img
                src="https://www.cgg.gov.in/wp-content/uploads/2017/10/dummy-profile-pic-male1.jpg"
                alt="profileImg"
              />
            </div>
            <div className="comment-text">
              <h6>Jack</h6>
              <p style={{ borderBottom: "1px solid #E0E7FF", paddingBottom: "1rem" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi quasi, nihil consequuntur praesentium officiis facere ea sunt quos eligendi sequi?
              </p>
            </div>
          </div>

          <div className="comments">
            <div className="user-img">
              <img
                src="https://www.cgg.gov.in/wp-content/uploads/2017/10/dummy-profile-pic-male1.jpg"
                alt="profileImg"
              />
            </div>
            <div className="comment-text">
              <h6>Jack</h6>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Commodi quasi, nihil consequuntur praesentium officiis facere ea sunt quos eligendi sequi?
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>Comments</h3>
              <button onClick={handleModalClose}>Close</button>
            </div>
            <div className="modal-body">
              <div className="comments">
                <div className="user-img">
                  <img
                    src="https://www.cgg.gov.in/wp-content/uploads/2017/10/dummy-profile-pic-male1.jpg"
                    alt="profileImg"
                  />
                </div>
                <div className="comment-text">
                  <h6>Jack</h6>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Commodi quasi, nihil consequuntur praesentium officiis facere ea sunt quos eligendi sequi?
                  </p>
                </div>
              </div>
              <div className="comments">
                <div className="user-img">
                  <img
                    src="https://www.cgg.gov.in/wp-content/uploads/2017/10/dummy-profile-pic-male1.jpg"
                    alt="profileImg"
                  />
                </div>
                <div className="comment-text">
                  <h6>Jack</h6>
                  <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Commodi quasi, nihil consequuntur praesentium officiis facere ea sunt quos eligendi sequi?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

