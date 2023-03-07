import "./Contact.css";
import {ImLocation} from 'react-icons/im'
import {FaEnvelope} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'

export default function Contact() {
  return (
    <div className="container-fluid px-5 py-3 bg-light">
      <div className="row px-5">
        <div className="col-12 bg-white p-3 my-4">
          <span>Home / Contact </span>
        </div>

        <div className="col-12 p-0 my-4">
          <h2>
            <b>CONTACT US </b>
          </h2>
        </div>

        <div className="row justify-content-between">
          <div className="col-7 bg-white px-5 py-4">
            <input
              className="col-12 my-2 p-2"
              name="name"
              placeholder="Your Name"
              type="sring"
            />
            <input
              className="col-12 my-2 p-2"
              name="email"
              placeholder="Your Email"
              type="sring"
            />

            <input
              className="col-12 my-2 p-2"
              name="subject"
              placeholder="Subject"
              type="sring"
            />

            <input
              className="col-12 my-2 p-2"
              name="mesage"
              placeholder=" Message"
              type="sring"
            />

            <button className="px-5 py-3 my-3 bg-warning sendBtn">
              Send Message
            </button>
          </div>

          <div className="col-4">
            <div className="col-12 bg-white p-2"></div>

            <div className="col-12 bg-white p-3 mt-5">
              <div className="d-flex gap-2">
                <ImLocation className="text-warning" />
                <div>123 Street, New York, USA</div>
              </div>
              <div className="d-flex gap-2">
                <FaEnvelope className="text-warning" />
                <div>mail@domain.com</div>
              </div>
              <div className="d-flex gap-2">
                <BsFillTelephoneFill className="text-warning" />
                <div>+237 123 456 789</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
