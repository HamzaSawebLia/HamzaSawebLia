import React, { Component } from 'react'
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import axios from "axios";

import {
    Avatar,
    Checkbox,
    FormLabel,
    FormControlLabel,
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
} from "@material-ui/core";
import { Map, Home, Save } from "react-feather";
import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

import { FiPlus, FiChevronsLeft, FiSave, FiHome, FiMap, FiX } from "react-icons/fi";


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


export default class FournisseurDisplay extends Component {
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
                                        value="Display fournisseur Raison sociale "
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Raison sociale "
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value=" Display fournisseur année de création"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Année de création"
                                        variant="outlined"
                                        m={4}
                                    />
                                    <TextField
                                        value="Display fournisseur  capital social"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Capital social"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Display fournisseur  R.C."
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="R.C."
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Display fournisseur I.C.E."
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="I.C.E."
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="Display fournisseur Gérant"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Gérant"
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
                                        value="display fournisseur Personne à contacter "
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Personne à contacter "
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="display fournisseur tél"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Tél"
                                        variant="outlined"
                                        m={4}
                                    />


                                    <TextField
                                        value="display fournisseur Email"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Email"
                                        variant="outlined"
                                        m={4}
                                    />


                                    <TextField
                                        value="display fournisseur Ville"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Ville"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <TextField
                                        value="display fournisseur adresse"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Adresse"
                                        variant="outlined"
                                        m={4}
                                    />
                                    <TextField
                                        value="display fournisseur localisation"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Localisation"
                                        variant="outlined"
                                        m={4}
                                    />

                                </form>

                                <Paper mt={3}>

                                    <TextField
                                        value="Display fournisseur Délai de paiement"
                                        disabled
                                        style={{ width: "40%" }}
                                        id="standard-required"
                                        label="Délai de paiement"
                                        variant="outlined"
                                        m={4}
                                    />

                                    <FormControl style={{ marginLeft: "30px" }} component="fieldset">
                                        <FormLabel component="legend">Compte ouvert  </FormLabel>
                                        <FormControlLabel
                                            control={
                                                <Checkbox
                                                    checked={true}


                                                />
                                            }

                                        />
                                    </FormControl>


                                </Paper>
                                <TextField
                                    value="display fournisseur Zone"
                                    disabled
                                    style={{ width: "40%" }}
                                    id="standard-required"
                                    label="zone"
                                    variant="outlined"
                                    m={4}
                                />
                                <Paper mt={3}>
                                    <Chip
                                        label="Test Univers 1"
                                        style={{ marginLeft: "10px" }}
                                        m={1}
                                    />
                                    <Chip
                                        label="Test Univers 2"
                                        style={{ marginLeft: "10px" }}
                                        m={1}
                                    />
                                    <Chip
                                        label="Test Univers 3"
                                        style={{ marginLeft: "10px" }}
                                        m={1}
                                    />
                                    <Chip
                                        label="Test Univers 4"
                                        style={{ marginLeft: "10px" }}
                                        m={1}
                                    />


                                </Paper>




                            </Grid>

                        </Grid>
                    </CardContent>
                </Card>
            </div>
        )
    }
}
