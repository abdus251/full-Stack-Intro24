"use client"
import { Box, 
  Button, 
  Container, 
  Grid, 
  Stack, 
  TextField, 
  Typography 
} from '@mui/material';
import Image from 'next/image';
import assets from '@/assets';
import Link from 'next/link';
import {  FieldValues } from "react-hook-form"
import { modifyPayload } from '@/utils/modifyPaylod';
import { registerPatient } from '@/services/actions/registerPatient';
import { toast } from "sonner";
import { useRouter } from 'next/navigation';
import { userLogin } from '@/services/actions/userLogin';
import { storeUserInfo } from '@/services/auth.services';
import PHForm from '@/components/Forms/PHForm';
import PHInput from '@/components/Forms/PHInput';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';



const patientValidationSchema = z.object({
  name:z.string().min(1, "Please enter your name!"),
  email:z.string().email("Please enter a valid email address"),
  contactNumber:z.string().regex(/^\d{11}$/, "Please provide a valid phone number"),
  address:z.string().min(1, "Please enter your address"),

})

export const validationSchema = z.object({
  password: z.string().min(6, "Must be at least 6 characters"),
  patient: patientValidationSchema,
});

export const defaultValues = {
  password: "",
  patient: {
    name: "",
    email: "",
    contactNumber: "",
    address: "",
  },
};

const RegisterPage = () => {
  const router = useRouter();  
  const handleRegister = async(values:FieldValues) => {
    const data = modifyPayload(values);
    // console.log(data);
    try {
      const res = await registerPatient(data);
      // console.log(res)
      if(res?.data?.id) {
        toast.success(res?.message);
        const result = await userLogin({
          password:values.password, 
          email:values.patient.email
        });
      if (result?.data?.accessToken) {
        storeUserInfo({ accessToken: result?.data?.accessToken });
        router.push("/dashboard");
      }
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };
  return (
    <Container>
        <Stack
        sx={{
          height:"100vh",
          justifyContent: 'center',
          alignItems: 'center',
        }}
        >
          <Box 
            sx={{
            maxWidth:"600",
            width:"60%",
            boxShadow: 1,
            borderRadius: 1,
            p:4,
            textAlign: 'center',
          }}>
<Stack 
sx={{
  justifyContent:'center',
  alignItems: 'center',
}}
>
<Box>
  <Image src={assets.svgs.logo} width={50} height={50} alt='logo'/>
</Box>
<Box>
  <Typography variant='h6' fontWeight={600} > 
  Patient Register
  </Typography>
</Box>
</Stack>
         
         
         
         
         
          <Box>
    <PHForm onSubmit={handleRegister} 
      resolver={zodResolver(validationSchema)}
      defaultValues={defaultValues}>
    
            <Grid container spacing={2} my={1}>
                <Grid item md={12}>
                  <PHInput
                  label="Name" 
                  fullWidth={true}
                  name="patient.name"
                  required={true}
                 />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                  label="Email" 
                  type='email'
                  fullWidth={true}
                  name="patient.email"
                  required={true}
                 />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                  label="Password" 
                  type='password'
                  fullWidth={true}
                  name="password"
                  required={true}
                 />
                </Grid>
                <Grid item md={6}>
                  <PHInput
                  label="Contact Number" 
                  type='tel' 
                  fullWidth={true}
                  name="patient.contactNumber"
                  required={true}
                  />
                  </Grid>
                <Grid item md={6}>
                  <PHInput
                  label="Address" 
                  fullWidth={true}
                  name="patient.address"
                  required={true}
                 />
                </Grid>
            </Grid>
            <Button sx={{
              margin: "10px 0px"
            }}
            fullWidth={true}
            type='submit'>
              Register
            </Button>
            </PHForm>
            <Typography component='p'>
              Do you already have an account? <Link href="/login">Login</Link>
            </Typography>
          </Box>
        </Box>
        </Stack>
    </Container>
  )
}

export default RegisterPage;