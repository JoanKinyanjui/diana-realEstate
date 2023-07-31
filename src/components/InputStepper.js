import React, { useState } from 'react';
import styles from '../styles/INdexhero.module.css'
import { Stepper, Step, StepLabel, Button, Typography, TextField, Container, createTheme, ThemeProvider,Select, MenuItem, InputLabel} from '@mui/material';
import ReactPhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; // Import the CSS for styling (optional)
import { Checkbox, FormControlLabel } from '@mui/material';

const steps = ['CohandlePhoneNoChanger Information', 'Passport Details', "Travel Details", 'Contact Person In Kenya Details(optional)','Organization Details (optional)','Company/Firm Details (optional)','Educational Details (optional)'];

// Create a custom theme with the primary color set to pink
const customTheme = createTheme({
  palette: {
    primary: {
      main: '#ffc0eb', // Pink color
    },
  },
});

const StepperWithInputFields = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [inputValues, setInputValues] = useState({
    email: '',
    phoneNo: '',
    surname:'',
    middleName:'',
    givenNames:'',
    dateOFBirth:'',
    nationality:'',
    countryOfResidence:'',
    physicalAddress:'',
    nextOfKin:'',
    phoneNoOfNextKin:'',
    passportPhoto:'',
    //PassportDetails
    passportNumber:"",
    countryOfPassport:'',
    passportNumber:'',
    PassportDateOfIssue:'',
    passportExpiryDate:'',
    passportBioDataImage:'',
    // Travel Details 
    purposeOfVisit:'',
    intendedDateOfEntry:'',
    intendedDateOfExit:'',
    portOfEntry:"",
    beenToKenyaBefore:'',
    deniedEntryToKenyaBefore:'',
    convicted:'',
    // Details of Contact Person in Kenya
    contactName:'',
    alienCard:'',
    contactPhoneNo:"",
    invitationLetterFromContact:"",
    hotelBooking:'',
    // Organization Details
    orgName:'',
    orgAddress:'',
    orgPerson:'',
    orgLetterYesOrNo:"",
    orgLetterOfInvitation:'',
    // Company Details
    companyName:'',
    companyDocYesOrNo:"",
    companyDoc:'',
    // Education Details
    nameOfSchool:'',
    schoolAddress:"",
    letterOfAdmissionYesOrNo:"",
    letterOfAdmission:'',

  });

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handlePhoneNoChange = (value) => {
    setInputValues((prevValues) => ({
      ...prevValues,
      phoneNo: value,
    }));
  }; 

  const [selectedFiles, setSelectedFiles] = useState([]);
  const handleFileInputChange = (event) => {
    const { files } = event.target;
    setSelectedFiles([...files]);
  };

