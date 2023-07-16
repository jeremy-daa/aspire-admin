import style from "../../styles/Events.module.css";
import Image from "next/image";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { toggleEventModal } from "../../redux/slices/eventModalToggleSlice";
import { changeActiveEvent } from "../../redux/slices/activeEventSlice";

export default function EventCard({ d }) {
  const dispatch = useAppDispatch();
  const events = d;
  const sortByNewest = useAppSelector((state) => state.sortEvents.value);
  const test = events.sort(
    (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
  );
  return (
    <div className={style.eventcards}>
      <div className={style.eventcards__con}>
        {!sortByNewest &&
          events.reverse().map((event, index) => (
            <div key={index} className={style.eventcard}>
              <Image
                src={event.image}
                alt={event.name.substr(0, 20)}
                width={200}
                height={200}
                priority
              />
              <div className={style.eventcard__content}>
                <h2>{event.name.substr(0, 30)}</h2>
                <p
                  onClick={() => {
                    dispatch(toggleEventModal());
                    dispatch(changeActiveEvent(event));
                  }}
                >
                  view event
                </p>
              </div>
            </div>
          ))}
        {sortByNewest &&
          events.map((event, index) => (
            <div key={index} className={style.eventcard}>
              <Image
                src={event.image}
                alt={event.name.substr(0, 20)}
                width={200}
                height={200}
                priority
              />
              <div className={style.eventcard__content}>
                <h2>{event.name.substr(0, 30)}</h2>
                <p
                  onClick={() => {
                    dispatch(toggleEventModal());
                    dispatch(changeActiveEvent(event));
                  }}
                >
                  view event
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
