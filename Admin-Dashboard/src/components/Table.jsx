import axios from "axios";
import React from "react";
import { MdDeleteForever } from "react-icons/md";
import Pagination from "./Pagination";
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Table = ({ thead, data, page, getData, pagination }) => {
  const origin = "http://localhost:5000/v1";
  console.log(page);
  console.log(data);
  const handleDelete = async (id) => {
    try {
      const response = axios.delete(`${origin}/admin/${page}/${id}`, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJiYXNzZWxAdGVzdC5jb20iLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2ODc1NjI1NjMsImV4cCI6MTY4NzczNTM2M30.Mb5zQcsdkrKxu988Gebnz6kHcHFlJLATCWoWrjyifEc",
        },
      });
      getData();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className=" mb-5 font-bold md:text-3xl text-blue-600 mt-20  ">
        {page}
      </h1>
      <div className="w-full overflow-auto overflow-x-auto max-h-[500px] mb-2">
        <table className="table w-full border-2">
          <thead>
            <tr className="text-white bg-blue-600 text-lg lg:text-xl">
              <th>{thead[1]}</th>
              <th>{thead[2]}</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                {page == "Jobs" ? (
                  <>
                    <td>
                      <div>
                        <div className="font-bold">{item.title}</div>
                      </div>
                    </td>
                    <td>
                      {item.category}
                      <br />
                    </td>
                  </>
                ) : (
                  <>
                    <td>
                      <div>
                        {item.name ? (
                          <div className="font-bold">{item.name}</div>
                        ) : (
                          <div className="font-bold">{`${item.first_name} ${item.last_name}`}</div>
                        )}
                      </div>
                    </td>
                    <td>
                      {item.email}
                      <br />
                    </td>
                  </>
                )}

                <td>
                  <button onClick={() => handleDelete(item.id)}>
                    <MdDeleteForever className="text-2xl text-red-500" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mb-20">
        <Pagination pagination={pagination} />
      </div>
    </>
  );
};

export default Table;
