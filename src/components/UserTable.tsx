import { useState } from "react";
import AlertDialogSlide from "./Modal";

const UserTable = () => {
  const [open, setOpen] = useState(false);
  const [newBlog, setNewBlog] = useState("");
  const users = [
    { id: 1, name: "Neil Sims", title: "Lorem ipsum dolor sit amet." },
    { id: 2, name: "Bonnie Green", title: "Consectetur adipiscing elit." },
    { id: 3, name: "Jese Leos", title: "Sed do eiusmod tempor incididunt." },
    { id: 4, name: "Thomas Lean", title: "Ut labore et dolore magna aliqua." },
    {
      id: 5,
      name: "Leslie Livingston",
      title: "Duis aute irure dolor in reprehenderit.",
    },
    {
      id: 6,
      name: "Sophia White",
      title: "Excepteur sint occaecat cupidatat non proident.",
    },
    {
      id: 7,
      name: "Daniel Brown",
      title: "Nemo enim ipsam voluptatem quia voluptas.",
    },
    {
      id: 8,
      name: "Emma Johnson",
      title: "Quis autem vel eum iure reprehenderit.",
    },
    {
      id: 9,
      name: "Olivia Clark",
      title: "Eum fugiat quo voluptas nulla pariatur.",
    },
    { id: 10, name: "William Turner", title: "At vero eos et accusamus." },
    {
      id: 11,
      name: "James Carter",
      title: "Et harum quidem rerum facilis est et expedita.",
    },
    {
      id: 12,
      name: "Lucas Moore",
      title: "Nam libero tempore, cum soluta nobis est eligendi.",
    },
    {
      id: 13,
      name: "Mason Hall",
      title: "Optio cumque nihil impedit quo minus id quod.",
    },
    { id: 14, name: "Ella Scott", title: "Omnis voluptas assumenda est." },
    {
      id: 15,
      name: "Ava Lewis",
      title: "Dolorem eum fugiat quo voluptas nulla.",
    },
    {
      id: 16,
      name: "Harper King",
      title: "Temporibus autem quibusdam et aut officiis.",
    },
    {
      id: 17,
      name: "Evelyn Adams",
      title: "Itaque earum rerum hic tenetur a sapiente.",
    },
    {
      id: 18,
      name: "Liam Nelson",
      title: "Fugit, sed quia consequuntur magni dolores eos.",
    },
    {
      id: 19,
      name: "Henry Brooks",
      title: "Neque porro quisquam est, qui dolorem ipsum quia.",
    },
    {
      id: 20,
      name: "Chloe Roberts",
      title: "Sed ut perspiciatis unde omnis iste natus.",
    },
  ];
  const handleAddBlog = () => {
    setOpen(false);
  };
  return (
    <div className="relative overflow-x-auto m-10 ">
      <div className="flex items-end flex-col  flex-wrap md:flex-nowrap space-y-4 md:space-y-0  pb-4">
        <div
          onClick={() => setOpen(true)}
          className="text-lg px-5 py-2 !rounded-lg font-semibold cursor-pointer  border border-white text-white bg-black "
        >
          Add Blog
        </div>
      </div>

      <div className=" flex items-center ">
        <div className=" w-full p-4">
          <h1 className="text-3xl font-bold  mb-6">Blog List</h1>

          <div className="space-y-4 flex gap-5 flex-wrap ">
            {users.map((blog, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-4 border  bg-white rounded-lg shadow-lg"
              >
                <div>
                  <h2 className="text-lg font-semibold">{blog.name}</h2>
                  <p className="text-gray-600">{blog.title} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AlertDialogSlide headerTitle="Add Blog" open={open} setOpen={setOpen}>
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-bold text-black "
          >
            Your blog
          </label>
          <textarea
            name="newBlog"
            id="newBlog"
            className="bg-gray-50 border h-52  border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-80 p-2.5"
            placeholder="Start typing here..."
            value={newBlog}
            onChange={(e) => setNewBlog(e.target.value)}
            required
          />
        </div>
        <button
          onClick={handleAddBlog}
          className="mt-4  text-white bg-black hover:bg-black active:scale-95 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Add
        </button>
      </AlertDialogSlide>
    </div>
  );
};

export default UserTable;
