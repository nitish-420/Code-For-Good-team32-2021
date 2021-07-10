import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./VolunteerForm.css";

export const VolunteerForm = () => {
  return (
    <div className="container">
      {/* <div className="border">
      </div> */}
      <React.Fragment>
        <Typography className="form" variant="h6" gutterBottom>
          Volunteer Form
        </Typography>
        <Grid className="fields form-entire" container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              id="firstName"
              name="firstName"
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
              label="Email Adress"
              variant="outlined"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="phonenumber"
              name="PhoneNumber"
              label="Phone Number"
              variant="outlined"
              fullWidth
              autoComplete="phone-number"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="DOB"
              name="Email"
              type={Date}
              label="Date Of Birth"
              variant="outlined"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="gender"
              name="gender"
              label="Gender"
              variant="outlined"
              fullWidth
              autoComplete="given-name"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              variant="outlined"
              fullWidth
              autoComplete="volunteer address-line1"
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
              autoComplete="volunteer address-city2"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="state"
              name="state"
              variant="outlined"
              label="State/Province/Region"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="zip"
              name="zip"
              label="Zip / Postal code"
              variant="outlined"
              fullWidth
              autoComplete="volunteer postal-code"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              variant="outlined"
              fullWidth
              autoComplete="volunteer country"
            />
          </Grid>
          <div className="button">
            <Grid item xs={12} sm={6}>
              <Button item xs={12} sm={6}
                variant="outlined"
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
