import React, { Component } from 'react';
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
import {Map , Home , Save} from  "react-feather";
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


export default class EditArtisan extends Component {
   constructor(props){
        super(props);
          this.state = {
            error : 0 ,
            pass : 0 ,
            loading : 0 ,   
            type: 2,
            cin_img_artisan: "/static/img/avatars/avatar-1.jpg",
            cin_artisan: null,
            cin_coordinateur:null,

      
            
            artisan_name : "",
            artisan_email: "",
            artisan_telephone: "",
            artisan_password: "",
            artisan_cin: "",
            artisan_ville: "",
            artisan_langue: "",
            artisan_solde_artisan: "",
            artisan_solde_saweblia: "",
            artisan_type : "",
            artisan_id : "",
            artisan_disponible:"",
            }
  
        }

        
    onchange_artisan_name = (e) => { this.setState({ artisan_name: e.target.value, })}
    onchange_artisan_email = (e) => { this.setState({ artisan_email: e.target.value, }) }
    onchange_artisan_telephone = (e) => { this.setState({ artisan_telephone: e.target.value, })}
    onchange_artisan_password = (e) => { this.setState({ artisan_password: e.target.value, }) }
    onchange_artisan_ville= (e) => { this.setState({ artisan_ville: e.target.value, })}
    onchange_artisan_cin= (e) => { this.setState({ artisan_cin: e.target.value, })}
    onchange_artisan_langue= (e) => { this.setState({ artisan_langue: e.target.value, })}
    onchange_artisan_solde_artisan = (e) => { this.setState({ artisan_solde_artisan: e.target.value, })}
    onchange_artisan_solde_saweblia= (e) => { this.setState({ artisan_solde_saweblia: e.target.value, })}
    onchange_artisan_artisan_type= (e) => {this.setState({artisan_type : e.target.value})}
    onchange_artisan_disponible= (e) => {this.setState({artisan_disponible : e.target.value})}
    onchange_cin_atisan_image = (e) => { this.setState({cin_img_artisan : URL.createObjectURL(e.target.files[0]) , cin_artisan : e.target.files[0]})}

    componentDidMount = () => {
      axios.get(`http://127.0.0.1:8000/api/artisan/artisan/${this.props.history.location.state.IdArtisan}`)
      .then((ResData)=>{
        this.setState({
  
            artisan_name : ResData.data.nom,
            artisan_email: ResData.data.email,
            artisan_telephone: ResData.data.telephone,
            artisan_cin: ResData.data.cin,
            artisan_ville: ResData.data.ville,
            artisan_langue: ResData.data.langue,
            artisan_solde_artisan: ResData.data.solde_artisan,
            artisan_solde_saweblia: ResData.data.solde_saweblia,
            artisan_type : ResData.data.type,
            artisan_disponible : ResData.data.disponible,
            artisan_id : ResData.data.id,
        })
      }) .catch((error) => {

        this.setState({ error: 1 });
        console.log(error);
                    
                });
    }

    onclick_updateArtisan = () => {
         this.setState({loading : 1})
         let fd = new FormData();
         fd.append('nom',this.state.artisan_name);
         fd.append('email',this.state.artisan_email);
         fd.append('telephone',this.state.artisan_telephone);
         fd.append('solde_artisan',this.state.artisan_solde_artisan);
         fd.append('solde_saweblia',this.state.artisan_solde_saweblia);
         fd.append('langue',this.state.artisan_langue);
         fd.append('ville',this.state.artisan_ville);
         fd.append('cin',this.state.artisan_cin);
         fd.append('type',this.state.artisan_type);
         fd.append('disponible',this.state.artisan_disponible)
        axios.post(`http://127.0.0.1:8000/api/artisan/editer_artisan/${this.state.artisan_id}`,fd)
        .then((Resdata) => {
          if(Resdata.data == "success"){
          this.setState({pass:1 , loading:0})
          }
        }) .catch((error) => {

        this.setState({ error: 1 ,loading: 0 });
        console.log(error);
                    
                });

    }


