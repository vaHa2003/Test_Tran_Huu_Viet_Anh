import { MdOutlineEdit } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import { BsArrowDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import AxiosInstance from "../../api/axiosInstance";
import Modal from "../Modal/Modal";
import { toast } from "react-toastify";
import Pagination from "../../components/Pagination/Pagination";

export type PostType = {
  id: string;
  title: string;
  tags: { tag: string }[];
  description: string;
  current_page: number;
  page_size: number;
  total: number;
  total_page: number;
};

export type Data = {
  isShow: boolean;
  type: string;
  data: PostType | null | ((obj: any) => PostType) | undefined;
};

const Post = () => {
  const [title, setTitle] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [posts, setPosts] = useState<PostType[]>([]);
  const [error, setError] = useState<string>("");
  const [showModal, setShowModal] = useState(false);

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(10);
  const [total, setTotal] = useState<number>(0);

  const [isOpenAddEditModal, setIsOpenAddEditModal] = useState({
    isShow: false,
    type: "add",
    data: null,
  });

  // hàm lấy dữ liệu từ api post
  const fetchPost = (page: number) => {
    AxiosInstance.get(
      `https://api-test-web.agiletech.vn/posts?page=${page}&page_size=${pageSize}`
    ).then((res) => {
      setPosts(res.data.posts);
      setCurrentPage(res.data.current_page);
      setTotalPage(res.data.total_page);
      setPageSize(res.data.page_size);
      setTotal(res.data.total);
    });
  };

  useEffect(() => {
    fetchPost(currentPage);
  }, [currentPage]);

  // hàm sign in
  const deletePost = (id: string) => {
    AxiosInstance.delete(`/posts/${id}`)
      .then(() => {
        fetchPost(currentPage);
        toast.success("Delete post successfully", {
          position: "top-right",
          autoClose: 1800,
          closeOnClick: true,
        });
      })
      .catch((err) => console.log(err));
  };

  // hàm lấy value của select tags
  const handleTagChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTag(e.target.value);
  };

  // next page
  const handleNextPage = () => {
    if (currentPage < totalPage) {
      setCurrentPage(currentPage + 1);
    }
  };

  // prev page
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageClick = (index: number) => {
    setCurrentPage(index);
  };

  return (
    <div>
      <Modal
        fetchPost={fetchPost}
        isOpenAddEditModal={isOpenAddEditModal.isShow}
        type={isOpenAddEditModal.type}
        setIsOpenAddEditModal={setIsOpenAddEditModal}
        postData={isOpenAddEditModal.data}
      />
      <div className="flex mt-10  items-start justify-between gap-x-80 flex-col xl:flex-row">
        <div>
          <button
            type="submit"
            onClick={() =>
              setIsOpenAddEditModal({
                isShow: true,
                type: "add",
                data: null,
              })
            }
            className="h-[40px] px-[60px] rounded-[20px] text-white btn-primary mb-8 xl:mb-0"
          >
            Add new
          </button>
        </div>
        <div className="flex flex-col gap-4 flex-1 xl:flex-auto">
          <div className="flex items-center justify-center gap-4">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              id="title"
              type="text"
              placeholder="Title"
              className="w-full border py-2 px-4 rounded-[10px] focus:outline-none border-gray-400"
            />
            <div className="relative w-full">
              <select
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
          <div className="flex items-center justify-between">
            {error && <p className="text-red-600 text-end">{error}</p>}
          </div>
        </div>
      </div>

      {/* table */}
      <div className="overflow-x-auto mt-10">
        <table className="w-full text-sm text-left text-black border border-slate-500">
          <thead className="text-[1rem] text-center text-black bg-gray-300">
            <tr>
              <th scope="col" className="px-6 py-3 border border-slate-500">
                ID
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-500">
                Title
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-500">
                Description
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-500">
                Tags
              </th>
              <th scope="col" className="px-6 py-3 border border-slate-500">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => {
              const { id, title, tags, description } = post;
              return (
                <tr key={index} className="bg-white text-center">
                  <th
                    scope="row"
                    className="px-6 py-4 border border-slate-500 font-medium text-black whitespace-nowrap"
                  >
                    {index + 1 + (currentPage - 1) * pageSize}
                  </th>
                  <td className="px-6 py-4 border border-slate-500">{title}</td>
                  <td className="px-6 py-4 border border-slate-500">
                    {description}
                  </td>
                  <td className="px-6 py-4 border border-slate-500">
                    {tags[0]?.tag || tags?.join(",")}
                  </td>
                  <td className="px-6 py-4 border border-slate-500">
                    <span className="flex gap-4 items-center justify-center">
                      <button className="">
                        <MdOutlineEdit
                          size={25}
                          onClick={() =>
                            setIsOpenAddEditModal({
                              isShow: true,
                              type: "edit",
                              data: post,
                            })
                          }
                        />
                      </button>
                      <button className="" onClick={() => deletePost(id)}>
                        <FaTrash size={22} />
                      </button>
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="mt-2 flex justify-end">
        <Pagination
          handlePrevPage={handlePrevPage}
          currentPage={currentPage}
          totalPage={totalPage}
          handleNextPage={handleNextPage}
          handlePageClick={handlePageClick}
        />
      </div>
    </div>
  );
};

export default Post;
