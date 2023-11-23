import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import UploadProfilePhoto from "../EventPlannerDashboard/UploadProfilePhoto";
import SelectOptions from "../SelectOptions";
import { PropTypes } from "prop-types";
import MyEventsArtist from "./MyEventsArtist";

const ArtistForm = ({ artistProfilePic }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: { artistbio: "" },
  });

  const token = localStorage.getItem("token");
  const [eventProfilePictureURL, setEventProfilePictureURL] = useState(null);
  const [selectedMusicGenre, setSelectedMusicGenre] = useState("");
  const [selectedPerformance, setSelectedPerformance] = useState("");
  const [selectedTypeOfPerformance, setSelectedTypeOfPerformance] =
    useState("");

  const handleMyEventsClick = () => {
    const myEventsArtistElement = document.getElementById("myEventsArtist");
    myEventsArtistElement.scrollIntoView({ behavior: "smooth" });
  };

  const socialMediaRegex =
    /^((https?|ftp|smtp):\/\/)?(www\.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/;

  const onImageUpload = (url) => {
    setEventProfilePictureURL(url);
  };

  const onSubmit = (data) => {
    console.log(data);

    if (isValid) {
      data.ArtistsProfilePicture = eventProfilePictureURL;
      data.MusicGenre = selectedMusicGenre;
      data.Performance = selectedPerformance;
      data.Type_of_performance = selectedTypeOfPerformance;
      axios
        .put(`/api/artists/artists`, data, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    }
  };

  const handleLogOut = async () => {
    try {
      localStorage.removeItem(`${token}`);
      window.location.href = "/";
    } catch (error) {
      console.error("Logout Failed");
    }
  };

  return (
    <div className="w-full relative  shadow-2xl rounded overflow-hidden">
      <div className="top h-full w-full bg-blue-600 overflow-hidden relative">
        <img
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          alt=""
          className="bg w-full h-full object-cover object-center absolute z-0"
        />
        <div className="flex flex-col justify-center items-center relative h-full bg-black bg-opacity-50 text-white">
          <img
            src={artistProfilePic}
            className="h-64 w-64 object-cover rounded-full my-1 py-1"
          />
          <h1 className="text-2xl font-semibold">
            Antonia Howell{" "}
            <p className="text-lg font-semibold text-center">Dj Tonia</p>
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-12 bg-white items-top object-center-absolute">
        <div className="col-span-12 w-full px-3 py-6 justify-center flex space-x-4 border-b border-solid md:space-x-0 md:space-y-4 md:flex-col md:col-span-2 md:justify-start ">
          <a
            href="#"
            className="text-sm p-2 bg-indigo-900 shadow-md text-white text-center rounded font-bold"
          >
            Edit Profile 🖼
          </a>
          <a
            href="#"
            className="text-sm p-2 bg-white text-center rounded shadow-md font-semibold hover:bg-indigo-700 hover:text-gray-200 md:transition-all "
            onClick={handleMyEventsClick}
          >
            My Events 🎫
          </a>
          <a
            href="#"
            className="text-sm p-2 bg-white text-center rounded shadow-md font-semibold hover:bg-indigo-700 hover:text-gray-200 md:transition-all "
            onClick={handleLogOut}
          >
            Log-out 🔒
          </a>
        </div>

        <div className="col-span-8 md:border-solid md:border-l md:border-black md:border-opacity-25 h-full pb-12 md:col-span-6 items-center">
          <div className="px-4 pt-4">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col space-y-2 "
              action="#"
            >
              <div className="form-item w-full">
                <textarea
                  cols="10"
                  rows="5"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-md py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  placeholder="Bio"
                  maxLength={350}
                  minLength={50}
                  id="ArtistBio"
                  {...register("ArtistBio", { maxLength: 350, minLength: 50 })}
                />
                {errors.artistbio && (
                  <p className="text-red-500 text-sm">
                    {errors.artistbio.message}
                  </p>
                )}
              </div>
              <div className="md:grid md:grid-cols-3 md:gap-4 pb-3 shadow-md">
                <div>
                  <SelectOptions
                    id="musicGenre"
                    label="Music Genre"
                    idField="musicGenre"
                    value={selectedMusicGenre}
                    onChange={(e) => setSelectedMusicGenre(e.target.value)}
                    options={[
                      { value: "Pop", label: "Pop" },
                      { value: "Electonic", label: "Electonic" },
                      { value: "Rock", label: "Rock" },
                      { value: "Urban", label: "Urban" },
                      { value: "Other", label: "Other" },
                    ]}
                  />
                </div>
                <div>
                  <SelectOptions
                    id="performance"
                    label="Performance"
                    idField="performance"
                    value={selectedPerformance}
                    onChange={(e) => setSelectedPerformance(e.target.value)}
                    options={[
                      { value: "Solo", label: "Solo" },
                      { value: "DeeJane/DeeJay", label: "DeeJane/DeeJay" },
                      { value: "Band", label: "Band" },
                    ]}
                  />
                </div>
                <div>
                  <SelectOptions
                    id="typeOfPerformance"
                    label="Music Version"
                    idField="typeOfPerformance"
                    value={selectedTypeOfPerformance}
                    onChange={(e) =>
                      setSelectedTypeOfPerformance(e.target.value)
                    }
                    options={[
                      {
                        value: "Versions & own creations",
                        label: "Versions & own creations",
                      },
                      { value: "Only versions", label: "Only versions" },
                      {
                        value: "Only own creations",
                        label: "Only own creations",
                      },
                    ]}
                  />
                </div>
              </div>

              <div className="form-item">
                <label className="text-xl" htmlFor="ArtistMainLink"></label>
                <input
                  type="text"
                  placeholder="Instagram"
                  id="ArtistMainLink"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-md py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("ArtistMainLink", {
                    pattern: {
                      value: socialMediaRegex,
                      message: "Not a valid Link",
                    },
                  })}
                />
                {errors.ArtistMainLink && (
                  <p className="text-red-500 text-sm">
                    {errors.ArtistMainLink.message}
                  </p>
                )}
              </div>
              <div className="form-item">
                <input
                  type="text"
                  placeholder="Soundcloud"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-md py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("soundcloud", {
                    pattern: {
                      value: socialMediaRegex,
                      message: "Not a valid Link",
                    },
                  })}
                />
                {errors.facebook && (
                  <p className="text-red-500 text-sm">
                    {errors.facebook.message}
                  </p>
                )}
              </div>
              <div className="form-item">
                <label className="text-xl" htmlFor="other"></label>
                <input
                  type="text"
                  placeholder="Other"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-md py-1 px-2  mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200  "
                  {...register("other", {
                    pattern: {
                      value: socialMediaRegex,
                      message: "Not a valid Link",
                    },
                  })}
                />
                {errors.soundcloud && (
                  <p className="text-red-500 text-sm">
                    {errors.soundcloud.message}
                  </p>
                )}
              </div>
              <div className="form-item">
                <label className="text-xl" htmlFor="ContactNumber"></label>
                <input
                  type="number"
                  placeholder="Contact Number"
                  id="ContactNumber"
                  className="w-full appearance-none text-black text-opacity-50 rounded shadow-md py-1 px-2 mr-2 focus:outline-none focus:shadow-outline focus:border-blue-200"
                  {...register("ContactNumber")}
                />
                {errors.ContactNumber && (
                  <p className="text-red-500 text-sm">
                    {errors.ContactNumbers.message}
                  </p>
                )}
              </div>

              <div>
                <UploadProfilePhoto onImageUpload={onImageUpload} />
              </div>
              <button className="flex flex-auto items-left max-w-1xl justify-center p-0.5 mb-2 mr-2 overflow-hidden text-lg font-medium text-gray-900 rounded-sm group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-600">
                <input type="submit" placeholder="submit" />
                {} 📤
              </button>
            </form>
            <div className="pt-5">
              <p 
                style={{ color: '#2B2D42', fontWeight: 'bold', textAlign:'center'}}
                className="pb-5"
              >
                My Events
              </p>
              <MyEventsArtist/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ArtistForm.propTypes = {
  artistProfilePic: PropTypes.string,
};

export default ArtistForm;
