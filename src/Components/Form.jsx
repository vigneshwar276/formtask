// import { useState } from "react";

// export const Form = () => {
//   const [users, setUsers] = useState([]);
//   const [formData, setFormData] = useState({
//     id: null,
//     firstName: "",
//     lastName: "",
//     email: "",
//     mobile: "",
//     address: "",
//   });
//   const [errors, setErrors] = useState({});
//   const [editing, setEditing] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//     setErrors({ ...errors, [e.target.name]: "" });
//   };

//   const validateForm = () => {
//     let newErrors = {};
//     if (formData.firstName.trim().length < 2)
//       newErrors.firstName = "First name must be at least 2 characters.";
//     if (formData.lastName.trim().length < 2)
//       newErrors.lastName = "Last name must be at least 2 characters.";
//     if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
//       newErrors.email = "Enter a valid email address.";
//     if (!/^\d{10}$/.test(formData.mobile))
//       newErrors.mobile = "Mobile number must be 10 digits.";
//     if (formData.address.trim().length < 5)
//       newErrors.address = "Address must be at least 5 characters.";

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     if (editing) {
//       setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
//       setEditing(false);
//     } else {
//       setUsers([...users, { ...formData, id: Date.now() }]);
//     }
//     setFormData({ id: null, firstName: "", lastName: "", email: "", mobile: "", address: "" });
//   };

//   const handleEdit = (user) => {
//     setFormData(user);
//     setEditing(true);
//   };

//   const handleDelete = (id) => {
//     setUsers(users.filter((user) => user.id !== id));
//   };

//   const handleSaveToNotepad = () => {
//     const jsonData = JSON.stringify(users, null, 2);
//     const blob = new Blob([jsonData], { type: "application/json" });
//     const a = document.createElement("a");
//     a.href = URL.createObjectURL(blob);
//     a.download = "UserDetails.json";
//     document.body.appendChild(a);
//     a.click();
//     document.body.removeChild(a);
//   };

//   return (
//     <div className="container mt-4">
//       <h2 className="text-center">User Management</h2>

//       {/* Form */}
//       <div className="card p-4 shadow mb-4">
//         <h4>{editing ? "Edit User" : "Add New User"}</h4>
//         <form onSubmit={handleSubmit}>
//           <div className="mb-3">
//             <label className="form-label">First Name:</label>
//             <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
//             {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Last Name:</label>
//             <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
//             {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Email:</label>
//             <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
//             {errors.email && <div className="text-danger">{errors.email}</div>}
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Mobile Number:</label>
//             <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
//             {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
//           </div>

//           <div className="mb-3">
//             <label className="form-label">Address:</label>
//             <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} rows="2" required></textarea>
//             {errors.address && <div className="text-danger">{errors.address}</div>}
//           </div>

//           <button type="submit" className="btn btn-primary w-100">{editing ? "Update User" : "Add User"}</button>
//         </form>
//       </div>

//       {/* Users List (Card-based Layout) */}
//       <div className="card p-4 shadow">
//         <h4>Users List</h4>
//         {users.length === 0 ? (
//           <p className="text-muted text-center">No users available.</p>
//         ) : (
//           <div className="row">
//             {users.map((user) => (
//               <div key={user.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
//                 <div className="card p-3 shadow-sm">
//                   <h5 className="card-title">{user.firstName} {user.lastName}</h5>
//                   <p className="card-text"><strong>Email:</strong> {user.email}</p>
//                   <p className="card-text"><strong>Mobile:</strong> {user.mobile}</p>
//                   <p className="card-text"><strong>Address:</strong> {user.address}</p>
//                   <div className="d-flex justify-content-between">
//                     <button className="btn btn-warning btn-sm" onClick={() => handleEdit(user)}>Edit</button>
//                     <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//         <button className="btn btn-success mt-3 w-100" onClick={handleSaveToNotepad}>Save to Notepad</button>
//       </div>
//     </div>
//   );
// };






import { useState } from "react";

export const Form = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    address: "",
    gender: "",
  });
  const [errors, setErrors] = useState({});
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (formData.firstName.trim().length < 2)
      newErrors.firstName = "First name must be at least 2 characters.";
    if (formData.lastName.trim().length < 2)
      newErrors.lastName = "Last name must be at least 2 characters.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email address.";
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Mobile number must be 10 digits.";
    if (formData.address.trim().length < 5)
      newErrors.address = "Address must be at least 5 characters.";
    if (!formData.gender) newErrors.gender = "Please select a gender.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    if (editing) {
      setUsers(users.map((user) => (user.id === formData.id ? formData : user)));
      setEditing(false);
    } else {
      setUsers([...users, { ...formData, id: Date.now() }]);
    }
    setFormData({ id: null, firstName: "", lastName: "", email: "", mobile: "", address: "", gender: "" });
  };

  const handleEdit = (user) => {
    setFormData(user);
    setEditing(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSaveToNotepad = () => {
    const jsonData = JSON.stringify(users, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "UserDetails.json";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">User Management</h2>

      {/* Form */}
      <div className="card p-4 shadow mb-4">
        <h4>{editing ? "Edit User" : "Add New User"}</h4>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">First Name:</label>
            <input type="text" className="form-control" name="firstName" value={formData.firstName} onChange={handleChange} required />
            {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Last Name:</label>
            <input type="text" className="form-control" name="lastName" value={formData.lastName} onChange={handleChange} required />
            {errors.lastName && <div className="text-danger">{errors.lastName}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Email:</label>
            <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <div className="text-danger">{errors.email}</div>}
          </div>
           
              <div className="mb-3">
            <label className="form-label">Gender:</label>
            <select className="form-control" name="gender" value={formData.gender} onChange={handleChange} required>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <div className="text-danger">{errors.gender}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Mobile Number:</label>
            <input type="tel" className="form-control" name="mobile" value={formData.mobile} onChange={handleChange} required />
            {errors.mobile && <div className="text-danger">{errors.mobile}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Address:</label>
            <textarea className="form-control" name="address" value={formData.address} onChange={handleChange} rows="2" required></textarea>
            {errors.address && <div className="text-danger">{errors.address}</div>}
          </div>

       

          <button type="submit" className="btn btn-primary w-100">{editing ? "Update User" : "Add User"}</button>
        </form>
      </div>

      {/* Users List */}
      <div className="card p-4 shadow">
        <h4>Users List</h4>
        {users.length === 0 ? (
          <p className="text-muted text-center">No users available.</p>
        ) : (
          <div className="row">
            {users.map((user) => (
              <div key={user.id} className="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div className="card p-3 shadow-sm">
                  <h5 className="card-title">{user.firstName} {user.lastName}</h5>
                  <p className="card-text"><strong>Email:</strong> {user.email}</p>
                  <p className="card-text"><strong>Gender:</strong> {user.gender}</p>
                  <p className="card-text"><strong>Mobile:</strong> {user.mobile}</p>
                  <p className="card-text"><strong>Address:</strong> {user.address}</p>
                  <div className="d-flex justify-content-between">
                    <button className="btn btn-warning btn-sm" onClick={() => handleEdit(user)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(user.id)}>Delete</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        <button className="btn btn-success mt-3 w-100" onClick={handleSaveToNotepad}>Save to Notepad</button>
      </div>
    </div>
  );
};
