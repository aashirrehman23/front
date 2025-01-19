import React, { useState } from "react";
import CreatableSelect from "react-select/creatable";
import AlertDialogSlide from "./Modal";
interface ModalBlogProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
  setBlogId?: React.Dispatch<React.SetStateAction<string>>;
}
const ModalBlog = ({ open, setOpen, id, setBlogId }: ModalBlogProps) => {
  const [newBlog, setNewBlog] = useState("");
  const [value, setValue] = useState([]);
  const [tags, setTags] = useState([]);
  const handleAddBlog = () => {
    setOpen(false);
    setNewBlog("");
  };
  const handleChange = (selectedOptions) => {
    const allValues = selectedOptions
      ? selectedOptions.map((opt) => opt.value)
      : [];
    setValue(selectedOptions);
    setTags(allValues);
  };
  return (
    <AlertDialogSlide
      headerTitle={id ? "Edit Blog" : "Add Blog"}
      open={open}
      setOpen={(e) => {
        setOpen(e);
        setBlogId("");
      }}
    >
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-bold text-black "
        >
          Your blog
        </label>
        <div className="flex flex-col gap-5">
          <textarea
            name="newBlog"
            id="newBlog"
            className="bg-gray-50 border h-52  resize-none border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5"
            placeholder="Start typing here..."
            value={newBlog}
            onChange={(e) => setNewBlog(e.target.value)}
            required
          />
          <CreatableSelect
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            isMulti
            value={value}
            onChange={handleChange}
            className="w-80 rounded-lg"
          />
        </div>
      </div>
      <button
        onClick={handleAddBlog}
        className="mt-4 float-right  text-white bg-black hover:bg-black active:scale-95 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        {id ? "Edit Blog" : "Add Blog"}
      </button>
    </AlertDialogSlide>
  );
};

export default ModalBlog;
