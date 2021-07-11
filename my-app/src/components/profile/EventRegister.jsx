import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./EventRegister.css";

export const EventRegister = () => {
  return (
    <div className="container-form" style={{backgroundColor:"white"}}>
      <React.Fragment>
        <Typography className="form" variant="h6" gutterBottom>
          Event Registration Form
        </Typography>
        <Grid className="fields form-entire" container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              id="event name"
              name="Event Name"
              type={Date}
              variant="outlined"
              label="Event Name"
              fullWidth
              autoComplete="event-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="hours"
              name="Hours"
              variant="outlined"
              label="Hours"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="date"
              name="date"
              label="Date of Event"
              variant="outlined"
              fullWidth
              autoComplete="given-name"
            />
            </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="Location"
              name="State"
              label="State"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="volunteer"
              name="volunteer"
              label="Volunteer"
              variant="outlined"
              fullWidth
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
            />
          </Grid>
            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Basic example"
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider> */}
          <div className="buttonUpload">
            <Grid item xs={12}>
              <label htmlFor="upload-photo">
                <input
                  style={{ display: "none" }}
                  id="upload-photo"
                  name="upload-photo"
                  type="file"
                />

                <Button color="secondary" variant="outlined" component="span">
                  Upload Images
                </Button>
              </label>
            </Grid>
          </div>

          <Grid item xs={12}>
            <TextField
              required
              id="description"
              name="description"
              variant="outlined"
              label="Description"
              fullWidth
            />
          </Grid>
          <div className="button">
            <Grid item xs={12} sm={6}>
              <Button
                item
                xs={12}
                sm={6}
                variant="contained"
                color="secondary"
                href="#outlined-buttons"
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