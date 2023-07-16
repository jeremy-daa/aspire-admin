import style from "../../styles/Events.module.css";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { AiFillFileAdd } from "react-icons/ai";
import { setSortEventsByNewest } from "../../redux/slices/sortEventsSlice";
import { toggleEventAddModal } from "../../redux/slices/eventAddModalToggleSlice";
import EventSearch from "./EventSearch";

export default function TopSection() {
  const dispatch = useAppDispatch();
  // const sortEventsByNewest = useAppSelector(state => state.sortEvents.value)

  return (
    <div className={`${style.top_section}`}>
      <div>
        <h1 className={`${style.heading}`}>Events</h1>
        <p className={style.heading__text}>List of all events</p>
      </div>

      <div className={`${style.top_section_r}`}>
        <EventSearch />
        <div className={style.eventfilter}>
          <select
            name="sort"
            id="sort"
            onChange={(e) =>
              dispatch(
                setSortEventsByNewest(
                  e.target.value === "newest" ? true : false
                )
              )
            }
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <div
          className={style.eventadd}
          onClick={() => dispatch(toggleEventAddModal())}
        >
          <AiFillFileAdd className={style.eventadd__icon} />
          <p>Add Event</p>
        </div>
      </div>
    </div>
  );
}
