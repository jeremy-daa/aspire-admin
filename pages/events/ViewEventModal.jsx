import style from "../../styles/Events.module.css";
import React from "react";
import Image from "next/image";
import { useAppSelector, useAppDispatch } from "../../redux/hooks";
import { toggleEventModal } from "../../redux/slices/eventModalToggleSlice";
import { GrClose } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import deleteReq from "../../hooks/deleteReq";

const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

export default function ViewEventModal() {
  const dispatch = useAppDispatch();
  const eventModalToggle = useAppSelector(
    (state) => state.eventModalToggle.value
  );
  console.log(eventModalToggle);
  const eventData = useAppSelector((state) => state.activeEvent);
  const token = useAppSelector((state) => state.login.admin);

  const deleteArticle = () => {
    deleteReq("events", eventData._id, token);
  };

  return (
    <>
      <AnimatePresence>
        {eventModalToggle && (
          <motion.div
            variants={variants}
            initial={"closed"}
            animate={"open"}
            exit={"closed"}
            className={style.eventModal}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className={style.eventModal__con}
            >
              <div
                className={style.eventModal__close}
                onClick={() => dispatch(toggleEventModal())}
              >
                <GrClose />
              </div>
              <div style={{ width: "100%" }}>
                <h1 className={style.eventModal__title}>{eventData.name}</h1>
                <p className={style.eventModal__date}>
                  Date: {new Date(eventData.date).toDateString()}
                </p>
                <p className={style.eventModal__time}>
                  Time: {new Date(eventData.date).toLocaleTimeString()}
                </p>
                <p className={style.eventModal__location}>
                  Location: {eventData.location}
                </p>

                <Image
                  src={eventData.image}
                  alt={eventData.title}
                  width={800}
                  height={400}
                  className={style.eventModal__img}
                />
                <p className={style.eventModal__desc}>{eventData.desc}</p>
                <div
                  className="event-modal-sanitized"
                  dangerouslySetInnerHTML={{ __html: eventData.sanitizedHtml }}
                ></div>
              </div>
              <button
                className={style.eventModal__btn}
                onClick={() => {
                  deleteArticle();
                  dispatch(toggleEventModal());
                }}
              >
                <FaTrash /> DELETE Event
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
