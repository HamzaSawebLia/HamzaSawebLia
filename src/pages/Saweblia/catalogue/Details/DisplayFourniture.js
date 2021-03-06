import React, { Component } from 'react'
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import axios from "axios";
import ImageZoom from 'react-medium-image-zoom';
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

import { FiTrash2, FiSave, FiHome, FiUploadCloud, FiEdit, FiEye, FiChevronsLeft } from "react-icons/fi";

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
  width: 400px;
  height: 250px;
  border-radius: 3px;
  margin-top : 20px;

`;

export default class DisplayFourniture extends Component {
    render() {
        return (
            <div>
                <Helmet title="Modifier une fourniture " />
                <Card >
                    <CardContent>
                        <div className="row">
                            <div className="column">

                                <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                                    <Link component={NavLink} exact to="/">   <FiHome size={15} /> Dashboard </Link>
                                    <Link component={NavLink} exact to="/Catalogues/services">    Fourniture </Link>
                                    <Typography>Afficher d??tails </Typography>
                                </Breadcrumbs>


                                <Link component={NavLink} exact to="/Catalogues/fournitures">
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
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value="libelle test"
                                    style={{ width: "75%", marginLeft: "20px" }}
                                    id="standard-required"
                                    label="Libelle"
                                    variant="outlined"
                                    m={4}
                                />


                                <TextField

                                    style={{ width: "75%", marginLeft: "20px" }}
                                    label="Description"
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    id="biography"
                                    multiline={true}
                                    rows={3}
                                    rowsMax={4}
                                    variant="outlined"
                                    defaultValue="Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
                                />







                                <TextField

                                    required
                                    style={{ width: "40%", marginLeft: "20px" }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value="500 test"
                                    id="standard-required"
                                    label="Prix d'achat"
                                    variant="outlined"
                                    m={4}
                                />
                                <TextField

                                    required
                                    style={{ width: "40%", marginLeft: "20px" }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value="1000 test"
                                    id="standard-required"
                                    label="Prix de vente"
                                    variant="outlined"
                                    m={4}
                                />
                                <TextField

                                    required
                                    style={{ width: "40%", marginLeft: "20px" }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value="Unit?? test"
                                    id="standard-required"
                                    label="Prix de vente"
                                    variant="outlined"
                                    m={4}
                                />

                                <TextField

                                    required
                                    style={{ width: "40%", marginLeft: "20px" }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value="fournisseur test"
                                    id="standard-required"
                                    label="Fournisseur"
                                    variant="outlined"
                                    m={4}
                                />

                                <TextField

                                    required
                                    style={{ width: "40%", marginLeft: "20px" }}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                    value="Service test"
                                    id="standard-required"
                                    label="Service"
                                    variant="outlined"
                                    m={4}
                                />



                                <ImageZoom
                                    image={{
                                        style: {
                                            marginLeft: "18px", width: "150px", borderRadius: "4px"

                                        },
                                        src: "/static/img/avatars/avatar-1.jpg",
                                        alt: 'Golden Gate Bridge',
                                        className: 'img',

                                    }}
                                    zoomImage={{
                                        src: "/static/img/avatars/avatar-1.jpg",
                                        alt: 'Golden Gate Bridge'
                                    }}
                                />

                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>


            </div>
        )
    }
}
