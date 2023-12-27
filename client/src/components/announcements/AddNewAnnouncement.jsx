import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { GrAnnounce } from "react-icons/gr";
import feedsStyle from "../../constants/styles/feedsStyle";
import { useNavigate } from "react-router-dom";
import { createAnnouncement } from "../../redux/slices/announcementSlice";

import { useRef } from "react";
import { useDispatch } from "react-redux";
export default function AddNewAnnouncement() {
  const descRef = useRef(null);
  const tagRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      createAnnouncement({
        announcementDetails: descRef.current.value,
        tags: tagRef.current.value.split(","),
      })
    );
    navigate("/announcements");
  };
  return (
    <section className={feedsStyle.sectionStyle}>
      <div className="py-2  text-pink-600 rounded-3xl">
        <h1 className="text-5xl font-bold">Announcement</h1>
      </div>
      <p className="my-5">DETAILS</p>
      <div className="flex w-full justify-between">
        <input
          placeholder="Event type..."
          className={feedsStyle.eventTypeInputStyle}
          ref={tagRef}
        />
        <button type="button" className={feedsStyle.btn1}>
          Set Activities <AiOutlineArrowRight />
        </button>
      </div>
      <p className="my-5">DESCRIPTION</p>
      <div>
        <textarea
          rows={4}
          ref={descRef}
          className={feedsStyle.textareaStyle}
          placeholder="Enter details"
        />
      </div>
      <div className="flex gap-3 justify-center mt-5">
        <button
          onClick={() => navigate("/announcements")}
          type="button"
          className={feedsStyle.btn2}
        >
          <AiOutlineArrowLeft /> Go Back
        </button>

        <button type="button" className={feedsStyle.btn3} onClick={handleClick}>
          Create Announcement <GrAnnounce />
        </button>
      </div>
    </section>
  );
}
