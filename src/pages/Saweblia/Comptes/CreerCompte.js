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

import { Alert as MuiAlert, AlertTitle } from "@material-ui/lab";

import { CloudUpload as MuiCloudUpload, Label } from "@material-ui/icons";

import { FiSave, FiHome, FiMap, FiChevronsLeft, FiUploadCloud } from "react-icons/fi";

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
  width: 138px;
  height: 80px;
  border-radius: 3px;
  margin-top : 20px;

`;
export default class CreerCompte extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: 0,
      pass: 0,
      loading: 0,
      type: 4,
      cin_img_artisan: "",
      cin_artisan: null,
      cin_coordinateur: null,

      client_name: "",
      client_email: "",
      client_telephone: "",
      client_password: "",
      client_access_channel: "",
      client_type: "",
      client_commantaire: "",
      client_libelle: "Domicile",
      client_rue: "",
      client_ville: "",
      client_quartier: "",
      client_bureau: "",
      client_surface: "",
      client_localisation: "",





      coordinateur_name: "",
      coordinateur_email: "",
      coordinateur_telephone: "",
      coordinateur_password: "",
      coordinateur_cin: "",
      coordinateur_ville: "",



      fournisseur_name: "",
      fournisseur_email: "",
      fournisseur_telephone: "",
      fournisseur_password: "",
      fournisseur_contact: "",
      fournisseur_ville: "",
      fournisseur_adresse: "",
      fournisseur_zone: "",
      fournisseur_univers: "",
      fournisseur_delai: "",
      fournisseur_ouvert: false,
      table_univers: [],



      artisan_name: "",
      artisan_email: "",
      artisan_telephone: "",
      artisan_password: "",
      artisan_cin: "",
      artisan_ville: "",
      artisan_langue: "",
      artisan_solde_artisan: "",
      artisan_solde_saweblia: "",
      artisan_type: "",
      artisan_satatus: "",
      table_metier: [],
    }

  }

  OnchangeType = (e) => { this.setState({ type: e.target.value, pass: 0 }) }

  onchange_cin_atisan_image = (e) => { this.setState({ cin_img_artisan: URL.createObjectURL(e.target.files[0]), cin_artisan: e.target.files[0] }) }
  onchange_cin_coordinateur_image = (e) => { this.setState({ cin_img_artisan: URL.createObjectURL(e.target.files[0]), cin_coordinateur: e.target.files[0] }) }



  onchange_client_name = (e) => { this.setState({ client_name: e.target.value, }) }
  onchange_client_email = (e) => { this.setState({ client_email: e.target.value, }) }
  onchange_client_telephone = (e) => { this.setState({ client_telephone: e.target.value, }) }
  onchange_client_password = (e) => { this.setState({ client_password: e.target.value, }) }
  onchange_client_access_channel = (e) => { this.setState({ client_access_channel: e.target.value, }) }
  onchange_client_commantaire = (e) => { this.setState({ client_commantaire: e.target.value, }) }
  onchange_client_libelle = (e) => { this.setState({ client_libelle: e.target.value }) }
  onchange_client_type = (e) => { this.setState({ client_type: e.target.value }) }
  onchange_client_rue = (e) => { this.setState({ client_rue: e.target.value }) }
  onchange_client_ville = (e) => { this.setState({ client_ville: e.target.value }) }
  onchange_client_quartier = (e) => { this.setState({ client_quartier: e.target.value }) }
  onchange_client_bureau = (e) => { this.setState({ client_bureau: e.target.value }) }
  onchange_client_surface = (e) => { this.setState({ client_surface: e.target.value }) }
  onchange_client_localisation = (e) => { this.setState({ client_localisation: e.target.value }) }

  onchange_coordinateur_name = (e) => { this.setState({ coordinateur_name: e.target.value, }) }
  onchange_coordinateur_email = (e) => { this.setState({ coordinateur_email: e.target.value, }) }
  onchange_coordinateur_telephone = (e) => { this.setState({ coordinateur_telephone: e.target.value, }) }
  onchange_coordinateur_password = (e) => { this.setState({ coordinateur_password: e.target.value, }) }
  onchange_coordinateur_cin = (e) => { this.setState({ coordinateur_cin: e.target.value, }) }
  onchange_coordinateur_ville = (e) => { this.setState({ coordinateur_ville: e.target.value, }) }


  onchange_fournisseur_name = (e) => { this.setState({ fournisseur_name: e.target.value, }) }
  onchange_fournisseur_email = (e) => { this.setState({ fournisseur_email: e.target.value, }) }
  onchange_fournisseur_telephone = (e) => { this.setState({ fournisseur_telephone: e.target.value, }) }
  onchange_fournisseur_password = (e) => { this.setState({ fournisseur_password: e.target.value, }) }
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

  onchange_artisan_name = (e) => { this.setState({ artisan_name: e.target.value, }) }
  onchange_artisan_email = (e) => { this.setState({ artisan_email: e.target.value, }) }
  onchange_artisan_telephone = (e) => { this.setState({ artisan_telephone: e.target.value, }) }
  onchange_artisan_password = (e) => { this.setState({ artisan_password: e.target.value, }) }
  onchange_artisan_ville = (e) => { this.setState({ artisan_ville: e.target.value, }) }
  onchange_artisan_cin = (e) => { this.setState({ artisan_cin: e.target.value, }) }
  onchange_artisan_langue = (e) => { this.setState({ artisan_langue: e.target.value, }) }
  onchange_artisan_solde_artisan = (e) => { this.setState({ artisan_solde_artisan: e.target.value, }) }
  onchange_artisan_solde_saweblia = (e) => { this.setState({ artisan_solde_saweblia: e.target.value, }) }
  onchange_artisan_artisan_status = (e) => { this.setState({ artisan_satatus: e.target.value }) }

  onchange_artisan_artisan_type = (e) => {
    this.setState({ artisan_type: e.target.value });
    var check = 0;
    this.state.table_metier.map((data) => {
      if (data == e.target.value) {
        check = 1;
      }
    })
    if (check == 0) {
      this.state.table_metier.push(e.target.value);
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

  deletechip = (data) => {
    var i = 0;
    var Restable = this.state.table_metier;
    this.state.table_metier.map((datas) => {
      if (datas == data) {
        Restable.splice(i, 1);
        this.setState({ table_metier: Restable })
      }
      i++
    })
  }


  onClick_create = () => {
    this.setState({ loading: 1 });
    console.log("i am here");
    if (this.state.type == 2) {
      let fd = new FormData();
      fd.append('nom', this.state.client_name);
      fd.append('email', this.state.client_email);
      fd.append('password', this.state.client_password);
      fd.append('telephone', this.state.client_telephone);
      fd.append('access_channel', this.state.client_access_channel);
      fd.append('commentaire', this.state.client_commantaire);
      fd.append('libelle', this.state.client_libelle);
      fd.append('quartier', this.state.client_quartier);
      fd.append('rue', this.state.client_rue);
      fd.append('ville', this.state.client_ville);
      fd.append('numero_bureau', this.state.client_bureau);
      fd.append('surface_bureau', this.state.client_surface);
      fd.append('localisation', this.state.client_client_localisation);
      fd.append('type', this.state.client_type)

      axios.post("http://127.0.0.1:8000/api/client/creer_client_adresse", fd)
        .then((ResData) => {
          if (ResData.data == "success") {
            this.setState({
              pass: 1,
              loading: 0,
              client_name: "",
              client_email: "",
              client_telephone: "",
              client_password: "",
              client_access_channel: "",
              client_commantaire: "",
              client_libelle: "",
              client_rue: "",
              client_ville: "",
              client_quartier: "",
              client_bureau: "",
              client_surface: "",
              client_localisation: "",

            })
          }

        })
        .catch((error) => {


          this.setState({ error: 1, loading: 0 });
          console.log(error);

        });
    }
    else if (this.state.type == 3) {
      let fd = new FormData();
      fd.append('nom', this.state.coordinateur_name);
      fd.append('email', this.state.coordinateur_email);
      fd.append('password', this.state.coordinateur_password);
      fd.append('telephone', this.state.coordinateur_telephone);
      fd.append('cin', this.state.coordinateur_cin);
      fd.append('ville', this.state.coordinateur_ville);
      fd.append('cin_media', this.state.cin_coordinateur)

      axios.post("http://127.0.0.1:8000/api/coordinateur/creer_coordinateur", fd)
        .then((ResData) => {
          if (ResData.data == "success") {
            this.setState({
              pass: 1,
              coordinateur_name: "",
              coordinateur_email: "",
              coordinateur_telephone: "",
              coordinateur_password: "",
              coordinateur_cin: "",
              coordinateur_ville: "",
              loading: 0,
              cin_img_artisan: "/static/img/avatars/avatar-1.jpg",
              cin_coordinateur: null,

            })
          }

        })
        .catch((error) => {


          this.setState({ error: 1, loading: 0 });
          console.log(error);

        });

    }
    else if (this.state.type == 4) {
      let fd = new FormData();
      fd.append('nom_fournisseur', this.state.fournisseur_name);
      fd.append('email', this.state.fournisseur_email);
      fd.append('password', this.state.fournisseur_password);
      fd.append('telephone', this.state.fournisseur_telephone);
      fd.append('nom_contact', this.state.fournisseur_contact);
      fd.append('ville', this.state.fournisseur_ville);
      fd.append('adresse', this.state.fournisseur_adresse);
      axios.post("http://127.0.0.1:8000/api/fournisseur/creer_fournisseur", fd)
        .then((ResData) => {
          if (ResData.data == "success") {
            this.setState({
              pass: 1,

              fournisseur_name: "",
              fournisseur_email: "",
              fournisseur_telephone: "",
              fournisseur_password: "",
              fournisseur_contact: "",
              fournisseur_ville: "",
              fournisseur_adresse: "",

              loading: 0,
            })
          }

        })
        .catch((error) => {


          this.setState({ error: 1, loading: 0 });
          console.log(error);

        });
    }
    else if (this.state.type == 5) {
      let fd = new FormData();
      fd.append('nom', this.state.artisan_name);
      fd.append('email', this.state.artisan_email);
      fd.append('password', this.state.artisan_password);
      fd.append('telephone', this.state.artisan_telephone);
      fd.append('solde_artisan', this.state.artisan_solde_artisan);
      fd.append('solde_saweblia', this.state.artisan_solde_saweblia);
      fd.append('langue', this.state.artisan_langue);
      fd.append('ville', this.state.artisan_ville);
      fd.append('cin', this.state.artisan_cin);
      fd.append('type', this.state.artisan_type);
      fd.append('cin_media', this.state.cin_artisan)
      axios.post("http://127.0.0.1:8000/api/artisan/creer_artisan", fd)
        .then((ResData) => {
          if (ResData.data == "success") {
            this.setState({
              pass: 1,
              artisan_name: "",
              artisan_email: "",
              artisan_telephone: "",
              artisan_password: "",
              artisan_cin: "",
              artisan_ville: "",
              artisan_langue: "",
              artisan_solde_artisan: "",
              artisan_solde_saweblia: "",
              artisan_type: "",
              loading: 0,
              cin_img_artisan: "/static/img/avatars/avatar-1.jpg",
              cin_artisan: null,
            })
          }

        })
        .catch((error) => {


          this.setState({ error: 1, loading: 0 });
          console.log(error);

        });

    }

  }

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
              <Typography>Créer un compte</Typography>
            </Breadcrumbs>


            {this.state.loading == 1 ? (<div style={{ float: "right", marginBottom: "10px" }}> <CircularProgress m={2} color="secondary" /></div>) : (
              <Button variant="contained" color="primary" style={{ float: "right", marginTop: "-30px" }} onClick={() => { this.onClick_create() }}>
                <FiSave style={{ marginRight: "10px" }} /> Enregistrer
              </Button>)}
            <Link component={NavLink} exact to="/Comptes/comptes">
              <Button variant="contained" style={{ float: "right", marginRight: "10px", marginTop: "-30px" }}>
                <FiChevronsLeft size={24} style={{ marginRight: "10px" }} />
              </Button>
            </Link>
          </CardContent>
        </Card>

        <br />
        {this.state.error == 1 ? (<Alert mb={4} severity="error">
          Something went wrong contact the support
        </Alert>) : null}
        {this.state.pass == 1 ? (<Alert mb={4} severity="success">
          votre Insertion est passé avec succée
        </Alert>) : null}
        <Card mb={6}>
          <CardContent>
            <Grid item md={8}>
              <Paper mt={3}>
                <Select
                  style={{ width: "40%", marginLeft: "20px", marginTop: "-30  px" }}
                  value={this.state.type}
                  onChange={this.OnchangeType}
                >

                  <MenuItem value={2}>Client</MenuItem>
                  <MenuItem value={3}>Coordinateur</MenuItem>
                  <MenuItem value={4}>Fournisseur</MenuItem>
                  <MenuItem value={5}>Artisan</MenuItem>

                </Select>
              </Paper>
            </Grid>


            {this.state.type == 2 ? (<div>
              <Grid container spacing={6} style={{ marginTop: "5px" }}>
                <Grid item md={12}>
                  <form noValidate autoComplete="off">
                    <TextField
                      onChange={this.onchange_client_name}
                      value={this.state.client_name}
                      required
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="Nom"
                      variant="outlined"
                      m={4}
                    />

                    <TextField
                      onChange={this.onchange_client_email}
                      value={this.state.client_email}
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="Email"
                      variant="outlined"
                      m={4}
                    />

                    <TextField
                      onChange={this.onchange_client_telephone}
                      value={this.state.client_telephone}
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

            </div>) : null}



            {this.state.type == 3 ? (<div>
              <Grid container spacing={6} style={{ marginTop: "5px" }}>
                <Grid item md={12}>
                  <form noValidate autoComplete="off">
                    <TextField
                      onChange={this.onchange_coordinateur_name}
                      value={this.state.coordinateur_name}
                      required
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="Nom"
                      variant="outlined"
                      m={4}
                    />

                    <TextField
                      value={this.state.coordinateur_email}
                      onChange={this.onchange_coordinateur_email}
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="Email"
                      variant="outlined"
                      m={4}
                    />

                    <TextField
                      value={this.state.coordinateur_telephone}
                      onChange={this.onchange_coordinateur_telephone}
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

            </div>) : null}


            {this.state.type == 4 ? (<div>
              <Grid container spacing={6} style={{ marginTop: "5px" }}>
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

                      onChange={() => { }}

                      style={{ width: "40%" }}
                      id="date"
                      type="date"
                      label="Année de création"
                      defaultValue="2020-01-01"
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

            </div>) : null}


            {this.state.type == 5 ? (<div>
              <Grid container spacing={6} style={{ marginTop: "5px" }}>
                <Grid item md={12}>
                  <form noValidate autoComplete="off">
                    <TextField
                      value={this.state.artisan_name}
                      onChange={this.onchange_artisan_name}
                      required
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="Nom"
                      variant="outlined"
                      m={4}
                    />

                    <TextField
                      value={this.state.artisan_email}
                      onChange={this.onchange_artisan_email}
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="Email"
                      variant="outlined"
                      m={4}
                    />

                    <TextField
                      value={this.state.artisan_telephone}
                      onChange={this.onchange_artisan_telephone}
                      required
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="Téléphone"
                      variant="outlined"
                      m={4}
                    />


                    <Paper mt={3}>
                      <FormControl m={2} style={{ width: "40%" }}>
                        <InputLabel style={{ marginLeft: "20px" }}>Métier</InputLabel>
                        <Select
                          value={this.state.artisan_type}
                          onChange={this.onchange_artisan_artisan_type}

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

                      <FormControl m={2} style={{ width: "40%" }}>
                        <InputLabel style={{ marginLeft: "20px" }}>Status professionel</InputLabel>
                        <Select
                          value={this.state.artisan_status}
                          onChange={this.onchange_artisan_artisan_status}

                          m={4}

                        >

                          <MenuItem value={2}>Société</MenuItem>
                          <MenuItem value={3}>2</MenuItem>
                          <MenuItem value={4}>auto-entrepreneur</MenuItem>
                          <MenuItem value={5}>Artisan</MenuItem>

                        </Select>
                      </FormControl>
                    </Paper>
                    <Paper mt={3} style={{ width: "50%" }} >
                      {this.state.table_metier.length != 0 ? (
                        this.state.table_metier.map((data) => (
                          this.state.table_metier.length <= 8 ? (<Chip key={data}
                            style={{ marginLeft: "15px", marginTop: "20px" }}
                            label={data}
                            onDelete={() => { this.deletechip(data) }}
                            m={1}
                          />) : (<Alert mb={4} severity="error">
                            Un artisan ne peut pas avoir plus que 8 métier
                          </Alert>)
                        ))
                      ) : null}
                    </Paper>

                  </form>
                </Grid>

              </Grid>

            </div>) : null}
          </CardContent>
        </Card>


        {this.state.type == 2 ? (
          <div>
            <Card mb={6}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Informations détaillées
           </Typography>

                <Grid container spacing={6} >
                  <Grid item md={8}>
                    <Paper mt={3}>
                      <FormControl m={2} style={{ width: "40%" }}>
                        <InputLabel >Canal d'acquisition</InputLabel>
                        <Select
                          value={this.state.client_access_channel}
                          onChange={this.onchange_client_access_channel}

                        >
                          <MenuItem value={"facebook/instagram"}>FaceBook / Instagram</MenuItem>
                          <MenuItem value={"web"}>Web Site</MenuItem>
                          <MenuItem value={"application"}>Application mobile</MenuItem>
                          <MenuItem value={"google"}>Google</MenuItem>

                        </Select>
                      </FormControl>
                      <FormControl m={2} style={{ width: "40%", marginLeft: "20px" }}>
                        <InputLabel >Catégorie</InputLabel>
                        <Select
                          value={this.state.client_type}
                          onChange={this.onchange_client_type}

                        >
                          <MenuItem value={"1"}>Entreprise</MenuItem>
                          <MenuItem value={"2"}>Personnelle</MenuItem>
                          <MenuItem value={"3"}>3</MenuItem>
                          <MenuItem value={"4"}>4</MenuItem>

                        </Select>
                      </FormControl>
                    </Paper>
                    <FormControl fullWidth my={2} variant="outlined">
                      <TextField
                        style={{ marginTop: "20px" }}
                        onChange={this.onchange_client_commantaire}
                        value={this.state.client_commantaire}
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
            <Card mb={6}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Lieux d'intervention
        </Typography>

                <Grid container spacing={6} >
                  <Grid item md={12}>
                    <form noValidate autoComplete="off">
                      <TextField
                        value={this.state.client_libelle}
                        onChange={this.onchange_client_libelle}
                        required
                        style={{ width: "40%" }}
                        id="standard-required"
                        label="Libelle"
                        variant="outlined"
                        m={4}
                      />

                      <TextField
                        value={this.state.client_rue}
                        onChange={this.onchange_client_rue}
                        style={{ width: "40%" }}
                        id="standard-required"
                        label="Rue"
                        variant="outlined"
                        m={4}
                      />
                    </form>
                    <Paper mt={3}>
                      <FormControl m={2} style={{ width: "40%", marginLeft: "20px", marginTop: "20px" }}>
                        <InputLabel >Ville</InputLabel>
                        <Select
                          value={this.state.client_ville}
                          onChange={this.onchange_client_ville}

                        >
                          <MenuItem value={"casablnaca"}>CasaBlanca</MenuItem>
                          <MenuItem value={"rabat"}>Rabat</MenuItem>
                          <MenuItem value={"mohammedia"}>Mohemmadia</MenuItem>
                        </Select>
                      </FormControl>
                      <TextField
                        value={this.state.client_quartier}
                        onChange={this.onchange_client_quartier}
                        style={{ width: "40%" }}
                        id="standard-required"
                        label="Quartier"
                        variant="outlined"
                        m={4}
                      />
                    </Paper>

                    <TextField
                      value={this.state.client_localisation}
                      onChange={this.onchange_client_localisation}
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="Localisation"
                      variant="outlined"
                      m={4}
                    />
                  </Grid>
                </Grid>



              </CardContent>
            </Card>
          </div>) : null}

        {this.state.type == 3 ? (<div>
          <Card mb={6}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Informations détaillées
        </Typography>


              <Grid container spacing={6}>
                <Grid item md={12}>
                  <form noValidate autoComplete="off">
                    <TextField
                      value={this.state.coordinateur_cin}
                      onChange={this.onchange_coordinateur_cin}
                      required
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="N° CIN"
                      variant="outlined"
                      m={4}
                    />


                    <FormControl m={2} style={{ width: "40%", marginLeft: "20px", marginTop: "20px" }}>
                      <InputLabel >Ville</InputLabel>
                      <Select
                        value={this.state.client_ville}
                        onChange={this.onchange_client_ville}

                      >
                        <MenuItem value={"casablnaca"}>CasaBlanca</MenuItem>
                        <MenuItem value={"rabat"}>Rabat</MenuItem>
                        <MenuItem value={"mohammedia"}>Mohemmadia</MenuItem>
                      </Select>
                    </FormControl>


                  </form>
                  <TextField

                    onChange={() => { }}
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
                src={this.state.cin_img_artisan}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                onChange={this.onchange_cin_coordinateur_image}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file" style={{ float: "left" }}>
                <Button variant="contained" color="primary" style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "18px", fontSize: "11px" }} component="span">
                  <FiUploadCloud size={15} style={{ marginRight: "7px" }} /> Télécharger CIN
                </Button>
              </label>

            </CardContent>
          </Card>

        </div>) : null}

        {this.state.type == 4 ? (<div>
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

                  <Paper mt={3} style={{ width: "50%" }}>
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
              <BigAvatar
                alt="Remy Sharp"
                style={{ marginLeft: "18px" }}
                src={this.state.cin_img_artisan}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                onChange={this.onchange_cin_atisan_image}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file" style={{ float: "left" }}>
                <Button variant="contained" color="primary" style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "18px", fontSize: "11px" }} component="span">
                  <FiUploadCloud size={15} style={{ marginRight: "10px" }} /> Télécharger RC
                </Button>
              </label>

            </CardContent>
          </Card>
        </div>) : null}

        {this.state.type == 5 ? (<div>
          <Card mb={6}>
            <CardContent>
              <Typography variant="h6" >
                Informations détaillées
        </Typography>


              <Grid container spacing={6}>
                <Grid item md={12}>
                  <form noValidate autoComplete="off">
                    <TextField
                      value={this.state.artisan_cin}
                      onChange={this.onchange_artisan_cin}
                      required
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="N° CIN "
                      variant="outlined"
                      m={4}
                    />

                    <TextField
                      value={this.state.artisan_ville}
                      onChange={this.onchange_artisan_ville}
                      style={{ width: "40%" }}
                      id="standard-required"
                      label="Ville"
                      variant="outlined"
                      m={4}
                    />

                    <TextField
                      value={this.state.artisan_langue}
                      onChange={this.onchange_artisan_langue}
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
                src={this.state.cin_img_artisan}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                onChange={this.onchange_cin_atisan_image}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file" style={{ float: "left" }}>
                <Button variant="contained" color="primary" style={{ marginTop: "20px", marginBottom: "20px", marginLeft: "18px", fontSize: "11px" }} component="span">
                  <FiUploadCloud size={15} style={{ marginRight: "7px" }} /> Télécharger CIN
                </Button>
              </label>

            </CardContent>
          </Card>


        </div>) : null}
      </div>
    )
  }
}
