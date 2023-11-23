import { useState } from "react";
import firebaseApp from "../FirebaseConfig";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import PropTypes from "prop-types";

const UploadProfilePhoto = ({ onImageUpload }) => {
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState(null);

  const handlePhotoChange = async (e) => {
    const selectedPhoto = e.target.files[0];

    if (selectedPhoto) {
      if (selectedPhoto.type.startsWith("image/")) {
        setUploading(true);
        const storage = getStorage(firebaseApp);
        const storageRef = ref(storage, "profileImages/" + selectedPhoto.name);

        try {
          await uploadBytes(storageRef, selectedPhoto);

          try {
            const imageUrl = await getDownloadURL(storageRef);
            setDownloadURL(imageUrl);
            onImageUpload(imageUrl);
          } catch (error) {
            console.error("Error al obtener la URL de la imagen:", error);
          }
        } catch (error) {
          console.error("Error al cargar imagen:", error);
        } finally {
          setUploading(false);
        }
      } else {
        console.error("Archivo seleccionado no es una imagen");
      }
    }
  };

  let content;
  if (uploading) {
    content = <p>Uploading...</p>;
  } else if (downloadURL) {
    content = (
      <img src={downloadURL} alt="Uploaded" style={{ maxWidth: "200px" }} />
    );
  } else {
    content = (
      <div>
        <span className="mb-2 block text-xl font-semibold text-[#07074D]">
          Drop files here
        </span>
        <span className="mb-2 block text-base font-medium text-[#6B7280]">
          Or
        </span>
        <span className="inline-flex rounded border border-[#e0e0e0] py-2 px-7 text-base font-medium text-[#07074D]">
          Browse
        </span>
      </div>
    );
  }

  return (
    <div className="mb-6 pt-4">
      <label className="mb-5 block text-xl font-semibold text-gray-700">
        Upload File
      </label>
      <div className="mb-8">
        <input
          type="file"
          onChange={handlePhotoChange}
          name="photo"
          id="photo"
          className="sr-only"
          accept="image/*"
        />
        <label
          htmlFor="photo"
          className="relative flex min-h-[200px] items-center justify-center rounded-md border border-dashed border-[#e0e0e0] p-12 text-center"
        >
          {content}
        </label>
      </div>
    </div>
  );
};

UploadProfilePhoto.propTypes = {
  onImageUpload: PropTypes.func.isRequired,
};
export default UploadProfilePhoto;
