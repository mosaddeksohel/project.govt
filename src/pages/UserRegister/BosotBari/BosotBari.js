import React from 'react';
import { Container, Grid, TextField, Typography, Button, FormControl, InputLabel, NativeSelect } from '@mui/material';
import { useForm } from "react-hook-form";

const BosotBari = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div>
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
                                label="আপনার নাম *"
                                variant="filled"
                                fullWidth
                                {...register("name")}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <TextField
                                id="filled-basic"
                                label="পিতার নাম *"
                                variant="filled"
                                fullWidth
                                {...register("father")}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <TextField
                                id="filled-basic"
                                label="মাতার নাম *"
                                variant="filled"
                                fullWidth
                                {...register("mother")}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <FormControl fullWidth>
                                <InputLabel
                                    id="filled-basic"
                                    variant="filled"
                                    htmlFor="uncontrolled-native">
                                    জেলা
                                </InputLabel>
                                <NativeSelect
                                    {...register("district", { required: true })}
                                    inputProps={{
                                        name: 'district',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value='সুনামগঞ্জ'>সুনামগঞ্জ </option>
                                    <option value='সিলেট'>সিলেট</option>
                                    <option value='চাঁদপুর'>চাঁদপুর</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    উপজেলা
                                </InputLabel>
                                <NativeSelect
                                    {...register("upazila", { required: true })}
                                    inputProps={{
                                        name: 'upazila',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value='সুনামগঞ্জ'>সুনামগঞ্জ </option>
                                    <option value='সিলেট'>সিলেট</option>
                                    <option value='চাঁদপুর'>চাঁদপুর</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">

                                    ইউনিয়ন
                                </InputLabel>
                                <NativeSelect
                                    {...register("union", { required: true })}
                                    inputProps={{
                                        name: 'union',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value='সুনামগঞ্জ'>সুনামগঞ্জ </option>
                                    <option value='সিলেট'>সিলেট</option>
                                    <option value='চাঁদপুর'>চাঁদপুর</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">

                                    ওয়ার্ড
                                </InputLabel>
                                <NativeSelect
                                    {...register("ward", { required: true })}
                                    inputProps={{
                                        name: 'ward',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value='১নং ওয়ার্ড'>১নং ওয়ার্ড</option>
                                    <option value='২নং ওয়ার্ড'>২নং ওয়ার্ড</option>
                                    <option value='৩নং ওয়ার্ড'>৩নং ওয়ার্ড</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">

                                    গ্রাম
                                </InputLabel>
                                <NativeSelect
                                    {...register("village", { required: true })}
                                    inputProps={{
                                        name: 'village',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value='ফেনিবীল'>ফেনিবীল</option>
                                    <option value='নারায়নতলা'>নারায়নতলা</option>
                                    <option value='গুদিগাও'>গুদিগাও</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <TextField
                                id="filled-basic"
                                label="পোষ্ট অফিস *"
                                variant="filled"
                                fullWidth
                                {...register("postOffice", { required: true })}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <TextField
                                id="filled-basic"
                                label="হোল্ডিং নাম্বার"
                                type='number'
                                variant="filled"
                                fullWidth
                                {...register("holdingNumber", { required: true })}
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
                        <Grid item xs={4} sm={4} md={4} >
                            <FormControl fullWidth>
                                <InputLabel variant="standard" htmlFor="uncontrolled-native">
                                    ধর্ম *
                                </InputLabel>
                                <NativeSelect
                                    {...register("religion" ,{ required: true })}
                                    inputProps={{
                                        name: 'religion',
                                        id: 'uncontrolled-native',
                                    }}
                                >
                                    <option value='ইসলাম'>ইসলাম</option>
                                    <option value='হিন্দু'>হিন্দু</option>
                                    <option value='খ্রিষ্টান'>খ্রিষ্টান</option>
                                </NativeSelect>
                            </FormControl>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <TextField
                                id="filled-basic"
                                label="পেশা *"
                                variant="filled"
                                type='text'
                                fullWidth
                                {...register("occupation", { required: true })}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <TextField
                                id="filled-basic"
                                label="ভোটার আইডি নং"
                                variant="filled"
                                fullWidth
                                {...register("nid_number", { required: true })}
                            />
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} >
                            <TextField
                                id="filled-basic"
                                label="মোবাইল নং"
                                variant="filled"
                                type='number'
                                fullWidth
                                {...register("phone_number", { required: true })}
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
        </div>
    );
};

export default BosotBari;