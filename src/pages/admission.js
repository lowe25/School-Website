function Admission() {
  return (
    <div>
      <div className="admission-container">
        <div className="freshman">
          <h1> Freshman Admissions Procedures</h1>
          <p className="text">
            Freshmen applicants are those who have completed middle school
            (senior high) making them eligible to apply for college education.
            However, for admission to the university, the applicants will need
            to undergo further screening and selection based on the criteria and
            policies.
          </p>
          <div className="requirements-list">
            <ul>
              <li>
                Register via
                https://student-central.azurewebsites.net/registration.
              </li>
              <li>
                Check the link provided in your registered email to activate
                your account.
              </li>
              <li>Log-in</li>
              <li>On the upper left side, click “ ”.</li>
              <li>Select “Admissions” then “Admission Form”.</li>
              <li>Fill-out admission form.</li>
            </ul>
          </div>
        </div>

        <div className="graduate">
          <h1> Graduate School Admissions Procedures</h1>
          <p className="text">
            Freshmen applicants are those who have completed middle school
            (senior high) making them eligible to apply for college education.
            However, for admission to the university, the applicants will need
            to undergo further screening and selection based on the criteria and
            policies.
          </p>
          <div className="requirements-list">
            <ol>
              <li>A bachelor’s degree (civil degree);</li>
              <li>An undergraduate general average of 85% or B;</li>
              <li> A minimum of 18 undergraduate units.</li>
              <li> Acceptable scores in the entrance tests administered.</li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Admission;
