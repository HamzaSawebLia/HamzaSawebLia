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

export default class EditFournisseur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: 0,
      pass: 0,
      loading: 0,


      fournisseur_name: "",
      fournisseur_email: "",
      fournisseur_telephone: "",
      fournisseur_contact: "",
      fournisseur_ville: "",
      fournisseur_adresse: "",
      fournisseur_zone: "",
      fournisseur_univers: "",
      fournisseur_delai: "",
      fournisseur_ouvert: false,
      table_univers: [],

    }

  }
  onchange_fournisseur_name = (e) => { this.setState({ fournisseur_name: e.target.value, }) }
  onchange_fournisseur_email = (e) => { this.setState({ fournisseur_email: e.target.value, }) }
  onchange_fournisseur_telephone = (e) => { this.setState({ fournisseur_telephone: e.target.value, }) }
  onchange_fournisseur_ville = (e) => { this.setState({ fournisseur_ville: e.target.value, }) }
  onchange_fournisseur_nom_contact = (e) => { this.setState({ fournisseur_contact: e.target.value, }) }
  onchange_fournisseur_adresse = (e) => { this.setState({ fournisseur_adresse: e.target.value, }) }
  onchange_fournisseur_ouvert = (e) => { if (this.state.fournisseur_ouvert == false) { this.setState({ fournisseur_ouvert: true }) } else { this.setState({ fournisseur_ouvert: false }) } }
  onchange_fournisseur_delai = (e) => { this.setState({ fournisseur_delai: e.target.value }) }
  onchange_fournisseur_zone = (e) => { this.setState({ fournisseur_zone: e.target.value }) }
  onchange_fournisseur_univers = (e) => {
    console.log("i am here ", e.target.value);
    this.setState({ fournisseur_univers: e.target.value });
    var check = 0;
    this.state.table_univers.map((data) => {
      if (data == e.target.value) {
        check = 1;
      }
    })
    if (check == 0) {
      this.state.table_univers.push(e.target.value);
    }

  }

  deletechipunivers = (data) => {
    var i = 0;
    var Restable = this.state.table_univers;
    this.state.table_univers.map((datas) => {
      if (datas == data) {
        Restable.splice(i, 1);
        this.setState({ table_univers: Restable })
      }
      i++
    })
  }

  componentDidMount = () => {
    axios.get(`http://127.0.0.1:8000/api/fournisseur/fournisseur/${this.props.history.location.state.IdFournisseur}`)
      .then((ResData) => {
        this.setState({
          fournisseur_name: ResData.data.nom_fournisseur,
          fournisseur_email: ResData.data.email,
          fournisseur_telephone: ResData.data.telephone,
          fournisseur_contact: ResData.data.nom_contact,
          fournisseur_ville: ResData.data.ville,
          fournisseur_adresse: ResData.data.adresse,

        })
      })
      .catch((error) => {

        this.setState({ error: 1 });
        console.log(error);

      });
  }

  onclick_updatefourni = () => {
    this.setState({ loading: 1 })
    let fd = new FormData;
    fd.append('nom_fournisseur', this.state.fournisseur_name);
    fd.append('email', this.state.fournisseur_email);
    fd.append('password', this.state.fournisseur_password);
    fd.append('telephone', this.state.fournisseur_telephone);
    fd.append('nom_contact', this.state.fournisseur_contact);
    fd.append('ville', this.state.fournisseur_ville);
    fd.append('adresse', this.state.fournisseur_adresse);
    axios.post(`http://127.0.0.1:8000/api/fournisseur/editer_fournisseur/${this.props.history.location.state.IdFournisseur}`, fd)
      .then((Resdata) => {
        if (Resdata.data == "success") {
          this.setState({ pass: 1, loading: 0 })
        }
      }).catch((error) => {

        this.setState({ error: 1, loading: 0 });
        console.log(error);

      });

  }

  render() {
    return (
      <div>
        {this.state.error == 1 ? (<Alert mb={4} severity="error">
          Something went wrong contact the support
        </Alert>) : null}
        {this.state.pass == 1 ? (<Alert mb={4} severity="success">
          votre Modification est passé avec succée
        </Alert>) : null}
        <Card >
          <CardContent>
            <Breadcrumbs style={{ marginTop: "10px" }} aria-label="Breadcrumb" mt={2}>
              <Link component={NavLink} exact to="/">
                <FiHome size={15} /> Dashboard
                     </Link>
              <Link component={NavLink} exact to="/Comptes/comptes">Comptes </Link>
              <Typography>Modifier fournisseur</Typography>
            </Breadcrumbs>

            {this.state.loading == 1 ? (<div style={{ float: "right", marginBottom: "10px" }}> <CircularProgress m={2} color="secondary" /></div>) : (
              <Button variant="contained" color="primary" style={{ float: "right", marginTop: "-30px" }} onClick={() => { this.onclick_updateCoordi() }}>
                <FiSave style={{ marginRight: "10px" }} /> Enregistrer
              </Button>
            )}
            <Link component={NavLink} exact to="/Comptes/comptes">
              <Button variant="contained" style={{ float: "right", marginRight: "10px", marginTop: "-30px" }}>
                <FiChevronsLeft size={24} style={{ marginRight: "10px" }} />
              </Button>
            </Link>

          </CardContent>
        </Card>
        <Card mb={6} style={{ marginTop: "40px" }}>
          <CardContent>

            <Grid container spacing={6}>
              <Grid item md={12}>
                <form noValidate autoComplete="off">
                  <TextField
                    value=""
                    onChange={() => { }}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Raison sociale "
                    variant="outlined"
                    m={4}
                  />

                  <TextField
                    value=""
                    onChange={() => { }}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Année de création"
                    variant="outlined"
                    m={4}
                  />
                  <TextField
                    value=""
                    onChange={() => { }}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Capital social"
                    variant="outlined"
                    m={4}
                  />

                  <TextField
                    value=""
                    onChange={() => { }}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="R.C."
                    variant="outlined"
                    m={4}
                  />

                  <TextField
                    value=""
                    onChange={() => { }}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="I.C.E."
                    variant="outlined"
                    m={4}
                  />

                  <TextField
                    value=""
                    onChange={() => { }}
                    required
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
        <Card mb={6}>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              Informations détaillées
        </Typography>

            <Grid container spacing={6}>
              <Grid item md={12}>
                <form noValidate autoComplete="off">
                  <TextField
                    value={this.state.fournisseur_contact}
                    onChange={this.onchange_fournisseur_nom_contact}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Personne à contacter "
                    variant="outlined"
                    m={4}
                  />

                  <TextField
                    value={this.state.fournisseur_telephone}
                    onChange={this.onchange_fournisseur_telephone}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Tél"
                    variant="outlined"
                    m={4}
                  />


                  <TextField
                    value={this.state.fournisseur_email}
                    onChange={this.onchange_fournisseur_email}
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Email"
                    variant="outlined"
                    m={4}
                  />


                  <TextField
                    value={this.state.fournisseur_ville}
                    onChange={this.onchange_fournisseur_ville}
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Ville"
                    variant="outlined"
                    m={4}
                  />

                  <TextField
                    value={this.state.fournisseur_adresse}
                    onChange={this.onchange_fournisseur_adresse}
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Adresse"
                    variant="outlined"
                    m={4}
                  />
                  <TextField

                    onChange={() => { }}
                    required
                    style={{ width: "40%" }}
                    id="standard-required"
                    label="Localisation"
                    variant="outlined"
                    m={4}
                  />

                </form>

                <Paper mt={3}>

                  <FormControl m={2} style={{ width: "40%" }}>
                    <InputLabel style={{ marginLeft: "20px" }}>Délai de paiement</InputLabel>
                    <Select
                      value={this.state.fournisseur_delai}
                      onChange={this.onchange_fournisseur_delai}

                      m={4}

                    >

                      <MenuItem value={2}>Acun délai</MenuItem>
                      <MenuItem value={3}>30 jours</MenuItem>
                      <MenuItem value={4}>45 jours</MenuItem>
                      <MenuItem value={5}>60 jours</MenuItem>
                      <MenuItem value={5}>90 jours</MenuItem>
                    </Select>
                  </FormControl>

                  <FormControl style={{ marginLeft: "30px" }} component="fieldset">
                    <FormLabel component="legend">Compte ouvert  </FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={this.state.fournisseur_ouvert}
                          onChange={this.onchange_fournisseur_ouvert}

                        />
                      }

                    />
                  </FormControl>


                </Paper>


                <Paper mt={3}>

                  <FormControl m={2} style={{ width: "40%" }}>
                    <InputLabel style={{ marginLeft: "20px" }}>Zone</InputLabel>
                    <Select
                      value={this.state.fournisseur_zone}
                      onChange={this.onchange_fournisseur_zone}

                      m={4}

                    >

                      <MenuItem value={2}>Zone 1</MenuItem>
                      <MenuItem value={3}>Zone 2</MenuItem>
                      <MenuItem value={4}>Zone 3</MenuItem>
                      <MenuItem value={5}>Zone 4  </MenuItem>

                    </Select>
                  </FormControl>

                  <FormControl m={2} style={{ width: "40%" }}>
                    <InputLabel style={{ marginLeft: "20px" }}>Univers </InputLabel>
                    <Select
                      value={this.state.fournisseur_univers}
                      onChange={this.onchange_fournisseur_univers}

                      m={4}

                    >

                      <MenuItem value={"Plomberie"}>Plomberie</MenuItem>
                      <MenuItem value={"Eléctricité"}>Eléctricité</MenuItem>
                      <MenuItem value={"Serrurerie"}>Serrurerie</MenuItem>
                      <MenuItem value={"Peinture"}>Peinture</MenuItem>
                      <MenuItem value={"Désinfection"}>Désinfection</MenuItem>
                      <MenuItem value={"Climatisation"}>Climatisation</MenuItem>
                      <MenuItem value={"Bricolage"}>Bricolage</MenuItem>

                    </Select>
                  </FormControl>


                </Paper>

                <Paper mt={3}>
                  {this.state.table_univers.length != 0 ? (
                    this.state.table_univers.map((data) => (
                      <Chip key={data}
                        style={{ marginLeft: "15px", marginTop: "20px" }}
                        label={data}
                        onDelete={() => { this.deletechipunivers(data) }}
                        m={1}
                      />
                    ))
                  ) : null}
                </Paper>
              </Grid>

            </Grid>
          </CardContent>
        </Card>

      </div>
    )
  }
}
