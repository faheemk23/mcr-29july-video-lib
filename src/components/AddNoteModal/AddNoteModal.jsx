import { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import { VideosContext } from "../../contexts/VideosContext";
import "./AddNoteModal.css";

export default function AddNoteModal({ setShowAddNoteModal, videoId }) {
  const [noteInput, setNoteInput] = useState({ content: "" });

  const { videosDispatch } = useContext(VideosContext);

  const handleBtnAddNote = () => {
    if (noteInput !== "") {
      videosDispatch({
        type: "add-note",
        payload: { videoId, note: { ...noteInput, _id: uuid() } },
      });
    }
  };

  return (
    <div className="modal-container">
      <div className="add-note-modal">
        <span
          class="material-symbols-outlined pointer"
          onClick={() => setShowAddNoteModal(false)}
        >
          close
        </span>
        <input
          type="text"
          placeholder="New Note"
          onChange={(e) =>
            setNoteInput((prev) => ({ ...prev, content: e.target.value }))
          }
        />
        <button onClick={() => handleBtnAddNote()}>Add a note</button>
      </div>
    </div>
  );
}
