import { useState } from "react";
import "./Profile.css";
import { profileData } from "./profile-data";
import { FaTrashAlt } from "react-icons/fa";

const Profile = () => {
  const [userProfile, setUserProfile] = useState(profileData);
  const [search, setSearch] = useState("");

  const removeProfile = (id) => {
    console.log(id);
    const newProfileList = userProfile.filter((profile) => profile.id !== id);
    setUserProfile(newProfileList);
  };

  const handleInputChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <section className="profile-sec">
      <div className="container">
        <h2 className="text">LIST of React Projects</h2>
        <div className="form-control">
          <input
            type="text"
            placeholder="Search..."
            className="placeholder"
            onChange={handleInputChange}
            value={search}
          />
        </div>
        {userProfile
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
          })
          .map((profile) => (
            <div className="profile" key={profile.id}>
              <img src={profile.img} alt="profile" />
              <div className="desc">
                <h4 className="--text-light">{profile.name}</h4>
                <p className="--text-light">{profile.job}</p>
              </div>
              <FaTrashAlt
                size={18}
                className="icon"
                onClick={() => removeProfile(profile.id)}
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Profile;