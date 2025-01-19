import { useState } from "react";

import { blogsData } from "../constants/dummyData";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import ModalBlog from "./ModalBlog";

interface blogsData {
  _id: number;
  name: string;
  title: string;
  tags: string[];
}
const UserTable = () => {
  const [open, setOpen] = useState(false);
  const [blogId, setBlogId] = useState("");
  // const [newBlog, setNewBlog] = useState("");
  // const [value, setValue] = useState([]);
  // const [tags, setTags] = useState([]);
  const handleModal = (id?: string) => {
    setOpen(true);
    if (id) return setBlogId(id);
  };
  console.log(blogId, "blo");
  const handleDelete = (id: string) => {};
  return (
    <div className="relative overflow-x-auto m-10 ">
      <div className="flex items-end flex-col  flex-wrap md:flex-nowrap space-y-4 md:space-y-0  pb-4">
        <div
          onClick={() => handleModal()}
          className="text-lg px-5 py-2 !rounded-lg font-semibold cursor-pointer  border border-white text-white bg-black active:scale-[0.97]"
        >
          Add Blog
        </div>
      </div>

      <div className=" flex items-center ">
        <div className=" w-full p-4">
          <h1 className="text-3xl font-bold  mb-6">Blog List</h1>

          <div className="md:columns-3 sm:columns-2 columns-1 gap-4">
            {blogsData.map((blog: blogsData, index: number) => (
              <div
                key={index}
                className="mb-4 break-inside-avoid p-4 border group bg-white rounded-lg shadow-md hover:scale-[0.97] transition-transform duration-300 ease-in-out gap-4 "
              >
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold">{blog.name}</h2>
                  <div className="flex gap-2 transition duration-300 ease-in-out opacity-0 group-hover:opacity-100">
                    <MdModeEdit
                      className="cursor-pointer active:scale-95"
                      size={20}
                      onClick={() => handleModal(String(blog?._id))}
                    />
                    <MdDelete
                      size={20}
                      className="cursor-pointer active:scale-95 "
                      onClick={() => handleDelete(String(blog?._id))}
                    />
                  </div>
                </div>
                <p className="text-gray-600">{blog.title}</p>
                <div className="flex gap-2 mt-2">
                  {blog?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-block bg-green-100 text-green-800 border border-green-800 text-xs px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ModalBlog
        id={blogId}
        setBlogId={setBlogId}
        open={open}
        setOpen={setOpen}
      />
    </div>
  );
};

export default UserTable;
