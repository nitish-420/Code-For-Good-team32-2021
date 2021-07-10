import React, { useState} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./ReportSubmission.css";
import { useHistory } from 'react-router-dom';
import { ProfileHeader } from './ProfileHeader'
import { useAuth } from '../../context/AuthContext'
import axios from 'axios';

export const ReportSubmission = () => {
    let history = useHistory();
    let { user } = useAuth();

    const [reportObj, setReportObj] = useState();
    const [imageArray, setImageArray] = useState([]);

    let handleChange = (e) => {
        let { name, value } = e.target;
        setReportObj({
            ...reportObj, [name]: value
        })
    }

    let handleSubmit = () => {
        // user.email
        // reportObj
        // imageArray

        axios.post('/profile/reportSubmission', { reportObj: reportObj, imageArray: imageArray, email: user.email })
            .then()
            .catch(err => console.log(err));
        
    }

    return (
        <>
            <ProfileHeader />
            <div className="container">

                <React.Fragment>
                    <Typography className="form" variant="h6" gutterBottom>
                        Report Submission Form
                    </Typography>
                    <Grid className="fields" container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                id="event name"
                                name="title"
                                type={Date}
                                variant="outlined"
                                label="Event Name"
                                fullWidth
                                autoComplete="event-name"
                                onChange={(e) => handleChange(e)}
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
                                onChange={(e) => handleChange(e)}
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
                                onChange={(e) => handleChange(e)}
                            />
                        </Grid>
                        <div className="buttonUpload">
                            <Grid item xs={12}>
                                <label htmlFor="upload-photo">
                                    <input
                                        style={{ display: "none" }}
                                        id="upload-photo"
                                        name="images"
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
                                    onClick={() => { handleSubmit()}}
                                >
                                    Submit
                                </Button>
                            </Grid>
                        </div>
                    </Grid>
                </React.Fragment>
            </div>
        </>
    );
};
