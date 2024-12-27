import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Paper,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import { Grid } from "@mui/system";
import Dropzone from "react-dropzone";
import { DescriptionOutlined, UploadFileOutlined } from "@mui/icons-material";
import { useState } from "react";

const labels = {
  createPostTitle: "Create a post",
  createPostDescription:
    "The form allows you to easily create and share posts about business opportunities, volunteer actions, or environmental projects with the community on the platform.",
  categoryLabel: "Choose category",
  postNameLabel: "Post Name",
  postDescription: "Post Description",
  attachFiles: "Attach Files",
  supportedFormats:
    "If you want, you can add an image or document to make your post more visually appealing. Supported formats: PNG, JPG.",
  cancel: "Cancel",
  createPostButton: "Create post",
};

const categories = [
  { categoryId: 1, label: "Job offering" },
  { categoryId: 2, label: "Looking for job" },
  { categoryId: 3, label: "Other" },
];

export const CreatePostModal = ({
  modalOpen,
  handleClose,
}: {
  modalOpen: boolean;
  handleClose: () => void;
}) => {
  const [formState, setFormState] = useState({
    selectedCategory: "",
    postName: "",
    postDescription: "",
  });

  const handleInputChange = (
    event:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent,
  ) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: SelectChangeEvent) => {
    setFormState((prevState) => ({
      ...prevState,
      selectedCategory: event.target.value,
    }));
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    p: 2,
    borderRadius: 6,
  };

  return (
    <Modal
      open={modalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Paper sx={style}>
        <Grid container sx={{ gap: 3 }}>
          <Grid container sx={{ alignItems: "center", gap: 2 }}>
            <DescriptionOutlined color="primary" />
            <Typography variant="h5">{labels.createPostTitle}</Typography>
          </Grid>
          <Typography variant="body1">
            {labels.createPostDescription}
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              {labels.categoryLabel}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              name="selectedCategory"
              value={formState.selectedCategory}
              label={labels.categoryLabel}
              onChange={handleSelectChange}
            >
              {categories.map((category) => (
                <MenuItem key={category.categoryId} value={category.categoryId}>
                  {category.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="postName"
            name="postName"
            value={formState.postName}
            onChange={handleInputChange}
            label={labels.postNameLabel}
            fullWidth
          />
          <TextField
            id="postDescription"
            name="postDescription"
            value={formState.postDescription}
            onChange={handleInputChange}
            label={labels.postDescription}
            multiline
            rows={5}
            fullWidth
          />
          <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <div style={{ width: "100%" }} {...getRootProps()}>
                <input {...getInputProps()} />
                <Grid
                  container
                  height={100}
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#F1F7F6",
                    gap: 1,
                    borderRadius: 6,
                  }}
                >
                  <UploadFileOutlined color="primary" />
                  <Typography variant="body1">{labels.attachFiles}</Typography>
                </Grid>
              </div>
            )}
          </Dropzone>
          <Typography variant="body2">{labels.supportedFormats}</Typography>
          <Grid
            container
            sx={{ width: "100%", justifyContent: "flex-end", gap: 2 }}
          >
            <Button variant="outlined" onClick={handleClose}>
              {labels.cancel}
            </Button>
            <Button variant="contained">{labels.createPostButton}</Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
};
