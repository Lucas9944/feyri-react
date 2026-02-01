import React, { useRef, useState } from "react";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Avatar, Button } from "@mui/material";
import "../../../css/mysettings.css";

const MySettings = () => {
  const fileRef = useRef<HTMLInputElement | null>(null);
  const [fileName, setFileName] = useState<string>("No file selected");

  const onPickFile = () => fileRef.current?.click();

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    setFileName(f ? f.name : "No file selected");
  };

  return (
    <div className="feyri-settings">
      <div className="feyri-settings__card">
        <div className="feyri-settings__header">
          <div className="feyri-settings__title">Profile settings</div>
          <div className="feyri-settings__subtitle">
            Update your profile info and preferences
          </div>
        </div>

        {/* Upload */}
        <div className="feyri-settings__upload">
          <Avatar className="feyri-settings__avatar" alt="" />

          <div className="feyri-settings__uploadMeta">
            <div className="feyri-settings__label">Upload profile image</div>
            <div className="feyri-settings__hint">
              JPG, JPEG, PNG format only
            </div>

            <div className="feyri-settings__uploadRow">
              <Button
                onClick={onPickFile}
                className="feyri-settings__uploadBtn"
                variant="outlined"
                startIcon={<CloudDownloadIcon />}
                disableElevation
              >
                Choose file
              </Button>

              <span className="feyri-settings__fileName">{fileName}</span>

              <input
                ref={fileRef}
                type="file"
                accept="image/png, image/jpeg"
                onChange={onFileChange}
                hidden
              />
            </div>
          </div>
        </div>

        <div className="feyri-settings__divider" />

        {/* Form */}
        <div className="feyri-settings__form">
          <div className="feyri-settings__field">
            <label className="feyri-settings__fieldLabel">User name</label>
            <input
              className="feyri-settings__input mb_nick"
              type="text"
              placeholder="Name"
              name="mb_nick"
            />
          </div>

          <div className="feyri-settings__row2">
            <div className="feyri-settings__field">
              <label className="feyri-settings__fieldLabel">Phone number</label>
              <input
                className="feyri-settings__input mb_phone"
                type="text"
                placeholder="Phone number"
                name="mb_phone"
              />
            </div>

            <div className="feyri-settings__field">
              <label className="feyri-settings__fieldLabel">Address</label>
              <input
                className="feyri-settings__input mb_address"
                type="text"
                placeholder="Your address"
                name="mb_address"
              />
            </div>
          </div>

          <div className="feyri-settings__field">
            <label className="feyri-settings__fieldLabel">Info</label>
            <textarea
              className="feyri-settings__textarea mb_description"
              placeholder="About me"
              name="mb_description"
            />
          </div>

          <div className="feyri-settings__actions">
            <Button
              variant="contained"
              className="feyri-settings__saveBtn"
              disableElevation
            >
              Update profile
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySettings;
