import React , {useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from 'axios';

export const AddEvent = () => {

  const [eventObj, setEventObj] = useState();
  const [imageArray, setImageArray] = useState([]);

  let handleChange = (e) => {
    let { name, value } = e.target;
    
    setEventObj({
      ...eventObj, [name]: value
    })
  }

  let handleSubmit = (e) => {
    e.preventDefault();
    let finalObj = eventObj;
    if (imageArray) {
      finalObj["images"] = imageArray;
    }

    axios.post('event/new', { eventObj })
      .then()
      .catch(err => console.log(err));
  }

  return (
    <div className="container">
      <React.Fragment>
        <Typography className="form" variant="h6" gutterBottom>
          Event Registration Form
        </Typography>
        <Grid className="fields form-entire" container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="event name"
              name="title"
              variant="outlined"
              label="Event Name"
              fullWidth
              autoComplete="event-name"
              onChange={(e) => { 
                handleChange(e)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="hours"
              name="duration"
              variant="outlined"
              label="Hours"
              fullWidth
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="date"
              name="date"
              label="Date of Event - (DD/MM/YYYY)"
              variant="outlined"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Location"
              name="location"
              label="State"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="coordinator"
              name="coordinator"
              label="Coordinator"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                handleChange(e)
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              required
              id="description"
              name="description"
              variant="outlined"
              label="Description"
              fullWidth
              onChange={(e) => handleChange(e)}
            />
          </Grid>
          <div className="buttonUpload">
            <Grid item xs={12}>
              <label htmlFor="upload-photo">
                <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                  multiple
                  onChange={(e) => {
                    if (e.target) {
                      setImageArray(e.target.files);
                      console.log(imageArray);
                    }
                  }}
                />

                <Button color="secondary" variant="outlined" component="span">
                  Upload Images
                </Button>
              </label>
            </Grid>
          </div>
          <div className="button">
            <Grid item xs={12} sm={6}>
              <Button
                item
                xs={12}
                sm={6}
                variant="contained"
                color="secondary"
                onClick={(e) => { handleSubmit(e)}}
              >
                Submit
              </Button>
            </Grid>
          </div>
        </Grid>
      </React.Fragment>
    </div>
  );
};