    render() {
        return (
            <div>
             {this.state.error == 1 ? ( <Alert mb={4} severity="error">
          Something went wrong contact the support
        </Alert>):null}  
        {this.state.pass == 1 ? ( <Alert mb={4} severity="success">
          votre Modification est passé avec succée
        </Alert>):null}    
                <Card >
         <CardContent>
             <div className="row">
                            <div className="column">
                                <Link component={NavLink} exact to="/"><Home style={{marginTop:"10px"}} mt={2}/> Home </Link>
                                <Link component={NavLink} exact to="/Comptes/comptes">/Comptes </Link>
                                 <Link component={NavLink} exact to="/Comptes/Edit_artisan">/Editer Artisan </Link>
                 
                          
                              {this.state.loading == 1 ? ( <div style={{float:"right" , marginBottom : "10px"}}> <CircularProgress m={2} color="secondary"  /></div>) : (
                                <Button variant="contained" color="primary" style={{float : "right"}} onClick={()=>{this.onclick_updateArtisan()}}>
                                  <Save style={{marginRight:"10px"}} /> Enregistrer 
                                </Button>)}
                             
                            </div>
                        </div>
                        
                </CardContent>
            </Card>
                      <Card mb={6} style={{marginTop:"40px"}}>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                        Editer un compte
                        </Typography>
                        <Grid container spacing={6}>
                            <Grid item md={12}>
                            <form noValidate autoComplete="off">
                                <TextField
                                value={this.state.artisan_name}
                                onChange={this.onchange_artisan_name}
                                required
                                style={{width:"40%"}}
                                id="standard-required"
                                label="Nom"
                                variant="outlined"
                                m={4}
                                />
                                
                                <TextField
                                value={this.state.artisan_email}
                                onChange={this.onchange_artisan_email}
                                style={{width:"40%"}}
                                id="standard-required"
                                label="Email"
                                variant="outlined"
                                m={4}
                                />
                                
                                <TextField
                                value={this.state.artisan_telephone}
                                onChange={this.onchange_artisan_telephone}
                                required
                                style={{width:"40%"}}
                                id="standard-required"
                                label="Téléphone"
                                variant="outlined"
                                m={4}
                                />
                                

                                 <Paper mt={3} style={{float:"right" , marginBottom : "55px" , marginRight : "250px"}}>
                                      <FormControl component="fieldset">
                                        <FormLabel component="legend">Disponibilité d'artisan</FormLabel>
                                        <RadioGroup
                                          aria-label="Activation du compte"
                                          name="gender1"
                                          value={this.state.artisan_disponible}
                                          onChange={this.onchange_artisan_disponible}
                                        >
                                            <Paper mt={3}>
                                          <FormControlLabel
                                            value="1"
                                            control={<Radio />}
                                            label="Disponible"
                                          />
                                          <FormControlLabel
                                            value="0"
                                            control={<Radio />}
                                            label="No Disponible"
                                          />
                                            </Paper>
                                        </RadioGroup>
                                      </FormControl>
                                    </Paper>
                                 </form>
                                <Paper mt={3}>
                                <FormControl m={2} style={{width : "35%" }}>
                                <InputLabel  style={{marginLeft : "20px"}}>Type d'artisan</InputLabel>
                                <Select
                                value={this.state.artisan_type}
                                onChange={this.onchange_artisan_artisan_type}
                                
                                m={4}
                                
                                >
                                
                                <MenuItem value={2}>Plomberie</MenuItem>
                                <MenuItem value={3}>Eléctricité</MenuItem>
                                <MenuItem value={4}>Serrurerie</MenuItem>
                                <MenuItem value={5}>Peinture</MenuItem>
                                <MenuItem value={5}>Désinfection</MenuItem>
                                <MenuItem value={5}>Climatisation</MenuItem>
                                <MenuItem value={5}>Bricolage</MenuItem>

                                </Select>
                                </FormControl>
                                <FormControl m={2} style={{width : "35%" }}>
                                <InputLabel  style={{marginLeft : "20px"}}>Métier</InputLabel>
                                <Select
                                value={this.state.artisan_type}
                                onChange={this.onchange_artisan_artisan_type}
                                
                                m={4}
                                
                                >
                                
                                <MenuItem value={2}>Société</MenuItem>
                                <MenuItem value={3}>2</MenuItem>
                                <MenuItem value={4}>auto-entrepreneur</MenuItem>
                                <MenuItem value={5}>Artisan</MenuItem>

                                </Select>
                                </FormControl>
                                </Paper>
                             
                                  
                            </Grid>
                            
                            </Grid>
                          </CardContent>
                </Card>
                 <Card mb={6}>
      <CardContent>
        <Typography variant="h6" >
          Artisan info
        </Typography>


        <Grid container spacing={6}>
          <Grid item md={12}>
           <form noValidate autoComplete="off">
            <TextField
            value={this.state.artisan_cin}
              onChange={this.onchange_artisan_cin}
              required
              style={{width:"40%"}}
              id="standard-required"
              label="N° CIN "
              variant="outlined"
              m={4}
            />
            
            <TextField
              value={this.state.artisan_ville}
              onChange={this.onchange_artisan_ville}
              style={{width:"40%"}}
              id="standard-required"
              label="Ville"
              variant="outlined"
              m={4}
            />
            
            <TextField
              value={this.state.artisan_langue}
              onChange={this.onchange_artisan_langue}
              style={{width:"40%"}}
              id="standard-required"
              label="Langue"
              variant="outlined"
              m={4}
            />
            
            <TextField
              value={this.state.artisan_solde_artisan}
              onChange={this.onchange_artisan_solde_artisan}
              required
              style={{width:"40%"}}
              id="standard-required"
              label="Solde Artisan "
              variant="outlined"
              m={4}
            />
            
            <TextField
              value={this.state.artisan_solde_saweblia}
              onChange={this.onchange_artisan_solde_saweblia}
              style={{width:"40%"}}
              id="standard-required"
              label="Solde Saweblia"
              variant="outlined"
              m={4}
            />
           
    
           </form>
          </Grid>
          
        </Grid>
        
      </CardContent>
    </Card> 
    
     <Card mb={6} style={{ width : "50%"}}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Carte identité national
        </Typography>

        <Grid container spacing={6}>
          <Grid item md={8} style={{float:"left"}}> 
            <CenteredContent>
              <BigAvatar
                alt="Remy Sharp"
                src= {this.state.cin_img_artisan}
              />
              <input
                accept="image/*"
                style={{ display: "none" }}
                onChange={this.onchange_cin_atisan_image}
                id="raised-button-file"
                multiple
                type="file"
              />
              <label htmlFor="raised-button-file" style={{float:"left"}}>
                <Button variant="contained" color="primary" style={{marginTop :"20px"}} component="span">
                  <CloudUpload mr={2} /> Upload
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
