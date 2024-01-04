import { useRef, useEffect, useState } from "react";

const DataTable = () => {
  const [data, setData] = useState([]);
  const [editId, setEditId] = useState(false);
  const [formData, setFormData] = useState({ name: "", gender: "", age: "" });
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const outsideClick = useRef(false);
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  let filteredItems = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const filteredData = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm]);

  useEffect(() => {
    if (!editId) return;

    let selectedItem = document.querySelectorAll(`[id='${editId}']`);
    selectedItem[0].focus();
  }, [editId]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        outsideClick.current &&
        !outsideClick.current.contains(event.target)
      ) {
        setEditId(false);
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleAddClick = () => {
    if (formData.name && formData.gender && formData.age) {
      const newItem = {
        id: Date.now(),
        name: formData.name,
        gender: formData.gender,
        age: formData.age,
      };
      setData([...data, newItem]);
      setFormData({ name: "", gender: "", age: "" });
    }
  };

  const handleEdit = (id, updatedData) => {
    if (!editId || editId !== id) {
      return;
    }

    const updatedList = data.map((item) =>
      item.id === id ? { ...item, ...updatedData } : item
    );
    setData(updatedList);
  };

  const handleDelete = (id) => {
    if (filteredData.length === 1 && currentPage !== 1) {
      setCurrentPage((prev) => prev - 1);
    }
    const updatedList = data.filter((item) => item.id !== id);
    setData(updatedList);
  };

  return (
   <div className="Crud_Body">
     <div className="CRUD_Container">
      <div className="add-CRUD_Container">
        <div className="info-CRUD_Container">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Gender"
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder="Age"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </div>
        <button className="add_crud" onClick={handleAddClick}>
          ADD
        </button>
      </div>

      <div className="search-table-CRUD_Container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
        <table className="table-crud-table" ref={outsideClick}>
          <thead className="table-crud-thead">
            <tr className="table-crud-tr" >
              <th className="table-crud-th">Name</th>
              <th className="table-crud-th">Gender</th>
              <th className="table-crud-th">Age</th>
              <th className="table-crud-th">Action</th>
            </tr>
          </thead>
          <tbody className="table-crud-tbody">
            {filteredData.map((item) => (
              <tr className="table-crud-tr" key={item.id}>
                <td className="table-crud-td"
                  id={item.id}
                  contentEditable={editId === item.id}
                  onBlur={(e) =>
                    handleEdit(item.id, { name: e.target.innerText })
                  }
                >
                  {item.name}
                </td>
                <td className="table-crud-td"
                  id={item.id}
                  contentEditable={editId === item.id}
                  onBlur={(e) =>
                    handleEdit(item.id, { gender: e.target.innerText })
                  }
                >
                  {item.gender}
                </td>
                <td className="table-crud-td"
                  id={item.id}
                  contentEditable={editId === item.id}
                  onBlur={(e) =>
                    handleEdit(item.id, { age: parseInt(e.target.innerText) })
                  }
                >
                  {item.age}
                </td>
                <td className="actions">
                  <button
                    className="edit"
                    onClick={() => {
                      setEditId(item.id);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="crud-pagination">
          {Array.from(
            { length: Math.ceil(filteredItems.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index + 1}
                style={{
                  backgroundColor: currentPage === index + 1 ,
                }}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </div>
      </div>
    </div>
   </div>
  );
};

export default DataTable;
