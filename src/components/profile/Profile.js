/* Profile Component contains the Application Logic to:
   - Fetch, format and display the user profile data onto the browser using scss and css files
   - When your mouse hover over the trash icon, it turns red
   - When you click on the trash icon beside each profile, it removes that person's profile from the list of profiles
   - When you type out some Search Characters, it filters and display the matching Names
*/
import { useState } from "react";
import "./Profile.scss";
import { profileData } from "./profile-data";
import { FaSearch, FaTrashAlt } from "react-icons/fa";

const Profile = () => {
  const [teamProfile, setTeamProfile] = useState(profileData);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const removeProfile = (id) => {
    console.log(id);
    const newProfileList = teamProfile.filter((profile) => profile.id !== id);
    setTeamProfile(newProfileList);
  };

  return (
    <section className="section --center-all profile-section">
      <h2 className="--fw-bold --text-light">My Team Profile App</h2>
      <div className="container">
        <div className="--form-control">
          <div>
            <input
              className="--width-92"
              type="text"
              placeholder="Enter search text ..."
              value={search}
              onChange={handleSearch}
            />
            &nbsp;
            <FaSearch size={20} className="--bg-grey" />
          </div>
        </div>
        {teamProfile
          .filter((item) => {
            if (search === "") {
              return item;
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
            return false;
          })
          .map((profile) => (
            <div className="profile --card --flex-between" key={profile.id}>
              <img src={profile.img} alt="profile" />
              <div className="desc">
                <h4 className="--text-light">Name: {profile.name}</h4>
                <p className="--text-light">Job: {profile.job}</p>
              </div>
              <FaTrashAlt
                size={20}
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
