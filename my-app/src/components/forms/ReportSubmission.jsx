import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ReportSubmission.css";

export const ReportSubmission = () => {
  return (
    <div className="container">
      <React.Fragment>
        <Typography className="form" variant="h6" gutterBottom>
          Report Submission Form
        </Typography>
        <Grid className="fields" container spacing={2}>
          {/* <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            variant="outlined"
            label="First name"
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            variant="outlined"
            fullWidth
            autoComplete="family-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="email"
            name="Email"
            variant="outlined"
            label="Email Adresss"
            fullWidth
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="phonenumber"
            name="PhoneNumber"
            variant="outlined"
            label="Phone Number"
            fullWidth
            autoComplete="phone number"
          />
        </Grid> */}
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
                  Upload Pictures
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
