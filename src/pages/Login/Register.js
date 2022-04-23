import React from 'react';
import { Container, Grid, TextField, Typography, Button, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { useForm } from "react-hook-form";
import axios from 'axios';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    const newData = {
      district_id:data.district_id,
      upazilla_id: data.upazilla_id,
      union_id:data.union_id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      nid_no: data.nid_no,
      date_of_birth: data.date_of_birth,
      address: data.address,
      gender: data.gender,
      password: data.password,
      roll: data.roll
    }

    axios.post('https://upzonline.e71solution.xyz/api/adminRegister', newData)
      .then((response) => {
        if (response.status === 200) {
          alert('Register Successfully')
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
        alert('Bad requested,please try again')
      });
    console.log(newData)
  };
  return (
    <Container>
      <Typography
        variant='h5'
        sx={{ py: 5 }}
      >
        Register
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}>

          <Grid item xs={4} sm={4} md={4} >
            <TextField
              id="filled-basic"
              label="District ID"
              variant="filled"
              type='number'
              fullWidth
              {...register("district_id")}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            <TextField
              id="filled-basic"
              label="Upazilla ID"
              variant="filled"
              type='number'
              fullWidth
              {...register("upazilla_id")}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            <TextField
              id="filled-basic"
              label="Union ID"
              variant="filled"
              type='number'
              fullWidth
              {...register("union_id")}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={8} >
            <TextField
              id="filled-basic"
              label="Full Name"
              variant="filled"
              fullWidth
              {...register("name", { required: true })}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            <TextField
              id="filled-basic"
              label="Email"
              type='email'
              variant="filled"
              fullWidth
              {...register("email", { required: true })}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            <TextField
              id="filled-basic"
              label="Phone"
              variant="filled"
              type='number'
              fullWidth
              {...register("phone", { required: true })}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            <TextField
              id="filled-basic"
              label="NID No"
              variant="filled"
              type='number'
              fullWidth
              {...register("nid_no", { required: true })}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            <TextField
              id="filled-basic"
              label="Date of Birth"
              variant="filled"
              type='date'
              fullWidth
              {...register("date_of_birth", { required: true })}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={8} >
            <TextField
              id="filled-basic"
              label="Address"
              variant="filled"
              fullWidth
              {...register("address", { required: true })}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            <FormControl fullWidth>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Gender
              </InputLabel>
              <NativeSelect
                {...register("gender", { required: true })}
                inputProps={{
                  name: 'gender',
                  id: 'uncontrolled-native',
                }}
              >
                <option value='female'>Female </option>
                <option value='mail'>Mail</option>
                <option value='other'>Other</option>
              </NativeSelect>
            </FormControl>
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            <TextField
              id="filled-basic"
              label="Roll"
              variant="filled"
              type='number'
              fullWidth
              {...register("roll", { required: true })}
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} >
            <TextField
              id="filled-basic"
              label="Password"
              variant="filled"
              type='password'
              fullWidth
              {...register("password", { required: true })}
            />
          </Grid>

          <Grid item xs={4} sm={2} md={2} >
            <Button
              fullWidth
              variant="contained"
              color="success"
              type='submit'
            >Submit</Button>
          </Grid>

        </Grid>
      </form>
    </Container>
  );
};

export default Register;