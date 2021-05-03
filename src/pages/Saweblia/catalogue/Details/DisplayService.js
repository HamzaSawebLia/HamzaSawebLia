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

import { FiTrash2, FiSave, FiHome, FiUploadCloud, FiEdit, FiEye, FiChevronsLeft } from "react-icons/fi";

import ImageZoom from 'react-medium-image-zoom';


import { CloudUpload as MuiCloudUpload } from "@material-ui/icons";

import { spacing } from "@material-ui/system";

import Autocomplete from '@material-ui/lab/Autocomplete';

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
const CATEGORE = ["CATEGORE 1 ", "CATEGORE 2", "CATEGORE 3", "CATEGORE 4", "CATEGORE 5"]


export default class DisplayService extends Component {
    render() {
        return (
            <div>
                <Helmet title="Afficher un Service" />
                <Card >
                    <CardContent>
                        <div className="row">
                            <div className="column">

                                <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                                    <Link component={NavLink} exact to="/">   <FiHome size={15} /> Dashboard </Link>
                                    <Link component={NavLink} exact to="/Catalogues/services">    Service  </Link>
                                    <Typography>Afficher détails </Typography>
                                </Breadcrumbs>

                                <Link component={NavLink} exact to="/Catalogues/services">
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


                        <Grid container spacing={6} >
                            <Grid item md={8}>

                                <TextField

                                    required
                                    value="text here"

                                    style={{ width: "75%", marginLeft: "-1px" }}
                                    id="standard-required"
                                    label="Libelle"
                                    variant="outlined"
                                    m={4}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />

                                <TextField

                                    required
                                    value="text here"
                                    style={{ width: "75%", marginLeft: "-1px" }}
                                    id="standard-required"
                                    label="Service"
                                    variant="outlined"
                                    m={4}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />



                                <FormControl fullWidth my={2} variant="outlined">

                                    <TextField
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        style={{ marginTop: "20px" }}
                                        label="Commantaire"
                                        id="biography"
                                        multiline={true}
                                        rows={3}
                                        rowsMax={4}
                                        variant="outlined"
                                        defaultValue="Lucy is a Freelance Writer and Social Media Manager who helps finance professionals and Fin-tech startups build an audience and get more paying clients online."
                                    />
                                </FormControl>
                                <ImageZoom
                                    image={{
                                        style: {
                                            marginTop: "15px", width: "150px", borderRadius: "4px"

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


                <Card mb={6}>
                    <CardContent pb={1}>
                        <Typography variant="h6" gutterBottom>
                            Prestations
                                     </Typography>

                    </CardContent>
                    <Paper>
                        <Table>
                            <TableHead>

                                <TableRow>
                                    <TableCell align="left"> Libelle </TableCell>
                                    <TableCell align="left"> Description </TableCell>
                                    <TableCell align="left"> Vente P.U. </TableCell>
                                    <TableCell align="left">  </TableCell>

                                </TableRow>

                            </TableHead>
                            <TableBody>



                                <TableRow >
                                    <TableCell align="left" style={{ width: "10%" }}>Libelle Service</TableCell>
                                    <TableCell align="left"> description DH </TableCell>
                                    <TableCell align="left"> 2000 DH </TableCell>
                                    <TableCell align="left"><FiEdit size={17} style={{ marginLeft: "10px" }} /> <FiEye size={17} /> <FiTrash2 size={17} /> </TableCell>
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
                    </Paper>
                </Card>            </div>
        )
    }
}
