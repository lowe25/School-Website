import React from "react";
function Landing() {
  return (
    <div>
      <div className="landing">
        <div className="intro">
          <h1>Welcome to Ridgeview</h1>
          <div className="btn-container">
            <input type="button" value="Explore" className="btn-landing" />
          </div>
        </div>
      </div>

      <div className="school-con">
        <h1>News and Events</h1>
        <section className="news-section">
          <article className="news1">
            <div className="news-art">
              <p>School Starts with strict school grounds protocol</p>
            </div>
          </article>
          <article className="news2">
            <div className="news-art">
              <p>
                Atletics Basketball wins first game since the cancellation of
                NCAA events
              </p>
            </div>
          </article>
          <article className="news3">
            <div className="news-art">
              <p>Release of Class Schedule for the new normal</p>
            </div>
          </article>
        </section>

        <section className="events-section">
          <article className="events1">
            <div className="news-art">
              <p>
                Seniors welcomes freshman in the schools Annual Opening since
                COVID Quarantine
              </p>
            </div>
          </article>
          <article className="events2">
            <div className="news-art">
              <p>
                Special Guest Speaker for the Science Week and his current views
                of Machine Learning and Artificial Intelligence
              </p>
            </div>
          </article>
          <article className="events3">
            <div className="news-art">
              <p>Drama Class Audition Results</p>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}

export default Landing;
