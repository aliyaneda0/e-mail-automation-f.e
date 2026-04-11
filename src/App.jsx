import { Box, Button, Container, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import './App.css'

function App() {

  const [emailContent , setEmailContent] = useState('');
  const [tone , setTone] = useState('');
  const [loading,setLoading] = useState(false);
   
  const handleSubmit = () => {
    // Here you can implement the logic to generate the email reply based on the emailContent and tone
    console.log('Email Content:', emailContent);
    console.log('Tone:', tone);
  }

  return (
    <>
     
     <Container maxWidth = "md" sx = {{py:4}}>
        
        <Typography component = "h1" variant = "h3" align = "center" gutterBottom>
          E-mail Reply Generator 
        </Typography>
       
        <Box sx = {{ mx:3, display: 'flex', flexDirection: 'column' , gap: 3}}>
              
              <TextField 
                fullWidth
                multiline
                rows = {10}
                variant = "outlined"
                label = "Enter the e-mail you want to reply to"
                value =  {emailContent || ''}
                onChange = {(e) => setEmailContent(e.target.value)}
               >


              </TextField>

              <FormControl fullWidth>
                  <InputLabel> Tone (Optional) </InputLabel>  
                     <Select
                        value = {tone || ''}
                        label = "Tone (Optional)"
                        onChange = {(e) => setTone(e.target.value)}
                     >
                        <MenuItem value = " ">None</MenuItem>
                        <MenuItem value = "Professional">Professional</MenuItem>
                        <MenuItem value = "Casual">Casual</MenuItem>
                        <MenuItem value = "Polite">Polite</MenuItem>
                        <MenuItem value = "Friendly">Friendly</MenuItem>
                     </Select>
                  
              </FormControl>

              <Button variant = "contained"
                onClick = {handleSubmit}
                disabled = {!emailContent || loading}>
                {loading ? 'Generating...' : 'Generate Reply' }
              </Button>

        </Box>
     </Container>
       
    </>
  )
}

export default App
