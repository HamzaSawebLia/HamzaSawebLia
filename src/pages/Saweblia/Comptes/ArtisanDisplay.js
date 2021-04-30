import React, { Component } from 'react'
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import axios from "axios";

import {
    Avatar,
    Chip,
    Breadcrumbs as MuiBreadcrumbs,
    Button as MuiButton,
    Card as MuiCard,
    CardContent,
    Divider as MuiDivider,
    FormControl as MuiFormControl,
    Grid,
    Link,
    Input,
    Paper as MuiPaper,
    InputLabel,
    CircularProgress as MuiCircularProgress,
    MenuItem,
    Select as MuiSelect,
    TextField as MuiTextField,
    Typography,
    FormControlLabel,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TablePagination,
    FormLabel,
    Radio,
    RadioGroup,
} from "@material-ui/core";
import { Map, Home, Save } from "react-feather";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

import { FiPlus, FiSave, FiHome, FiMap, FiChevronsLeft } from "react-icons/fi";

import { CloudUpload as MuiCloudUpload } from "@material-ui/icons";

import { spacing } from "@material-ui/system";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const FormControl = styled(MuiFormControl)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Select = styled(MuiSelect)(spacing);

const CircularProgress = styled(MuiCircularProgress)(spacing);

const Button = styled(MuiButton)(spacing);

const CloudUpload = styled(MuiCloudUpload)(spacing);

const Paper = styled(MuiPaper)(spacing);

const CenteredContent = styled.div`
  text-align: center;
`;

const Alert = styled(MuiAlert)(spacing);

const BigAvatar = styled(Avatar)`
  width: 300px;
  height: 200px;
  border-radius: 8px;
  margin-top : 20px;

`;
export default class ArtisanDisplay extends Component {
    render() {
        return (
            <div>
                <Card >
                    <CardContent>

                        <Breadcrumbs style={{ marginTop: "10px" }} aria-label="Breadcrumb" mt={2}>
                            <Link component={NavLink} exact to="/">
                                <FiHome size={15} /> Dashboard
                     </Link>
                            <Link component={NavLink} exact to="/Comptes/comptes">
                                Comptes
                     </Link>
                            <Link component={NavLink} exact to="/Comptes/comptes">
                                Artisan
                              </Link>
                            <Typography>Afficher</Typography>
                        </Breadcrumbs>

                        <Link component={NavLink} exact to="/Comptes/comptes">
                            <Button variant="contained" style={{ float: "right", marginRight: "10px", marginTop: "-30px" }} >
                                <FiChevronsLeft size={24} style={{ marginRight: "10px" }} />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
                <br />
                <Card mb={6} >
                    <CardContent>

                        <Grid container spacing={6}>
                            <Grid item md={12}>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        disabled
                                        value="Artisan display nom"
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Nom"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Artisan display email"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Email"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Artisan display telephone"
                                        disabled
                                        required
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Téléphone"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Artisan display status professionel"
                                        disabled
                                        required
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Status Professionel"
                                        variant="outlined"
                                        m={4}
                                    />


                                </form>
                                <Paper mt={3} style={{ width: "50%" }}>
                                    <Chip
                                        label="Test metier 1"
                                        style={{ marginLeft: "10px", marginTop: "20px" }}
                                        m={1}
                                    />
                                    <Chip
                                        label="Test metier 2"
                                        style={{ marginLeft: "10px", marginTop: "20px" }}
                                        m={1}
                                    />
                                    <Chip
                                        label="Test metier 3"
                                        style={{ marginLeft: "10px", marginTop: "20px" }}
                                        m={1}
                                    />
                                    <Chip
                                        label="Test metier 4"
                                        style={{ marginLeft: "10px", marginTop: "20px" }}
                                        m={1}
                                    />
                                    <Chip
                                        label="Test metier 4"
                                        style={{ marginLeft: "10px", marginTop: "20px" }}
                                        m={1}
                                    />
                                    <Chip
                                        label="Test metier 4"
                                        style={{ marginLeft: "10px", marginTop: "20px" }}
                                        m={1}
                                    />
                                    <Chip
                                        label="Test metier 4"
                                        style={{ marginLeft: "10px", marginTop: "20px" }}
                                        m={1}
                                    />


                                </Paper>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
                <Card mb={6}>
                    <CardContent>
                        <Typography variant="h6" >
                            Informations détaillées
        </Typography>


                        <Grid container spacing={6}>
                            <Grid item md={12}>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        value="Artisan display CIN"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="N° CIN "
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Artisan display ville"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Ville"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Artisan display Langue"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Langue"
                                        variant="outlined"
                                        m={4}
                                    />



                                </form>
                            </Grid>

                        </Grid>
                        <BigAvatar
                            alt="Remy Sharp"
                            style={{ marginLeft: "18px" }}
                            src="/static/img/avatars/avatar-1.jpg"
                        />
                    </CardContent>
                </Card>

            </div>
        )
    }
}
