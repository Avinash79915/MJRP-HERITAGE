import "../Styles/MandatoryDisclosure.css";

const MandatoryDisclosure = () => {
  return (
    <>
      <div className="cmd">
        <div className="grid_container">
          <h1>CBSE Mandatory Disclosure</h1>
          <h2>General Information</h2>
          <br />
          <div className="grid_content">
            <div className="notification">
              <div className="notititle">Name of the School</div>
              <div className="notibody">MJRP Academy</div>
            </div>
            <div className="notification">
              <div className="notititle">Affiliation No.</div>
              <div className="notibody">2131844</div>
            </div>
            <div className="notification">
              <div className="notititle">School Code</div>
              <div className="notibody">70436</div>
            </div>
            <div className="notification">
              <div className="notititle">Complete Address</div>
              <div className="notibody">
                Village and post TiwariPur, Mohamdabad, Ghazipur, Uttar Pradesh,
                233227
              </div>
            </div>
            <div className="notification">
              <div className="notititle">Name of Principal</div>
              <div className="notibody">Mr. Uday Shankar Yadav</div>
            </div>
            <div className="notification">
              <div className="notititle">School Email -Id</div>
              <div className="notibody">70436@cbseshiksha.in</div>
            </div>
            <div className="notification">
              <div className="notititle">Contact NO</div>
              <div className="notibody">97956 588 79</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid_container">
        <h2>Documents and information</h2>
        <br />
        <div className="grid_content">
          <div className="notification">
            <div className="notititle">
              Copies of Affiliation / Up-gradation letter and the recent
              extension of Affiliation, if any
            </div>
            <div className="notibody">MJRP Academy</div>
          </div>
          <div className="notification">
            <div className="notititle">
              Copies of Societies / Trust / Company Registration / Renewal
              Certificate, as applicable.
            </div>
            <div className="notibody">2131844</div>
          </div>
          <div className="notification">
            <div className="notititle">
              Copy of No Objection Certificate (NOC) issued, if applicable, by
              the State Govt./UT
            </div>
            <div className="notibody">70436</div>
          </div>
          <div className="notification">
            <div className="notititle">
              Copies of Recognition Certificate under RTE Act, 2009, and its
              renewal if applicable
            </div>
            <div className="notibody">
              Village and post TiwariPur, Mohamdabad, Ghazipur, Uttar Pradesh,
              233227
            </div>
          </div>
          <div className="notification">
            <div className="notititle">
              Copy of valid Building Safety Certificate as per the National
              Building Code
            </div>
            <div className="notibody">Available</div>
          </div>
          <div className="notification">
            <div className="notititle">
              Copy of valid Fire Safety Certificate issued by the Competent
              Authority
            </div>
            <div className="notibody">Available</div>
          </div>
          <div className="notification">
            <div className="notititle">
              Copy of the DEO Certificate submitted by the School for
              Affiliation / Up-gradation / Extension of Affiliation or Self
              Certification by School
            </div>
            <div className="notibody">Available</div>
          </div>
          <div className="notification">
            <div className="notititle">
              Copies of valid Water, Health, and Sanitation Certificates
            </div>
            <div className="notibody">Available</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MandatoryDisclosure;
