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


export default class ClientDisplay extends Component {
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
                                Client
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
                        <Grid container spacing={6} style={{ marginTop: "5px" }}>
                            <Grid item md={12}>
                                <form noValidate autoComplete="off">
                                    <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}

                                        value="Client Display Nom"
                                        required
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Nom"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}

                                        value="Client Display email"
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Email"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}

                                        value="Client Display tel"
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

                        <Grid container spacing={6} >
                            <Grid item md={8}>

                                <form noValidate autoComplete="off">
                                    <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}

                                        value="Client Display Canal d'acquisition"
                                        required
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Canal d'acquisition"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}

                                        value="Client Display Catégorie"
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Catégorie"
                                        variant="outlined"
                                        m={4}
                                    />



                                </form>

                                <FormControl fullWidth my={2} variant="outlined">
                                    <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        style={{ marginTop: "20px", marginLeft: "15px" }}

                                        value="Client Display observations"
                                        label="Observations"
                                        id="biography"
                                        multiline={true}
                                        rows={3}
                                        rowsMax={4}
                                        variant="outlined"
                                        defaultValue="Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
                                    />
                                </FormControl>
                            </Grid>

                        </Grid>



                    </CardContent>
                </Card>
                <br />
                <Card mb={6} >
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Lieux d'intervention
              </Typography>

                        <Table style={{ marginTop: "40px" }}>
                            <TableHead>

                                <TableRow>
                                    <TableCell align="left" >Libelle</TableCell>
                                    <TableCell align="left" >Ville</TableCell>
                                    <TableCell align="left" >Quartier</TableCell>
                                    <TableCell align="left" >Rue</TableCell>
                                    <TableCell align="left" > </TableCell>


                                </TableRow>

                            </TableHead>
                            <TableBody>



                                <TableRow >
                                    <TableCell style={{ width: "10%" }} align="left">libelle test</TableCell>
                                    <TableCell align="left">Ville test</TableCell>
                                    <TableCell align="left">Quartier test</TableCell>
                                    <TableCell align="left">Rue Test</TableCell>
                                    <TableCell><FiMap size={20} /></TableCell>
                                </TableRow>



                                <TablePagination
                                    style={{ width: "200%" }}
                                    rowsPerPageOptions={[5, 10, 25]}
                                    component="div"
                                    count={10}
                                    rowsPerPage={5}
                                    page={5}
                                    onChangePage={() => { }}
                                    onChangeRowsPerPage={() => { }}
                                />
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
