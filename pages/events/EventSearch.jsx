import style from "../../styles/Events.module.css";

import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { toggleEventModal } from "../../redux/slices/eventModalToggleSlice";
import { changeActiveBlog } from "../../redux/slices/activeBlogSlice";
import { IoSearchOutline } from "react-icons/io5";
import useFetch from "../../hooks/useFetch";

export default function EventSearch() {
  const dispatch = useAppDispatch();

  const [filteredData, setFilteredData] = useState([]);
  const [word, setWord] = useState("");
  const { data, loading, error } = useFetch("events");

  const handleSearch = (e) => {
    const keyword = e.target.value;
    // const newFilter = data.filter((article: any) => {
    //   return article.name.toLowerCase().includes(keyword.toLowerCase())
    // })
    if (keyword === "") {
      setFilteredData([]);
      setWord("");
    }

    setFilteredData(
      data.filter((article) =>
        article.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
    setWord(keyword);
  };
  const clearSearch = () => {
    setFilteredData([]);
    setWord("");
  };

  const checkEmpty = (e) => {
    if (e.target.value === "") {
      setFilteredData([]);
      setWord("");
    }
  };

  return (
    <div className={style.eventsearch}>
      <div className={style.eventsearch__con}>
        <input
          id="event-search"
          className={style.top_section_search}
          type="text"
          placeholder="Search here"
          value={word}
          onChange={handleSearch}
          onKeyDown={checkEmpty}
        />
        <IoSearchOutline
          id="event-search"
          className={style.top_section_search_icon}
        />
      </div>
      {filteredData.length != 0 && (
        <div className={style.searchResult}>
          {data &&
            filteredData.slice(0, 10).map((event, index) => (
              <div className={style.searchResult__con} key={index}>
                <p
                  id="event-search"
                  onClick={() => {
                    dispatch(toggleEventModal());
                    dispatch(changeActiveBlog(event));
                    clearSearch();
                  }}
                >
                  {event.name.substr(0, 50)}
                </p>
              </div>
            ))}
        </div>
      )}
    </div>
  );
}
