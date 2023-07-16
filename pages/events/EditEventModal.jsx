import style from "../../styles/Events.module.css";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { toggleEventAddModal } from "../../redux/slices/eventAddModalToggleSlice";
import { GrClose } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import postReq from "../../hooks/postReq";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function EditEventModal() {
  const dispatch = useAppDispatch();
  const eventAddModalToggle = useAppSelector(
    (state) => state.eventAddModalToggle.value
  );

  const [err, setErr] = useState("");

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const token = useAppSelector((state) => state.login.admin);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (
      title === "" ||
      description === "" ||
      date === "" ||
      time === "" ||
      location === ""
    ) {
      setErr("Please fill in all fields");
      return;
    }

    // @ts-ignore
    const img = document.getElementById("image").files[0];
    const imgData = new FormData();
    imgData.append("file", img);
    imgData.append("upload_preset", "aspire");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/drp73bqti/image/upload",
      {
        method: "POST",
        body: imgData,
      }
    );
    if (!res.ok) {
      setErr("Please upload an image");
      return;
    }
    const json = await res.json();

    if (json.secure_url === "") {
      setErr("Please upload an image");
      return;
    }
    if (json.secure_url !== "") {
      setErr("");
      const image = json.secure_url;
      const body = { title, description, date, time, location, image };
      const data = postReq("events", body, token);
      if (data) console.log(data);
      setTitle("");
      setDescription("");
      setDate("");
      setTime("");
      setLocation("");
      dispatch(toggleEventAddModal());
    }
  };

  // if(loading) console.log("loading")
  // if(error) console.log(error)
  // if(data) console.log(data)

  return (
    <>
      <AnimatePresence>
        {eventAddModalToggle && (
          <motion.div
            variants={variants}
            initial={"closed"}
            animate={"open"}
            exit={"closed"}
            className={style.eventModal}
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className={style.eventModal__con}
            >
              <div
                className={style.eventModal__close}
                onClick={() => dispatch(toggleEventAddModal())}
              >
                <GrClose />
              </div>
              <div style={{ width: "100%" }}>
                <h1 className={style.eventModal__title}>Add New Event</h1>
                {err && (
                  <p
                    style={{
                      color: "#ef4444",
                      textAlign: "center",
                      marginBottom: "20px",
                    }}
                  >
                    {err}
                  </p>
                )}
                <form onSubmit={onSubmit} className={style.eventModal__form}>
                  <div className={style.eventModal__form__row}>
                    <label>Name</label>
                    <input
                      placeholder="Enter Article Title"
                      type="text"
                      id="title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </div>
                  <div className={style.eventModal__form__row}>
                    <label>Description</label>
                    <textarea
                      placeholder="Enter Article Description"
                      id="description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                  </div>

                  <div className={style.eventModal__form__row}>
                    <label>Date</label>
                    <input
                      placeholder="Enter Article Date"
                      type="date"
                      id="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                    />
                  </div>
                  <div className={style.eventModal__form__row}>
                    <label>Time</label>
                    <input
                      placeholder="Enter Article Time"
                      type="time"
                      id="time"
                      value={time}
                      onChange={(e) => setTime(e.target.value)}
                    />
                  </div>
                  <div className={style.eventModal__form__row}>
                    <label>Location</label>
                    <input
                      placeholder="Enter Article Location"
                      type="text"
                      id="location"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                    />
                  </div>

                  <div className={style.eventModal__form__row}>
                    <label>Image Link</label>
                    <input
                      placeholder="Enter Article Cover Image Link"
                      type="file"
                      accept="image/*"
                      id="image"
                    />
                  </div>

                  <button
                    type="submit"
                    className={`${style.eventModal__btn} ${style.btn__green}`}
                  >
                    <FaPlus /> ADD EVENT
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
