import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';

// material-ui import
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import Checkbox from '@material-ui/core/Checkbox';

//components import
import NavBar from '../../Components/NavBar/index';
import Loading from '../../Components/Loading/index';

// actions
import { setUsername, setDetails } from './action';

// services/api import
import firebaseOperations from '../../../Services/api'

//stylesheet import
import './index.css'
import { Button } from '@material-ui/core';

/* eslint-disable react/prefer-stateless-function */
class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'TEACHER-ATTENDANCE',
      showPassword: false,
      password: '',
      user: {},
      userName : "",
      userEmail: "",
      userImage: "",
      buttonValue : "Sign In",
    //   database : firebase.database(),
      loading: false,
      KeepSignedIn: false
    }
  }

  handleChange = (e) =>{
    this.setState({password: e.target.value})

  };

  handleClickShowPassword = () => {
    this.setState({showPassword: !this.state.showPassword})
  }

  signedInHandleChange = () => {
    this.setState({KeepSignedIn: !this.state.KeepSignedIn})
  }
   
    signIn = () => {
      const { username, password, loading } = this.state;
      // firebaseOperations.getTeacherById(username).then((obj)=>{
      //if(password===obj.password){
    //   this.setState({ loading: true })
    //   firebaseOperations.getTeacherDetails(username).then((obj) => {
    //     this.props.setDetails(obj);
    //     this.setState({loading:false})
    //     this.props.navigation.navigate('home');
    //   })
    //   this.props.setUsername(username);
      //}  
      //else{
      // this.setState({error:'Invalid password'});
      //}
      //});
    }

  render() {
    return (
      <div className='loginRoot'>
        <div className='loginContainer'>
          <NavBar Title={this.state.title}/>
          <div className='loginFormContainer'>
            <div className='loginFormWrapper'>
              {/* <div className='loginEmail'> */}
              <div>
                {/* <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Hello World"
                // className={classes.textField}
                margin="normal"
            /> */}
            {/* <TextField
                error
                id="filled-error"
                label="Error"
                defaultValue="Hello World"
                // className={classes.textField}
                margin="normal"
            /> */}
                <TextField
                    // id="filled-email-input"
                    label="Email : "
                    className='loginEmail'
                    type="email"
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    InputLabelProps = {{
                      className:'loginInputLabel'
                    }}
                    InputProps = {{
                      className:'loginInput'
                    }}
                />
              </div>
              <div >
                <FormControl className='loginPassword'>
                  <InputLabel 
                    htmlFor="adornment-password"
                    className='passwordLabel'
                    >
                    Password : 
                  </InputLabel>
                    <Input
                    id="adornment-password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    value={this.state.password}
                    onChange={(e)=> this.handleChange(e)}
                    className='passwordInput'
                    endAdornment={
                      <InputAdornment position="end">
                      <IconButton 
                        className='passwordIconButton'
                        aria-label="Toggle password visibility" 
                        onClick={() => this.handleClickShowPassword()}
                        >
                          {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                      </InputAdornment>
                    }
                    />
                </FormControl>
              </div>
            </div>
            <div className='LoginControlAndIssue'>
              <div className='keepMeSignedIn'>
                <div className='signedInCheckbox'>
                  <Checkbox
                    checked={this.state.KeepSignedIn}
                    onChange={() => this.signedInHandleChange()}
                    value="KeepSignedIn"
                    className='signedInCheckbox'
                  />
                </div>
                <p>Keep Me Signed In</p>
              </div>
              <div className='forgotPassword'><p>Forgot Password?</p></div>
            </div>
            <div className='toggleMenu'>
              <Button className='signIn'>Sign In</Button>
              <Button className='signOut'>Sign Out</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
//   return {
//   }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setUsername: (username) => dispatch(setUsername(username)),
        setDetails: (data) => dispatch(setDetails(data))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


// class LoginScreen extends React.Component {

//     state = {
//       username: '',
//       password: '',
//       error: '',
//       checked: false,
//       loading: false,
//     }
  
//     showLoading() {
//       if (this.state.loading)
//         return (
//           <View style={{
//             alignSelf: 'center',marginTop:14, height: 50, width: 50,
//             backgroundColor: 'purple', borderRadius: 50, justifyContent: 'center'
//           }}>
//             <ActivityIndicator size="large" color='white' />
//           </View>
//         )
//     }
  
//      renderButton(){
//        if(!this.state.loading)
//        return(
//         <TouchableOpacity
//         activeOpacity={0.6}
//         style={styles.signInBtn}
//         onPress={() => this.signIn()}>
//         <Text style={styles.signInTxt}>Sign In</Text>
//       </TouchableOpacity>
//        )
//      }
  
//     signIn() {
//       const { username, password, loading } = this.state;
//       // firebaseOperations.getTeacherById(username).then((obj)=>{
//       //if(password===obj.password){
//       this.setState({ loading: true })
//       firebaseOperations.getTeacherDetails(username).then((obj) => {
//         this.props.setDetails(obj);
//         this.setState({loading:false})
//         this.props.navigation.navigate('home');
//       })
//       this.props.setUsername(username);
//       //}  
//       //else{
//       // this.setState({error:'Invalid password'});
//       //}
//       //});
//     }
//     render() {
  
//       let { checked } = this.state;
  
//       return (
//         <View style={styles.container}>
//           <View
//             style={{
//               flex: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//               flexGrow: 2
//             }}
//           >
//             <ImageBackground
//               source={require('../../../assets/images/bpitImg.jpg')}
//               style={{
//                 height: '100%',
//                 width: '100%',
//                 position: 'absolute',
//                 top: 0
//               }}
//               resizeMode="cover"
//             >
//               <Image
//                 style={{
//                   marginTop: '55%',
//                   alignSelf: 'center',
//                   height: '15%',
//                   width: '30%',
//                   backgroundColor: '#fff',
//                   paddingTop: '0%',
//                   borderRadius: 5,
//                 }}
//                 resizeMode="contain"
//                 source={require('../../../assets/BPIT-Delhi-Logo.png')}
//               />
//             </ImageBackground>
//           </View>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: 'column',
//               width: '100%',
//               justifyContent: 'center',
//               alignItems: 'center',
//               flexGrow: 2
//             }}>
//             <Card
//               style={{
//                 margin: 10,
//                 height: 60,
//                 width: '80%'
//               }}>
//               <TextInput placeholder="USERNAME" placeholderTextColor="gray" keyboardType="number-pad" onChangeText={text => this.setState({ username: text })}
//                 style={{ height: 40, borderColor: 'purple', borderWidth: 1.5, margin: 10, padding: 10 }}
//               />
//             </Card>
//             <Card
//               style={{
//                 margin: 10,
//                 height: 60,
//                 width: '80%'
//               }}>
//               <TextInput placeholder="PASSWORD" placeholderTextColor="gray" secureTextEntry={true} onChangeText={text => this.setState({ password: text })}
//                 style={{ height: 40, borderColor: 'purple', borderWidth: 1.5, padding: 10, margin: 10 }} />
//             </Card>
//           </View>
//           <View style={{
//             flex: 1,
//             flexGrow: 1,
//             display: 'flex',
//             width: '100%',
//             flexDirection: 'column'
//           }}>
//             <View style={{
//               alignItems: 'center',
//               justifyContent: 'center',
//               marginLeft: '10%',
//               alignSelf: 'flex-start',
//               flexDirection: 'row'
//             }}>
//               <Checkbox
//                 status={checked ? 'checked' : 'unchecked'}
//                 color='purple'
//                 onPress={() => { this.setState({ checked: !checked }); }} />
//               <Text>Keep me Signed In</Text>
//             </View>
//             <View style={{
//               alignContent: 'flex-end',
//               alignSelf: 'flex-end',
//               marginRight: '10%'
//             }}>
//               <TouchableOpacity>
//                 <Text activeOpacity={0.6} style={{ color: 'purple' }}>Forgot password?</Text>
//               </TouchableOpacity>
//             </View>
//           </View>
//           <View
//             style={{
//               flex: 1,
//               flexDirection: 'row',
//               justifyContent: "center",
//               alignItems: 'flex-end',
//               flexGrow: 1
//             }}
//           >
//           {this.showLoading()}
//            {this.renderButton()}
//           </View>
//         </View>
//       )
//     }
//   }
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     logo: {
//       backgroundColor: '#fff',
//     },
//     signInBtn: {
//       borderRadius: 30,
//       backgroundColor: '#841584',
//       width: '80%',
//       alignItems: 'center',
//       padding: 20,
//       marginBottom: 14
//     },
//     signInTxt: {
//       color: 'white',
//       fontWeight: '700'
//     }
//   });

//   export default connect(mapStateToProps, mapdispatchToProps)(LoginScreen);