import React, { Component } from 'react'
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";
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

} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import { Map, Home, Save } from "react-feather";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

import { FiTrash2, FiSave, FiHome, FiEdit, FiChevronsLeft, FiUploadCloud } from "react-icons/fi";

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

const Header = styled.div`
  padding: ${(props) => props.theme.spacing(6)}px 0;
`;

const Alert = styled(MuiAlert)(spacing);


const BigAvatar = styled(Avatar)`
  width: 154px;
  height : 120px;
  max-height  : 150px;
  border-radius: 3px;
  margin-top : 20px;

`;

const service = ["service 1 ", "service 2", "service 3", "service 4", "service 5"];


export default class PrestationEdit extends Component {
    render() {
        return (
            <div>
                <Helmet title="Modifier une prestation" />
                <Card >
                    <CardContent>
                        <div className="row">
                            <div className="column">

                                <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                                    <Link component={NavLink} exact to="/"> <FiHome size={15} /> Dashboard </Link>
                                    <Link component={NavLink} exact to="/Catalogues/Prestations"> Prestation </Link>
                                    <Typography>Modifier</Typography>
                                </Breadcrumbs>

                                <Button style={{ float: "right", marginTop: "-25px" }} variant="contained" color="secondary" m={1}>
                                    <FiSave style={{ marginRight: "10px" }} /> Enregistrer
                                    </Button>

                                <Link component={NavLink} exact to="/Catalogues/Prestations">
                                    <Button variant="contained" style={{ float: "right", marginRight: "10px", marginTop: "-26px" }} >
                                        <FiChevronsLeft size={24} style={{ marginRight: "10px" }} />
                                    </Button>
                                </Link>

                            </div>
                        </div>

                    </CardContent>
                </Card>

                <br />

                <Card mb={6}>
                    <CardContent>

                        <Grid container spacing={8} >
                            <Grid item md={12}>

                                <TextField

                                    required
                                    style={{ width: "75%", marginLeft: "-1px" }}
                                    id="standard-required"
                                    label="Libelle"
                                    variant="outlined"
                                    m={4}
                                />


                                <TextField

                                    style={{ width: "75%" }}
                                    label="Description"
                                    id="biography"
                                    multiline={true}
                                    rows={3}
                                    rowsMax={4}
                                    variant="outlined"
                                    defaultValue="Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
                                />







                                <TextField

                                    required
                                    style={{ width: "40%", marginLeft: "-1px" }}
                                    id="standard-required"
                                    label="Prix d'achat"
                                    variant="outlined"
                                    m={4}
                                />
                                <TextField

                                    required
                                    style={{ width: "40%", marginLeft: "-1px" }}
                                    id="standard-required"
                                    label="Prix de vente"
                                    variant="outlined"
                                    m={4}
                                />
                                <TextField

                                    required
                                    style={{ width: "40%", marginLeft: "-1px" }}
                                    id="standard-required"
                                    label="Coef. remise"
                                    variant="outlined"
                                    m={4}
                                />

                                <FormControl m={2} style={{ width: "40%" }}>
                                    <InputLabel style={{ marginLeft: "20px" }}>Garantie</InputLabel>
                                    <Select
                                        m={4}

                                    >

                                        <MenuItem value={"0"}>Pas de grantie</MenuItem>
                                        <MenuItem value={"2"}>2 mois</MenuItem>
                                        <MenuItem value={"6"}>6 mois</MenuItem>
                                    </Select>
                                </FormControl>

                                <Autocomplete
                                    id="standard-required"
                                    options={service}
                                    getOptionLabel={(option) => option}
                                    style={{ width: "40%" }}
                                    renderInput={(params) => <TextField {...params} label="Service" variant="outlined" />}
                                    m={4}
                                />



                                <BigAvatar
                                    alt="Remy Sharp"
                                    style={{ marginLeft: "18px" }}
                                    src="/static/img/avatars/avatar-1.jpg"
                                />
                                <input
                                    accept="image/*"
                                    style={{ display: "none" }}
                                    onChange={() => { }}
                                    id="raised-button-file"
                                    multiple
                                    type="file"
                                />
                                <label htmlFor="raised-button-file" style={{ float: "left" }}>
                                    <Button variant="contained" color="primary" style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "18px", fontSize: "11px" }} component="span">
                                        <FiUploadCloud size={15} style={{ marginRight: "5px" }} /> Télécharger Média
                                     </Button>
                                </label>
                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>

            </div>
        )
    }
}