// SUBMIT INFORMATION


  const [declarationChecked, setDeclarationChecked] = useState(false);
  const [termsChecked, setTermsChecked] = useState(false);
  const [tickMessage,setTickMessage] = useState('')

  const handleSubmit = () => {
    console.log('Submitting input values');
    if (!declarationChecked || !termsChecked) {
      setTickMessage("Please check both checkboxes before submitting...");
      return;
    }
    console.log('Submitting input values');
    setTickMessage('')
  };
 

  return (
<div className='md:w-3/4 w-10/12 grid  mx-auto py-8' id="section5">
<div className='grid md:gap-[25px] gap-[10px] font-[System]'>
          <p className='text-[#FAA9FB] text-sm md:text-base mx-auto font-medium py-4 md:py-8'>APPLY FOR VISA</p>
          <p className='text-black text-bold md:text-[40px] text-[22px] mx-auto py-4 md:pb-8'>FILL THE FORM BELOW</p>
        </div>
<ThemeProvider theme={customTheme}>
      <Container >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',minHeight:'max-content' }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                {index === activeStep && (
                  <div>
                    <Typography variant="h6" gutterBottom>
                      {activeStep === 0 && (
                        // Step 0 - Contact
                        <div className=''>
                          <TextField
                            name="email"
                            label="Email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            required 
                             style={{margin:"10px 10px"}}
                          />
                           <div style={{ margin: '10px 10px' }}>
                           <InputLabel htmlFor='contactPhoneNo'>phone number/ cell/mobile</InputLabel>
                          <ReactPhoneInput
                            defaultCountry="us" // Set the default country (optional)
                            value={inputValues.phoneNo}
                            onChange={handlePhoneNoChange}
                            required
                            inputExtraProps={{
                              name: 'phoneNo',
                              label: 'phone Number/cell number',
                              variant: 'outlined',
                            }}
                          />
                        </div>
                         
                        </div>
                      )}
                      {activeStep === 1 && (
                        // Step 1 - Traveller Information
                        <>
                          <TextField
                            name="surname"
                            label="Surname"
                          value={inputValues.surname}
                          onChange={handleInputChange}
                          required 
                           style={{margin:"10px 10px"}}
                          className='my-2 mx-2 md:mx-4'
                          />
                          <TextField 
                         name="middleName"
                         label="Middle Name"
                       value={inputValues.middleName}
                       onChange={handleInputChange}
                       required 
                        style={{margin:"10px 10px"}}
                       className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                         name="givenNames"
                         label="Given Names"
                       value={inputValues.givenNames}
                       onChange={handleInputChange}
                       required 
                        style={{margin:"10px 10px"}}
                       className='my-2 mx-2 md:mx-4'
                          />
                           <TextField 
                         name="dateOfBirth"
                         label="Date Of Birth"
                       value={inputValues.dateOFBirth}
                       onChange={handleInputChange}
                       required 
                        style={{margin:"10px 10px"}}
                       className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                            name="nationality"
                          label="Nationality"
                        value={inputValues.nationality}
                        onChange={handleInputChange}
                        required 
                         style={{margin:"10px 10px"}}
                        className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                         name="countryOfResidence"
                         label="Country Of Residence"
                       value={inputValues.countryOfResidence}
                       onChange={handleInputChange}
                       required 
                        style={{margin:"10px 10px"}}
                       className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                            name="physicalAddress"
                          label="Physical Address"
                        value={inputValues.physicalAddress}
                        onChange={handleInputChange}
                        required 
                         style={{margin:"10px 10px"}}
                        className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                         name="nextOfKin"
                         label="Next Of Kin"
                       value={inputValues.nextOfKin}
                       onChange={handleInputChange}
                       required 
                        style={{margin:"10px 10px"}}
                       className='my-2 mx-2 md:mx-4' 
                       />
                         <div style={{ margin: '10px 10px' }}>
                         <InputLabel htmlFor='contactPhoneNo'>phone number of next of kin</InputLabel>
                          <ReactPhoneInput
                            defaultCountry="us" // Set the default country (optional)
                            value={inputValues.phoneNoOfNextKin}
                            onChange={handlePhoneNoChange}
                            required
                            inputExtraProps={{
                              name: 'phoneNoOfNextKin',
                              label: 'phone number of next of kin',
                              variant: 'outlined',
                            }}
                          />
                        </div>
                     
                        <div style={{ margin: '10px 10px' }}>
                       <InputLabel>Passport Photo</InputLabel>
                       <input
                         type="file"
                         name="passportBioDataImage"
                         onChange={handleFileInputChange}
                         required
                         className={`${styles.fileInput} my-2 mx-2 md:mx-4 grid md:flex w-full`}
                         multiple // Allows selecting multiple files
                       />
                       
                       </div>
                                </>
                      )}
                      {activeStep === 2 && (
                        // Step 2 - Passport Details
                        <>
                         <TextField
                            name="passportNumber"
                            label="Passport NUmber"
                            value={inputValues.passportNumber}
                            onChange={handleInputChange}
                            required 
                             style={{margin:"10px 10px"}}
                            className='my-2 mx-2 md:mx-4'
                          />
                        <TextField
                            name="countryOfPassport"
                            label="Country Of Passport"
                            value={inputValues.countryOfPassport}
                            onChange={handleInputChange}
                            required 
                             style={{margin:"10px 10px"}}
                            className='my-2 mx-2 md:mx-4'
                          />
                          <TextField
                            name="countryOfPassport"
                            label="Country Of Passport"
                            value={inputValues.countryOfPassport}
                            onChange={handleInputChange}
                            required 
                             style={{margin:"10px 10px"}}
                            className='my-2 mx-2 md:mx-4'
                          />
                          <TextField
                            name="passportDateOfIssue"
                            label="Passport Date Of Issue"
                            value={inputValues.PassportDateOfIssue}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                            required 
                             style={{margin:"10px 10px"}}
                          />
                            <TextField 
                         name="passportExpiryDate"
                         label="Passport Expiry Date"
                       value={inputValues.passportExpiryDate}
                       onChange={handleInputChange}
                       required 
                        style={{margin:"10px 10px"}}
                       className='my-2 mx-2 md:mx-4'
                          />
                          <div style={{ margin: '10px 10px' }}>
                       <InputLabel>Biodata Page IMAGE</InputLabel>
                       <input
                         type="file"
                         name="passportPhoto"
                         onChange={handleFileInputChange}
                         required
                         className={`${styles.fileInput} my-2 mx-2 md:mx-4  grid md:flex w-full` }
                         multiple // Allows selecting multiple files
                       />
                       </div>
                        </>
                      )}
                            {activeStep === 3 && (
                        // Step 2 - Travel Details
                        <>
                          <TextField
                            name="educationLevel"
                            label="Purpose Of Your Visit "
                            value={inputValues.purposeOfVisit}
                            onChange={handleInputChange}
                           
                            className='my-2 mx-2 md:mx-4'
                            required 
                             style={{margin:"10px 10px"}}
                          />
                          <TextField
                            name="intendedDateOfEntry"
                            label="Intended Date Of Entry"
                            value={inputValues.intendedDateOfEntry}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                            required 
                             style={{margin:"10px 10px"}}
                          />
                            <TextField 
                           name="intendedDatteOfExit"
                           label="Intended Date Of Exit"
                           value={inputValues.intendedDateOfExit}
                           onChange={handleInputChange}
                           className='my-2 mx-2 md:mx-4'
                           required 
                            style={{margin:"10px 10px"}}
                          />
                            <TextField 
                           name="portOfEntry"
                           label="Port Of Entry"
                           value={inputValues.portOfEntry}
                           onChange={handleInputChange}
                           className='my-2 mx-2 md:mx-4'
                           required 
                            style={{margin:"10px 10px"}}
                          />
                          <div style={{ margin: '10px 10px' }}>
                        <InputLabel>Have You Been to Kenya before?</InputLabel>
                        <Select
                          name="beenToKenyaBefore"
                          value={inputValues.beenToKenyaBefore}
                          onChange={handleInputChange}
                          required
                          className="my-2 mx-2 md:mx-4"
                          fullWidth
                        >
                          <MenuItem value="no">No</MenuItem>
                          <MenuItem value="yes">Yes</MenuItem>
                        </Select>
                         </div>
                         <div style={{ margin: '10px 10px' }}>
                        <InputLabel>Have you been denied entry to kenya before ?</InputLabel>
                        <Select
                          name="deniedEntryToKenyaBefore"
                          value={inputValues.deniedEntryToKenyaBefore}
                          onChange={handleInputChange}
                          required
                          className="my-2 mx-2 md:mx-4"
                          fullWidth
                        >
                          <MenuItem value="no">No</MenuItem>
                          <MenuItem value="yes">Yes</MenuItem>
                        </Select>
                         </div>
                         <div style={{ margin: '10px 10px' }}>
                        <InputLabel>Have you been convicted of any crime before ?</InputLabel>
                        <Select
                          name="convicted"
                          value={inputValues.convicted}
                          onChange={handleInputChange}
                          required
                          className="my-2 mx-2 md:mx-4"
                          fullWidth
                        >
                          <MenuItem value="no">No</MenuItem>
                          <MenuItem value="yes">Yes</MenuItem>
                        </Select>
                         </div>
                        </>
                      )}
                       {activeStep === 4 && (
                        // Step 2 - Details of contact Person
                        <>
                            <TextField 
                         name="contactName"
                         label="Contact name"
                         value={inputValues.contactName}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4' 
                          style={{margin:"10px 10px"}}
                          />
                            <TextField 
                         name="alienCard"
                         label="IdentityCard \ AlienCard \ Passport Copy IMAGE"
                         value={inputValues.alienCard}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required 
                          style={{margin:"10px 10px"}}
                          />
                           <div style={{ margin: '10px 10px' }}>
                            <InputLabel htmlFor='contactPhoneNo'>phone number of contact</InputLabel>
                          <ReactPhoneInput
                            defaultCountry="us" // Set the default country (optional)
                            value={inputValues.contactPhoneNo}
                            onChange={handlePhoneNoChange}
                            inputExtraProps={{
                              name: 'contactPhoneNo',
                              label: 'Contact phone Number',
                              variant: 'outlined',
                            }}
                          />
                        </div>
                               <div style={{ margin: '10px 10px' }}>
                        <InputLabel>Do you have invitation letter from contact ?</InputLabel>
                        <Select
                          name="invitationFromContact"
                          value={inputValues.invitationLetterFromContact}
                          onChange={handleInputChange}
                          className="my-2 mx-2 md:mx-4"
                          fullWidth
                        >
                          <MenuItem value="no">No</MenuItem>
                          <MenuItem value="yes">Yes</MenuItem>
                        </Select>
                         </div>
                        <div style={{ margin: '10px 10px' }}>
                        <InputLabel>Do you have hotel booking</InputLabel>
                        <Select
                          name="hotelBooking"
                          value={inputValues.hotelBooking}
                          onChange={handleInputChange}
                          className="my-2 mx-2 md:mx-4"
                          fullWidth
                        >
                          <MenuItem value="no">No</MenuItem>
                          <MenuItem value="yes">Yes</MenuItem>
                        </Select>
                         </div>

                        </>
                      )}
                       {activeStep === 5 && (
                        // Organization Details
                        <>
                          <TextField
                            name="orgName"
                            label="Name Of Organisation"
                            value={inputValues.orgName}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                             style={{margin:"10px 10px"}}
                          />
                          <TextField
                            name="orgAddress"
                            label="Physical Address Of Organisation"
                            value={inputValues.orgAddress}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                             style={{margin:"10px 10px"}}
                          />
                            <TextField 
                             name="orgPerson"
                             label="Contact Person In the Organisation"
                             value={inputValues.orgPerson}
                             onChange={handleInputChange}
                             className='my-2 mx-2 md:mx-4'
                              style={{margin:"10px 10px"}}
                          />
                          <div style={{ margin: '10px 10px' }}>
                        <InputLabel>Do you have letter of invitation?</InputLabel>
                        <Select
                          name="orgLetterYesOrNo"
                          value={inputValues.orgLetterYesOrNo}
                          onChange={handleInputChange}
                          className="my-2 mx-2 md:mx-4"
                          fullWidth
                        >
                          <MenuItem value="no">No</MenuItem>
                          <MenuItem value="yes">Yes</MenuItem>
                        </Select>
                         </div>
                        </>
                      )}
                       {activeStep === 6 && (
                    // Company/firm Details
                        <>
                          <TextField
                            name="educationLevel"
                            label="Company/Business/Firm name"
                            value={inputValues.companyName}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                             style={{margin:"10px 10px"}}
                          />
                           <div style={{ margin: '10px 10px' }}>
                        <InputLabel>Do you have copy of Business registartion certificate?</InputLabel>
                        <Select
                          name="companyDocYesOrNo"
                          value={inputValues.companyDocYesOrNo}
                          onChange={handleInputChange}
                          className="my-2 mx-2 md:mx-4"
                          fullWidth
                        >
                          <MenuItem value="no">No</MenuItem>
                          <MenuItem value="yes">Yes</MenuItem>
                        </Select>
                         </div>
                         <div style={{ margin: '10px 10px' }}>
                       <InputLabel>Company Registration Certificate</InputLabel>
                       <input
                         type="file"
                         name="passportPhoto"
                         onChange={handleFileInputChange}
                         className={`${styles.fileInput} my-2 mx-2 md:mx-4 grid md:flex w-full`}
                         multiple // Allows selecting multiple files
                       />
                       </div>
                        </>
                      )}
                       {activeStep === 7 && (
                        // Step 2 - Educational Details
                        <>
                          <TextField
                            name="nameOfSchool"
                            label="Name of School"
                            value={inputValues.nameOfSchool}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                             style={{margin:"10px 10px"}}
                          />
                          <TextField
                            name="schoolAddress"
                            label="School Address"
                            value={inputValues.schoolAddress}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                             style={{margin:"10px 10px"}}
                          />
                           <div style={{ margin: '10px 10px' }}>
                        <InputLabel>Do you have letter of Admission?</InputLabel>
                        <Select
                          name="letterOfAdmissionYesOrNo"
                          value={inputValues.letterOfAdmissionYesOrNo}
                          onChange={handleInputChange}
                          className="my-2 mx-2 md:mx-4"
                          fullWidth
                        >
                          <MenuItem value="no">No</MenuItem>
                          <MenuItem value="yes">Yes</MenuItem>
                        </Select>
                         </div>
                         <div style={{ margin: '10px 10px' }}>
                       <InputLabel>Letter of Admission</InputLabel>
                       <input
                         type="file"
                         name="letterOfAdmission"
                         onChange={handleFileInputChange}
                         className={`${styles.fileInput} my-2 mx-2 md:mx-4 grid md:flex w-full`}
                         multiple // Allows selecting multiple files
                       />
                       </div>
                        </>
                      )}
                      
                     </Typography>

                    <div>
                 {activeStep === steps.length ? (
          <div>
            <Typography variant="h6">All steps completed</Typography>
            <Button variant="contained" color="primary" onClick={handleSubmit}>
              Finish
            </Button>
          </div>
        ) : (
          <div>
            <div>
              <Button disabled={activeStep === 0} onClick={handleBack}>
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
{/* .THe last element */}
                    </div>
                  </div>
                )}
              </Step>
            ))}
          </Stepper>
        </div>
        <div className='w-full place-content-center grid py-12'>
       <div className='grid text-sm  md:text-base'>
       <FormControlLabel
            control={
              <Checkbox
                checked={declarationChecked}
                onChange={(e) => setDeclarationChecked(e.target.checked)}
                name="declarationCheckbox"
                color="primary"
              />
            }
            label="I declare that the information I have given in this application is truthful, complete, and correct."
          />
        <FormControlLabel
            control={
              <Checkbox
                checked={termsChecked}
                onChange={(e) => setTermsChecked(e.target.checked)}
                name="termsCheckbox"
                color="primary"
              />
            }
            label="I have read and understood the terms and conditions and privacy policy."
            className='py-2'
          />
       </div>
       <div className='italic text-neutral-500 mx-auto text-sm py-2 md:text-md'>
        
       {tickMessage}
       </div>
      <button className={`${styles.ButtonsDiv} mx-auto mt-8`} onClick={handleSubmit} >Submit</button>
    </div>
      </Container>
    </ThemeProvider>

</div>
  );
};

export default StepperWithInputFields;


