// Styles
import "./Contact.css";
import "leaflet/dist/leaflet.css"

// Icons
import { ImLocation } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

// Form Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Map
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const ContactSchema = yup.object().shape({
  yourName: yup
    .string()
    .trim("Please input cannot contain just spaces")
    .required("Please input first name"),
  email: yup
    .string()
    .email("please input a valid email")
    .required("email canot be empty"),
  subject: yup
    .string()
    // .trim("Please input cannot contain just spaces")
    .required("Please input last name"),
  message: yup
    .string()
    .trim("Please input cannot contain just spaces")
    .required("Please input last name"),
});

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ContactSchema),
  });

  const submitMessage = (data) => {
    reset();
    console.log(data);
  };

  return (
    <div className="container-fluid py-3 contactbg">
      <div className="row px-5">
        <div className="col-12 bg-white p-3 my-4">
          <span>Home / Contact </span>
        </div>

        <div className="col-12 my-4">
          <div className="row justify-content-between">
          <h2 className="col-12 p-0">
            <b>CONTACT US </b>
          </h2>
          <form
            className="col-7 bg-white px-5 py-4"
            onSubmit={handleSubmit(submitMessage)}
          >
            <input
              className="col-12 my-2 p-2"
              name="yourName"
              placeholder="Your Name"
              type="sring"
              {...register("yourName")}
            />
            <span className="text-danger font-strong">
              {errors.yourName?.message}
            </span>
            <input
              className="col-12 my-2 p-2"
              name="email"
              placeholder="Your Email"
              type="sring"
              {...register("email")}
            />
            <span className="text-danger font-strong">
              {errors.email?.message}
            </span>

            <input
              className="col-12 my-2 p-2"
              name="subject"
              placeholder="Subject"
              type="string"
              {...register("subject")}
            />
            <span className="text-danger font-strong">
              {errors.subject?.message}
            </span>

            <textarea
              className="col-12 my-2 p-2 message"
              name="message"
              placeholder=" Message"
              type="sring"
              {...register("message")}
            />
            <span className="text-danger font-strong">
              {errors.message?.message}
            </span>

            <button className="px-5 py-3 my-3 bg-warning sendBtn">
              Send Message
            </button>
          </form>

          <div className="col-5 pe-0">
            <div className="col-12 bg-white p-2">
              <MapContainer
              className="map"
                center={[4.159302, 9.243536]}
                zoom={13}
                scrollWheelZoom={false}
              >
                <TileLayer
                className="map"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>

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
    </div>
  );
}
