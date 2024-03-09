import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faDownload } from "@fortawesome/free-solid-svg-icons";

import Navbar from "../componets/Navbar/Navbar";
// import Contact from "../componets/Contact/Contact";
import Footer from "../componets/Footer/Footer";

function DownloadPage() {
  return (
    <div>
      <Navbar />
      <div className="dw-page">
        <div className="row">
          <h1 className="heading">Downloads</h1>
          <div className="dw-cotainer">
            <div className="dw-card">
              <h3>Title</h3>
              <div className="file-icon">
                <FontAwesomeIcon icon={faFile} />
              </div>
              <button>
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <div className="dw-card">
              <h3>Title</h3>
              <div className="file-icon">
                <FontAwesomeIcon icon={faFile} />
              </div>
              <button>
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <div className="dw-card">
              <h3>Title</h3>
              <div className="file-icon">
                <FontAwesomeIcon icon={faFile} />
              </div>
              <button>
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <div className="dw-card">
              <h3>Title</h3>
              <div className="file-icon">
                <FontAwesomeIcon icon={faFile} />
              </div>
              <button>
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
            <div className="dw-card">
              <h3>Title</h3>
              <div className="file-icon">
                <FontAwesomeIcon icon={faFile} />
              </div>
              <button>
                <FontAwesomeIcon icon={faDownload} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default DownloadPage;
