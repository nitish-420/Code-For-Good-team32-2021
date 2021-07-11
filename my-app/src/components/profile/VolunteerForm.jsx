import React , {useState , useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import "./VolunteerForm.css";
import { useHistory } from 'react-router-dom';
import { ProfileHeader } from './ProfileHeader'
import axios from 'axios'
import { useAuth } from '../../context/AuthContext'

export const VolunteerForm = () => {
    let history = useHistory();
    const [vol, setVol] = useState();
    const [data, setData] = useState();
    let { user } = useAuth();

    let handleChange = (e) => {
        let { name, value } = e.target;
        setVol({ ...vol, [name]: value });
    }

    let handleSave = () => {
        axios.post('/profile/personalInfo', vol)
            .then()
            .catch(err => console.log(err));
    }

    useEffect(async () => {
        if (user) {
            console.log(user);
            
            await axios.post('/profile/personalInfo1', { email: user.email })
                .then(res => {
                    console.log(res.data);
                    setData(res.data);
                })
                .catch(err => console.log(err));
        }
    }, []);

    return (
        <>
            <ProfileHeader />
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
                                id="email"
                                name="email"
                                label={data ? data.email : "email"}
                                variant="outlined"
                                fullWidth
                                autoComplete="email"
                                value={data ? data.email : null}
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="phonenumber"
                                name="mobile"
                                label={data ? '' : "Phone Number"}
                                variant="outlined"
                                fullWidth
                                autoComplete="phone-number"
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                                value={data ? data.mobile : null}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id="DOB"
                                name="dob"
                                type={Date}
                                label = {data ? '' : "Date Of Birth"}
                                variant="outlined"
                                fullWidth
                                autoComplete="given-name"
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                                value={data ? data.dob : null}
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
                                name="address"
                                label={data ? '' : "Address line 1"}
                                variant="outlined"
                                fullWidth
                                autoComplete="volunteer address-line1"
                                onChange={(e) => {
                                    handleChange(e)
                                }}
                                value={data ? data.location : null}
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
                                    onClick={() => { handleSave()}}
                                >
                                    Save
                                </Button>
                            </Grid>
                        </div>
                    </Grid>
                </React.Fragment>
            </div>
        </>
    );
};
