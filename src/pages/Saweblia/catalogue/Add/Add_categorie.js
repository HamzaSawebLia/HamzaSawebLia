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
export default class Add_categorie extends Component {
    render() {
        return (
            <div>
                <Helmet title="Ajouter une cat??gorie" />
                <Card >
                    <CardContent>
                        <div className="row">
                            <div className="column">

                                <Breadcrumbs aria-label="Breadcrumb" mt={2}>
                                    <Link component={NavLink} exact to="/"> <FiHome size={15} /> Dashboard </Link>
                                    <Link component={NavLink} exact to="/Catalogues/Categories"> Cat??gorie </Link>
                                    <Typography>Ajouter </Typography>
                                </Breadcrumbs>

                                <Button style={{ float: "right", marginTop: "-25px" }} variant="contained" color="secondary" m={1}>
                                    <FiSave style={{ marginRight: "10px" }} /> Enregistrer
                                    </Button>
                                <Link component={NavLink} exact to="/Catalogues/Categories">
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


                                <FormControl fullWidth my={2} variant="outlined">
                                    <TextField

                                        required
                                        style={{ width: "100%", marginLeft: "-1px" }}
                                        id="standard-required"
                                        label="Libelle"
                                        variant="outlined"
                                        m={8}
                                    />
                                    <TextField

                                        value=""
                                        label="Description"
                                        id="biography"
                                        multiline={true}
                                        rows={3}
                                        rowsMax={4}
                                        variant="outlined"
                                    />
                                </FormControl>
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
                                        <FiUploadCloud size={15} style={{ marginRight: "10px" }} /> T??l??charger M??dia
                                     </Button>
                                </label>
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>


                <Card mb={6}>
                    <CardContent pb={1}>
                        <Typography variant="h6" gutterBottom>
                            Services
                                     </Typography>

                    </CardContent>
                    <Paper>
                        <Table>
                            <TableHead>

                                <TableRow>
                                    <TableCell align="left"> Libelle </TableCell>

                                    <TableCell align="left"> Actions </TableCell>

                                </TableRow>

                            </TableHead>
                            <TableBody>



                                <TableRow >
                                    <TableCell style={{ width: "40%" }} align="left">Libelle Service</TableCell>
                                    <TableCell align="left" ><Link component={NavLink} style={{ marginRight: "10px" }} exact to="/Catalogues/Service_Edit"> <FiEdit size={17} /></Link> <Link component={NavLink} exact to="/Catalogues/DisplayService"> <FiEye size={17} /></Link></TableCell>
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
                </Card>
            </div>
        )
    }
}
