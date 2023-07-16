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
  const blogData = useAppSelector((state) => state.activeBlog);
  const token = useAppSelector((state) => state.login.admin);

  const deleteArticle = () => {
    deleteReq("blogs", blogData._id, token);
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
            className={style.blogModal}
          >
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.3 }}
              className={style.blogModal__con}
            >
              <div
                className={style.blogModal__close}
                onClick={() => dispatch(toggleEventModal())}
              >
                <GrClose />
              </div>
              <div style={{ width: "100%" }}>
                <h1 className={style.blogModal__title}>{blogData.title}</h1>
                <p className={style.blogModal__date}>
                  {new Date(parseInt(blogData.createdAt)).toDateString()}
                </p>
                <Image
                  src={blogData.image}
                  alt={blogData.title}
                  width={800}
                  height={400}
                  className={style.blogModal__img}
                />
                <p className={style.blogModal__desc}>{blogData.desc}</p>
                <div
                  className="blog-modal-sanitized"
                  dangerouslySetInnerHTML={{ __html: blogData.sanitizedHtml }}
                ></div>
              </div>
              <button
                className={style.blogModal__btn}
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
