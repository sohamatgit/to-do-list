import React, {useState} from 'react'
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddButton from "./AddButton";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

export const AddTaskForm = ({ addTask }) => {

  const [isFormOpen, setIsFormOpen] = useState(false);

  // Function to toggle the form visibility
  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };

  const initFormData = {
    task: "",
    status: "",
  };
  const [formData, setFormData] = useState(initFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const [checked, setChecked] = useState(false);

  const handleCheckChange = (e) => {
    const { name } = e.target;
    setChecked(e.target.checked);
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: {checked},
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    setFormData(initFormData);
    toggleForm();
  };

  return (
    <div>
      <AddButton onClickFunc={toggleForm} />
      <Dialog open={isFormOpen} onClose={toggleForm}>
        <DialogTitle>Add New Task</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Add the Task and Status whether completed or not.
          </DialogContentText>
          <TextField
            name="task"
            autoFocus
            margin="dense"
            id="name"
            label="Task"
            type="text"
            fullWidth
            variant="standard"
            onChange={handleChange}
          />
          <FormControlLabel
            label="Completed ?"
            labelPlacement="start"
            control={
              <Checkbox
                color="success"
                name="status"
                autoFocus
                id="status"
                onChange={handleCheckChange}
              />
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleForm}>Cancel</Button>
          <Button onClick={handleSubmit}>Add Task</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
