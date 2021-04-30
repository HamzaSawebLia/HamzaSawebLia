import React, { Component } from 'react'
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import axios from "axios";

import {
    Avatar,
    Breadcrumbs as MuiBreadcrumbs,
    Button as MuiButton,
    Card as MuiCard,
    CardContent,
    Divider as MuiDivider,
    FormControl as MuiFormControl,
    Grid,
    Link,
    Input,
    Chip,
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

import { FiPlus, FiUploadCloud, FiSave, FiHome, FiMap, FiChevronsLeft } from "react-icons/fi";


import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

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

export default class CoordinateurDisplay extends Component {
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
                            <Typography>Afficher</Typography>
                        </Breadcrumbs>

                        <Link component={NavLink} exact to="/Comptes/comptes">
                            <Button variant="contained" style={{ float: "right", marginRight: "10px", marginTop: "-30px" }}>
                                <FiChevronsLeft size={24} style={{ marginRight: "10px" }} />
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
                <br />
                <Card mb={6} style={{ marginTop: "40px" }}>
                    <CardContent>

                        <Grid container spacing={6}>
                            <Grid item md={12}>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        disabled
                                        value="Display coordianteur Nom"
                                        required
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Nom"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Display coordianteur Email"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Email"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Display coordianteur téléphone"
                                        disabled
                                        required
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Téléphone"
                                        variant="outlined"
                                        m={4}
                                    />



                                </form>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
                <br />
                <Card mb={6}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Informations détaillées
        </Typography>



                        <Grid container spacing={6}>
                            <Grid item md={12}>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        value="display coordinateur CIN"
                                        disabled
                                        required
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="N° CIN"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        disabled
                                        value="display coordinateur ville"
                                        required
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Ville"
                                        variant="outlined"
                                        m={4}
                                    />


                                </form>
                                <TextField
                                    disabled
                                    value="display coordinateur adresse"
                                    required
                                    style={{ width: "40%" }}
                                    id="standard-required"
                                    label="Adresse"
                                    variant="outlined"
                                    m={4}
                                />

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
