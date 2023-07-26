import React, { useState } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Typography,
  TextField,
  Container,
  createTheme,
  ThemeProvider,
} from '@mui/material';

const steps = ['Contact', 'Traveller Information', 'Passport Details', "Travel Details", 'Contact Person In Kenya Details','Organization Details (optional)','Company/Firm Details','Educational Details'];

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
    nationality:'',
    countryOfResidence:'',
    physicalAddress:'',
    nextOfKin:'',
    phoneNoOfNextKin:'',
    passportPhoto:'',
    //PassportDetails
    countryOfPassport:'',
    passportNumber:'',
    PassportDateOfIssue:'',
    passportExpiryDate:'',
    passportBioDataPage:'',
    // Travel Details 
    purposeOfVisit:'',
    intendedDataeOfEntry:'',
    intendedDataeOfExit:'',
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
    orgLetterOfInvitation:'',
    // Company Details
    companyName:'',
    companyDoc:'',
    // Education Details
    nameOfSchool:'',
    schoolAddress:"",
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


  const handleSubmit = () => {
    console.log('Submitting input values');
  };

  return (
<div className='md:w-3/4 w-10/12 grid   mx-auto'>
<ThemeProvider theme={customTheme}>
      <Container >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center',minHeight:'90vh' }}>
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                {index === activeStep && (
                  <div>
                    <Typography variant="h6" gutterBottom>
                      {activeStep === 0 && (
                        // Step 0 - Contact
                        <>
                          <TextField
                            name="email"
                            label="Email"
                            value={inputValues.email}
                            onChange={handleInputChange}
                            required
                            className='my-2 mx-2 md:mx-4'
                          />
                          <TextField 
                           name="confirm email"
                           label="Confirm Email"
                         value={inputValues.email}
                         onChange={handleInputChange}
                         required
                         className='my-2 mx-2 md:mx-4'
                          />
                           <TextField 
                          name="phoneNo"
                          label="Cell/MobileNumber"
                        value={inputValues.email}
                        onChange={handleInputChange}
                        required
                        className='my-2 mx-2 md:mx-4'
                          />
                         
                        </>
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
                          className='my-2 mx-2 md:mx-4'
                          />
                          <TextField 
                         name="middleName"
                         label="Middle Name"
                       value={inputValues.middleName}
                       onChange={handleInputChange}
                       required
                       className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                         name="givenNames"
                         label="Given Names"
                       value={inputValues.givenNames}
                       onChange={handleInputChange}
                       required
                       className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                            name="nationality"
                          label="Nationality"
                        value={inputValues.nationality}
                        onChange={handleInputChange}
                        required
                        className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                         name="countryOfResidence"
                         label="Country Of Residence"
                       value={inputValues.countryOfResidence}
                       onChange={handleInputChange}
                       required
                       className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                            name="physicalAddress"
                          label="Physical Address"
                        value={inputValues.physicalAddress}
                        onChange={handleInputChange}
                        required
                        className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                         name="nextOfKin"
                         label="Next Of Kin"
                       value={inputValues.nextOfKin}
                       onChange={handleInputChange}
                       required
                       className='my-2 mx-2 md:mx-4' 
                       />
                            <TextField 
                         name="phoneNo"
                         label="Cell/Mobile of Next Of Kin"
                       value={inputValues.phoneNoOfNextKin}
                       onChange={handleInputChange}
                       required
                       className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                         name="phoneNo"
                         label="Recent  Passport Photo"
                       value={inputValues.email}
                       onChange={handleInputChange}
                       required
                       className='my-2 mx-2 md:mx-4'
                          />
                        </>
                      )}
                      {activeStep === 2 && (
                        // Step 2 - Passport Details
                        <>
                          <TextField
                            name="countryOfPassport"
                            label="Country Of Passport"
                            value={inputValues.countryOfPassport}
                            onChange={handleInputChange}
                            required
                            className='my-2 mx-2 md:mx-4'
                          />
                          <TextField
                            name="passportDateOfIssue"
                            label="Passport Date Of Issue"
                            value={inputValues.PassportDateOfIssue}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                            required
                          />
                            <TextField 
                         name="passportExpiryDate"
                         label="Passport Expiry Date"
                       value={inputValues.passportExpiryDate}
                       onChange={handleInputChange}
                       required
                       className='my-2 mx-2 md:mx-4'
                          />
                            <TextField 
                         name="phoneNo"
                         label="Biodsata Page IMAGE"
                       value={inputValues.email}
                       onChange={handleInputChange}
                       required
                       className='my-2 mx-2 md:mx-4'
                          />
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
                          />
                          <TextField
                            name="intendedDateOfEntry"
                            label="Intended Datae Of Entry"
                            value={inputValues.intendedDataeOfEntry}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                            required
                          />
                            <TextField 
                           name="intendedDatteOfExit"
                           label="Intended Date Of Exit"
                           value={inputValues.intendedDataeOfExit}
                           onChange={handleInputChange}
                           className='my-2 mx-2 md:mx-4'
                           required
                          />
                            <TextField 
                         name="beenToKenyaBefore"
                         label="Have You Been To Kenya Before"
                         value={inputValues.beenToKenyaBefore}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required
                          />
                            <TextField 
                         name="deniedEntryToKenya"
                         label="Have You Been Denied Entryu To Kenya Before ?"
                         value={inputValues.deniedEntryToKenyaBefore}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required
                          />
                            <TextField 
                         name="convicted"
                         label="Have You Been Convicted of any crime before"
                         value={inputValues.convicted}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required
                          />
                        </>
                      )}
                       {activeStep === 4 && (
                        // Step 2 - Details of contact Person
                        <>
                            <TextField 
                         name="contactName"
                         label="Contact NAME"
                         value={inputValues.contactName}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required
                          />
                            <TextField 
                         name=""
                         label="IdentityCard \ AlienCard \ Passport Copy IMAGE"
                         value={inputValues.alienCard}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required
                          />
                            <TextField 
                         name="phoneNumberOfContactPerson"
                         label="Phone Number Of Contact Person"
                         value={inputValues.contactPhoneNo}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required
                          />
                              <TextField 
                         name="letterOfInvitationFromContact"
                         label="Invitation Letter from Contact Person"
                         value={inputValues.invitationLetterFromContact}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required
                          />
                          
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
                            required
                          />
                          <TextField
                            name="orgAddress"
                            label="Physical Address Of Organisation"
                            value={inputValues.orgAddress}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                            required
                          />
                            <TextField 
                             name="orgPerson"
                             label="Contact Person In the Organisation"
                             value={inputValues.orgPerson}
                             onChange={handleInputChange}
                             className='my-2 mx-2 md:mx-4'
                             required
                          />
                               <TextField 
                         name="phoneNumberOfContactPerson"
                         label="Letter of Invitation"
                         value={inputValues.orgLetterOfInvitation}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required
                          />
                        </>
                      )}
                       {activeStep === 6 && (
                    // Company/firm Details
                        <>
                          <TextField
                            name="educationLevel"
                            label="Company/Firm Name"
                            value={inputValues.companyName}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                            required
                          />
                          <TextField
                            name="comapnyDoc"
                            label="Companny Doc Image"
                            value={inputValues.companyDoc}
                            onChange={handleInputChange}
                           
                            className='my-2 mx-2 md:mx-4'
                            required
                          />
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
                            required
                          />
                          <TextField
                            name="addressPOfSchool"
                            label="School Address"
                            value={inputValues.schoolAddress}
                            onChange={handleInputChange}
                            className='my-2 mx-2 md:mx-4'
                            required
                          />
                               <TextField 
                         name="letterOfAdmission"
                         label="Letter Of Admission"
                         value={inputValues.letterOfAdmission}
                         onChange={handleInputChange}
                         className='my-2 mx-2 md:mx-4'
                         required
                          />
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
      </Container>
    </ThemeProvider>
</div>
  );
};

export default StepperWithInputFields;


