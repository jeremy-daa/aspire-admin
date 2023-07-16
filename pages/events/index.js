"use client";
import style from "../../styles/Events.module.css";
import TopSection from "./TopSection";
import ViewEventModal from "./ViewEventModal";
import EditEventModal from "./EditEventModal";
const index = () => {
  return (
    <div className={style.event}>
      <ViewEventModal />
      <EditEventModal />
      <TopSection />
      {/*<BlogPaginator />*/}
    </div>
  );
};

export default index;
