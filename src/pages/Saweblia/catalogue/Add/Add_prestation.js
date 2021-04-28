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
    RadioGroup,
} from "@material-ui/core";
import { Map, Home, Save } from "react-feather";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

import { FiTrash2, FiSave, FiHome, FiEdit, FiEye, FiUpload } from "react-icons/fi";

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
  width: 300px;
  height: 200px;
  border-radius: 8px;
  margin-top : 20px;

`;


export default class Add_prestation extends Component {
    render() {
        return (
            <div>
                <Helmet title="Ajouter une prestation" />
                <Card >
                    <CardContent>
                        <div className="row">
                            <div className="column">

                                <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                                    <Link component={NavLink} exact to="/">  Dashboard </Link>
                                    <Typography>Ajouter une prestation</Typography>
                                </Breadcrumbs>

                                <Button style={{ float: "right", marginTop: "-25px" }} variant="contained" color="secondary" m={1}>
                                    <FiSave style={{ marginRight: "10px" }} /> Enregistrer
                                    </Button>

                            </div>
                        </div>

                    </CardContent>
                </Card>


                <Divider my={6} />

                <Header>
                    <Typography variant="h3" gutterBottom align="center">
                        Créer une nouvelle prestation
                  </Typography>

                </Header>
                <Card mb={6}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Prestation info
                       </Typography>

                        <Grid container spacing={6} >
                            <Grid item md={12}>

                                <TextField

                                    required
                                    style={{ width: "40%", marginLeft: "-1px" }}
                                    id="standard-required"
                                    label="Libelle"
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



                                <Grid container spacing={6}>
                                    <Grid item md={12}>
                                        <input list="browsers" name="browser" id="browser" placeholder="Categorie" style={{ width: "40%", padding: "2%", borderRadius: "8px", mborderColor: "#f0eeeb" }} />

                                        <datalist id="browsers">
                                            <option value="Edge" />
                                            <option value="Firefox" />
                                            <option value="Chrome" />
                                            <option value="Opera" />
                                            <option value="Safari" />
                                        </datalist>
                                        <input list="testing" name="testing" id="testing" placeholder="Servie" style={{ width: "40%", padding: "2%", marginLeft: "12px", borderRadius: "8px", mborderColor: "#f0eeeb" }} />

                                        <datalist id="testing">
                                            <option value="1" />
                                            <option value="1" />
                                            <option value="1" />
                                            <option value="1" />
                                            <option value="1" />
                                        </datalist>
                                    </Grid>
                                </Grid>

                                <FormControl style={{ marginTop: "45px" }} fullWidth my={2} variant="outlined">

                                    <TextField


                                        label="Commantaire"
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
                <Card mb={6} style={{ width: "50%" }}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Prestation média
                     </Typography>

                        <Grid container spacing={6}>
                            <Grid item md={8} style={{ float: "left" }}>
                                <CenteredContent>
                                    <BigAvatar
                                        alt="Remy Sharp"
                                        src="/static/img/avatars/avatar-1.jpg"
                                    />
                                    <input
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                    />
                                    <label htmlFor="raised-button-file" style={{ float: "left" }}>
                                        <Button variant="contained" color="primary" style={{ marginTop: "20px" }} component="span">
                                            <FiUpload style={{ marginRight: "10px" }} /> Upload
                </Button>
                                    </label>
                                </CenteredContent>
                            </Grid>
                        </Grid>


                    </CardContent>
                </Card>

            </div>
        )
    }
}
