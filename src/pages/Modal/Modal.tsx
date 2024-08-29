import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { BsArrowDown } from "react-icons/bs";
import { IoClose } from "react-icons/io5";
import AxiosInstance from "../../api/axiosInstance";
import { IoMdClose } from "react-icons/io";
import { toast } from "react-toastify";

type ModalProps = {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
  fetchPost: () => void;
  isOpenAddEditModal: boolean;
  setIsOpenAddEditModal: Dispatch<SetStateAction<Data>>;
  postData: null;
  type: string;
};

type Payload = {
  title: string;
  description: string;
  tags: string[];
  isOpenAddEditModal?: boolean;
  setIsOpenAddEditModal: Dispatch<SetStateAction<boolean>>;
  postData: string;
};

const Modal = ({
  fetchPost,
  isOpenAddEditModal,
  setIsOpenAddEditModal,
  postData,
  type,
}: ModalProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [listTags, setListTags] = useState<string[]>([]);
  const [error, setError] = useState<string | null>("");

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [selectedTag, setSelectedTag] = useState<string>("");

  // cập nhật laị dữ liệu khi mở modal
  useEffect(() => {
    if (isOpenAddEditModal && postData) {
      setTitle(postData.title || "");
      setDescription(postData.description || "");
      setListTags(postData.tags || []);
    } else {
      setTitle("");
      setDescription("");
      setListTags([]);
    }
  }, [isOpenAddEditModal, postData]);

  // lấy value của select
  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(e.target.value);
  };

  // hàm add tag
  const handleAddTag = () => {
    if (selectedTag && listTags.length < 3) {
      setListTags([...listTags, selectedTag]);
      setSelectedTag("");
    }
  };

  // hàm xóa tag
  const handleTaglist = (index: number) => {
    const newTag = [...listTags];
    newTag.splice(index, 1);
    setListTags(newTag);
  };

  // get data
  const fetchTags = () => {
    AxiosInstance.get("/posts/tags")
      .then((res) => setTags(res.data))
      .catch((err) => console.log(err));
  };

  // hàm add post
  const AddPost = async (payload: Payload) => {
    const res = await AxiosInstance.post("/posts", payload);
    if (res.data) {
      fetchPost();
      toast.success("Post created successfully!", {
        position: "top-right",
        autoClose: 2000,
      });

      setIsOpenAddEditModal({
        isShow: false,
      });
      setError("");
    }
  };

  // hàm edit post
  const EditPost = async (payload: Payload) => {
    const id = postData?.id;
    const res = await AxiosInstance.patch(`/posts/${id}`, payload);
    if (res.data) {
      fetchPost();
      toast.success("Post updated successfully!", {
        position: "top-right",
        autoClose: 2000,
      });
      setIsOpenAddEditModal({
        isShow: false,
      });
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!title) {
      setError("Please enter title!!");
      return;
    }
    if (!description) {
      setError("Please enter description!!");
      return;
    }
    if (listTags.length === 0) {
      setError("Please select tags!!");
      return;
    }

    const payload: Payload = {
      title: title,
      description: description,
      tags: listTags,
    };

    if (type === "edit") {
      EditPost(payload);
    } else {
      AddPost(payload);
    }

    setError("");
  };

  useEffect(() => {
    fetchTags();
  }, []);

  return (
    <div>
      {isOpenAddEditModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative m-auto my-6 mx-auto w-[380px]">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold fontFamily">
                    {type === "edit" ? "Edit Post" : "Add Post"}
                  </h3>
                  <button
                    className="p-1 ml-auto border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() =>
                      setIsOpenAddEditModal({
                        isShow: false,
                        type: "add",
                        data: null,
                      })
                    }
                  >
                    <IoClose className="text-red-500" />
                  </button>
                </div>

                {/*body*/}
                <form
                  className="relative p-6 flex flex-col gap-4"
                  onSubmit={handleSubmit}
                >
                  {error && <p className="text-red-500">{error}</p>}

                  {/* title */}
                  <div>
                    <label htmlFor=" text-[#000]">Title</label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      id="title"
                      type="text"
                      placeholder="Title"
                      className="w-full mt-2 border py-2 px-4 rounded-[10px] focus:outline-none border-gray-400"
                    />
                  </div>

                  {/* description */}
                  <div>
                    <label htmlFor="description">Description</label>
                    <textarea
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      name=""
                      id="description"
                      className="w-full h-32 mt-2 border py-2 px-4 rounded-[10px] focus:outline-none border-gray-400"
                    ></textarea>
                  </div>

                  {/* tags */}
                  <div>
                    <label htmlFor="tags">Tags</label>
                    <div className="flex items-center gap-3 mb-2 mt-2">
                      {listTags.map((list, index) => (
                        <ul key={index} className="flex gap-2 mb-2">
                          <li className="bg-gray-200 p-2 rounded-[4px] flex items-center gap-2 justify-center">
                            {list}
                            <span
                              className="cursor-pointer"
                              onClick={() => handleTaglist(index)}
                            >
                              <IoMdClose />
                            </span>
                          </li>
                        </ul>
                      ))}
                    </div>

                    <div className="relative w-full">
                      <select
                        onClick={handleAddTag}
                        value={selectedTag}
                        onChange={handleTagChange}
                        name="HeadlineAct"
                        id="HeadlineAct"
                        className="w-full py-2 px-4 border rounded-[10px] focus:outline-none border-gray-400 appearance-none"
                      >
                        <option value="">Select a tag</option>
                        {tags.map((tag, index) => (
                          <option key={index} value={tag}>
                            {tag}
                          </option>
                        ))}
                      </select>
                      <BsArrowDown className="absolute top-1/2 right-4 transform -translate-y-1/2 pointer-events-none" />
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-4 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() =>
                        setIsOpenAddEditModal({
                          isShow: false,
                          type: "add",
                          data: null,
                        })
                      }
                    >
                      Close
                    </button>

                    <button
                      className="bg-violet-500 text-white active:bg-violet-500 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      {type === "edit" ? "Update Post" : "Create Post"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
};

export default Modal;
